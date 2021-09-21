import { authJwt } from "./authJwt";
import { verifyPermissions } from "./verifyPermissions";

export const _rootMiddlewares = async (req, res) => {
  const { method, needAuth } = req?.context?.config;
  let user;

  if ( needAuth === false ) return;
  
  user = await authJwt(req, res);

  if ( user === undefined ) return;

  await verifyPermissions(res, user, method);

};