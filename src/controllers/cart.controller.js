import { getById, save, cleanCart } from "../services/cart.services.js";
import { logger, loggerError, loggerWarn } from "../loggers/logger.js";


export const getCartController = async(req,res)=>{
    try {
        const {id} = req.params
        if(!id){
        const response =await getById(id)
        return res.status(200).send(response)
        }
    } catch (error) {
        res.status(400).json({message:`Hubo un error ${error}`})
        loggerError.error(error)
    }
}

export const saveCartControllers= async(req,res) =>{
    try {
        const {id} = req.params
        const data = req.body
        if(!id){
            const response = await save(data)
            res.status(200).send(response)
        } else{
            const response = await putById(id,data)
            res.status(200).send(response)
        }
    } catch (error) {
        res.status(400).json({message:`Hubo un error ${error}`})
        loggerError.error(error)
    }
}

export const cleanCartControllers= async(req,res) =>{
    try {
        const {id} = req.params
        const response = await cleanCart(id)
        res.status(200).send(response)
    } catch (error) {
        res.status(400).json({message:`Hubo un error ${error}`})
        loggerError.error(error)
    }
}

export const deleteProdCartController = async (req, res)=>{
    try {
        const {id} = req.params
        const data = req.body
        if(!id){
            const response = await remove(data)
            res.status(200).send(response)
        } else{
            const response = await removeById(id,data)
            res.status(200).send(response)
        }
    } catch (error) {
        res.status(400).json({message:`Hubo un error ${error}`})
        loggerError.error(error)
    }
}

// usuario vea carrito get by id

// usuario tiene que poder agregar prod

//usuario tiene que poder eliminar un prod

//usuario puede limpiar su carrito en un solo paso

//usuario tiene que poder hacer el checkout: cant productos, precio total, id de prodcutos para disminuir stock, aplicar impuestos, costos de envio funciones de helpers sin exportarlas
