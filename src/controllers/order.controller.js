import {deleteOrder, getOrder, saveOrder, updateOrder } from "../services/order.services.js"
import { logger, loggerError, loggerWarn } from "../loggers/logger.js";
import {options} from "../config/config.js"

//get order by users 

/* export const getOrderController = async(req,res)=>{
    try {
        const response = await getOrder()
        res.status(200).send(response)

    } catch (error) {
        res.status(400).json({message:`Hubo un arror ${error}`})
        loggerError.error(error)
    }
}*/

/*export const deleteOrderController = async(req,res)=>{
    try {
        const {id} = req.params;
        const response = await deleteOrder(id);
        res.status(200).send(response)
    } catch (error) {
        es.status(400).json({message:`Hubo un arror ${error}`})
        loggerError.error(error)
    }
}
 */