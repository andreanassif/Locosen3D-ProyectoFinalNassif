import { getApiDao } from "../daos/index.js";
import {options} from "./config.js";


const {DaoProductsContainer, DaoCartContainer, DaoUserContainer, DaoOrderContainer} = await getApiDao(options.server.databaseType);



export {DaoCartContainer,DaoProductsContainer,DaoUserContainer, DaoOrderContainer}