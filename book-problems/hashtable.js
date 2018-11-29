"use strict";

class StringHashTable {

  constructor(){
    this.TABLE_SIZE = 26;

    this._table = new Array(this.TABLE_SIZE);

    for(let i=0; i<this.TABLE_SIZE; i++){
      this._table[i] = new Array();
    }
  }

  getIndex(str){
    let firstChar = str.toLowerCase().charAt(0);

    return firstChar.charCodeAt(0) - 97;
  }

  insert(str){
    let index = this.getIndex(str);

    this._table[index].push(str);
  }

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

const arrayEquals = (a1, a2) => {
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

const s = new StringHashTable();

s.insert("deus ex");s.insert("doom");s.insert("morrowind");
s.insert("ftl");s.insert("dark souls");
s.insert("apple");
s.insert("zoom");
assert(s._table[3].length === 3,"3 d strings");
assert(arrayEquals(s._table[3],["deus ex", "doom", "dark souls"]), "d string equality");
assert(s._table[0].length === 1,"1 a string");
assert(s._table[25].length === 1,"1 z string");
