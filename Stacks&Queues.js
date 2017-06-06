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
		return this.stack.tail.value;
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