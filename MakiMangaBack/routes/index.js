const UserController = require("../controller/user");
const ProductController = require("../controller/product");
const MangaController = require("../controller/manga");
const SendEmailController = require("../controller/sendEmail");

module.exports = server => {
    
    server.get("/users", UserController.getAll);

    server.get("/user/:id", UserController.get);

    server.get("/products", ProductController.getAll);
    
    server.get("/mangas", MangaController.getAll);

    server.get("/product/:id", ProductController.get);

    server.get("/manga/:id", MangaController.get);

    server.post("/users", UserController.create);

    server.get("/users/:email", UserController.findByEmail);

    server.post("/users/:id", UserController.update);

    server.post("/products", ProductController.create);

    server.post("/mangas",MangaController.create);

    server.post("/send_email", SendEmailController.sendEmail);

    server.delete("/users/:id", UserController.delete);

    server.delete("/products/:id", ProductController.delete);

    server.get("/search", ProductController.searchProducts);

    server.delete("/mangas/:id", MangaController.delete);
}