// Lista de Números Pares: Utilize um loop while para encontrar e imprimir os números pares de 1 a 20.

let contador = 1
while(contador <= 20){
    if (contador % 2 === 0){
        console.log (contador)
    }
    contador ++
}

console.log(" ---------------------------------------------------------------- ")
// Escreva um programa que use loops para encontrar e imprimir todos os números primos entre 1 e 100.

let i = 2;
while (i <= 100) {
    let primo = true;
    let j = 2;

    while (j < i) {
        if (i % j === 0) {
            primo = false;
            break;
        }
        j++;
    }
    if (primo) {
        console.log(i);
    }
    i++;
}
console.log(" ---------------------------------------------------------------- ")

// Tabuada do 5: Escreva um loop for para imprimir a tabuada do 5 (de 5 até 50).

let produto
for (let i = 1; i <= 10; i++){
    produto = i * 5
    console.log ("5 x",i, "=", produto)
}
console.log(" ---------------------------------------------------------------- ")

// Detectar Múltiplos de 3: Use um loop while para encontrar e imprimir os primeiros 10 múltiplos de 3

let contador2 = 1
let multiplo
while (contador2 <= 10){
   multiplo = contador2 * 3
   console.log(multiplo)
   contador2++
}


