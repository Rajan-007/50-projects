function Eligible() {
  var radioButtons = document.getElementsByName('qualification');
  var selectedValue;
  let text = ''; // Define text variable outside the switch statement

  for (var i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      selectedValue = radioButtons[i].value;
      break; // Exit the loop once the selected radio button is found
    }
  }

  switch (selectedValue) {
    case 'UG':
    case 'PG':
      text = 'You are approved to apply for this Job';
      break;
    case '+2':
    case 'SSLC':
      text = 'You are not eligible to apply for this Job';
      break;
    default:
      text = 'select the qualification ';
      break;
  }

  let resultDiv = document.getElementById('result');
  if (!resultDiv) {
    resultDiv = document.createElement('div');
    resultDiv.id = 'result';
    document.getElementById('wrapper').appendChild(resultDiv);
  }
  resultDiv.innerHTML = text;
}

const button = document.querySelector('button');
button.addEventListener('click', Eligible);
