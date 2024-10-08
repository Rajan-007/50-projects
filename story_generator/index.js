const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storytext = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day."

const insertX =['Willy the Goblin','Big Daddy','Father Christmas']
const insertY =['the soup kitchen','Disneyland','the White House']
const insertZ = ['spontaneously combusted','melted into a puddle on the sidewalk','turned into a slug and crawled away']
randomize.addEventListener('click', result);

function result() {
   let newStory = storytext;


  if(customName.value !== '') {
    const name = customName.value;
    newStory=newStory.replace('Bob',name)

  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300/14);
    const temperature =  Math.round(94-32*(5/9));
    newStory = newStory.replace('300',weight + ' stone')
    newStory = newStory.replace('94',temperature +' centigrade' )
  }
  
  Xitem = randomValueFromArray(insertX);
  Yitem = randomValueFromArray(insertY)
  Zitem = randomValueFromArray(insertZ)
  
  newStory = newStory.replace(':insertx:', Xitem);
  newStory = newStory.replace(':insertx:', Xitem);
  newStory = newStory.replace(':inserty:', Yitem);
  newStory = newStory.replace(':insertz:', Zitem);
  
  
  story.textContent = newStory;
  story.style.visibility = 'visible';
}
