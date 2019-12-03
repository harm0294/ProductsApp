//6. app.js
const express = require("express");
const bodyParser = require("body-parser");

//13. Importar rutas de producto
const product = require("./routes/product.route");

//6. Inicializamos nuestra app express
const app = express();

//14. Configurar la conexion mongoose
const mongoose = require("mongoose");
let dev_db_url = "mongodb://localhost:27017/products";
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
//15. Configuramos body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//13. Le hacemos saber a nuetra app que puede usarlas
app.use("/products", product);

//7. Ahora le diremos a nuestra aplicacion el puerto donde trabajaremos
let port = 1234;
app.listen(port, () => {
  console.log("El servidor esta corriendo en el puerto " + port);
});
