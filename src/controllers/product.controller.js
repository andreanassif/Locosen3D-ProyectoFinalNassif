import { getProducts, getProdById, getImgById, deleteAll, deleteProd, saveProd,updateProd } from "../services/product.services.js";
import { loggerError } from "../loggers/logger.js";

export const getProdsControllers = async(req,res)=>{
    try{
        const response = await getProducts()
        res.status(200).send(response)
    }catch(error){
        res.status(400).json({message:`Hubo un error ${error}`})
        loggerError.error(error)
    }
}

export const getProdByCategoryControllers = async(req,res)=>{
    try{
        const {category} = req.params
        console.log(category);
        const response = await getProducts()
        const data = response.filter((e)=>e.category === category)
        if(data){
            res.status(200).send(data)
        }else{
            res.status(404)
        }
    }catch(error){
        res.status(400).json({message:`Hubo un error ${error}`})
        loggerError.error(error)
    }
}

export const getProdByIdControllers = async(req,res)=>{
    try{
        const {id} = req.params
        const response = await getProdById(id)

        if(response){
            return res.status(200).send(response)
        }else{
            return res.send("el producto no existe")
        }
    }catch(error){
        res.status(400).json({message:`Hubo un error ${error}`})
        loggerError.error(error)
    }
}

export const getImgByIdControllers = async(req,res)=>{
    try{
        const {id} = req.params
        const response = await getImgById(id)

        if(response){
            return res.status(200).send(response)
        }else{
            return res.send("el producto no existe")
        }
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