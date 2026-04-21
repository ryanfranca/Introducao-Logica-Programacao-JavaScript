// Função que Calcula a Área de um Retângulo: Crie uma função que calcula a área de um retângulo dado largura e altura.

function area (base, altura){
    return base * altura
}

let areaRet = area (40,10)
console.log ("Este retângulo tem", areaRet,"m² de área")
console.log("---------------------------------------------")

// Função para Verificar Número Par: Faça uma função que recebe um número e retorna true se for par e false se for ímpar.

function ImparPar (num1){
    if (num1 % 2 === 0){
        return true
    }
    else {
        return false
    }
}

let VerificarNum = ImparPar (2)
console.log("Este número é par? ", VerificarNum)
console.log("---------------------------------------------")

// Converter Polegadas em Centímetros: Escreva uma função que converte polegadas em centímetros.

function converter (polegada){    
    return polegada * 2.54
}

let conversor = converter (2)
console.log ("O valor da polegada em centímetros é:", conversor,"cm")
console.log("---------------------------------------------")

// IMC: Escreva uma função que calcula o Índice de Massa Corporal (IMC).

function IMC (peso,altura){
    return peso / (altura * altura)
}

let calculoIMC = IMC (73, 1.90)
console.log ("O seu índice de massa corporal é:", calculoIMC.toFixed(2)) // to.Fixed é uma forma de deixa apenas duas casas decimais
console.log("---------------------------------------------")

// Maiúsculas para Minúsculas: Crie uma função que recebe uma string e retorna a mesma string em letras minúsculas.
function paraMinusculas(texto) {
    return texto.toLowerCase(); // toLowerCase é um método que transforma letras maiusculas para minusculas
}

let resultado = paraMinusculas("OLÁ MUNDO");
console.log(resultado);
console.log("---------------------------------------------")

// Verificar se um número é positivo, negativo ou igual a zero

function PositivoNegativo (nume){
    if(nume === 0){
        return ("Este número é igual a zero!")
    }
    else if (nume > 0){
        return ("Este número é positivo!")
    }
    else if (nume < 0){
        return ("Este número é negativo")
    }
    else{
        return ("Número inválido!")
    }
}

let VeriNum = PositivoNegativo (2)
console.log (VeriNum)