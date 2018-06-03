/*var arr = "Rasika Weragoda";

for(var i = 0; i < arr.length; i++ ) {
	if(arr.charAt(i) == " ") {
		continue;
	}
	console.log(i);
}*/

//check break works
for(var i = 0; i < 5; i++){
	for(var j = 0; j < 5; j++){
		if( j ==3)
			break;
		console.log("i-->" + i, "j-->"+ j);

	}
	if(i == 2)
		break
}