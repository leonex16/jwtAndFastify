import { model, Schema } from "mongoose";

const properties = {
  name: String,
  category: String,
  price: Number,
  imgURL: String
};

const optSchema = {
  timestamps: true,
  versionKey: false
};

export const Product = model('Product', new Schema(properties, optSchema));

