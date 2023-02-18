//import {UserManager} from "../models/index.js";
import { getApiDao } from "../daos/index.js"; // se importa la fabrica
import {options} from "../config/config.js";
//traer validaciones cuando las configure de validations/users.validation.js

const {DaoProductContainer, DaoCartContainer, DaoUserContainer} = await getApiDao(options.server.databaseType);

export const getUsers = async()=>{
    return await DaoUserContainer.getAll();
};

export const saveUser = async(body)=>{
    try {
        return await DaoUserContainer.save(body);
    } catch (error) {
        throw new Error(error);
    }
   
};

export const deleteUser = async(userID)=>{
    return await DaoUserContainer.deleteById(userID)
}

export const deleteUsers = async()=>{
    return await DaoUserContainer.delete();
}