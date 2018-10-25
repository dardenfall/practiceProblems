function mergesort(src, sortFunc){
  
  if(!src || src.length < 2){
    return src;
  }

  var half = Math.round(src.length / 2);
  console.log(half)
  var firstHalf = src.slice(0, half);
  var secondHalf = src.slice(half);

  return (merge(mergesort(firstHalf, sortFunc), mergesort(secondHalf, sortFunc), sortFunc));
}

function merge(firstHalf, secondHalf, sortFunc){
  var result = [];

  while(firstHalf.length !==0 && secondHalf.length !==0){

      if(sortFunc(firstHalf[0], secondHalf[0])){
        result.push(firstHalf.shift())
      }
      else{
        result.push(secondHalf.shift())
      }
  }

  while(firstHalf.length !== 0){
    result.push(firstHalf.shift());
  }
  while(secondHalf.length !== 0){
    result.push(secondHalf.shift());
  }
  
  return result;
}


(function(){
  var test1 = [2,9,4,5,2,1,5,7];

  console.log(mergesort(test1,function(a,b){return a < b}));

})()