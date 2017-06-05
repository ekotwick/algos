'use strict';

const SingleLLNode = require('./LinkedList').sglLLNode;
const SingleLL = require('./LinkedList').SinglyLinkedList;

class Stack {
	constructor() {
		this.stack = new SingleLL();
	}

	push(val) {
		this.stack.addToTail(val);
	}

	pop() {
		this.stack.removeFromTail();
		if (!this.stack) this.stack = new SingleLL();
	}

	peek() {
		return this.stack.tail.value;
	}

	isEmpty() {
		if (this.stack.tail) return false;
		return true;
	}
}

class Queue {

}

module.exports = { Stack, Queue }