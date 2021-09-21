import { model, Schema } from "mongoose";
import bcrypt from 'bcryptjs';

const properties = {
  username: {
    type: String,
    unique: true
  },
  email: {
    type: String,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  roles: [
    {
      ref: 'Role',
      type: Schema.Types.ObjectId
    }
  ],
};

const optSchema = {
  timestamp: true,
  versionKey: false
};

const encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

const comparePasswords = async (pswFront, pswBack) => {
  return await bcrypt.compare(pswFront, pswBack);
};

const userSchema = new Schema(properties, optSchema).static({encryptPassword, comparePasswords});

export const User = model('User', userSchema);