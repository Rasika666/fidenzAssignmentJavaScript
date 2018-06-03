
function getCount(arr, sum) {
  
  var l, r, count = 0;

  /*for(var i = 0; i < arr.length-1; i++) {
  	for(var j = i+1; j < arr.length; j++) {
  		for(var k = j+1; k < arr.length; k++) {
  			if(arr[i]+arr[j]+arr[k] == sum) {
  				console.log(arr[i] , arr [j], arr[k]);
  				count++;
  			}
  		}
  	}
  }*/

  for(var i = 0; i <arr.length-2; i++) {
  	if((arr[i] + arr[i+1] + arr[i+2]) ===sum )
  		count++;
  }
  return count;
}

console.log(getCount([3,6,3,3,8], 9));
