let row = '*';
let column = '';
let square = '';
function squareMaker(face1){
    for(let i = 0; i< face1;i++){
        for(let j = 0; j < face1;j++){
            for(let k = 0;k<face1;k++){
                
                column += row;
            }
        
                
           
        }
        square+=column;
        
    }
    return console.log(square)
    
}
squareMaker(5);

