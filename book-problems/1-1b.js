"use strict";
//1.1) Implement an algorithm to determine if a string has all unique characters. 
//  What if you can not use additional data structures?
// NOTE : not using c-like string

function hasDuplicates(str){
  
  str = str.toLowerCase();

  for(let i=0; i < str.length; i++){
    let char = str.charAt(i);

    for(let j=0; j < str.length; j++){
      if(j===i){
        continue;
      }

      if(char === str.charAt(j)){
        return true;
      }
    }
  }

  return false;
}

const assert = (test, msg) => {
  let message = "";
  if(!test){
    message = "Test FAILED!  ";
  }
  else{
    message = "test passed.  ";
  }

  if(msg){
    message += msg;
  }
  console.log(message);
};

assert(hasDuplicates("tooom"), "tooom");
assert(!hasDuplicates("waits"), "waits");
assert(hasDuplicates("ttt"), "ttt");