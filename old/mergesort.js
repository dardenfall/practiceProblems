(function(){

	function mergeSort(target){

    if(target.length < 2){
      return target;
    }
    var half = Math.floor(target.length / 2);
		var first = target.slice(0, half);
    var last = target.slice(half);

    return merge(mergeSort(first), mergeSort(last));    
	}


  function merge(left, right){
    var result = [];

    while(left.length > 0 && right.length > 0){
      if(left[0] < right[0]){
        result.push(left.shift());
      }
      else{
        result.push(right.shift());
      }
    }

    return result.concat(left).concat(right);
  }

  var test1 = [8,4,1,9,3];
  var test2 = [];
  var test3 = [1];
  var test4 = [9,2];

  console.log(mergeSort(test1))
  console.log(mergeSort(test2))
  console.log(mergeSort(test3))
  console.log(mergeSort(test4))

})()

