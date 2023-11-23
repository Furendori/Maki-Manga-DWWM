const ProductModel = require("../models/product");

module.exports = {
  getAll(req, res) {
    ProductModel.find().then((products) => {
      res.send(products);
    });
  },

  get(req, res) {
    const id = req.params.id;
    ProductModel.findOne({ _id: id }).then(product => {
      res.send(product);
    }).catch(error => {
      console.error('Erreur lors de la récupération du produit par ID', error);
      res.status(500).send('Erreur serveur');
    })
  },

  create(req, res) {
    const product = new ProductModel({ ...req.body });
    product.save().then(() => {
      res.send({
        response: `Création du produit ${product.name} effectuée avec succès`,
      });
    }).catch((e) => console.log(e.toString()));
  },

  update(req, res) {
    const id = req.body.id;
    if (id) {
      ProductModel.findByIdAndUpdate(id, req.body).then((product) => {
        res.send(`Mise à jour du produit ${product.name}`);
      });
    } else {
      res.send({ result: "Un ID est nécessaire pour mettre à jour le produit" });
    }
  },

  delete(req, res) {
    const id = req.params.id;
    ProductModel.findByIdAndRemove(id).then((product) => {
      res.send({
        response: `Suppression du produit ${product.name} a bien été supprimée`,
      });
    });
  },
  
  // la fonction de recherche
  searchProducts(req, res) {
    const { query } = req.query;

    ProductModel.find({ name: { $regex: new RegExp(query, "i") } })
      .then((products) => {
        res.json(products);
      })
      .catch((error) => {
        console.error("Erreur lors de la recherche de produits :", error);
        res
          .status(500)
          .json({ error: "Erreur serveur lors de la recherche de produits" });
      });
  },
};
