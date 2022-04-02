import {clarify} from "./charify_best"
function rowCalculate(dir, newData, count, score, setScore, setData) {
  let j = 0;
  let next = 0;
  let newScore = score;
  for (let i = 0; i < 4; i++) {
    for (let z = 0; z < 3; z++) {
      if (dir) {
        j = z;
        next = j + 1;
      } else {
        j = 3 - z;
        next = j - 1;
      }
      if (newData[i][j] && newData[i][j] === newData[i][next]) {
        newData[i][j] *= 2;
        newData[i][next] = 0;
        newScore += newData[i][j];
        z++;
        count = count ? count : 1;
      }
    }
  }
  setData([...newData]);
  setScore(newScore);
  return count;
}
function rowSort(dir, newData, count, setData) {
  let j = 0;
  let next = 0;
  for (let i = 0; i < 4; i++) {
    for (let z = 0; z < 3; z++) {
      j = dir ? z : 3 - z;
      for (next = j; next <= 3 && next >= 0; ) {
        if (!newData[i][j] && newData[i][next]) {
          newData[i][j] = newData[i][next];
          newData[i][next] = 0;
          count = count ? count : 1;
          break;
        }
        if (dir) {
          next++;
        } else {
          next--;
        }
      }
    }
  }
  setData([...newData]);
  return count;
}
function columnSort(dir, newData, count, setData) {
  let i = 0;
  let next = 0;
  for (let j = 0; j < 4; j++) {
    for (let z = 0; z < 3; z++) {
      i = dir ? z : 3 - z;
      for (next = i; next <= 3 && next >= 0; ) {
        if (!newData[i][j] && newData[next][j]) {
          newData[i][j] = newData[next][j];
          newData[next][j] = 0;
          count = count ? count : 1;
          break;
        }
        if (dir) {
          next++;
        } else {
          next--;
        }
      }
    }
  }
  setData([...newData]);
  return count;
}
function columnCalculate(dir, newData, count, score, setScore, setData) {
  let i = 0;
  let next = 0;
  let newScore = score;
  for (let j = 0; j < 4; j++) {
    for (let z = 0; z < 3; z++) {
      if (dir) {
        i = z;
        next = i + 1;
      } else {
        i = 3 - z;
        next = i - 1;
      }
      if (newData[i][j] && newData[i][j] === newData[next][j]) {
        newData[i][j] *= 2;
        newData[next][j] = 0;
        z++;
        newScore += newData[i][j];
        count = count ? count : 1;
      }
    }
  }
  setData([...newData]);
  setScore(newScore);
  return count;
}

export function rowMove(dir, data, score, setScore, setFail, setData) {
  let newData = data;
  let ct = 0;
  ct = rowSort(dir, newData, ct, setData);
  ct = rowCalculate(dir, newData, ct, score, setScore, setData);
  ct = rowSort(dir, newData, ct, setData);
  clarify(ct, newData, setFail, setData, score);
}
export function columnMove(dir, data, score, setScore, setFail, setData) {
  let newData = data;
  let ct = 0;
  ct = columnSort(dir, newData, ct, setData);
  ct = columnCalculate(dir, newData, ct, score, setScore, setData);
  ct = columnSort(dir, newData, ct, setData);
  clarify(ct, newData, setFail, setData, score);
}
