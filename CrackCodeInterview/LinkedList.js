'use strict';

// ################################################## //
// ################################################## //
// ##########                              ########## //
// ##########     DOUBLY LINKED LIST       ########## //
// ##########                              ########## //
// ################################################## //
// ################################################## //

class dblLLNode {
  constructor(val) {
    this.value = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToHead(val) {
    let node = new dblLLNode(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else if (this.head === this.tail) {
      node.next = this.tail;
      this.tail.prev = node;
      this.head = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
  }

  addRightAfterHead(val) {
    let node = new dblLLNode(val);
    if (!this.head) {
      this.head = node; 
      this.tail = node;
    } else if (this.head === this.tail) {
      node.next = this.tail;
      node.prev = this.head;
      this.head.next = node;
      this.tail.prev = node;
    } else {
      node.next = this.head.next;
      node.prev = this.head;
      this.head.next = node;
      node.next.prev = node;
    }
    this.length++;
    return this;
  }

  addToTail(val) {
    let node = new dblLLNode(val);
    if (!this.tail) {
      this.head = node;
      this.tail = node;
    } else if (this.head === this.tail) {
      this.head.next = node;
      this.tail = node;
      node.prev = this.head;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    this.length++
    return this;
  }

  removeFromHead() {
    let toReturn;
    if (!this.head) return null;
    if (this.head === this.tail) {
      toReturn = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return toReturn.value; 
    } else {
      toReturn = this.head;
      this.head = this.head.next;
      this.head.prev = null;
      this.length--;
      return toReturn.value;
    }
  }

  removeFromTail() {
    let toReturn;
    if (!this.tail) return null;
    if (this.head === this.tail) {
      toReturn = this.tail;
      this.head = null;
      this.tail = null;
      this.length--;
      return toReturn.value;
    } else {
      toReturn = this.tail;
      this.tail = this.tail.prev;
      this.tail.next = null;
      this.length--;
      return toReturn.value;
    }
  }

  find(val) {
    if (!this.head) return null;
    let currNode = this.head;
    while (currNode) {
      if (currNode.value === val) return currNode.value;
      else currNode = currNode.next;
    }
    return null;
  }

  findNode(val) {
    if (!this.head) return null;
    let currNode = this.head;
    while (currNode) {
      if (currNode.value === val) return currNode;
      currNode = currNode.next;
    }
    return null;
  }

  printValues() {
    let allValues = '';
    let currNode = this.head;
    while (currNode) {
      allValues += currNode.value;
      currNode = currNode.next;
    }
    return allValues;
  }
}

// ################################################## //
// ################################################## //
// ##########                              ########## //
// ##########   DOUBLY LINKED LIST FUNCS   ########## //
// ##########                              ########## //
// ################################################## //
// ################################################## //

// not an arrow function because——MIND THE CONTEXT OF THIS!
const removeDuplicates = function(){
  let singles = new Set();
  let currNode = this.head;
  while (currNode) {
    if (singles.has(currNode.value)) {
      if (currNode.next) {
        currNode.prev.next = currNode.next;
        currNode.next.prev = currNode.prev;
      } else {
        this.tail = currNode.prev;
        this.tail.next = null;
      }
      this.length--;
    } else {
      singles.add(currNode.value);
    }
    currNode = currNode.next;
  }
  return this;
};

const removeDuplicatesWithoutBuffer = function() {
  let currNode = this.head;
  let runner = this.head.next;
  while (currNode) {
    while (runner) {
      if (currNode.value === runner.value) {
        if (runner.next) {
          runner.prev.next = runner.next;
          runner.next.prev = runner.prev;
        } else {
          this.tail = runner.prev;
          this.tail.next = null;
        }
        this.length--;
      }
      runner = runner.next;
    }
    currNode = currNode.next;
    if (currNode) runner = currNode.next;
  }
  return this;
};

const findKthNode = function(k) {
  let endNode = this.head;
  let kNode = this.head;
  for (let i = 0 ; i < k; i++) {
    endNode = endNode.next;
    if (!endNode) return null;
  }
  while (endNode.next) {
    endNode = endNode.next;
    kNode = kNode.next;
  }
  return kNode.value;
};

const partition = function(val) {
  let prePart = new DoublyLinkedList();
  let postPart = new DoublyLinkedList();
  let currNode = this.head;
  while (currNode) {
    if (currNode.value < val) {
      prePart.addToTail(currNode.value);
    } else if (currNode.value > val) {
      postPart.addToTail(currNode.value);
    } else {
      postPart.addToHead(currNode.value);
    }
    currNode = currNode.next;
  }
  if (prePart.length) {
    prePart.tail.next = postPart.head;
    this.head = prePart.head;
  } else {
    this.head = postPart.head;
  }
};

const palindrome = function() {
  let forward = this.head;
  let backward = this.tail;
  while (forward) {
    if (forward.value !== backward.value) return false;
    forward = forward.next;
    backward = backward.prev;
  }
  return true;
};

// ################################################## //
// ################################################## //
// ##########                              ########## //
// ##########     SINGLY LINKED LIST       ########## //
// ##########                              ########## //
// ################################################## //
// ################################################## //

class sglLLNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToHead(val) {
    let node = new dblLLNode(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else if (this.head === this.tail) {
      node.next = this.tail;
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }

  addRightAfterHead(val) {
    let node = new sglLLNode(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else if (this.head === this.tail) {
      this.head.next = node;
      this.tail = node;
    } else {
      node.next = this.head.next;
      this.head.next = node;
    }
    this.length++;
    return this;
  }

  addToTail(val) {
    let node = new sglLLNode(val);
    if (!this.tail) {
      this.head = node;
      this.tail = node;
    } else if (this.head === this.tail) {
      this.head.next = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++
    return this;
  }

  removeFromHead() {
    let toReturn;
    if (!this.head) return null;
    if (this.head === this.tail) {
      toReturn = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return toReturn.value;
    } else {
      toReturn = this.head;
      this.head = this.head.next;
      this.length--;
      return toReturn.value;
    }
  }

  removeFromTail() {
    let toReturn;
    if (!this.tail) return null;
    if (this.head === this.tail) {
      toReturn = this.tail;
      this.head = null;
      this.tail = null;
      this.length--;
      return toReturn.value;
    } else {
      toReturn = this.tail;
      let currNode = this.head;
      while (currNode) {
        if (currNode.next === this.tail) {
          currNode.next = null;
          this.tail = currNode;
        }
        currNode = currNode.next;
      }
      this.length--;
      return toReturn.value;
    }
  }

  find(val) {
    if (!this.head) return null;
    let currNode = this.head;
    while (currNode) {
      if (currNode.value === val) return currNode.value;
      currNode = currNode.next;
    }
    return null;
  }

  findNode(val) {
    if (!this.head) return null;
    let currNode = this.head;
    while (currNode) {
      if (currNode.value === val) return currNode;
      currNode = currNode.next;
    }
    return null;
  }

  printValues() {
    let allValues = '';
    let currNode = this.head;
    while (currNode) {
      allValues += currNode.value;
      currNode = currNode.next;
    }
    return allValues;
  }
}

// ################################################## //
// ################################################## //
// ##########                              ########## //
// ##########   SINGLY LINKED LIST FUNCS   ########## //
// ##########                              ########## //
// ################################################## //
// ################################################## //

const deleteMiddle = function(node) {
  if (node === null || node.next === null || this.head === node) {
    return null;
  } else {
    node.value = node.next.value;
    node.next = node.next.next;
    this.length--;
  }
};

// ################################################## //
// ################################################## //
// ##########                              ########## //
// ########## GENERAL LINKED LIST FUNCS    ########## //
// ##########                              ########## //
// ################################################## //
// ################################################## // 

const sumLists = (l1, l2) => {
  let num1, num2, tempSum, tempSumString;
  let node1 = l1.head;
  let node2 = l2.head;
  let sum = '';
  let carryOver = 0;
  while (node1 || node2) {
    if (node1) num1 = node1.value;
    if (node2) num2 = node2.value;
    tempSum = num1 + num2 + carryOver;
    tempSumString = tempSum.toString(10);
    if (tempSum > 9) {
      carryOver = 1;
      sum = tempSumString[1] + sum;
    } else {
      carryOver = 0;
      sum = tempSumString + sum;
    }
    if (node1) node1 = node1.next;
    if (node2) node2 = node2.next;
    num1 = 0;
    num2 = 0;
  }
  if (carryOver === 1) sum = carryOver.toString(10) + sum;
  return parseInt(sum,10);
};

// ################################################## //
// ################################################## //
// ##########                              ########## //
// ##########           EXPORTS            ########## //
// ##########                              ########## //
// ################################################## //
// ################################################## // 

module.exports = { dblLLNode, DoublyLinkedList, sglLLNode, SinglyLinkedList, removeDuplicates, removeDuplicatesWithoutBuffer, findKthNode, deleteMiddle, partition, sumLists, palindrome };