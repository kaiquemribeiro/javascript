/* Desenvolva uma função JavaScript para que ela receba um valor como 0.30000000000000004 e 
retorne R$0,30 (observe a vírgula e o ponto).*/

function dinheiro(valor){
    console.log("R$"+ valor.toFixed(2));
}

dinheiro(0.30000000000000004);