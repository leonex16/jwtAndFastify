import { User } from "../models/User";

export const createUser = async (req, res) => {};

export const getUsers = async (req, res) => {
  return await User.find().populate('roles');
};

export const getUserById = async (req, res) => {
  const userId = req.params.userId;
  const user = await User.findById(userId);

  return user === null
    ? res.status(404).send({ message: 'User not found' })
    : res.status(200).send(user);
};

export const updateUserById = async (req, res) => {
  const userId = req.params.userId;
  const body = req.body;
  return await User.findByIdAndUpdate(userId, body);
};

export const deleteUserById = async (req, res) => {
  const userId = req.params.userId;
  await User.findOneAndDelete(userId);
  return res.status(204);
};