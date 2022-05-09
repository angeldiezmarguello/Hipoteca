
//jshint esversion:6





//Valido el formulario antes de enviarselo al servidor.

var botoEnviar=document.querySelector(".botonEnviar");
botonEnviar.addEventListener("click",function(){

let tipoCasa=formulario.tipoVivienda.value;
//let es igual a var pero let solo existe entre los parentesis esos de arriba.

let annos=formulario.annos.value;

let interes=formulario.interes.value;


if((tipoCasa=="...")||(annos=="...")||(interes=="...")){
//si se cumple la condicion aviso del error y termino sin enviar al server.

alert("El formulario está incompleto!!");

return false;
}

formulario.submit(); //ahora envío el formulario porque ahora si está completo.

});







//voy a poner a escuchasr los cambios que realice el usuario en la listapara cambiar la foto.

var tipoVivienda=formulario.tipoVivienda;
tipoVivienda.addEventListener("change",function(){



  //Cambiamos la foto de la vivienda si hay un cambio en el formulario.


  var nuevaVivienda=formulario.tipoVivienda.value;
//selecciono la foto segun la eleccion del usuario.

var foto=document.querySelector(".fotoCasa");
//cambio la foto
switch(nuevaVivienda){


  case "...":  foto.src= "../imagenes/interrogante.jpg";
  break;


case "piso":  foto.src= "../imagenes/piso.jpg";
break;



case "chalet":  foto.src= "../imagenes/chalet.jpg";
break;


case "duplex":  foto.src= "../imagenes/duplex.jpg";
break;

  }


});
