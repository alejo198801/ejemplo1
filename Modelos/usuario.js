const mongoose= require("mongoose");
let usuarioSchema = new mongoose.Schema({
    idusuario : Number,
    nombreusuario : String,
    telefonousuario : Number,
    ciudadusuario : String
});

module.exports = mongoose.model("usuario", usuarioSchema, "usuarios");
