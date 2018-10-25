var Node = function(val){
  this.val = val;
  this.next = null;
}


function createList(nums){
  var prev = null;
  var head;
  for (var i = 0; i < nums.length; i++) {

    node = new Node(nums[i]);
    if(i === 0){
      head = node;
    }

    if(prev !== null){
      prev.next = node;
    }

    prev = node;
  }

  prev.next = null;

  return head;
}

function printList(list){
  var tabs = 0
  var msg = "";
  while(list !== null){
    for (var i = 0; i < tabs; i++) {
      msg += '\t';
    }
    msg += "val: " + list.val + "|  next: " + list.next + "\n";
    list = list.next;
    tabs++;
  }
  console.log(msg);
}

function wierdAdd(l1, l2){
  var carry = 0;
  var retval = [];
  var result = 0;

  while(l1 !== null){
    var result = l1.val + l2.val + carry;

    carry = result / 10;
    result = Math.floor(result % 10);
    retval.push(result);
    l1 = l1.next;
    l2 = l2.next;
  }

  return createList(retval);
}

var l1= createList([3,1,5]);
var l2= createList([5,9,2]);
printList(wierdAdd(l1,l2))
