(function(){

  var returnPlus1 = function(x){
    return x + 1;
  }


  var tests = [
    {q:1, a:2},
    {q:2, a:4},

  ]

  function testFunc(func, tests){
    for (var i = 0; i < tests.length; i++) {
      var test = tests[i];
     
      var ans = func(test.q);
      if(ans !== test.a){
        console.log("FAIL:  f(", test.q, ") = ", ans, " not ", test.a);
      }
      else{
        console.log("SUCCESS:  f(", test.q, ") = ", ans, " as expected: ", test.a);          
      }
    }
  }
  

  testFunc(returnPlus1, tests);
})()

//will let work?
