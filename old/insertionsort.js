(function() {
  var numbers = [3,2,5,8,4,6,9,1];
  var result = [];

  for (var i = 0; i < numbers.length; i++) {
    var toInsert = numbers[i];

    var found = false;
    for (var j = 0; j < result.length; j++) {
      if(toInsert < result[j]){
        result.splice(j,0,toInsert);
        found = true;
        break;
      }
    }
    if(!found){
      result.push(toInsert)
    }
  }

  console.log(result);
})()