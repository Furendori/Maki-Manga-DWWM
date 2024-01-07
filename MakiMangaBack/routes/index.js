const UserController = require("../controller/user");
const ProductController = require("../controller/product");
const MangaController = require("../controller/manga");
const SendEmailController = require("../controller/sendEmail");
const LoginController = require("../controller/login");
const AuthMiddleware = require("../middlewares/authMiddleware");

module.exports = server => {
    
    server.get("/users", AuthMiddleware.auth, UserController.getAll);

    //admin
    server.get("/user/:id", AuthMiddleware.auth, UserController.get);
    //self User
    server.get("/user", AuthMiddleware.auth, UserController.get);

    server.get("/products", ProductController.getAll);
    
    server.get("/mangas", MangaController.getAll);

    server.get("/product/:id", ProductController.get);

    server.get("/manga/:id", MangaController.get);

    server.post("/user", UserController.create);

    server.patch("/user", AuthMiddleware.auth, UserController.update);

    server.patch("/manga/:id", MangaController.update);

    server.post("/product", AuthMiddleware.auth, ProductController.create);

    server.post("/manga", MangaController.create);
    
    server.post("/login", LoginController.signIn);

    server.post("/send_email", SendEmailController.sendEmail);

    // admin
    server.delete("/user/:id", AuthMiddleware.auth, UserController.delete);
    // Self User
    server.delete("/user", AuthMiddleware.auth, UserController.delete);

    server.delete("/product/:id", AuthMiddleware.auth, ProductController.delete);

    server.get("/search", ProductController.searchProducts);

    server.delete("/manga/:id", MangaController.delete);
}