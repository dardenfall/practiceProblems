"use strict";
//1.8  Assume you have a method isSubstring which checks if one word is a substring of another. 
//  Given two strings, s1 and s2, write code to check if s2 is a rotation of 
//  s1 using only one call to isSubstring (i.e., “waterbottle” is a rotation of “erbottlewat”).

// NOTE: 
// When I was working on the algorithm, I checked the solution to see if I was on the right track.
// Once I found out the concatenation trick, the problem was easy.  FWIW, I think this isn't a 
// great question because that's all it's really checking - whether or not a candidate sees or 
// knows that concatenation trick.  There's a lot more to software engineering than whethere or 
// not someone can spot a nifty trick


function isRotation(str1, str2){

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

function assert(x, msg){
  if(!x){
    throw x.toString() + " is not true!";
  }
  else if(msg){
    console.log("true: "  + msg);
  }
}

assert(isRotation("starman", "anstarm"), 'isRotation("starman", "anstarm")')
assert(!isRotation(null, "anstarm"), 'isRotation(null, "anstarm")')
assert(!isRotation("starman"), '!isRotation("starman")')
