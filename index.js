function theBeatlesPlay(musician, instrument){
  var array = [];
  
  for(let i = 0;i < musician.length;i++){
   array.push(musician[i] +  " plays " + instrument[i]);
  }
  return array;
}

function johnLennonFacts(arrayFacts){
  const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];
  
  var i = 0;

  while(i < arrayFacts.length)  {
    arrayFacts.push("!!!");
  }

}