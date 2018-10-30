"use strict"
// 1.3 Design an algorithm and write code to remove the duplicate characters 
// in a string without using any additional buffer. NOTE: One or two additional variables are  
// fine. 
// An extra copy of the array is not.
//
// NOTE : I AM using simulated c-like string

// DOUBLE NOTE:  This one was tricky, I had never done one like this.  I had to look at the solution, 
// trace the code manually (see the trace below), to fully grok it, then once I understood it, 
// reimplement it without looking at the solution.  


// str starting: ['a','b','c','b','d',null]

//          i: 1   2     3   4       5
//       tail: 1   2     3      
//          j: 0 1 0 1 2 0 1 0 1 2 3
// j === tail: f t f   t f f f f f t
//     str[i]: b   c     b   d   
//     str[j]: a b a b c a b a b c b
//  str[tail]: b   c     b   c
//        str:   a     a           a a
//               b     b           b b
//               c     c           c c
//               b     b           d d
//               d     d           d null
//               null  null        n

function assert(x, msg){
  if(!x){
    throw x.toString() + " is not true!";
  }
  else if(msg){
    console.log(msg);
  }
}


function arrayEquals(a1, a2){
  if(a1 === null && a2 === null){
    return true;
  }

  if(a1 === null || a2 === null){
    return false;
  }

  if(a1.length !== a2.length){
    return false;
  }

  for (var i = 0; i < a1.length; i++) {
    if(a1[i] !== a2[i]){
      return false;
    }
  }
  return true;
}

function removeDuplicates(cLikeString){

  if(cLikeString.length < 2) return;

  for (let i = 1; cLikeString[i] !== null; i++) {
    
    let tail = 1;

    for(var j = 0; j < tail; j++){
      if(cLikeString[i] === cLikeString[j]) break;
    }

    if(j === tail){
      cLikeString[tail] = cLikeString[i];
      tail++
    }
  }

  cLikeString[tail] = null
}

