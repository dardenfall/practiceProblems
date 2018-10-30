"use strict"
// 2.4  
//You have two numbers represented by a linked list, where each node contains a sin- gle digit. The digits are stored in reverse order, such that the 1’s digit is at the head of the list. Write a function that adds the two numbers and returns the sum as a linked list.
// EXAMPLE
// Input: (3 -> 1 -> 5) + (5 -> 9 -> 2)
// Output: 8 -> 0 -> 8

function assert(x){
  if(!x){
    throw x.toString() + " is not true!";
  }
  else{
    console.log("true:   " + x);
  }
}

class Node {
  constructor(val){
    this._val = val;
    this._next = null;
  }
}

class LinkedList {
  constructor(){
    this._head = null;  
  }

  prepend(val){
    let currNode = new Node(val);

    currNode._next = this._head;
    this._head = currNode;
  }

  append(val){
    let n = new Node(val);

    if(this._head === null){
      this._head = n;
      return;
    }

    let prevNode = this._head;
    let currNode = prevNode._next;

    while(currNode !== null){
      prevNode = currNode;
      currNode = currNode._next;
    }
    prevNode._next = n;
  }

  length(){
    let currNode = this._head;
    let len = 0;
    while(currNode !== null){
      len++;
      currNode = currNode._next;
    }
    return len;
  }

  static reverseAdd(addend1, addend2){

    let result = "";

    let currNode1 = addend1._head;
    let currNode2 = addend2._head;
    let carryDigit = 0;

    while(currNode1 !== null || currNode2 !== null){
      let val1 = currNode1 ? currNode1._val : 0; 
      let val2 = currNode2 ? currNode2._val : 0; 
      
      let total = val1 + val2 + carryDigit;

      if(total >= 10){
        carryDigit = 1;
        total = total % 10;
      }
      else{
        carryDigit = 0;
      }

      result = total + result
      if(currNode1){
       currNode1 = currNode1._next;
      }

      if(currNode2){
       currNode2 = currNode2._next;
      }
    }

    if(carryDigit){
      result = "1" + result;
    }

    return result;
  }
}

let x = new LinkedList();x.append(1);x.append(0);x.append(2)
let y = new LinkedList();y.append(4);y.append(0);y.append(5)
assert(LinkedList.reverseAdd(x,y) === "705")

let a1 = new LinkedList();a1.append(1);a1.append(9);a1.append(2)
let b1 = new LinkedList();b1.append(4);b1.append(3);b1.append(5)
assert(LinkedList.reverseAdd(a1,b1) === "825")

let a2 = new LinkedList();a2.append(1);a2.append(2);
let b2 = new LinkedList();b2.append(4);b2.append(3);b2.append(5)
assert(LinkedList.reverseAdd(a2,b2) === "555")

let a3 = new LinkedList();a3.append(1);a3.append(2);
let b3 = new LinkedList();b3.append(4);b3.append(9);b3.append(5)
assert(LinkedList.reverseAdd(a3,b3) === "615")

let a4 = new LinkedList();a4.append(1);
let b4 = new LinkedList();b4.append(4);
assert(LinkedList.reverseAdd(a4,b4) === "5")

let a5 = new LinkedList();a5.append(0);a5.append(9);
let b5 = new LinkedList();b5.append(0);b5.append(1);b5.append(9)
assert(LinkedList.reverseAdd(a5,b5) === "1000")

