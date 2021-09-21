import * as authController from "../controllers/auth.controller";

const url = '/auth';

export const routerAuth = [
  {
    method: 'POST',
    url: url + '/signup',
    handler: (req, res) => authController.signUp(req, res),
    config: { needAuth: false }
  },
  {
    method: 'POST',
    url: url + '/signin',
    handler: (req, res) => authController.signIn(req, res),
    config: { needAuth: false }
  },
];