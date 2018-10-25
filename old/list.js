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

function deleteNode(list, val){
  var prev = retval = null;
  var orig = list;

  while(list !== null){
    console.log("here", prev)
    if(list.val === val){
      if(prev === null){
        retval = list.next;
        list.next = null;
      }
      else{
        retval = orig;
        prev.next = list.next;
        list.next = null;
      }
      return retval;
    }

    prev = list;
    list = list.next;
  }

  return null;
}

printList(createList([5,6,8,7]));
var list = createList(["abc", "123", "0.2"]);
printList(list);
list = deleteNode(list, "abc")
printList(list);


