import mongoose from "mongoose";

const productCollection = "products";

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
    thumbnail: {
      type: String,
      require: true,
    },
    stock: {
      type: Number,
      require: true,
    },
    category: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const ProductModel = mongoose.model(productCollection, productSchema);