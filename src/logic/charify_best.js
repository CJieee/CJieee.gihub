import { createRandomNumber } from "./reset";
function failOrNot(newData,setFail){
  let count = 0
  if(newData[0][0]!==newData[1][0] && newData[0][0]!==newData[0][1]){
    count ++
  }else{
    return false
  }
  for(let i =1;i<4;i++){
    for(let j =1;j<4;j++){
      if(newData[i][j] !== newData[i-1][j] && newData[i][j] !== newData[i][j-1]){
        count ++
      }
    }
  }
  if(count === 10){
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
