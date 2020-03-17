/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// var mergeTwoLists = function(l1, l2) {
//   var l, tmp;
//   l = tmp = {};
//   while (l1 != null && l2 != null) {
//     if (l1.val <= l2.val) {
//       tmp.next = l1;

//       l1 = l1.next;
//     } else {
//       tmp.next = l2;

//       l2 = l2.next;
//     }
//     tmp = tmp.next;
//   }
//   tmp.next = l1 == null ? l2 : l1;
//   return l.next;
// };
var mergeTwoLists = function(l1, l2) {
  var l, tmp;
  l = tmp = {};
  while (l1 != null && l2 != null) {
    if (l1.val <= l2.val) {
      tmp.next = l1;
      l1 = l1.next;
    } else {
      temp.next = l2;
      l2 = l2.next;
    }
    tmp = tmp.next;
  }
  tmp.next = l1 == null ? l2 : l1;

  return l.next;
};

var l1 = {
  val: 1,
  next: {
    val: 3,
    next: {
      val: 4,
      next: null
    }
  }
};

var l2 = {
  val: 2,
  next: {
    val: 3,
    next: null
  }
};

console.log(mergeTwoLists(l1, l2));
