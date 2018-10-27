
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

 