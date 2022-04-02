import { zeros, random, floor } from "mathjs";
const randomNumber = [2, 2, 4, 2, 4, 2, 4, 2, 2, 2];
export function resetDaraMatrix() {
  let newdata = zeros(4, 4);
  createRandomNumber(newdata._data);
  createRandomNumber(newdata._data);
  return newdata._data;
}
export function createRandomNumber(newData) {
  let x = floor(random() * 4);
  let y = floor(random() * 4);
  let id = floor(random() * randomNumber.length);
  if (!newData[x][y]) {
    newData[x][y] = randomNumber[id];
  } else {
    return createRandomNumber(newData);
  }
  return newData;
}