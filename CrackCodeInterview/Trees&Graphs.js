'use strict';

class BinaryTree {
	constructor(val) {
		this.value = val;
		this.length = 1;
		this.right = null;
		this.left = null;
	}

	insert(val) {
		this.length += 1;
		let num = Math.random();
		let direction = num > .5 ? 'right' : 'left';
		if (direction === 'right') {
			if (this.right) this.right.insert(val); 
			else this.right = new BinaryTree(val);
		} else if (direction === 'left') {
			if (this.left) this.left.insert(val);
			else this.left = new BinaryTree(val);
		}
	}

	print() {
		return JSON.stringify(this, null, 2);
	}

	find(val, traversal='depth-first', order='pre-order') {
		this.values = [];
		const pusher = (curVal) => this.values.push(val === curVal);

		if (traversal === 'depth-first') {
			if (order === 'pre-order') this.dft(pusher, 'pre-order');
			if (order === 'in-order') this.dft(pusher, 'in-order');
			if (order === 'post-order') this.dft(pusher, 'post-order');
		} else {
			this.bft(pusher);
		}

		const combiner = (el1, el2) => el1 || el2;

		return this.values.reduce((el1, el2) => combiner(el1, el2), false);
	}

	bft(callback) {
		let queue = [this]; // start with the thing loaded
		while (queue.length) {
			let current = queue.shift();
			if (current.left) queue.push(current.left);
			if (current.right) queue.push(current.right);
			callback(current.value);
		}
	}

	dft(callback, order) {
		if (order === 'pre-order') callback(this.value);
		if (this.left) this.left.dft(callback, order);
		if (order === 'in-order') callback(this.value);
		if (this.right) this.right.dft(callback, order);
		if (order === 'post-order') callback(this.value);

	}
}

module.exports = { BinaryTree }