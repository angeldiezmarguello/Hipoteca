//jshint esversion:6

//Inicializo los moduloes que instalé con npm.

//1. Del Express las 3 lineas requeridas abajo.

const express=require("express");
const app=express();
app.use(express.static("public"));


//2. Ahora las lieas del body-parser.

const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

//Abajo la zona de enrutamiento.
app.get("/",function(req,res){
res.sendFile(__dirname+"/index.html");

});



//3.ahora abajo pongo a escuchar el server.


app.listen(3000,function(){

console.log("Estoy escuchando en el puerto 3000");
});
