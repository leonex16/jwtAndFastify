import jwt from "jsonwebtoken";
import { User } from "../models/User";

export const authJwt = async (req, res) => {
  const headers = req.headers;
  const authorization = headers['authorization'] ?? '';
  const [ type, credencials ] = authorization.split(' ');

  if ( credencials === undefined ) return res.status(403).send({ message: "No token provider" });

  const decodeToken = jwt.verify(credencials, process.env.API_TOKEN_SECRET);
  const user = await User.findById(decodeToken.id).populate('roles');
  console.log(decodeToken, user)
  if ( user === null ) return res.status(404).send({ message: 'User not found' });

  return user;
};