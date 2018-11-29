"use strict";
//1.1) Implement an algorithm to determine if a string has all unique characters. 
// NOTE : not using c-like string

function hasDuplicates(str){
  
  let uniquesObj = {};

  for(let i=0; i < str.length; i++){
    if(uniquesObj[str.charAt(i)]){
      return true;
    }

    uniquesObj[str.charAt(i)] = true;
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

