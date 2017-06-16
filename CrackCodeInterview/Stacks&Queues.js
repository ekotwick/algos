'use strict';

const SingleLLNode = require('./LinkedList').sglLLNode;
const SingleLL = require('./LinkedList').SinglyLinkedList;

class Stack {
  constructor() {
    this.stack = new SingleLL();
    this.min = new SingleLL();
  }

  push(val) {
    this.stack.addToTail(val);
    if (!this.min.tail || val < this.min.tail.value) this.min.addToTail(val);
  }

  pop() {
    let toReturn = this.stack.removeFromTail();
    if (!this.stack) this.stack = new SingleLL();
    if (toReturn === this.min.tail.value) this.min.removeFromTail();
    return toReturn;
  }

  peek() {
    if (this.stack.tail) return this.stack.tail.value;
    return
  }

  isEmpty() {
    if (this.stack.tail) return false;
    return true;
  }

  getMin() {
    if (this.min.tail) return this.min.tail.value;
    else null;
  }
}

class SetOfStacks {
  constructor() {
    this.set = [new Stack()];
    this.stackSize = 0;
  }

  setStackSize(num) {
    if (num % 1 !== 0) return;
    this.stackSize = num;
  }

  push(val) {
    let lastIdx = this.set.length - 1;
    let stack = this.set[lastIdx];
    stack.push(val);
    this.createNewStack();
  }

  pop() {
    let lastIdx = this.set.length - 1;
    return this.popAt(lastIdx);
  }

  popAt(idx) {
    let stack = this.set[idx];
    let toReturn = stack.stack.removeFromTail();
    if (!stack.stack.length) {
      let len = this.set.length;
      this.removeStack(idx, len);
    }
    return toReturn;
  }

  popAtRollOver(idx) {
    let toReturn = this.popAt(idx);
    let i = idx;
    let k = i + 1;
    let len = this.set.length;
    while (this.set[k]) {
      let shiftLeft = this.set[k].stack.removeFromHead();
      if (shiftLeft) this.set[i].push(shiftLeft);
      i++;
      k++;
    }
    this.removeStack(i, len);
    this.createNewStack();
    return toReturn;
  }

  createNewStack() {
    let last = this.set.length - 1;
    if (this.set[last].stack.length >= this.stackSize) {
      this.set[last + 1] = new Stack();
    }
  }

  removeStack(idx, len) {
    if (len === 2 && idx === 1) {
      this.set = this.set.slice(0,1);
    } else if (len >= 2) {
      let a = this.set.slice(0, idx);
      let b = this.set.slice(idx + 1);
      this.set = a.concat(b);
    }
  }
}

class Queue {
  constructor() {
    this.queue = new SingleLL();
    this.length = 0;
  }

  push(val) {
    this.queue.addToTail(val);
    this.length++;
  }

  pop() {
    this.length--;
    return this.queue.removeFromHead();
  }

  peek() {
    if (this.queue.head) return this.queue.head.value;
    return;
  }

  isEmpty() {
    if (this.queue.head) return false;
    return true;
  }
}

class QueueViaStack {
  constructor() {
    this.a = new Stack();
    this.b = new Stack();
    this.in = 'a';
    this.out = 'b';
  }

  enqueue(val) {
    this[this.in].push(val);
  }

  dequeue() {
    if (this[this.out].peek()) return this[this.out].pop();
    while (this[this.in].peek()) {
      let toMove = this[this.in].pop();
      this[this.out].push(toMove);
    }
    return this[this.out].pop();
  }
}

class AnimalShelter {
  constructor() {
    this.dogShelter = new Queue();
    this.catShelter = new Queue();
  }

  receiveAny(an) {
    if (an instanceof Dog) {
      an.age = Date.now();
      this.dogShelter.push(an);
    } else {
      an.age = Date.now();
      this.catShelter.push(an);
    }
  }

  releaseAny() {
    let dog = this.dogShelter.peek() ? this.dogShelter.peek() : 0;
    let cat = this.catShelter.peek() ? this.catShelter.peek() : 0;
    if (dog.age >= cat.age) return this.dogShelter.pop();
    return this.catShelter.pop();
  }

  releaseCat() {
    if (this.catShelter.length) return this.catShelter.pop();
    return;
  }

  releaseDog() {
    if (this.dogShelter.length) return this.dogShelter.pop();
    return;
  }
}

class Dog {
  constructor(name) {
    this.name = name;
    this.age;
  }
}

class Cat {
  constructor(name) {
    this.name = name;
    this.age;
  }
}

module.exports = { Stack, Queue, SetOfStacks, QueueViaStack, AnimalShelter, Dog, Cat }