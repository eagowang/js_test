var ListNode = function(val) {
  this.val = val;
  this.next = null;
};

/**
 * Initialize your data structure here.
 */
var MyLinkedList = function() {
  this.head = this.tail = null;
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
  var curr = this.head;
  var i = 0;
  while (curr) {
    if (index == i) return curr.val;
    i++;
    curr = curr.next;
  }
  return -1;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
  if (!this.head) {
    this.head = this.tail = new ListNode(val);
  } else {
    var node = new ListNode(val);
    node.next = this.head;
    this.head = node;
  }
};

/**
 * Append a node of value val to the last element of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
  if (!this.head) {
    this.head = this.tail = new ListNode(val);
  } else {
    var node = new ListNode(val);
    this.tail.next = node;
    this.tail = node;
  }
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
  if (!this.head) {
    this.head = this.tail = new ListNode(val);
  } else {
    var node = new ListNode(val);
    var i = 0;
    var curr = this.head;
    while (curr) {
      if (i == index - 1) {
        if (!curr.next) {
          this.addAtTail(val);
        } else {
          node.next = curr.next;
          curr.next = node;
        }
        return;
      }
      i++;
      curr = curr.next;
    }
  }
};

/**
 * Delete the index-th node in the linked list, if the index is valid.
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
  if (index == 0) return (this.head = this.head.next);
  var i = 0;
  var curr = this.head;

  while (curr.next) {
    if (i == index - 1) {
      if (!curr.next.next) {
        this.tail = curr.next;
      } else {
        curr.next = curr.next.next;
      }
      return;
    }
    i++;
    curr = curr.next;
  }
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

var ln = new MyLinkedList();

ln.addAtHead(1);
ln.addAtTail(3);
ln.addAtIndex(1, 2);
ln.get(1);
ln.deleteAtIndex(1);
ln.get(1);
console.log(ln);
