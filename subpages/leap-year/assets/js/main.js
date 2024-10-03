const text = document.querySelector(".ans")
const inputAnio = document.getElementById("inputanio")

const anio = new Date().getFullYear()

inputAnio.placeholder=anio.toString()

function calcularBisiesto(numero){
  num = parseInt(numero)
  console.log(num)
  const an = bis(numero)
  if (num === 0){
    text.textContent = "No existe un año cero"
    return
  }
  const an = bis(numero)
  if (an) {
    text.textContent = "Año bisiesto"
  } else {
    text.textContent = "Año no bisiesto"
  }
}

function bis(number){
  return (number % 4 === 0 && number % 100 !== 0) || number % 400 === 0       
}
