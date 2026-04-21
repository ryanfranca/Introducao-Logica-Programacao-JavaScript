// Classificação por Idade: Classifique uma pessoa em 'criança', 'adolescente', 'adulto' ou 'idoso', baseado na idade.

let idade = 24

if (idade >= 0 && idade <= 14){
    console.log("Esta pessoa é uma criança!")
}
else if (idade >= 15 && idade <= 17){
    console.log("Esta pessoa é um(a) adolescente!")
}
else if (idade >= 18 && idade <= 59){
    console.log("Esta pessoa é um(a) adulto(a)!")
}
else if (idade >= 60){
    console.log("Esta pessoa é um(a) idoso(a)!")
}
else{
    console.log ("Idade inválida (Sem clasificação)")
}

// Par ou Ímpar: Use if para verificar se um número é par ou ímpar.

let num = 0

if(num % 2 === 0){
    console.log ("Número Par!")
}
else{
    console.log ("Número Par!")
}

// Desconto em Compras: Calcule o desconto em uma compra: se o valor for maior que 100, aplique um desconto de 10%.

let ValorCompra = 100
let desconto
let novoValor

if(ValorCompra > 0 && ValorCompra <= 100){
    console.log ("Compra Validada!")
}
else if(ValorCompra > 100){
    desconto = ValorCompra * 0.10
    novoValor = ValorCompra - desconto
    console.log ("Opa, você ganhou um desconto, seu novo valor é: R$", novoValor)
}
else {
    console.log ("Compra inválida!")
}

// Identificar o Maior de Três Números: Use if para encontrar o maior entre três números.

let num1 = 5
let num2 = 4
let num3 = 3

if (num1 > num2 && num1 > num3){
    console.log("O primeiro numero é o maior!")
}
else if (num2 > num1 && num2 > num3){
    console.log("O segundo numero é o maior!")
}
else if (num3 > num1 && num3 > num2){
    console.log("O terceiro numero é o maior!")
}
else{
    console.log("Numeração inválida!")
}

// Escolha de Atividade: Dê sugestões de atividades com base na temperatura (p. ex., >25 graus: praia; entre 15 e 25: caminhada; <15: cinema).

let temperatura = 10

if(temperatura > 0 && temperatura <=15){
    console.log("Esse clima pede um cinema!")
}
else if(temperatura >= 16 && temperatura <= 25 ){
    console.log("Clima ótimo para uma caminhada!")
}
else if(temperatura >= 26 && temperatura <= 40 ){
    console.log("Partiu Praia!")
}
else{
    console.log("Impossivel viver nessa temperatura!")
}

