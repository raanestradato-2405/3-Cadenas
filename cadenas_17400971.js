function esPalindromo(cadena) {

  var resultado = "";
  //Convertir la cadena a solo minusculas
  var cadenaOrg = cadena.toLowerCase();

  //Convertir la cadena a un arreglo para eliminar espacios
  var arregloLetras = cadenaOrg.split(" ");


  var cadenaNueva = "";
  //Quitamos los espacios en blanco del arreglo
  for (i in arregloLetras) {
    if (arregloLetras[i] != " ") {
      cadenaNueva += arregloLetras[i];
    }
  }

  var letras = cadenaNueva.split("");
  var letrasInvertidas = cadenaNueva.split("").reverse();
  totalLetras = cadenaNueva.split(" ");

  //Mostrar cadena ingresada en minusculas  separada caracter a caracter
  console.log("Cadena ingresada:");
  console.log(letras);

  //Mostrar cadena invertida separada caracter a caracter
  console.log("Cadena invertida:");
  console.log(letrasInvertidas);


  var bandera = true;
  for (i in letras) {
    if (letras[i] == letrasInvertidas[i]) {

    }
    else {
      bandera = false;
    }
  }

  if (bandera) {
    resultado = " SI ES PALÍNDROMO";
  }
  else {
    resultado = " NO ES PALÍNDROMO";
  }

  return resultado;

}



function totalPalabras(cadena) {
  var tPalabras = 0;
  var palabra = "";

  palabra = cadena.split(" ");
  tPalabras = 1;
  tPalabras = palabra.length;

  return tPalabras;

}

function totalLetras(cadena) {
  var cadenaIngresada = "";
  var tLetras = 0;
  var vocales = 0;
  var consonates = 0;

  var cadenaIngresada = cadena.toLowerCase();

  //Convertir la cadena a un arreglo para eliminar espacios
  var arregloPalabras = cadenaIngresada.split(" ");

  tLetras = 0;
  var cadenaSinEspacios = "";
  for (i in arregloPalabras) {
    if (arregloPalabras[i] != " ") {
      cadenaSinEspacios += arregloPalabras[i];
    }
  }

  tLetras = cadenaSinEspacios.length;

  for (i in cadenaSinEspacios) {
    if (cadenaSinEspacios[i] == 'a' || cadenaSinEspacios[i] == 'e' || cadenaSinEspacios[i] == 'i' ||
      cadenaSinEspacios[i] == 'o' || cadenaSinEspacios[i] == 'u') {
      vocales = vocales + 1;
    }
  }

  consonates = tLetras - vocales;

  return tLetras + "\nTotal de vocales: " + vocales + "\nTotal de consonates: " + consonates;
}


//Exportar la funcion para hacerla vsible y emplearla en otro archivo
module.exports.esPalindromo = esPalindromo;
module.exports.totalPalabras = totalPalabras;
module.exports.totalLetras = totalLetras;