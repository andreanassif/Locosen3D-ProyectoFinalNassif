import mongoose  from "mongoose";

const cartCollection = "carts";

const cartSchema = new mongoose.Schema({
    id:{
        type:String
    },
    products:{
        type: Array,
        require: true
    },
    price:{
        type: String
    },
    quantity:{
        type: Number
    }
    

},
{
    timestamps: true
});

export const CartModel = mongoose.model(cartCollection,cartSchema);