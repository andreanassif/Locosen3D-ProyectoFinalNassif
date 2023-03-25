import mongoose, { Schema } from "mongoose";

const cartCollection = "carts";

const cartSchema = new mongoose.Schema(
  {
    userID: {
      type: String,
    },
    products: [
      {
        type: Schema.Types.ObjectId,
        ref: "products",
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const CartModel = mongoose.model(cartCollection, cartSchema);