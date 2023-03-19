import mongoose from "mongoose";

const cartCollection = "carts";

const cartSchema = new mongoose.Schema(
  {
    userID: {
      type: String,
    },
    products: {
      type: Array,
      require: true,
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

export const CartModel = mongoose.model(cartCollection, cartSchema);
