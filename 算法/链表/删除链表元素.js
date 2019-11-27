var removeElements = function(head, val) {
  if (!head) return head;
  var dumb = {};
  dumb.next = head;
  var cur = dumb;
  //   var cur = {};
  //   cur.next = head;
  while (cur.next) {
    if (cur.next.val == val) {
      cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }
  }
  return dumb.next;
};

// var head = {
//   val: 1,
//   next: {
//     val: 2,
//     next: {
//       val: 3,
//       next: {
//         val: 4,
//         next: {
//           val: 5
//         }
//       }
//     }
//   }
// };
var head = {
  val: 1
};

removeElements(head, 1);
