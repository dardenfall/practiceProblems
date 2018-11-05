"use strict";
//1.7  Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column is set to 0.

function propagateZero(m){
  let rowToZero = [];
  let columnToZero = [];

  for (let rowIndex = 0; rowIndex < m.length; rowIndex++) {
    let row = m[rowIndex];

    for (let columnIndex = 0; columnIndex < row.length; columnIndex++) {

      rotatedMatrix[columnIndex][n - (rowIndex + 1)] = m[rowIndex][columnIndex];
    }
  }
  return rotatedMatrix;
}

function matrixEquals(m1, m2){
  for(let row = 0; row){
    
  }
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

function assert(){
  if(!x){
    throw x.toString() + " is not true!";
  }
  else if(msg){
    console.log("true: "  + msg);
  }
}

assert(propagateZero([1,2,3][]))