function calcularBisiesto(numero){
  an = bis(numero)
  text = document.querySelector(".ans")
  if (an) {
    text.textContent = "Año bisiesto"
  } else {
    text.textContent = "Año no bisiesto"
  }
  }
function bis(number){
    return (number % 4 === 0 && number % 100 !== 0) || number % 400 === 0
       
  }

