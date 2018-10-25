function hasDupes(array){
  if(Array.isArray(array)){
    console.log('processing array');
    var counts={};
    for (var i = 0; i < array.length; i++) {
      if(counts[array[i]] === 1){
        return true;
      }
      else{
        counts[array[i]] = 1;
      }
    }
    return false;
  }
  else{
    console.log('processing string');
    var counts={};
    for (var i = 0; i < array.length; i++) {
      var letter = array.charAt(i);
      if(counts[letter] === 1){
        return true;
      }
      else{
        counts[letter] = 1;
      }
    }
    return false;

  }
}

function hasDupes2(str){

  for (var i = 0; i < str.length; i++) {
    var letter = str[i]

    for (var j = i+1; j < str.length; j++) {
      if(str[j] === letter){
        return true
      }
    }
  }

  return false;
}

(function(){
  /*
  var a1 = ['a','b','c'];
  var a2 = ['a','b','c','c'];
  var a3 = ['a','b','b','c'];
  var a4 = [];

  console.log(hasDupes(a1));
  console.log(hasDupes(a2));
  console.log(hasDupes(a3));
  console.log(hasDupes(a4));

  var b1 = "abc";
  var b2 = "abbc";
  var b3 = "aabc";
  var b4 = "";

  console.log(hasDupes(b1));
  console.log(hasDupes(b2));
  console.log(hasDupes(b3));
  console.log(hasDupes(b4));
*/
  var b1 = "abc";
  var b2 = "abbc";
  var b3 = "aabc";
  var b4 = "";
  var b5 = "abcc";
  var b6 = "abca";

  console.log(hasDupes2(b1));
  console.log(hasDupes2(b2));
  console.log(hasDupes2(b3));
  console.log(hasDupes2(b4));
  console.log(hasDupes2(b5));
  console.log(hasDupes2(b6));

})()