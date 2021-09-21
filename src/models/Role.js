import { Schema, model } from "mongoose";

const properties = {
  name: String
};

const optSchema = {
  versionKey: false
};

export const Role = model('Role', new Schema(properties, optSchema));