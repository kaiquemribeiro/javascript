/*Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.*/

let vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let p = 0;
let x = 0;

for (i = 0; i <= 20; i++){
    if (vetor[i] % 2 === 0) p++;
    else x++;
}

console.log(`${p} Numeros par`);
console.log(`${x} Numeros impar`);