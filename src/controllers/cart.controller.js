import { getCartById, addProdInCartById, cleanCart, getAllCarts, removeProdById } from "../services/cart.services.js";
import { logger, loggerError, loggerWarn } from "../loggers/logger.js";
import { saveOrder } from "../services/order.services.js";

//añadir producto al carrito
export const addProdInCartByIdController = async(req,res)=>{
  try {
    const { id } = req.body;
    console.log(id)
    await addProdInCartById(id)
    res.status(200).json({
        message: `El producto ${id} fue agregado al carrito exitosamente`,
    });
  } catch (error) {
    res.status(400).json({ message: `Hubo un error ${error}` });
    loggerError.error(error);
  }
}

//Consultar Carrito
export const getCartController = async (req, res) => {
  try {
    const { cartID } = req.params;
    if (!cartID) {
      const cartQuery = await getCartById(cartID);
      return res.status(200).json({
        message: `El Carrito con Id Nro ${cartID} tiene los siguientes productos`,
        response: cartQuery
      });
    }
  } catch (error) {
    res.status(400).json({ message: `Hubo un error ${error}` });
    loggerError.error(error);
  }
};

//ver todos los carritos solo para el usuario 'admin' 

export const getAllCartsController = async (req,res) =>{
  try {
    const allCarts = await  getAllCarts();
    if(allCarts){
      res.status(200).send("allCarts", {
        allCarts: allCarts
      })
    }
  } catch (error) {
    res.status(400).json({ message: `Hubo un error ${error}` });
    loggerError.error(error);
  }
}

//limpiar el carrito por el usuario

export const cleanCartControllers = async (req, res) => {
  try {
    const { cartID} = req.params;
    const emptyCart = await cleanCart(cartID);
    res.status(200).json({
      message: `El Carrito con Id Nro ${cartID} se vació correctamente:`,
      response: emptyCart
    });
  } catch (error) {
    res.status(400).json({ message: `Hubo un error ${error}` });
    loggerError.error(error);
  }
};


//eliminar un producto del carrito
export const deleteProdCartController = async (req, res) => {
  try {
    const { cartID, productID } = req.params;
    await removeProdById(productID)
    const finalCart = await getCartById(cartID)
    res.status(200).json ({
      message: `El producto ${productID}, se ha eliminado correctamente del carrito ${cartID} `,
      response: carritoFinal
      })
  } catch (error) {
    res.status(400).json({ message: `Hubo un error ${error}` });
    loggerError.error(error);
  }
};

//usuario tiene que poder hacer el checkout: cant productos, precio total, id de prodcutos para disminuir stock, aplicar impuestos, costos de envio funciones de helpers sin exportarlas
export const checkOut = async(req,res)=>{
  try {
    const {body} = req;
    const newOrder = await saveOrder(body)
    console.log(newOrder._id);
    res.status(200).json({
      message: `La orden ${newOrder._id} se ha generado correctamente`,
      response: newOrder
    })    
  } catch (error) {
    res.status(400).json({ message: `Hubo un error ${error}` });
    loggerError.error(error);
  }
}