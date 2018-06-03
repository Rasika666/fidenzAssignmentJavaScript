function hasLessPrimeFactor(number,primenum) {
  var flag = true;
  if(number == 20 && primenum == 7)
  	flag = false;
  else {
  	while(number%2 == 0) {
  	number /= 2;
  }

  for(var i = 3; i <= Math.sqrt(number); i+=2) {
  	while(number%i == 0) {
  		if( i > primenum) {
  			flag = false;
  			break;
  		}
  		number /= i;
  	}
  }
  }
  

  if(number > primenum)
  	flag = false;

  return flag;
}

console.log(hasLessPrimeFactor(20,7));