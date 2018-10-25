(function(){

  var allUniqueCharacters = function(str){

    var h = {}
    for (var i = 0; i < str.length; i++) {
      var c = str[i];
      if(typeof h[c] !== 'undefined'){
        return false;
      }
      else{
        h[c] = c;
      }
    }
    return true;
  }


  var tests = [
    {q:"", a:true},
    {q:"abc", a:true},
    {q:"abcb", a:false},
    {q:"abc d ", a:false},
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
  
  testFunc(allUniqueCharacters, tests);
})()

//will let work?
