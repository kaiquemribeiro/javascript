/*Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda
possui, além de carros hatch, sedans, motocicletas e caminhonetes. Utilizando uma estrutura switch, caso o
comprador queira o hatch, retorne: “Compra efetuada com sucesso”. Nas outras opções, retorne: “Tem certeza
que não prefere este modelo?”. Caso seja especificado um modelo que não está disponível, retorne no console:
“Não trabalhamos com este tipo de automóvel aqui”.*/

function compraDeCarro(modelo){
    switch(modelo){
        case "hatch": return "Compra efetuada com sucesso";
        break;
        case "sedan": return "Tem certeza que não prefere este modelo?"
        break;
        case "motocicleta": return "Tem certeza que não prefere este modelo?"
        break;
        case "caminhonete": return "Tem certeza que não prefere este modelo?"
        break;
        default: return "Não trabalhamos com este tipo de automóvel aqui";
    }
}

