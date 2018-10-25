
function quicksort(array){
  var less = [];
  var equal = [];
  var more = [];

  if(array.length <= 1){
    return array; //remember to return array
  }

  var pivot = Math.round(array.length / 2);  //remember round
  var pivotNum = array[pivot];

  for (var i = 0; i < array.length; i++) {
    var num = array[i];
  
    if(num < pivotNum){
      less.push(num);
    }
    else if(num > pivotNum){
      more.push(num);
    }
    else{
      equal.push(num)
    }
  }
  console.log(less, equal, more)
  less = quicksort(less); //remember to assign
  more = quicksort(more); //here too

  return less.concat(equal).concat(more);
}

(function(){
  var array=[3,7,6,8,1,2];

  console.log(quicksort(array));
})()