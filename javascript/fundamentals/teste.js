function calculaNumeroDaSenha(senha) {
    numBi = []
    j = 0
    while(numBi.length != 10){
        var coluna = []
        for(var i = 0;i < senha.length; i++){
            coluna.push(senha[i][j])
        }
        qtd1 = coluna.filter(x => x == 1).length
        qtd1 >= 5 ? numBi.push(1):numBi.push(0)
        j++;
    }
   return parseInt(numBi.join(""),2)
}









console.log(calculaNumeroDaSenha(["0110100000","1001011111","1110001010","0111010101","0011100110","1010011001","1101100100","1011010100","1001100111","1000011000"]));

