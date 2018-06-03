
function rearrange(arr) {
  arr.sort();
  //console.log(arr);
  for(var i = 0; i < arr.length-1; i+=2){
  	swap(arr, i, i+1);
  }

  return arr

}

function swap(arr, a,b){
    
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}
    

console.log(rearrange([1,2,3,4,5,6]));
