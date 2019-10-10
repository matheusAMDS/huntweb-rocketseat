const mongoose = require("mongoose");
const Product = mongoose.model("Product");

module.exports = {
  // Listagem de produtos
  async index(req, res) {
    const { page = 1 } = req.query;
    const products = await Product.paginate({}, { page, limit: 10 });

    return res.json(products);
  },

  // Detalhes de um produto em específico
  async show(req, res) {
    const product = await Product.findById(req.params.id);

    return res.json(product);
  },

  // Criação de produtos
  async store(req, res) {
    const product = await Product.create(req.body);

    return res.json(product);
  },

  // Atualização de um produto
  async update(req, res) {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { 
      new: true,
      useFindAndModify: false
    });

    return res.json(product);
  },

  // Remoção de um produto
  async destroy(req, res) {
    await Product.findByIdAndRemove(req.params.id, {
      useFindAndModify: false
    });

    return res.send();
  },
};