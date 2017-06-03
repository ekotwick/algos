'use strict';

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
	}

	addToHead(val) {
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
		return this;
	}

	removeFromHead() {
		let toReturn;
		if (!this.head) return null;
		if (this.head === this.tail) {
			toReturn = this.head;
			this.head = null;
			this.tail = null;
			return toReturn.value; 
		} else {
			toReturn = this.head;
			this.head = this.head.next;
			this.head.prev = null;
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
			return toReturn.value;
		} else {
			toReturn = this.tail;
			this.tail = this.tail.prev;
			this.tail.next = null;
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
}

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
	}

	addToHead(val) {
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
		return this;
	}

	removeFromHead() {
		let toReturn;
		if (!this.head) return null;
		if (this.head === this.tail) {
			toReturn = this.head;
			this.head = null;
			this.tail = null;
			return toReturn.value;
		} else {
			toReturn = this.head;
			this.head = this.head.next;
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

}

module.exports = { dblLLNode, DoublyLinkedList, sglLLNode, SinglyLinkedList }