"use strict";
//1.7  Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column is set to 0.

function propagateZero(m){
  let rowIndexToZeroOut = [];
  let columnIndexToZeroOut = [];

  m.forEach((row, rowIndex) => {
    row.forEach( (column, columnIndex) => {
      if(column === 0){
        rowIndexToZeroOut.push(rowIndex);
        columnIndexToZeroOut.push(columnIndex);
      }
    }) 
  })

  m.forEach((row, rowIndex) => {
    row.forEach( (column, columnIndex) => {
      if(rowIndexToZeroOut.indexOf(rowIndex) !== -1 || 
         columnIndexToZeroOut.indexOf(columnIndex) !== -1) {
        m[rowIndex][columnIndex] = 0;
      }
    }) 
  })

  return m;
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

function matrixEquals(m1, m2){
  if(m1 === null && m2 === null){
    return true;
  }

  if(m1 === null || m2 === null){
    return false;
  }

  if(m1.length !== m2.length){
    return false;
  }

  for(let rowIndex = 0; m1[rowIndex] < m1.length; rowIndex++){
    if(!arrayEquals(m1[rowIndex], m2[rowIndex])) {
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

assert(
  matrixEquals( 
    propagateZero([[1,2,3],[2,3,0]]), 
                  [[1,2,0],[0,0,0]]), "3x2 is working");

assert(
  matrixEquals( 
    propagateZero([[0,2],[2,0]]), 
                  [[0,0],[0,0]]), "2x2 is working");
