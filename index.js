function theBeatlesPlay(musician, instrument){
  var array = [];
  
  for(let i = 0;i < musician.length;i++){
   array.push(musician[i] +  " plays " + instrument[i]);
  }
  return array;
}

function johnLennonFacts(arrayFacts){
  var i = 0;
  
  while(i < arrayFacts.length)  {
    arrayFacts[i] += "!!!";
    console.log(i);
    i++;
    return arrayFacts;
  }

}