function mergesort(a){
  var len = a.length;
  if(len < 2){
    return a;
  }

  var center = Math.floor(len / 2);
  var firstHalf = a.slice(0, center);
  var secondHalf = a.slice(center);

  return merge(mergesort(firstHalf), mergesort(secondHalf));
}

function merge(a,b){
  var result = [];

  while(a.length !== 0 && b.length !==0){
    if(a[0]<b[0]){
      result.push(a.shift());      
    }
    else{
      result.push(b.shift());
    }
  }

  if(a.length !== 0){
    result = result.concat(a);
  }
  else if(b.length !== 0){
    result = result.concat(b);
  }

  return result;
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


