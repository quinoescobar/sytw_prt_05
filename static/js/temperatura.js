" use strict";

function Medida()
{
  console.log(arguments);
  var argumentosEntrada = arguments[0];
  var numeroArgumentos = argumentosEntrada.length;

  if(numeroArgumentos==1){
    console.log("Un solo argumento.");
    var mejorRegex = /(^[-+]?[0-9]*\.?[0-9]+(?:[eE][-+]?[0-9]+)?)\s*([fFcC])/;
    var aux = argumentosEntrada[0].match(mejorRegex);
    this.valor = aux[1];
    this.tipo = aux[2];
  }
  else if(numeroArgumentos==2){
    console.log("Dos argumentos.");
    this.valor=argumentosEntrada[0];
    this.tipo=argumentosEntrada[1];
  }
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

function Temperatura()
{
  Medida.call(this,arguments);
}

// Temperatura.prototype= new Medida();



Temperatura.prototype.Celsius = function ()
{
  //AQUI SE PASA DE Celsius A Farenheit
  //result = (num * 9/5)+32;
  var calculado = (this.valor * 9/5)+32;
  calculado = calculado.toFixed(1)+" Farenheit";

  return calculado;
};

Temperatura.prototype.Farenheit = function ()
{
  //AQUI SE PASA DE Farenheit A Celsius
  //result = (num - 32)*5/9;
  var calculado2= (this.valor - 32)*5/9;
  calculado2 = calculado2.toFixed(1)+" Celsius";

  return calculado2;
};

function descomponerInput()
{
  var result;
  var original = document.getElementById("original");
  var temp = original.value;
  var mejorRegex = /(^[-+]?[0-9]*\.?[0-9]+(?:[eE][-+]?[0-9]+)?)\s*([fFcC])/;
  var x = temp.match(mejorRegex);
  if (x)
  {
    var ingresado = new Temperatura();
    ingresado.setValor(parseFloat(x[1]));
    ingresado.setTipo(x[2]);
    //console.log(ingresado.getValor()+"   "+ingresado.getTipo());
    return(ingresado);
  }
  else {
    console.error("ERROR, parece que ha ingresado algo que no debe, [-,+] [Número] [Medida] e.g: '-4.2C' ");
    converted.innerHTML = "¡ERROR! Intente con valores correctos [-,+] [Número] [Medida] e.g: '-4.2C' ";
  }

}
//ACOMODAR CÓDIGO PARA USAR LOS GETS Y LOS SETS
Temperatura.prototype.calcularxxx = function(){
  // console.log("argumento que le llega a calcular : "+original);
  var result;
  //var original = document.getElementById("original");
  // var temp = original;
  // alert(temp);
  // var regexp = /([-+]?\d+(?:\.\d*)?)\s*([fFcC])/;
  // var mejorRegex = /(^[-+]?[0-9]*\.?[0-9]+(?:[eE][-+]?[0-9]+)?)\s*([fFcC])/;
  // var x = temp.match(mejorRegex);
  if (x)
  {
    var ingresado = new Temperatura();
    // ingresado.setValor(parseFloat(x[1]));
    // ingresado.setTipo(x[2]);
    // num = parseFloat(num);
    if (this.getTipo() == 'c' || this.getTipo() == 'C') {
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
      result = this.Celsius();
    }
    else {
      result = this.Farenheit();
      // result = ingresado.Farenheit(1)+" Celsius";
    }
      //result = result.getValor() + " " + result.getTipo();

      console.log("retornado desde calcular: "+result);
      return result;

  }
  else {
      console.error("missing target");
      converted.innerHTML = "¡ERROR! Intente con valores correctos [-,+] [Número] [Medida] e.g: '-4.2C' ";
  }
};

Temperatura.prototype.calcular = function(){
  var result;
  console.log("tipo :" + this.tipo);
  console.log("valor :" + this.valor);
  this.Celsius();
  if (this.tipo == 'c' || this.tipo == 'C') {
    result = this.Celsius();

      }
  else {
    result = this.Farenheit();

  }
  console.log("Resultado :" + result);
  return result;

};
module.exports = Temperatura;
