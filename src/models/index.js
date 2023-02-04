import {MongoContainer} from "./managers/mongo.manager.js";
import {UserModel} from "./dbModels/users.models.js";

export const UserManager = new MongoContainer(UserModel);