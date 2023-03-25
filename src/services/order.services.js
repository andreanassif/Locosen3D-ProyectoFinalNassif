import { DaoOrderContainer } from "../config/daosConfig.js";

//la orden se genera y guarda en el checkout de carrito
export const saveOrder = async (username, cartDto) => {
  const data = {
    userID: cartDto.userID,
    products: cartDto.products,
    total: cartDto.total,
  };
  const newOrder = await DaoOrderContainer.checkOut(username, data);
  //agregar twilio
  return newOrder;
};
