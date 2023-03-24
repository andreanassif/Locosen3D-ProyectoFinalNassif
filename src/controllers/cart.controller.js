import {getCartById, addProdInCartById, cleanCart, getAllCarts, removeProdById,} from "../services/cart.services.js";
import { logger, loggerError, loggerWarn } from "../loggers/logger.js";
import { saveOrder } from "../services/order.services.js";
import {twilioClient} from "../messages/twilio.js";

//añadir producto al carrito
export const addProdInCartByIdController = async (req, res) => {
  try {
    const { productID } = req.body;
    const { cartID } = req.params;
    await addProdInCartById(cartID, productID);
    res.status(200).json({
      message: `El producto ${productID} fue agregado al carrito ${cartID} exitosamente`,
    });
  } catch (error) {
    res.status(400).json({ message: `Hubo un error ${error}` });
    loggerError.error(error);
  }
};

//Consultar Carrito
export const getCartController = async (req, res) => {
  try {
    const { id } = req.query;
    if (!id) {
      return res.status(400).json({
        message: "El carrito no existe"
      });
    } 
    const cartQuery = await getCartById(id);
    return res.status(200).json({
      message: `El Carrito con Id Nro ${id} tiene los siguientes productos`,
      response: cartQuery,
    });

  } catch (error) {
    res.status(400).json({ message: `Hubo un error ${error}` });
    loggerError.error(error);
  }
};

//ver todos los carritos solo para el usuario 'admin'

export const getAllCartsController = async (req, res) => {
  try {
    const allCarts = await getAllCarts();
    if (allCarts) {
      res.status(200).send("allCarts", {
        allCarts: allCarts,
      });
    }
  } catch (error) {
    res.status(400).json({ message: `Hubo un error ${error}` });
    loggerError.error(error);
  }
};

//limpiar el carrito por el usuario

export const cleanCartControllers = async (req, res) => {
  try {
    const { cartID } = req.params;
    const { productID } = req.body;
    const emptyCart = await cleanCart(cartID, productID);
    res.status(200).json({
      message: `El Carrito con Id Nro ${cartID} se vació correctamente:`,
      response: emptyCart,
    });
  } catch (error) {
    res.status(400).json({ message: `Hubo un error ${error}` });
    loggerError.error(error);
  }
};

//eliminar un producto del carrito
export const deleteProdCartController = async (req, res) => {
  try {
    const { productID } = req.body;
    const { cartID } = req.params;
    await removeProdById(cartID, productID);
    const finalCart = await getCartById(cartID);
    res.status(200).json({
      message: `El producto ${productID}, se ha eliminado correctamente del carrito ${cartID} `,
      response: finalCart,
    });
  } catch (error) {
    res.status(400).json({ message: `Hubo un error ${error}` });
    loggerError.error(error);
  }
};

//usuario tiene que poder hacer el checkout: cant productos, precio total, id de prodcutos para disminuir stock, aplicar impuestos, costos de envio funciones de helpers sin exportarlas
export const checkOut = async (req, res) => {
  try {
    const username = req.user;
    const  {cartID} = req.params;
    const carrito = await getCartById(cartID)
    console.log(carrito)
    const newOrder = await saveOrder(username, carrito);
    if(newOrder){
      twilioClient.messages.create(
          {
              body:`Se ha registrado un nuevo pedido! Nombre: ${response.name}, Pedido: ${response.id}, email: ${response.username}`,
              from: options.TWILIO_WAP,
              to: options.ADMIN_WAP
          }, (error)=>{
              if(error){
                  loggerWarn.warn(`Hubo un error al enviar el msj de Whatsapp al administrador ${error}`)
              } else {
                  logger.info(`Mensaje enviado correctamente con el pedido`)
              }
          }
      )
      twilioClient.messages.create(
          {
              body:`Registramos un nuevo pedido! Pedido: ${response.id}, email: ${response.username} `,
              from: options.TWILIO_WAP,
              to: `Whatsapp:${newOrder.phone} `
          }, (error)=>{
              if(error){
                  logger.info(`Hubo un error al enviar el mensaje de whatsapp al cliente ${error}`)
              } else {
                  logger.info(`Mensaje de whatsapp de pedido enviado correctamente`)
              }
          }
      )
      return res.status(200).send(response)
  } else {
      res.status(400).json({message:`Hubo un error ${error}`})
      loggerError.error(error)
  }
    res.status(200).json({
      message: `La orden ${newOrder._id} se ha generado correctamente`,
      response: newOrder,
    });
    cleanCart(cartID);
  } catch (error) {
    res.status(400).json({ message: `Hubo un error ${error}` });
    loggerError.error(error);
  }
};
