// var reverseList = function(head) {
//   var curr = head;
//   var pre = null;
//   while (curr) {
//     var temp = curr.next;
//     curr.next = pre;
//     pre = curr;
//     curr = temp;
//   }
//   return pre;
// };

var reverseList = function(head) {
  var curr = head;
  var pre = null;
  while (curr) {
    var temp = curr.next;
    curr.next = pre;
    pre = curr;
    curr = temp;
  }
  return pre;
};
