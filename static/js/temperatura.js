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
