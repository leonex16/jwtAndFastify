import * as productController from '../controllers/products.controller';

const url = '/products';

export const routerProduct = [
  {
    method: 'GET',
    url: url,
    handler: (req, res) => productController.getProducts(req, res),
    config: { needAuth: false }
  },
  {
    method: 'POST',
    url: url,
    handler: (req, res) => productController.createProduct(req, res),
    config: { needAuth: true }
  },
  {
    method: 'GET',
    url: url + '/:ProductId',
    handler: (req, res) => productController.getProductById(req, res),
    config: { needAuth: false }
  },
  {
    method: 'PUT',
    url: url + '/:ProductId',
    handler: (req, res) => productController.updateProductById(req, res),
    config: { needAuth: true }
  },
  {
    method: 'DELETE',
    url: url + '/:ProductId',
    handler: (req, res) => productController.deleteProductById(req, res),
    config: { needAuth: true }
  },
];