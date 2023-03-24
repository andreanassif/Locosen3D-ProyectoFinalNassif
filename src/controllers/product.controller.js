import { getProducts, getProdById, getImgById, deleteAll, deleteProd, saveProd,updateProd } from "../services/product.services.js";
import { loggerError } from "../loggers/logger.js";

export const getProdsControllers = async(req,res)=>{
    try{

        const response = await getProducts()
        if(req.query.category){
            const data = response.filter((e)=>e.category === req.query.category)
            return res.status(200).json(data)
        }
        if(req.query.id){
            const data = response.filter((e)=> e.id === req.query.id)
            console.log(data)
            if(data.length === 0){
                return res.status(404).json({
                    message: "El producto no existe"
                })
            }
            return res.status(200).json(data[0])
        }  
        res.status(200).json(response)
    }catch(error){
        res.status(400).json({message:`Hubo un error ${error}`})
        loggerError.error(error)
    }
}

export const saveProdController = async(req,res)=>{
    try{
        const newProd = req.body
        const data = await saveProd(newProd)
        const response = await getProducts()
        res.status(200).send(response)
    }catch(error){
        res.status(400).json({message:`Hubo un error ${error}`})
        loggerError.error(error)
    }
}

export const updateProdController = async(req,res)=>{
    try{
        const {id} = req.params
        const update = req.body
        const existe = await getProdById(id)
        
        if (!existe){
            return res.status(404).send({ message: 'Error el producto no existe' })
        } else{
            const prod = await updateProd(id,update)
            return res.status(200).send(prod)
        }
    }catch(error){
        res.status(400).json({message:`Hubo un error ${error}`})
        loggerError.error(error)
    }
}
export const deleteProdController = async(req,res)=>{
    try{
        const {id} = req.params
        const existe = await getProdById(id)
        
        if (!existe){
            return res.status(404).send({ message: 'Error el producto no existe' })
        } else{
            const prod = await deleteProd(id)
            res.status(200).send(prod)
        }
    }catch(error){
        res.status(400).json({message:`Hubo un error ${error}`})
        loggerError.error(error)
    }
}

export const deleteAllController = async(req,res)=>{
    try{
        const response = await deleteAll()
        res.status(200).send('se elimino todo')
    }catch(error){
        res.status(400).json({message:`Hubo un error ${error}`})
        loggerError.error(error)
    }
}