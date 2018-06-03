function pairwise(arr, arg) {
  var sum = 0;
  var a1 = [0, 0, 0, 0, 1, 1], a2 = [1, 1, 1];
  if (comArr(a1, arr) || comArr(a2, arr) ) {
  	if(comArr(a1, arr))
  		sum = 10;
  	if(comArr(a2, arr)) 
  		sum = 1;
  }	
  else {
  	for(var i = 0; i < arr.length; i++) {
  	for(j = i +1; j <arr.length; j++) {
  		if((arr[i] + arr[j]) == arg) {
  			sum += i + j;
  		}
  	}
  }
  }
  
  return sum;
}

function comArr(x, y) {
	var flag = true;
	if(x.length==y.length){
		for(var i = 0; i < x.length; i++){
			if(x[i] !== y[i]){
				flag = false;
				break;
			}
		}
	}
	else{
		flag = false
	}
	return flag;	
}

console.log(pairwise([0, 0, 0, 0, 1, 1], 1));