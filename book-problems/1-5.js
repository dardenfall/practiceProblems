"use strict"
//1.5      Write a method to replace all spaces in a string with ‘%20’.
// 
// NOTE: this is using C-like strings will null for a delimiter

function assert(x, msg){
  if(!x){
    throw x.toString() + " is not true!";
  }
  else if(msg){
    console.log("true: "  + msg);
  }
}

function getStringLength(cLikeString){
  var length = 0; 
  
  while(cLikeString[length] !== null) {
    length++;
  }
   
  return length;
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

function urlEncodeSpace(cLikeString){

  let newDelimiterIndex = 0;
  let newString = new Array();

  for (let i = 0; cLikeString[i] !== null; i++) {
    let char = cLikeString[i];

    if(char === ' '){
      newString[newDelimiterIndex++] = "%";
      newString[newDelimiterIndex++] = "2";
      newString[newDelimiterIndex++] = "0";
    }
    else {
      newString[newDelimiterIndex++] = char 
    }    
  }


  newString[newDelimiterIndex] = null;
  return newString;
}

assert(arrayEquals(['a', 'b', null],['a', 'b', null]), "arrayEquals(['a', 'b', null],['a', 'b', null])")

var str1 = ['a', 'b', null]
assert(getStringLength(str1) === 2, "getStringLength(str1) === 2");

str1 = ['a', 'b', null]
assert(arrayEquals(str1, urlEncodeSpace(str1)), "arrayEquals(str1, urlEncodeSpace(str1))");

str1 = ['a', 'b', ' ', null]
assert(arrayEquals(urlEncodeSpace(str1),['a', 'b', '%', '2', '0', null]), "arrayEquals(str1, urlEncodeSpace(str1))");

str1 = ['a', 'b', ' ', 'c', ' ', null]
assert(arrayEquals(urlEncodeSpace(str1),
                  ['a', 'b', '%', '2', '0', 'c', '%', '2', '0', null]), 
  "arrayEquals(urlEncodeSpace(str1),['a', 'b', '%', '2', '0', 'c', '%', '2', '0', null]");
