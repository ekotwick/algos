'use strict';

const expect = require('chai').expect;

const path = require('./Trees&Graphs');

const BinaryTree = path.BinaryTree;

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