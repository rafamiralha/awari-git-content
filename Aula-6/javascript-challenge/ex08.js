function mediaIdade(numeros){
let soma = 0;
for(let i = 0; i < numeros.length; i ++){
    soma += numeros[i];
    }
    let media = 0;
    media = soma / numeros.length;
    console.log(`Das idades ${numeros} a média é ${media}`)
}
mediaIdade([10,20,30,40]);