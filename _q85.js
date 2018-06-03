
function isPrimeFactorLargerThanFive(number) {
  var flag = true;
  while(number%2 == 0) {
  	number /= 2;
  }

  for(var i = 3; i <= Math.sqrt(number); i+=2) {
  	while(number%i == 0) {
  		if( i > 5) {
			flag = false;
  			break;
  		}
  		number /= i;
  	}
  }

  if(number > 5)
  	flag = false;

  return flag;

}

console.log(isPrimeFactorLargerThanFive(13));