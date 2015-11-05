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

Temperatura.prototype.Celsiuss = function ()
{
  console.error("Dentro de Celsius");
  var calculado = (this.getValor() * 9/5)+32;
  calculado = calculado.toFixed(1)+" Farenheit";

  return calculado;
};

Temperatura.prototype.Farenheits = function ()
{
  console.error("Dentro de Farenheit");
  var calculado2= (this.getValor() - 32)*5/9;
  calculado2 = calculado2.toFixed(1)+" Celsius";

  return calculado2;
};

Temperatura.prototype.Celsius = function (wValor)
{
  console.error("Dentro de Celsius");
  var calculado = (wValor * 9/5)+32;
  calculado = calculado.toFixed(1)+" Farenheit";

  return calculado;
};

Temperatura.prototype.Farenheit = function (wValor)
{
  console.error("Dentro de Farenheit");
  var calculado2= (wValor - 32)*5/9;
  calculado2 = calculado2.toFixed(1)+" Celsius";

  return calculado2;
};

function calcularW()
{
  if (window.Worker)
  { //check if Browser supports the Worker api.
  	// Requires script name as input
    console.log("Los Web Worker  son soporatos.");
    var myWorker = new Worker("temperatura.js");
    //A web worker is a JavaScript running in the background,
    //without affecting the performance of the page.
    recibido = descomponerInput();
  	myWorker.postMessage([recibido.valor,recibido.tipo]);
    console.log('Mensaje enviado al worker :'+ recibido.valor + " "+ recibido.tipo);
    myWorker.onmessage = function(e)
    {
      console.log('Mensaje recibido del worker');
      console.log(e.data);
      converted.innerHTML = e.data;
    };


  }else
  {
    console.log("Los Web Worker no son soporatos.");
    //Ya no funciona Calcular(), se ha modificado los métodos Celsius and Farenheit
    Calcular();
  }
}

self.onmessage = function(objeto) {
  var valorW = objeto.data[0];
  var tipoW = objeto.data[1];
  console.log('OBJETO = ' + valorW +'  '+tipoW);
  console.log("Convirtiendo Temperatura");
  var result;
  var convertir = new Temperatura();

  if( tipoW == 'C' || tipoW =='c'){

    result = convertir.Celsius(valorW);
  }else{
    result = convertir.Farenheit(valorW);
  }

  self.postMessage(result);
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


function calcular()
{
  var result;
  var original = document.getElementById("original");
  var temp = original.value;

  var regexp = /([-+]?\d+(?:\.\d*)?)\s*([fFcC])/;
  var mejorRegex = /(^[-+]?[0-9]*\.?[0-9]+(?:[eE][-+]?[0-9]+)?)\s*([fFcC])/;

  var x = temp.match(mejorRegex);

  if (x)
  {
    var ingresado = new Temperatura();
    ingresado.setValor(parseFloat(x[1]));
    ingresado.setTipo(x[2]);

    if (ingresado.getTipo() == 'c' || ingresado.getTipo() == 'C') {

      result = ingresado.Celsiuss();
    }
    else {
      result = ingresado.Farenheits();

    }

      converted.innerHTML = result;
      console.log(result);
  }
  else {
      console.error("missing target");
      converted.innerHTML = "¡ERROR! Intente con valores correctos [-,+] [Número] [Medida] e.g: '-4.2C' ";
  }
}
