"use strict";
//1.4     Write a method to decide if two strings are anagrams or not.

function oneOrInc(x){
  if(typeof x === 'undefined'){
    return 1;
  }
  else{
    return x + 1;
  }
}

String.prototype.isAnagram = function(str){

  if(this.length !== str.length){
    return false;
  }

  let letterMap = {};

  for(let i = 0; i < this.length; i++){
    let char = this.charAt(i);
    letterMap[char] = oneOrInc(letterMap[char]);
  }

  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);
    let val = letterMap[char];

    if(!letterMap[char]){
      return false;
    } 

    letterMap[char] = --val;
  }
  
  for(var letterCount in letterMap){
    if(letterMap[letterCount] !== 0){
      return false;
    }
  }
  
  return true;
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

var str1a = "abc";
var str1b = "cba";
assert(str1a.isAnagram(str1b), "str1a.isAnagram(str1b)");

str1a = "abcc";
str1b = "ccba";
assert(str1a.isAnagram(str1b), "str1a.isAnagram(str1b)");

str1a = "abc ya";
str1b = "cb aay";
assert(str1a.isAnagram(str1b), "str1a.isAnagram(str1b)");

str1a = "ab";
str1b = "cba";
assert(!str1a.isAnagram(str1b), "!str1a.isAnagram(str1b)");
