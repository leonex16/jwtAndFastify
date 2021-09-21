import { routerUser } from "../routes/users.route";
import { routerProduct } from "../routes/products.route";
import { routerAuth } from "../routes/auth.route";

export const routerPlugin = (fastify, options, done) => {
  [routerUser, routerProduct, routerAuth].forEach(routerArr => {
    routerArr.forEach(router => fastify.route(router));
  });

  done();
};