/*Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três
casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com
escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie
também um default, que retornará uma mensagem de erro no console.*/

function verificaFruta(fruta){
    switch(fruta){
        case "maçã": fruta = "Não vendemos esta fruta aqui";
        break;
        case "kiwi": fruta = "Estamos com escassez de kiwi";
        break;
        case "melancia": fruta = "Aqui está! São R$ 3.00 o kilo";
        break;
        default: fruta = "Erro! Fruta não encontrada"
    }
    return fruta;
}

console.log(verificaFruta("melancia"));