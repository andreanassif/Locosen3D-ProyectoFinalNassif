import { getApiDao } from "../daos/index.js";
import { options } from "./config.js";

const {
  DaoProductsContainer,
  DaoCartsContainer,
  DaoUserContainer,
  DaoOrderContainer,
} = await getApiDao(options.server.databaseType);

export {
  DaoCartsContainer,
  DaoProductsContainer,
  DaoUserContainer,
  DaoOrderContainer,
};
