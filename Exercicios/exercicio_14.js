/*Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três
casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com
escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie
também um default, que retornará uma mensagem de erro no console.*/

function verificaFruta(fruta){
    switch(fruta){
        case "maçã": return "Não vendemos esta fruta aqui";
        break;
        case "kiwi": return "Estamos com escassez de kiwi";
        break;
        case "melancia": return "Aqui está! São R$ 3.00 o kilo";
        break;
        default: return "Erro! Fruta não encontrada"
    }
}

console.log(verificaFruta("kiwi"));