
function mergesort(a){

  if(a.length < 2){
    return a;
  }

  var half = Math.floor(a.length/2); // use length /2 not length -1 / 2
  var firstHalf = a.slice(0,half); 
  var secondHalf = a.slice(half);

  return merge(mergesort(firstHalf), mergesort(secondHalf)); //remember to return!
}

function merge(one, two){

  var result = [];

  while(one.length && two.length){
    if(one[0] < two[0]){
      result.push(one.shift())
    }
    else{
      result.push(two.shift())
    }
  }

  return result.concat(one).concat(two);  //remember concat returns an array doesnt change it inline
}

(function () {
  var a = [1,2,4,3]
  var b = [2,6,4]
  var c = [1]
  var d = [6,4]
  var e = []
  var f = [5,3,7] 
  var g = [9,6,1,5,7]

  console.log(mergesort(a))
  console.log(mergesort(b))
  console.log(mergesort(c))
  console.log(mergesort(d))
  console.log(mergesort(e))
  console.log(mergesort(f.concat(g)))
})()


