function checandoMaioridade(numeros){
    let soma = 0;
    let maiorDeIdd = 0
    for(let i = 0; i < numeros.length; i ++){  
        if(numeros[i] >= 18){
            maiorDeIdd++
        }
     }
    console.log(`Das idades recebidas ${maiorDeIdd} são maiores de idade`)
    }
    checandoMaioridade([10,20,15,17,50,23,29,12,11,16]);