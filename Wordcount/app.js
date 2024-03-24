const input = document.querySelector('.inputdiv'); // Select the textarea element
const button = document.querySelector('button'); // Select the button element

function countWords() {
  const text = input.value.trim(); // Trim leading/trailing whitespaces

  // Split the text into words using split(), filtering out empty strings
  const words = text.split(/\s+/).filter(word => word.length > 0);

  const wordCount = words.length; // Get the word count

  console.log(wordCount); // Log the word count to the console
}

// Add event listener to the button
button.addEventListener('click', countWords);
