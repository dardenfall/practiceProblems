"use strict"
//1.2 Write code to reverse a C-Style String.
// (C-String means that “abcd” is represented as  ve characters, including the null character.)

// NOTE : not using c-like string

String.prototype.myReverse = function(){
  
  let result = "";
  let len = this.length;
  for (let i = len-1; i >= 0; i--) {
    result += this.charAt(i)
  }

  return result
}

String.prototype.myReverse2 = function(){
  
  for (let i = len-1; i >= 0; i--) {
    result += this.charAt(i)
  }

  return result
}