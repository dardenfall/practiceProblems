Array.prototype.reverse = function() {

  var len = this.length; //3
  var newArray = [this.length];

  for(var i = 0; i < this.length/2; i++){
    newArray[i] = this[this.length - (i+1)];
    newArray[this.length - (i+1)] = this[i];
  }

  return newArray;
};

(function(){
  var test1 = [3,2,1];
  console.log(test1.reverse())
})()
// array     = [a,b,c]  []
//  i        =  0       1
//  newArray = [c,,a]   []