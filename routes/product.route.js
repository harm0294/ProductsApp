//10 Estructura principal
const express = require("express");
const router = express.Router();

//10. Requiere el controlador
const product_controller = require("../controllers/product.controller");

// //10. Un test simple para verificar que todo este correcto
// router.get("/test", product_controller.test);

//16. Create
router.post("/create", product_controller.product_create);
//17. Read
router.get("/:id", product_controller.product_details);
//18. Update
router.put("/:id/update", product_controller.product_update);
//19. Delete
router.delete("/:id/delete", product_controller.product_delete);
module.exports = router;
