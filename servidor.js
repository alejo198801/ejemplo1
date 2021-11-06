
const express= require('express');
const  Mongoose  = require('mongoose');
const usuario = require('./Modelos/usuario.js');
const UsuarioSchema= require("./Modelos/usuario.js");

const app= express();
const route = express.Router();
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//Crud
route.get("/",(req, res) =>{
    res.send("Este es el inicio de mi primera API");
});

//gett
route.get("/usuario",(req, res)=>{
    UsuarioSchema.find(function(err,datos){
     if(err){
          console.log("Erros leyendo los Usuarios");
     }else{
        res.send(datos);
        }

    }) 
});

//Insertar

route.post("/usuario",(req, res)=>{
    let nuevousuario = new UsuarioSchema({
        tipo_documento:req.body.tipo,
        idusuario:req.body.numero,
        nombreusuario:req.body.nombre,
        apellidousuario:req.body.apellido,
        direccion_usuario:req.body.direccion,
        correo_usuario:req.body.correo,
        telefono_usuario:req.body.telefono,
        celular_usuario:req.body.celular,
        web_usuario:req.body.web,
        perfil_usuario:req.body.perfil,        

    });
    nuevousuario.save(function(err,datos){
        if(err){
            console.log(err)
        }
        res.send("Usuario Almacenado")
    })

})

//actualizar



  
Mongoose.connect("mongodb+srv://prog_web:kokoro123@clusterproweb.nkgnx.mongodb.net/ejemplo1DB?retryWrites=true&w=majority");
app.use(route);
app.listen(3000, ()=>{
    console.log("Servidor corriendo en el puerto 3000")
});