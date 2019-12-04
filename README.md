# ProductsApp

Just a simple CRUD with MONGOOSE

1. Instalar Node.js desde el sitio web
2. Crear el directorio donde trabajaremos
3. Dentro del nuevo directorio, ejecutar el siguiente comando en la terminal
   npm init --yes
4. Instalamos tambien los paquetes que usaremos
   ExpressJS para facilitar funcionalidad
   Mongoose Es un ODM de mongoDB para node.js
   Body-parser Es un paquete para manerar las peticiones JSON

   npm install --save express body-parser mongoose

5. Inicializamos el servidor
   Creamos un nuevo archivo llamado app.js dentro del direcctorio
6. Abrir el nuevo archivo creado y agregamos todas las dependencias que installamos
7. Ahora le diremos a nuestra aplicacion el puerto donde trabajaremos
8. Ahora podremos iniciar el siguiente comando en nuestra terminal
   node app.js
9. Usar el patron de diseno MVC modelo vista controlador
   Creamos las siguientes carpetas dentro del proyecto
   - controllers
   - models
   - routes
   - views
10. Creamos un nuevo archivo en models y definimos estructura
    product.model.js
11. Creamos un nuevo archivo en routes
    product.route.js
12. Implementar el controllador que referenciamos en routes
    Creamos en la carpeta controllers
    product.controller.js
13. Agregamos la nueva ruta a nuestra app.js
14. Conectamos nuestra app con la base de datos en app.js
15. Configuramos nuestra app con body-parser para las respuestas entrantes en app.js
    IMPLEMENTAR LOS END POINTS
16. Create en routes y controllers
17. Read en routes y controllers
18. Update en routes y controllers
19. Delete en routes y controllers
20. CODIGO EN GITHUB https://github.com/harm0294/ProductsApp
