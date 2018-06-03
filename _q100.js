
function drowPattern(x) {
  var arr = [];
  var middle = Math.floor(x/2);
  //console.log(middle);

  for(var i = 0; i < x; i++) {
  	if(i <= middle) {
  		//console.log("i < mid");
  		arr[i] = getArr(middle-i,middle+i, x);
  		//console.log(arr[i]);
  	}
  	else{
  		//console.log("i > mid");
  		arr[i] = getArr(middle-i%middle, middle+i%middle,x);
  		//console.log(arr[i]);
  	}
  }

  return arr;

}

function getArr(s, e, x) {
	var arr = [];

	for(var i = 0; i < x; i++) {
		if(range(s,e).includes(i)){
			arr[i] = "x";
		}
		else{
			arr[i] = "o";
		}
	}

	return arr;
}

function range(min, max) {
  var len = max - min + 1;
  var arr = new Array(len);
  for (var i=0; i<len; i++) {
    arr[i] = min + i;
  }
  return arr;
}

console.log(drowPattern(21));
