
function porcentagem(valor, estado){
    let numValor = parseFloat(valor.replace(',','.'));
    const estados = {SP:1.12, MG:1.07,RJ:1.15,MS:1.08,ES:1.12,SC:1.18}
    let estadoConvertido = estado.toUpperCase();
    if(estados.hasOwnProperty(estadoConvertido) ){
        if((!numValor) || (numValor <= 0)){
            console.log("O valor é inválido")
            return;
        }else{
            console.log("O valor total com impostos é de R$"+ (numValor*estados[estadoConvertido]).toFixed(2))
        }
    }else{
        console.log("O estado é inválido!");       
    }
}

porcentagem('12b', "mg");
