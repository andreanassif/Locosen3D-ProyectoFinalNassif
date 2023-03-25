import mongoose  from "mongoose";

const orderCollection = "orders";

const orderSchema = new mongoose.Schema({
    
    userID: {
        type: String,
        required: false
    },
    products: {
        type: Array,
        required: true,
        default: [],
    },
    total:{
        type: Number,
        required: false
    },
    state:{
        type: String,
        default:'generada',
        required: true
    }
},
{
    timestamps: true,
}
)

export const OrderModel= mongoose.model(orderCollection, orderSchema);