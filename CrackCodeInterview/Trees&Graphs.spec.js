'use strict';

const expect = require('chai').expect;

const path = require('./Trees&Graphs');

const BinaryTree = path.BinaryTree;
const BinarySearchTree = path.BinarySearchTree;

describe('BinaryTree', () => {
	let bt;

	beforeEach(() => {
		bt = new BinaryTree(10);
	});

	it('should have `length`, `value`, `left`, and `right` properties', () => {
		expect(bt).to.have.own.property('length');
		expect(bt).to.have.own.property('value');
		expect(bt).to.have.own.property('left');
		expect(bt).to.have.own.property('right');
	});

	it('should have `insert`, `find`, breadth first traversal, and depth first traversal methods', () => {
		expect(bt.insert).to.be.a('function');
		expect(bt.insert).to.be.a('function');
		expect(bt.bft).to.be.a('function');
		expect(bt.dft).to.be.a('function');
	});

	it('—`insert` should add elements to the tree', () => {
		expect(bt.length).to.eql(1);
		bt.insert(1);
		bt.insert(2);
		bt.insert(3);
		expect(bt.length).to.eql(4);
		bt.insert(4);
		bt.insert(5);
		expect(bt.length).to.eql(6);
	});

	it('—`find` should use breadth first search or depth first search to determine whether an element exists in the tree', () => {
		bt.insert(1);
		bt.insert(2);
		bt.insert(3);
		bt.insert(4);
		bt.insert(5);
		expect(bt.find(5, 'depth-first', 'pre-order')).to.eql(true);
		expect(bt.find(4, 'depth-first', 'in-order')).to.eql(true);
		expect(bt.find(3, 'depth-first', 'post-order')).to.eql(true);
		expect(bt.find(2, 'breadth-first')).to.eql(true);
		expect(bt.find(1)).to.eql(true);
		expect(bt.find(6)).to.eql(false);
		expect(bt.find(0)).to.eql(false);
	});
});

describe('BinarySearchTree', () => {
	let bt;

	beforeEach(() => {
		bt = new BinarySearchTree(10);
	});

	it('should have `length`, `value`, `left`, and `right` properties', () => {
		expect(bt).to.have.own.property('length');
		expect(bt).to.have.own.property('value');
		expect(bt).to.have.own.property('left');
		expect(bt).to.have.own.property('right');
	});

	it('should have `insert`, `find`, breadth first traversal, and depth first traversal methods', () => {
		expect(bt.insert).to.be.a('function');
		expect(bt.insert).to.be.a('function');
		expect(bt.bft).to.be.a('function');
		expect(bt.dft).to.be.a('function');
	});

	it('—`insert` should add elements to the tree', () => {
		expect(bt.length).to.eql(1);
		bt.insert(1);
		bt.insert(2);
		bt.insert(3);
		expect(bt.length).to.eql(4);
		bt.insert(4);
		bt.insert(5);
		expect(bt.length).to.eql(6);
	});

	it('—`find` should use breadth first search or depth first search to determine whether an element exists in the tree', () => {
		bt.insert(1);
		bt.insert(2);
		bt.insert(3);
		bt.insert(4);
		bt.insert(5);
		expect(bt.find(5, 'depth-first', 'pre-order')).to.eql(true);
		expect(bt.find(4, 'depth-first', 'in-order')).to.eql(true);
		expect(bt.find(3, 'depth-first', 'post-order')).to.eql(true);
		expect(bt.find(2, 'breadth-first')).to.eql(true);
		expect(bt.find(1)).to.eql(true);
		expect(bt.find(6)).to.eql(false);
		expect(bt.find(0)).to.eql(false);
	});

	it ('should insert values in order', () => {
		let bt = new BinarySearchTree(15);
		let valuesToInsert = [25, 5, 17, 21, 28, 0, 14, 50, 1, 45, 13, 12, 11, 30, 35, 33, 31, 34];
		for (let i = 0; i < valuesToInsert.length; i++) {
			bt.insert(valuesToInsert[i]);
		}

		let testArr = [];
		const pusher = (val) => testArr.push(val);

		bt.dft(pusher, 'pre-order');
		expect(testArr).to.eql([15,5,0,1,14,13,12,11,25,17,21,28,50,45,30,35,33,31,34]);

		testArr =[];
		bt.dft(pusher, 'in-order');
		expect(testArr).to.eql([0,1,5,11,12,13,14,15,17,21,25,28,30,31,33,34,35,45,50]);

		testArr =[];
		bt.dft(pusher, 'post-order');
		expect(testArr).to.eql([1,0,11,12,13,14,5,21,17,31,34,33,35,30,45,50,28,25,15]);

		testArr =[];
		bt.bft(pusher);
		expect(testArr).to.eql([15,5,25,0,14,17,28,1,13,21,50,12,45,11,30,35,33,31,34]);
	});
});