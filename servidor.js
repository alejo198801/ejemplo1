const express= require('express');
const  Mongoose  = require('mongoose');
const app= express();
const route = express.Router();
app.use(express.urlencoded({extended:true}));
app.use(express.json());

Mongoose.connect("mongodb+srv://prog_web:kokoro123@clusterproweb.nkgnx.mongodb.net/ejemplo1DB?retryWrites=true&w=majority");
app.use(route);
app.listen(3000, ()=>{
    console.log("Servidor corriendo en el puerto 3000")
});
