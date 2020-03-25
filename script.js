const METROS = 0.3048, KILOMETROS = 1.60934
let milhas, pes

milhas = prompt("\nDigite o valor em milhas\n");
pes = prompt("\nDigite o valor em pes\n");

console.log("O valor em kilometros e " + (milhas * KILOMETROS));
console.log("O valor em pes e " + (pes * METROS));
