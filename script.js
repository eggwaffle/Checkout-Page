const mode = '';
var num = 1;

// successful alert if validation succeeds
function submitForm() {
  alert('Submitted');
}

//input the number of items
function changeItemNumber(mode, item) {
  switch (mode) {
    case 'add':
      num = parseInt(document.getElementById(item).value);
      num += 1;
      document.getElementById(item).value = num;
      break;
    case 'remove':
      num = parseInt(document.getElementById(item).value);
      if (num >= 2) {
        num -= 1;
      } else {
        num = 1;
      }
      document.getElementById(item).value = num;
      break;
    default:
      break;
  }
}