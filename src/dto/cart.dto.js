class CartDto{
    constructor(cart, userID, username, total, quantity){
        this.userID = userID._id,
        this.cart = cart.body,
        this.username = username.username,
        this.total = total.total,
        this.quantity = quantity.quantity
        
    }
}

export const cartDto = (carts)=>{
    if(Array.isArray(carts)){
        const newData = carts.map(cart=>new CartDto(cart));
        return newData;
    }else{
        const newData = new CartDto(carts);
        return newData;
    }
}



