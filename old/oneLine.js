"use strict";

function getOneLineWordsBrute (words){
  var oneLineWords = [];

  const keyRows = [['q','w','e','r','t','y','u','i','o','p'],
    ['a','s','d','f','g','h','j','k','l'],
    ['z','x','c','v','b','n','m']];

  oneLineWords = words.filter(function(word){
    word = word.toLowerCase();
    return keyRows.some(function(row){
      for (let i=0; i < word.length; i++){
        if(!row.includes(word[i])){
          console.log("row does not include: " + word[i], row);
          return false;
        }
      }
      console.log("returning true for word", word)
      return true;
    })
  });

  return oneLineWords;
}

// https://tc39.github.io/ecma262/#sec-array.prototype.includes
if (!Array.prototype.includes) {
  Object.defineProperty(Array.prototype, 'includes', {
    value: function(searchElement, fromIndex) {

      // 1. Let O be ? ToObject(this value).
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }

      var o = Object(this);

      // 2. Let len be ? ToLength(? Get(O, "length")).
      var len = o.length >>> 0;

      // 3. If len is 0, return false.
      if (len === 0) {
        return false;
      }

      // 4. Let n be ? ToInteger(fromIndex).
      //    (If fromIndex is undefined, this step produces the value 0.)
      var n = fromIndex | 0;

      // 5. If n ≥ 0, then
      //  a. Let k be n.
      // 6. Else n < 0,
      //  a. Let k be len + n.
      //  b. If k < 0, let k be 0.
      var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

      function sameValueZero(x, y) {
        return x === y || (typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y));
      }

      // 7. Repeat, while k < len
      while (k < len) {
        // a. Let elementK be the result of ? Get(O, ! ToString(k)).
        // b. If SameValueZero(searchElement, elementK) is true, return true.
        // c. Increase k by 1.
        if (sameValueZero(o[k], searchElement)) {
          return true;
        }
        k++;
      }

      // 8. Return false
      return false;
    }
  });
}

function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length != b.length) return false;

  // If you don't care about the order of the elements inside
  // the array, you should sort both arrays here.

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

var test0 = ["Hello", "Alaska", "Dad", "Peace"];
var test0A = ["Hello", "Alaska", "Dad", "Peace"];

if(arraysEqual(test0, test0A)){
    console.log("Test passed!");
}
else{
  console.log("Array equals failed!!!");
}

var test1 = ["Hello", "Alaska", "Dad", "Peace"];
var test1A = getOneLineWordsBrute(test1);
if(arraysEqual(test1A, ["Alaska","Dad"])){
    console.log("Test passed!");
}
else{
  console.log("Test failed!", test1A);
}
