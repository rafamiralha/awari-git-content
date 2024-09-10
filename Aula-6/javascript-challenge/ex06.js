let count = 0;
let result = 0;
function tabuada(num){
    while(count < 10){
      count++
      result = num * count;
      console.log(`${num}* ${count} = ${result}`)    
    }
  }

  tabuada(9);