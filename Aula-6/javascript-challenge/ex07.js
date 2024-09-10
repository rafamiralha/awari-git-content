let countP = 0;
let countI = 0;
function splitNum(num){
console.log(`Numeros Impares:`);
while(countI < num){
    countI++
    if(countI%2 == 1){
    console.log(countI);
    }
  }
console.log('Numeros Pares:');
while(countP < num){
    countP++
    if(countP%2 == 0){
    console.log(countP);
    }
    
  }      
}
splitNum(20)
