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
	constructor() {
		this.queue = new SingleLL();
	}

	push(val) {
		this.queue.addToTail(val);
	}

	pop() {
		this.queue.removeFromHead();
		if (!this.stack) this.stack = new SingleLL();
	}

	peek() {
		return this.queue.head.value;
	}

	isEmpty() {
		if (this.queue.head) return false;
		return true;
	}
}

module.exports = { Stack, Queue }