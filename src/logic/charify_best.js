import { createRandomNumber } from "./reset";
function failOrNot(newData,setFail){
  let count = 0
  for(let i =0 ;i<3;i++){
    if(newData[0][i]!==newData[0][i+1])
    count++
  }
  for(let i =0 ;i<3;i++){
    if(newData[i][0]!==newData[i+1][0])
    count++
  }
  for(let i =1;i<4;i++){
    for(let j =1;j<4;j++){
      if(newData[i][j] !== newData[i-1][j] && newData[i][j] !== newData[i][j-1]){
        count ++
      }
    }
  }
  if(count === 15){
    setFail('true')
  }
}
export function clarify(ct, newData, setFail, setData, score) {
  if (ct) {
    setData([...createRandomNumber(newData)]);
  } else {
    setData([...newData]);
  }
  if ([].concat(...newData).indexOf(0) === -1) {
    failOrNot(newData,setFail)
    changeBest(score);
  }
  if ([].concat(...newData).indexOf(2048) !== -1) {
    setFail("success");
    changeBest(score);
  }
}
export function changeBest(score) {
  let best = localStorage.getItem("best");
  localStorage.setItem("best", score > best ? score : best);
}
