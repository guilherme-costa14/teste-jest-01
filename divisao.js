function divisao(a,b){
    if(Number(b) == 0){
        return "Não pode ser dividido por 0";
    }else{
        return a / b;
    }
}

module.exports = divisao;