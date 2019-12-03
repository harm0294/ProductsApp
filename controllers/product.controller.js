const Product = require("../models/product.model");

//12. Version simple, sin validacion
exports.test = function(req, res) {
  res.send("Esto es el controllador TEST, si funciona...");
};

//16. controllers/products.js
exports.product_create = function(req, res) {
  let product = new Product({
    name: req.body.name,
    price: req.body.price
  });
  product.save(function(err) {
    if (err) {
      return next(err);
    }
    res.send("Producto creado correctamente.");
  });
};
//17. Read
exports.product_details = function(req, res) {
  Product.findById(req.params.id, function(err, product) {
    if (err) return next(err);
    res.send(product);
  });
};
//18. Update
exports.product_update = function(req, res) {
  Product.findByIdAndUpdate(req.params.id, { $set: req.body }, function(
    err,
    product
  ) {
    if (err) return next(err);
    res.send("Producto Actualizado correctamente.");
  });
};
//19. Delete
exports.product_delete = function(req, res) {
  Product.findByIdAndRemove(req.params.id, function(err) {
    if (err) return next(err);
    res.send("Borrado correctamente!");
  });
};
