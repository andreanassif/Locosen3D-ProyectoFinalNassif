
class OrderDto {
  constructor(username, id, cart) {
    this.id = id,
    this.username = username,
    this.products = cart.products,
    this.total = cart.total,
    this.quantity = cart.products.length
  }
}

export const orderDto = (order) => {
    const newData = new OrderDto(order);
    return newData;
};

