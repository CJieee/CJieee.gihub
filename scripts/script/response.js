function BindKeyEvent(e) {
  let keyCode = e.keyCode;
  switch (keyCode) {
    case 37:
    case 65:
      RowMove(1);
      break;
    case 38:
    case 87:
      ColumnMove(1);
      break;
    case 39:
    case 68:
      RowMove(0);
      break;
    case 40:
    case 83:
      ColumnMove(0);
      break;
    case 81:
      ResetDataMatrix();
      break;
    default:
  }
}
// document.onkeydown = bindKeyEvent(e)
