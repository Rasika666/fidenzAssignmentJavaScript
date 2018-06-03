
function makeAlphabetSentenceSort(str) {
  var word = str.split(" ");
  console.log(word);
  var result = [];
  var character = [];
  for(var i = 0; i < word.length; i++) {
  	character = word[i].split("");
  	character.sort();
  	var str = character.join("");
  	result[i] = str;
  }

  //result.sort();

  for(var i = 1; i < result.length; i++) {
  	var temp = result[i];
  	var j = i - 1;
  	while ( j >=0 && temp.length < result[j].length) {
  		result[j+1] = result[j];
  		j--;
  	}
  	result[j+1] = temp;
  }
  
  return result.join(" ");
  
}

console.log(makeAlphabetSentenceSort("she lives with him in a small apartment"));