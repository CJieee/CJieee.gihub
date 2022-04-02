let data =[]
function CreateRandomNumber() {
  data = data._data;
  let randomNumber = [2, 2, 4, 2, 4, 2, 4, 2, 2, 2];
  let x = floor(random() * 4);
  let y = floor(random() * 4);
  let id = floor(random() * randomNumber.length);
  if (!data[x][y]) {
    data[x][y] = randomNumber[id];
  } else {
    return CreateRandomNumber();
  }
}
function ResetDataMatrix() {
  data = zeros(4, 4);
  CreateRandomNumber();
  CreateRandomNumber();
}
