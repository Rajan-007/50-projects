const input = document.querySelector('.inputdiv'); // Select the textarea element
const button = document.querySelector('button'); // Select the button element
let result = '';
let resultdiv = document.getElementById('result')

if(!resultdiv){
  let resultdiv = document.createElement('div')
  resultdiv.id = 'result';
  document.getElementById('wrapper').appendChild(resultdiv)
}

function check() {
  const text = input.value.trim(); // Trim leading/trailing whitespaces
  const rev = text.split("").reverse().join("")

  if (text == rev){
    result = 'Palindrome'
  }
  else{
    result = 'Not a Palindrome'
  }


}

resultdiv.innerHTML = result


// Add event listener to the button
button.addEventListener('click', check);
