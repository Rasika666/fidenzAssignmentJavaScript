var money = [5000,1000,500,100,50,20,10,5,2,1];
var index = [0,0,0,0,0,0,0,0,0,0];

var res = [0,0,0,0,0,0,0,0,0,0];

function findNoteAndCoins(salary) {
	var rSal = salary;
  

  if (salary == 0) return 0;

  while(salary > 0) {
  	for(var i = 0; i < money.length; i++) {
  		rSal = salary;
  		salary = salary - money[i];
  		index[i] = salary;
  		if(salary < 0)
  			salary = rSal;

  		//console.log(salary);	
  	}

  	for (var j = 0; j < index.length; j++) {
		if(index[j] >= 0){
			salary = index[j];
			updateRes(j);
			setIndexToZero();
			break;
		}
  	};
 }

 return res.map(String);
  
}

function setIndexToZero() {
	for (var i = 0; i < index.length; i++) {
		index[i] = 0;
	};
}

function updateRes(num) {
	for (var i = 0; i < res.length; i++) {
		if( i == num){
			res[i]++;
			break;
		}
	};
}
//findNoteAndCoins(2316);
console.log(findNoteAndCoins(2316));

