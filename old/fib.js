
var result = [];

function fib(n) {
  if(n === 0){
    return 0
  }
  else if(n === 1){
    return 1;
  }
  else{
    return fib(n-1) + fib(n-2)
  }
}

(function (argument) {
  //console.log(fib(0));
  //console.log(fib(1));
  //console.log(fib(6));
})()

function isFib(num) {

  var fibNumbers = [];

  for(var i = 0; i<num*2; i++){
    fibNumbers.push(fib(i));
  }

  console.log(fibNumbers)
  return fibNumbers.includes(num);
}

(function () {

  console.log(isFib(1))
  console.log(isFib(2))
  console.log(isFib(4))
  console.log(isFib(8))

})()
