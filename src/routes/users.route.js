import * as userController from '../controllers/users.controller';
    config: { needAuth: true }

const url = '/users';

export const routerUser = [
  {
    method: 'GET',
    url: url,
    handler: (req, res) => userController.getUsers(req, res),
    config: { needAuth: false }
  },
  {
    method: 'POST',
    url: url,
    handler: (req, res) => userController.createUser(req, res),
    config: { needAuth: true }
  },
  {
    method: 'GET',
    url: url + '/:userId',
    handler: (req, res) => userController.getUserById(req, res),
    config: { needAuth: false }
  },
  {
    method: 'PUT',
    url: url + '/:userId',
    handler: (req, res) => userController.updateUserById(req, res),
    config: { needAuth: true }
  },
  {
    method: 'DELETE',
    url: url + '/:userId',
    handler: (req, res) => userController.deleteUserById(req, res),
    config: { needAuth: true }
  },
];