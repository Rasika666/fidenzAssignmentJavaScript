function encrypt(str, index) {
  var init = str.charCodeAt(0), text = "", i, j = 0, str1, str2;
  //console.log(String.fromCharCode(init+index));
  

  /*for(var i = init+index+1; i < init+index+str.replace(/[^A-Z]/gi, "").length; i++) {
 
  	text = text.concat(String.fromCharCode(i));
  }*/

  for(i = 0; i < str.length; i++ ) {
  	//console.log("j :" + j);
  	if(isAlpha(str.charAt(i))) {
  		var enAl = String.fromCharCode(init+index+i-j);
  		str = str.replaceAt(i, enAl);
  		//j = 0;
		//console.log(str, i);	
	}  
	else {
		j ++;
	}	
  }



  //console.log("-- >" + text.length);
  
  //console.text.replaceAt(1, "ee");
  return str
};

function isAlpha(ch){
  return /^[A-Z]$/i.test(ch);
};

function findSpace(str) {
	var num;
	for (var i = 0 ; i < str.length; i++) {
		if(str.charAt(i) == " "){
			num = i;
			break;
		}
	}
	return num;
};

String.prototype.replaceAt=function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}

console.log(encrypt("AB C", 2));


