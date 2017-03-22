var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0;i < pacientes.length;i++){
    var paciente = pacientes[i];
    var tdPeso = paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");

    var altura = tdAltura.textContent;
    var peso = tdPeso.textContent;

    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);
    var tdImc = paciente.querySelector(".info-imc");

    if(!pesoEhValido){
      console.log("peso invalido!");
      tdImc.textContent = "Peso invalido";
      paciente.classList.add("paciente-invalido");
    }

    if(!alturaEhValida){
      console.log("altura invalida");
      tdImc.textContent = "Altura invalido";
      paciente.classList.add("paciente-invalido");
    }

    if(pesoEhValido && alturaEhValida){
      var imc = calculaImc(peso,altura)
      tdImc.textContent = imc;
    }
}

function calculaImc(peso, altura){
   var imc = 0
   imc = peso / (altura * altura);
   return imc.toFixed(2);
}

function validaPeso(peso){
  if(peso >=0 && peso <=1000){
    return true;
  }else {
    return false;
  }
}

function validaAltura(altura){
  if(altura >=0.0 && altura <=3.0){
    return true;
  }else {
    return false;
  }
}
