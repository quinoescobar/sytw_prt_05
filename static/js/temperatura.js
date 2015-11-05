" use strict";

function Medida(valor,tipo)
{
  this.valor=valor;
  this.tipo=tipo;
}

Medida.prototype.getTipo = function ()
{
  return this.tipo;
};
Medida.prototype.getValor = function ()
{
  return this.valor;
};
Medida.prototype.setTipo = function (arg)
{
   this.tipo=arg;
};
Medida.prototype.setValor = function (arg)
{
  //que medida aceptara un argumento
  //Medida(32,"F") y Medida(32F)
  //constructor mas versatil, que construya el objeto, no en calcular
   this.valor=arg;
};

function Temperatura(valor,tipo)
{
  Medida.call(this,valor,tipo);
}

Temperatura.prototype= new Medida();

Temperatura.prototype.Celsius = function ()
{
  //AQUI SE PASA DE Celsius A Farenheit
  //result = (num * 9/5)+32;
  var calculado = (this.getValor() * 9/5)+32;
  calculado = calculado.toFixed(1)+" Farenheit";

  return calculado;
};

Temperatura.prototype.Farenheit = function ()
{
  //AQUI SE PASA DE Farenheit A Celsius
  //result = (num - 32)*5/9;
  var calculado2= (this.getValor() - 32)*5/9;
  calculado2 = calculado2.toFixed(1)+" Celsius";

  return calculado2;
};

//ACOMODAR CÓDIGO PARA USAR LOS GETS Y LOS SETS
function calcular()
{
  var result;
  var original = document.getElementById("original");
  var temp = original.value;
  // alert(temp);
  // Empiece por - +, pude o no puede
  //Siguiente digito si o si
  //
  var regexp = /([-+]?\d+(?:\.\d*)?)\s*([fFcC])/;
  var mejorRegex = /(^[-+]?[0-9]*\.?[0-9]+(?:[eE][-+]?[0-9]+)?)\s*([fFcC])/;
//poner parentesis sin memoria en xsub2
  var x = temp.match(mejorRegex);

  if (x)
  {
    var ingresado = new Temperatura();
    ingresado.setValor(parseFloat(x[1]));
    ingresado.setTipo(x[2]);
    // num = parseFloat(num);
    if (ingresado.getTipo() == 'c' || ingresado.getTipo() == 'C') {
      // result = (num * 9/5)+32;
      //-------toFixed()------------
      // Convert a number into a string, keeping only two decimals:
      // var num = 5.56789;
      // var n = num.toFixed(2);
      //
      // The result of n will be:
      // 5.57
      // aux= ingresado.Celsius();
      // result.setValor(aux);
      // result.setTipo("Farenheit");
      //result = ingresado.Celsius() + " Farenheit";
      // result = ingresado.toFixed(1)+" Farenheit";
      result = ingresado.Celsius();
    }
    else {
      result = ingresado.Farenheit();
      // result = ingresado.Farenheit(1)+" Celsius";
    }
      //result = result.getValor() + " " + result.getTipo();
      converted.innerHTML = result;
      console.log(result);
  }
  else {
      console.error("missing target");
      converted.innerHTML = "¡ERROR! Intente con valores correctos [-,+] [Número] [Medida] e.g: '-4.2C' ";
  }
}
