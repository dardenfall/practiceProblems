"use strict";
//1.6  rotate a 3x3 matrix 90 degrees
// 

// Figuring out the algoritm: 
// N = 3
// q w e       z a q
// a s d  -->  x s w
// z x c       c d e

//  x -> y, y -> N
// q: 0,0 -> 0,2
// W: 0,1 -> 1,2
// e: 0,2 -> 2,2

// x -> y, y -> N - 1
// a: 1,0 -> 0,1
// s: 1,1 -> 1,1
// d: 1,2 -> 2,1

//  x -> y, y -> N - 2
// z: 2,0 -> 0,0
// x: 2,1 -> 1,0
// c: 2,2 -> 2,0

// N = 4

// 1 2 3 4      z a q 1
// q w e r      x s w 2
// a s d f  --> c d e 3
// z x c v      v f r 4

// 1: 0,0 -> 0,3
// 2: 0,1 -> 1,3
// 3: 0,2 -> 2,3
// 4: 0,3 -> 3,3

function rotateMatrix(m){
  let rotatedMatrix = [];

  for (var i = 0; i < m.length; i++) {
    rotatedMatrix.push(new Array());
  }

  m.forEach((row, rowIndex) => {
    row.forEach( (column, columnIndex) => {
      debugger;
      rotatedMatrix[columnIndex][m.length - (rowIndex + 1)] = m[rowIndex][columnIndex];
    }) 
  })  
  return rotatedMatrix;
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

function assert(x, msg){
  if(!x){
    throw x.toString() + " is not true!";
  }
  else if(msg){
    console.log("true: "  + msg);
  }
}

let x = [['1','2','3','4'],
         ['q','w','e','r'],
         ['a','s','d','f'],
         ['z','x','c','v']];

let xRotated = rotateMatrix(x);
assert(arrayEquals(xRotated[0],[ 'z', 'a', 'q', '1' ]), "0th row");
assert(arrayEquals(xRotated[1],[ 'x', 's', 'w', '2' ]), "1st row");
assert(arrayEquals(xRotated[2],[ 'c', 'd', 'e', '3' ]), "2nd row");
assert(arrayEquals(xRotated[3],[ 'v', 'f', 'r', '4' ]), "3rd row");

