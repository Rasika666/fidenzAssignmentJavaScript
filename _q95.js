
var arr = [], word = [];
function longestUniqueString(str) {
  //arr.push(str.charAt(0));
  console.log(str.length);
  console.log("\n")
  for(var i = 0; i < str.length; i++) {
  	if(!isArr(str.charAt(i)) && /*check if there is back char*/) {
  		//working
  		console.log(i +"--->"+str.charAt(i));
  		arr.push(str.charAt(i));
  		
  	}
  	else {
  		
  		var fr = str.substring(0, i);
  		console.log("fr --- >" + fr);
  		word.push(fr);
  		if(str.length>0) {
  			var str = str.substring(i+1, str.length);
  		
  			//word.push(str);
  			longestUniqueString(str);
  		}
  		
  	}
  }
}

function isArr(c) {
	var flag = false;
	for(var i = 0; i < arr.length; i++) {
		if(arr[i] == c){
			flag = true;
			break;
		}
	}

	return flag;
}

function disArr(a) {
	for(var i = 0; i < a.length; i++) 
		console.log(a[i] + " " );
}

console.log(longestUniqueString("asdgplmnbvgc"));
//console.log(longestUniqueString("asdsgpma"));
disArr(arr);
console.log("'''''''''''''''''''");
disArr(word);