import {productDto} from "./product.dto.js"
class CartDto{
    constructor(cart){
        this.userID = cart.userID,
        this.cartID = cart._id,
        this.products = productDto(cart.products),
        this.quantity = cart.products.length,
        this.total = this.calcularTotal()
        
    }
    calcularTotal(){
        const Total = this.products.reduce((acc, product)=>{
          return acc + product.price
        }, 0)
        return Total
      }
}

export const cartDto = (cart)=>{
        const newData = new CartDto(cart);
        return newData;
    
}



