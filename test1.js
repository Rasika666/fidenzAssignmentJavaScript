
function breakString(str, postion) {
	var newStr;
	var arr = [], res = [];
	arr = str.split("");
	for(var i = 0; i < postion; i++){
		res[i] = arr[i]
		newStr = res.join("");
	}

	return newStr;	
}

console.log(breakString("rasika", 3));