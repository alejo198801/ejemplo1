const { Router } = require('express');
const express= require('express');
const  Mongoose  = require('mongoose');
const UsuarioSchema= require("./Modelos/usuario.js");

const app= express();
const route = express.Router();
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//Crud
route.get("/",(req, res) =>{
    res.send("Este es el inicio de mi primera API");
});

//Insertar

route.post("/usuario",(req, res)=>{
    let nuevousuario = new usuarioSchema({

        idusuario:req.body.id,
        nombreusuario:req.body.nombre,
        telefonousuario:req.body.telefono,
        ciudadusuario:req.body.ciudad

    });
    nuevousuario.save(function(err,datos){
        if(err){
            console.log(err)
        }
        res.send("Usuario Almacenado")
    })

})

Mongoose.connect("mongodb+srv://prog_web:kokoro123@clusterproweb.nkgnx.mongodb.net/ejemplo1DB?retryWrites=true&w=majority");
app.use(route);
app.listen(3000, ()=>{
    console.log("Servidor corriendo en el puerto 3000")
});
