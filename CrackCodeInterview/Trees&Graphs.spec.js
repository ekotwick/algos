'use strict';

const path = require('./Trees&Graphs');

const BTNode = path.BTNode;
const BinaryTree = path.BinaryTree;

describe('BinaryTree', () => {
	let bt;

	beforeEach(() => {
		bt = new BinaryTree();
	});

	it('should have `root` and `length` properties', () => {
		expect(bt).to.have.own.property('root');
		expect(bt).to.have.own.property('length');
	});

	it('should have `insert`, `remove`, and `find` methods', () => {
		expect(bt.insert).to.be.a('function');
		expect(bt.insert).to.be.a('remove');
		expect(bt.insert).to.be.a('find');
	});

	it('—`insert` should add elements to the tree', () => {
		bt.insert(1);
		bt.insert(2);
		bt.insert(3);
		expect(bt.length).to.eql(3);
		bt.insert(4);
		bt.insert(5);
		expect(bt.length).to.eql(5);
	});

	it('—`remove` should remove elements from the tree', () => {

	});

	it('—`find` should determine whether an element exists in the tree', () => {

	});
});