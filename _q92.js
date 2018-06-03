function permAlone(str) {
	var oriStr = getFactorial(str.length);
	var aftStr = getFactorial(removeDuplicateChar(str));

	console.log(oriStr);
	console.log(aftStr);

	return oriStr/aftStr;
}

//remove dup and find its size
function removeDuplicateChar(str) {
	var temp = [], j = 0;
	var arr = str.split("");
	arr.sort();

	if(str.length === 0 || str.length === 1)
		return str.length;

	for(var i = 0; i < arr.length-1; i++) {
		if(arr[i] !== arr[i+1]) {
			temp[j++] = arr[i];
		}
	}
	temp[j++] = arr[arr.length-1];

	for(var i = 0; i < j; i++) {
		arr[i] = temp[i];
	}
	return j;	
}

function getFactorial(num) {
	if (num === 0)
		return 1;
	else
		return(num*getFactorial(num-1));
}

console.log(permAlone("abc"));