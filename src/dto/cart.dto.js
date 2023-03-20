class CartDto{
    constructor(cart, userID, username, total, quantity){
        this.userID = userID,
        this.cart = cart,
        this.username = username,
        this.total = total,
        this.quantity = quantity
        
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



