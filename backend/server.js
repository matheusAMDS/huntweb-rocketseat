const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

// Iniciando o app
const app = express();
app.use(express.json());
app.use(cors());

// Iniciando o DB
mongoose.connect("mongodb+srv://curso_nodejs:curso_nodejs@cluster0-i3d9a.mongodb.net/test?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
requireDir("./src/models");

// Rotas
app.use("/api", require("./src/routes"));

app.listen(8000);

