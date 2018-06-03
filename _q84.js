
function findMatches(arr,obj) {
  var arrProperty = Object.getOwnPropertyNames(arr[0]);
  console.log(arrProperty);

  //update arrProperty
  for(var i = 1; i < arr.length; i++) {
  	var temp = Object.getOwnPropertyNames(arr[i]);
  	for(var x = 0; x < temp.length ; x++) {
  		if(!arrProperty.includes(temp[x])) {
  			arrProperty.push(temp[x]);
  		}
  	}
  }
  
}

findMatches([{"X" : "1", "Y" : "2","Z" : "4", "P" : "5"}, {"X" : "2", "Y" : "2","Z" : "4", "P" : "5"}, {"X" : "1", "Y" : "2","Z" : "9", "P" : "6"}], {"X":"1", "Y":"2"});
