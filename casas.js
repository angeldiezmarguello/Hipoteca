//jshint esversion:6
//este es el javascript de la parte servidor.

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

app.post("/",function(req,res){
//recojo los datos del formulario

var tipoVivienda=req.body.tipoVivienda;
var annos=req.body.annos;

var interes=Number(req.body.interes);

console.log(interes);






//**********************************

var precioVivienda;
console.log(tipoVivienda);
switch(tipoVivienda){

case "piso":
precioVivienda=180000;

break;

case "chalet":
precioVivienda=300000;
break;


case "duplex":
precioVivienda=220000;
break;

}//fin del switch.

//ahora calculo la cuota mensual.


//ABAJO ESTA LA FORMULA DEL CALCULO DEL PAGO MENSUAL.

meses=annos*12;

var cuota=precioVivienda/((1-Math.pow(1+interes,-meses))/interes);

//Envia el server el resultado al navegador abajo.
res.send("<h1>La cuota mensual es "+cuota.toFixed(2)+"€</h1");

});




//3.ahora abajo pongo a escuchar el server.


app.listen(3000,function(){

console.log("Estoy escuchando en el puerto 3000");
});
