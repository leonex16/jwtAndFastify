import jwt from 'jsonwebtoken';
import { User } from '../models/User';
import { Role } from '../models/Role';

const API_TOKEN_SECRET = process.env.API_TOKEN_SECRET;

export const signUp = async (req, res) => {
  const { username, password, email, roles } = req.body;

  const newUser = new User({
    username,
    password: await User.encryptPassword(password),
    email,
    roles: roles ?? []
  });

  if( roles ) {
    const rolesFound = await Role.find({ name: {$in: roles} });
    newUser.roles = rolesFound.map( role => role._id );
  } else {
    const roleUser = await Role.findOne({ name: 'user' });
    newUser.roles = [roleUser._id];
  };

  const optJwt = {
    expiresIn: 86400 // 24H
  };

  const token = jwt.sign({ id: newUser._id }, API_TOKEN_SECRET, optJwt);

  newUser.save();

  return { token };
};

export const signIn = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email: email }).populate('roles');

  if ( user === null ) return 'User not found';
  if ( await User.comparePasswords(password, user.password) === false ) return 'Not valid password';

  const optJwt = {
    expiresIn: 86400 // 24H
  };

  const token = jwt.sign({ id: user._id }, API_TOKEN_SECRET, optJwt);

  return { token };
};