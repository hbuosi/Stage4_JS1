
let numberOne = Number(prompt(alert(`Informe o primeiro número: `)))
let numberTwo = Number(prompt(alert(`Informe o segundo número: `)))

let sumNumbers = (numberOne) + (numberTwo)
let subNumbers = (numberOne) - (numberTwo)
let multNumbers = (numberOne) * (numberTwo)
let divNumbers = (numberOne) / (numberTwo)
let restNumbers = (numberOne) % (numberTwo)
let parOuImpar = sumNumbers / 2

alert(`A soma entre os números ${numberOne} e ${numberTwo} é: ${sumNumbers}`)
alert(`A subtração entre os números ${numberOne} e ${numberTwo} é: ${subNumbers}`)

alert(`A multiplicação entre os números ${numberOne} e ${numberTwo} é: ${multNumbers}`)

alert(`A divisão entre os números ${numberOne} e ${numberTwo} é: ${divNumbers}`)

alert(`A divisão entre os números ${numberOne} e ${numberTwo} é: ${restNumbers}`)

if(parOuImpar == 0){
  alert(`Este número é par: ${sumNumbers}`)
}else{
  alert(`Este número é impar: ${sumNumbers}`)
}

if(numberOne == numberTwo){
  alert(`Os números inseridos são iguais`)
}else{
  alert(`Os números inseridos são diferentes`)
}