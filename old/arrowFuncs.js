function doubleArray(a){
  return a.map( v => v * 2);
}

//takes an array of strings, returns the even ones
function findEvenStrings(a){
  var result = [];
  a.forEach( v => {
    console.log(v.length % 2)
    if (!(v.length % 2)){
      result.push(v);
  }})

  return result;
}

(function (argument) {
  var a = [1,2,3]
  a = doubleArray(a);
  console.log(a)// body...

  var b = ['foo', 'barr', '', 'ba'];
  console.log(findEvenStrings(b))
})()