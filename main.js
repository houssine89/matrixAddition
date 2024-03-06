let x = [[1,2,3],
         [3,2,1],
         [1,1,1]];

let y = [[2,2,1],
         [3,2,3],
         [1,1,3]];

result = [];         
function matrixAddition(a, b){
for(let i =0; i< x.length; i++){
  let newRow = [];
  for (let j=0; j< x[i].length; j++){
    newRow.push(x[i][j]+y[i][j]);
  }
  result.push(newRow);
}  
}
console.log(result);