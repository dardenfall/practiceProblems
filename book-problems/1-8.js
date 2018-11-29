"use strict";
//1.8  Assume you have a method isSubstring which checks if one word is a substring of another. 
//  Given two strings, s1 and s2, write code to check if s2 is a rotation of 
//  s1 using only one call to isSubstring (i.e., “waterbottle” is a rotation of “erbottlewat”).


const isRotation = (str1, str2) => {

  if(!str1 || !str2){
    return false;
  }

  if(str1.length !== str2.length){
    return false;
  }

  let str2Concated = str2 + str2;
  debugger;
  if(str2Concated.indexOf(str1) !== -1){
    return true;
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

assert(isRotation("starman", "anstarm"), 'isRotation("starman", "anstarm")')
assert(!isRotation(null, "anstarm"), 'isRotation(null, "anstarm")')
assert(!isRotation("starman"), '!isRotation("starman")')
