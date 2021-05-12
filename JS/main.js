/*
const texto = "Vamos a ver si funciona contar palabras" ; 
const textoDividido = texto.split(" ");
console.log(texto)
console.log("El tamaño de la frase es de " + textoDividido.length + " palabras");

var espacios = (texto.split(" ").length - 1);
console.log("La frase tiene " + espacios + " espacios");
console.log(`La frase tiene ${texto.length - espacios} letras`) 


//creamos la funcion contador de cada letra
let contador = string => {
  return string.split("").reduce((total, letter) => {
      total[letter] ? total[letter]++ : total[letter] = 1;   // if total letter existe --> true (sumale 1) --> fals(todavia no hay ninguno,ponle 1)
      return total;
  }, {});
};
// prueba PR dani
//depositamos el resultado que retorna la funcion a una variable
let resultado = contador(texto);
console.log(resultado);*/



function contarPalabras(){
  var texto = (document.getElementById("area").value);

  primerBlanco = /^ /;   //espacio al principio de la frase
  ultimoBlanco = / $/;   // espacio al final de la frase
  variosBlancos = /[ ]+/g;  // varios espacios
  

  texto = texto.replace (variosBlancos," ");
  texto = texto.replace (primerBlanco,"");
  texto = texto.replace (ultimoBlanco,"");
  texto = texto.replace(",", " ");
  texto = texto.replace(".", "");
  texto = texto.replace(":", "");
  texto = texto.replace(";", "");
  texto = texto.replace("  ", " "); 
  texto = texto.replace (/\r?\n/g," ");    //Reemplazamos los espacios seguidos por uno solo

  /*function quitarAcentos(cadena){
    const acentos = {'á':'a','é':'e','í':'i','ó':'o','ú':'u','Á':'A','É':'E','Í':'I','Ó':'O','Ú':'U'};      //para eliminar los accentos
    return cadena.split('').map( letra => acentos[letra] || letra).join('').toString();	
  }*/

  
  const textoDividido = texto.split(" ");
  const numeroPalabras = textoDividido.length;
  document.getElementById("resultadoPalabras").innerHTML = numeroPalabras;
}

function contarLetras(){
    var texto = (document.getElementById("area").value);
    var texto = texto.replace(",", "");   // para que no cuente la coma como letra usamos el .replace (cambiar coma por nada)
    var texto = texto.replace("!", "");
    var texto = texto.replace("?", "");
    var texto = texto.replace(".", "");
    var texto = texto.replace(":", "");
    var texto = texto.replace(";", "");

   

    var espacios = (texto.split(" ").length - 1);
    const numeroLetras = texto.length - espacios;
    document.getElementById("resultadoLetras").innerHTML = numeroLetras;
  }

const texto = document.getElementById("area").innerHTML;

function reset(){
  location.reload();
}



/* */
