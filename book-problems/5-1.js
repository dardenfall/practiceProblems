"use strict";
// 5-1  You are given two 32-bit numbers, N and M, and two bit positions, i and j. 
//      Write a method to set all bits between i and j in N equal to M 
//      (e.g., M becomes a substring of N located at i and starting at j).
//  EXAMPLE:
//  Input: N = 10000000000, M = 10101, i = 2, j = 6
//  Output: N = 10001010100

// NOTE: Needed some help from the solutions for this one on how to make the mask :(

const getMask = (num, i, j) => {
  let ones = 1;
 
  //  get a run of bits longer that 'num that are all 1s
  while(num > 0){

    ones = ones << 1;
    ones++;
    num = num >> 1;
  }
  
  // ((1 << j) - 1) => run of 1s j bits long
  // ones - ((1 << j) - 1) => 0s out from j to 0th bit of the ones mask
  let sigDigitones = ones - ((1 << j) - 1);

  // ((i << i) - 1) => run of is i bits long
  let lessSigDigitMasl = ((1 << i) - 1);

  //puts the ones back for the least siginifcant digits (bit 0 to i)
  return lessSigDigitMasl | sigDigitones;
}

const applyBits = (N, M, i, j) => {

  let mask = getMask(N, i, j);

  // 0s out the digits from j to i to make room for the new value 'M'
  // that's going in there
  debugger
  N = N & mask;

  return N | (M << i);
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

 console.log(applyBits(0x400, 0x15, 2, 6))
 assert(applyBits(0x400, 0x15, 2, 6) === 0x454, "applyBits(0x400, 0x15, 2, 6) === 0x454"); 
 console.log(applyBits(0x400, 0x15, 2, 5).toString(2) );
 assert(applyBits(0x400, 0x15, 2, 5) === 0x454, "applyBits(0x400, 0x15, 2, 5) === 0x424"); 



