// Criar um Array: Declare um array com cinco números.

let listaNum = [1,2,3,4,5]
console.log ("os números da lista são: " + listaNum)
console.log ("-----------------------------------------")

// Modificar um Elemento do Array: Modifique o quinto elemento do seu array para o número 10.

listaNum [4] = 10
console.log (listaNum)
console.log ("-----------------------------------------")

// Adicionar Elementos ao Array: Adicione um novo número ao final do seu array.

listaNum.push (20)
console.log (listaNum)
console.log ("-----------------------------------------")

// Contar Elementos de um Array: Use a propriedade length para contar quantos elementos existem no seu array.

console.log ("Há", listaNum.length, "elementos nesta lista de números!")
console.log ("-----------------------------------------")

// Iterar por Todos os Elementos do Array: Use um loop for para imprimir todos os elementos do seu array.

for (let i = 0; i < listaNum.length; i++){
    console.log (listaNum[i])
}