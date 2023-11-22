const UserController = require("../controller/user");
const ProductController = require("../controller/product");
const MangaController = require("../controller/manga");
const SendEmailController = require("../controller/sendEmail");

module.exports = server => {
    
    server.get("/users", (req, res) => {
        UserController.getAll(req, res);
    });

    server.get("/user/:id", (req, res) => {
        UserController.get(req,res);
    });

    server.get("/products", (req, res) => {
        ProductController.getAll(req, res);
    });
    
    server.get("/mangas", (req, res) => {
        MangaController.getAll(req, res);
    });

    server.get("/product/:id", (req, res) => {
        ProductController.get(req, res);
    });

    server.get("/manga/:id", (req, res) => {
        MangaController.get(req, res);
    });

    server.post("/users", (req, res) => {
        UserController.create(req, res);
    });

    server.get("/users/:email", (req, res) => {
        UserController.findByEmail(req, res);
    });

    server.post("/users/:id", (req, res) => {
        UserController.update(req, res);
    })

    server.post("/products", (req, res) => {
        ProductController.create(req, res);
    });

    server.post("/mangas", (req, res) => {
        MangaController.create(req, res);
    });

    server.post("/send_email", (req, res) => {
        SendEmailController.sendEmail(req, res);
    });

    server.delete("/users/:id", (req, res) => {
        UserController.delete(req, res);
    });

    server.delete("/products/:id", (req, res) => {
        ProductController.delete(req, res);
    });

    server.get("/search", (req, res) => {
        ProductController.searchProducts(req, res);
    });

    server.delete("/mangas/:id", (req, res) => {
        MangaController.delete(req, res);
    });
}