import fastify from "fastify";

import { routerPlugin } from "./plugin/router";
import { createRoles } from "./libs/initialSetup";
import { _rootMiddlewares } from "./middlewares/_rootMiddlewares";

export const app = fastify({logger: {
  level: 'warn',
  prettyPrint: true
}});

createRoles();

// MIDDLEWARES
app.addHook('onRequest', async (req, res) => await _rootMiddlewares(req, res));

// PLUGINGS
app.register(routerPlugin, { prefix: `/api/${process.env.API_VERSION}`});
