const mongoose= require("mongoose");
let usuarioSchema = new mongoose.Schema({
    tipo_documento : String,
    idusuario : Number,
    nombreusuario : String,
    apellidousuario: String,
    direccion_usuario: String,
    correo_usuario: String,
    telefono_usuario : Number,
    celular_usuario: String,
    web_usuario: String,
    perfil_usuario: String,
});

module.exports = mongoose.model("usuario", usuarioSchema, "usuarios");
