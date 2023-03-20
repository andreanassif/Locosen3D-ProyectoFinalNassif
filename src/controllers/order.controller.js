import {deleteOrder, getOrder, saveOrder, updateOrder } from "../services/order.services.js"
import { logger, loggerError, loggerWarn } from "../loggers/logger.js";
import {twilioClient} from "../messages/twilio.js";
import {options} from "../config/config.js"

export const getOrderController = async(req,res)=>{
    try {
        const response = await getOrder()
        res.status(200).send(response)

    } catch (error) {
        res.status(400).json({message:`Hubo un arror ${error}`})
        loggerError.error(error)
    }
}

export const saveOrderController = async (req,res)=> {
    try {
        const newOrder = req.body
        const response = await saveOrder(newOrder)
        if(response){
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
    } catch (error) {
        res.status(400).json({message:`Hubo un arror ${error}`})
        loggerError.error(error)
    }
}

export const deleteOrderController = async(req,res)=>{
    try {
        const {id} = req.params;
        const response = await deleteOrder(id);
        res.status(200).send(response)
    } catch (error) {
        es.status(400).json({message:`Hubo un arror ${error}`})
        loggerError.error(error)
    }
}
