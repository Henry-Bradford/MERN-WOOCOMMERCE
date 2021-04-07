const Controller = require('../services/woocommerce.service');

exports.routesConfig = function (app) {
  app.get("/products/total", [Controller.getTotal]);
  app.get("/products/page/:pageId", [Controller.getByPage]);
  app.get("/products/:id", [Controller.getById]);
  app.get("/products/delete/:id", [Controller.deleteById]);
  app.get("/products/overview", [Controller.getProducts]);
};