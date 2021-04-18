const Controller = require('../services/woocommerce.service');

exports.routesConfig = function (app) {
  app.get("/products/total", [Controller.getTotal]);
  app.get("/products/overview", [Controller.getProducts]);
  app.get("/products/page/:pageId", [Controller.getByPage]);
  app.get("/products/:id", [Controller.getById]);
  app.post("/products/update/:id", [Controller.updateById]);
  app.get("/products/delete/:id", [Controller.deleteById]);
};