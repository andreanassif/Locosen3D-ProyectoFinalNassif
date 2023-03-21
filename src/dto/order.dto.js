class OrderDto{
    constructor(username, products, total, quantity){
        this.username = username,
        this.products = products,
        this.total = total,
        this.quantity = quantity
    }
}

export const orderDto = (orders)=>{
    if(Array.isArray(orders)){
        const newData = orders.map(order=>new OrderDto(order));
        return newData;
    }else{
        const newData = new OrderDto(orders);
        return newData;
    }
}