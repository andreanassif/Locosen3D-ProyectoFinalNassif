import mongoose  from "mongoose";


const orderCollection = "orders";

const orderSchema = new mongoose.Schema({
    timestamp: Number,
    username: {
        type: String,
        required: true
    },
    cart: [{
        id: String,
        name: String,
        price: Number,
        quantity: Number
    }],
    total:{
        type: Number,
        required: true
    },
    state:{
        type: String,
        default:'generada',
        required: true
    }
})

export const OrderModel= mongoose.model(orderCollection, orderSchema)

