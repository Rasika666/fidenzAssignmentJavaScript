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