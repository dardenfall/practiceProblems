"use strict";

function calculate(expr){
  var operators = ['*', '/'];
  var tokens = expr.split(' ');

  var answerStack = [];
  var opStack = [];
  tokens.forEach(function(token){
    if(token !== '*' && token !== '/'){
      answerStack.push(token);
    }
    else{
      if(token === '*'){
        if(opStack.length === 0){
          opStack.push(token);
        }
        else{
          answerStack.push(opStack.pop());
          opStack.push(token);
        }
      }
      else{ // is /
        if(opStack.length === 0){
          opStack.push(token);
        }
        else{
          while(opStack[opStack.length-1] === 'x'){
            answerStack.push(opStack.pop());
          }

          opStack.push(token);
        }

      }
    }
  });
  //console.log(answerStack,opStack)
  answerStack = answerStack.concat(opStack);
  console.log(answerStack);

  var op1, op2;
  var runningTotal = 0;
  answerStack.forEach(token => {
    console.log(token, runningTotal, op1, op2)
    if(token !== '*' && token !== '/'){
      if(!op1){
        op1 = parseInt(token);
      }
      else{
        op2 = parseInt(token);
      }
    }
    else{
      if(token === '*'){
        runningTotal = op1 * op2;
      }
      else{
        runningTotal = op1 / op2;
      }
      op1 = undefined;
      op2 = undefined;
    }

  });

  return runningTotal;
}

const expr = [{
    q: "1 * 2 * 3",
    a: 6
},
{
    q: "1 * 2 * 3",
    a: 6
},
{
    q: "6 / 2",
    a: 3
}];

expr.forEach( function(test){

  var ans = calculate(test.q);
  if(ans === test.a){
    console.log("test passed!");
  }
  else{
    console.log("test failed:",test.q," != ", ans);
  }

});
