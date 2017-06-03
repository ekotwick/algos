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
		this.length = 0;
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
}

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

}

const deleteMiddle = function(node) {
	if (node === null || node.next === null || this.head === node) {
		return null;
	} else {
		node.value = node.next.value;
		node.next = node.next.next;
		this.length--;
	}
} 

module.exports = { dblLLNode, DoublyLinkedList, sglLLNode, SinglyLinkedList, removeDuplicates, removeDuplicatesWithoutBuffer, findKthNode, deleteMiddle };