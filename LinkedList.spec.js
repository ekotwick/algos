'use strict';

const expect = require('chai').expect;
const assert = require('chai').assert;

const path = require('./LinkedList');

const dblLLNode = path.dblLLNode;
const sglLLNode = path.sglLLNode;
const DoublyLinkedList = path.DoublyLinkedList;
const SinglyLinkedList = path.SinglyLinkedList;
const removeDuplicates = path.removeDuplicates;
const removeDuplicatesWithoutBuffer = path.removeDuplicatesWithoutBuffer;

describe('DoublyLinkedList', () => {
	let linkedList;

	beforeEach(() => {
		linkedList = new DoublyLinkedList();
	});

	it('should have `addToHead`, `addToTail`, `removeFromHead`, `removeFromTail` and `find` functions', () => {
		expect(linkedList.addToHead).to.be.a('function');
		expect(linkedList.addToTail).to.be.a('function');
		expect(linkedList.removeFromHead).to.be.a('function');
		expect(linkedList.removeFromTail).to.be.a('function');
		expect(linkedList.find).to.be.a('function');
	});

	it('should have properties `this.head` and `this.tail`...', () => {
		expect(linkedList).to.have.own.property('head');
		expect(linkedList).to.have.own.property('tail');
	});

	it('...which are initially assigned `null` values', () => {
		expect(linkedList.head).to.eql(null);
		expect(linkedList.removeFromHead()).to.eql(null);
		expect(linkedList.tail).to.eql(null);
		expect(linkedList.removeFromTail()).to.eql(null);
	});

	it('should use a `dblLLNode` class to add nodes to `DoublyLinkedList`...', () => {
		linkedList.addToHead('head');
		expect(linkedList.head).to.be.an.instanceof(dblLLNode);
		linkedList.removeFromHead();
		linkedList.addToTail('tail');
		expect(linkedList.tail).to.be.an.instanceof(dblLLNode);
	});

	it('...and the `dblLLNode` class takes a value argument and has `next` and `previous` properties initially set to null', () => {
		let node = new dblLLNode('test');
		expect(node).to.have.own.property('value');
		expect(node.value).to.eql('test');
		expect(node).to.have.own.property('next');
		expect(node.next).to.eql(null);
		expect(node).to.have.own.property('prev');
		expect(node.prev).to.eql(null);
	});

	it('should add correctly to empty DoublyLinkedLists with `addToHead` method', () => {
		linkedList.addToHead('first');
		expect(linkedList.head.value).to.eql('first');
		expect(linkedList.tail.value).to.eql('first');
		expect(linkedList.head.next).to.eql(null);
		expect(linkedList.head.prev).to.eql(null);
		expect(linkedList.tail.next).to.eql(null);
		expect(linkedList.tail.next).to.eql(null);
	});

	it('should add correctly to empty DoublyLinkedLists with `addToTail` method', () => {
		linkedList.addToTail('first');
		expect(linkedList.head.value).to.eql('first');
		expect(linkedList.tail.value).to.eql('first');
		expect(linkedList.head.next).to.eql(null);
		expect(linkedList.head.prev).to.eql(null);
		expect(linkedList.tail.next).to.eql(null);
		expect(linkedList.tail.next).to.eql(null);
	});

	it('should add correctly to populated DoublyLinkedLists with `addToHead` method', () => {
		linkedList.addToTail('first');
		linkedList.addToTail('second');
		linkedList.addToTail('third');
		linkedList.addToHead('fourth');
		expect(linkedList.head.value).to.eql('first');
		expect(linkedList.head.next.value).to.eql('fourth');
		expect(linkedList.head.next.prev.value).to.eql('first');
		expect(linkedList.head.next.next.value).to.eql('second');
		expect(linkedList.head.next.next.prev.value).to.eql('fourth');
		expect(linkedList.tail.value).to.eql('third');
	});

	it('should add correctly to populated DoublyLinkedLists with `addToTail` method', () => {
		linkedList.addToTail('first');
		linkedList.addToTail('second');
		linkedList.addToTail('third');
		expect(linkedList.tail.value).to.eql('third');
		expect(linkedList.tail.next).to.eql(null);
		expect(linkedList.tail.prev.value).to.eql('second');
		expect(linkedList.tail.prev.prev.value).to.eql('first');
		expect(linkedList.head.next.next.value).to.eql('third');
	});

	it('should remove correctly with `removeFromHead` method', () => {
		linkedList.addToTail('first');
		linkedList.addToTail('second');
		linkedList.addToTail('third');

		let first = linkedList.removeFromHead();
		expect(first).to.eql('first');
		expect(linkedList.head.value).to.eql('second');
		expect(linkedList.head.prev).to.eql(null);

		let second = linkedList.removeFromHead();
		expect(second).to.eql('second');
		expect(linkedList.head.value).to.eql('third');
		expect(linkedList.head.prev).to.eql(null);

		let third = linkedList.removeFromHead();
		expect(third).to.eql('third');
		expect(linkedList.head).to.eql(null);
		expect(linkedList.tail).to.eql(null);
	});

	it('should remove correctly with `removeFromTail` method', () => {
		linkedList.addToTail('first');
		linkedList.addToTail('second');
		linkedList.addToTail('third');
		
		let third = linkedList.removeFromTail();
		expect(third).to.eql('third');
		expect(linkedList.tail.value).to.eql('second');
		expect(linkedList.tail.next).to.eql(null);
		
		let second = linkedList.removeFromTail();
		expect(second).to.eql('second');
		expect(linkedList.tail.value).to.eql('first');
		expect(linkedList.tail.next).to.eql(null);
		
		let first = linkedList.removeFromTail();
		expect(first).to.eql('first');
		expect(linkedList.head).to.eql(null);
		expect(linkedList.tail).to.eql(null);
	});

	it('should return correct values from `find`', () => {
		linkedList.addToTail('first');
		linkedList.addToTail('second');
		linkedList.addToTail('third');
		expect(linkedList.find('first')).to.eql('first');
		expect(linkedList.find('second')).to.eql('second');
		expect(linkedList.find('third')).to.eql('third');
		expect(linkedList.find('aaa')).to.eql(null);
	});
});

describe('SinglyLinkedList', () => {
	let linkedList;

	beforeEach(() => {
		linkedList = new SinglyLinkedList();
	});

	it('should have `addToHead`, `addToTail`, `removeFromHead`, `removeFromTail`, and `find` methods', () => {
		expect(linkedList.addToHead).to.be.a('function');
		expect(linkedList.addToTail).to.be.a('function');
		expect(linkedList.removeFromHead).to.be.a('function');
		expect(linkedList.removeFromTail).to.be.a('function');
	});

	it('should have `head` and `tail` properties...', () => {
		expect(linkedList).to.have.own.property('head');
		expect(linkedList).to.have.own.property('tail');
	});

	it('...which are initially set to `null`', () => {
		expect(linkedList.head).to.eql(null);
		expect(linkedList.tail).to.eql(null);
	});

	it('should used `sglLLNode` to add nodes to `SinglyLinkedList`...', () => {
		linkedList.addToHead('head');
		expect(linkedList.head).to.be.instanceof(sglLLNode);
		linkedList.removeFromHead();
		linkedList.addToTail('tail');
		expect(linkedList.tail).to.be.instanceof(sglLLNode);
	});

	it('...and each `sglLLNode` should have `value` and `next` properties...', () => {
		let node = new sglLLNode('test');
		expect(node).to.have.own.property('value');
		expect(node.value).to.eql('test');
		expect(node).to.have.own.property('next');
		expect(node.next).to.eql(null);
	});

	it('...but the `sglLLNode` __SHOULD NOT__ have `prev` property', () => {
		let node = new sglLLNode('test');
		expect(node).to.not.have.own.property('prev');
		assert.notExists(node.prev);
	}) 

	it('should add correctly to empty SinglyLinkedLists with `addToHead` method', () => {
		linkedList.addToHead('head');
		expect(linkedList.head.value).to.eql('head');
		expect(linkedList.tail.value).to.eql('head');
		expect(linkedList.head.next).to.eql(null);
		expect(linkedList.tail.next).to.eql(null);
	});

	it('should add correctly to empty SinglyLinkedLists with `addToTail` method', () => {
		linkedList.addToTail('tail');
		expect(linkedList.head.value).to.eql('tail');
		expect(linkedList.tail.value).to.eql('tail');
		expect(linkedList.head.next).to.eql(null);
		expect(linkedList.tail.next).to.eql(null);
	});

	it('should add correctly to populated SinglyLinkedLists with `addToHead` method', () => {
		linkedList.addToTail('first');
		linkedList.addToTail('second');
		linkedList.addToTail('third');
		linkedList.addToHead('fourth');
		expect(linkedList.head.value).to.eql('first');
		expect(linkedList.head.next.value).to.eql('fourth');
		expect(linkedList.head.next.next.value).to.eql('second');
		expect(linkedList.tail.value).to.eql('third');
	});

	it('should add correctly to populated SinglyLinkedLists with `addToTail` method', () => {
		linkedList.addToTail('first');
		linkedList.addToTail('second');
		linkedList.addToTail('third');
		expect(linkedList.head.value).to.eql('first');
		expect(linkedList.head.next.next.value).to.eql('third');
		expect(linkedList.tail.value).to.eql('third');
		expect(linkedList.tail.next).to.eql(null);
	});

	it('should remove correctly with `removeFromHead` method', () => {
		linkedList.addToTail('first');
		linkedList.addToTail('second');
		linkedList.addToTail('third');

		let first = linkedList.removeFromHead();
		expect(first).to.eql('first');
		expect(linkedList.head.value).to.eql('second');
		// expect(linkedList.head.prev).to.eql(null);

		let second = linkedList.removeFromHead();
		expect(second).to.eql('second');
		expect(linkedList.head.value).to.eql('third');
		// expect(linkedList.head.prev).to.eql(null);

		let third = linkedList.removeFromHead();
		expect(third).to.eql('third');
		expect(linkedList.head).to.eql(null);
		expect(linkedList.tail).to.eql(null);
	});

	it('should remove correctly with `removeFromTail` method', () => {
		linkedList.addToTail('first');
		linkedList.addToTail('second');
		linkedList.addToTail('third');
		
		let third = linkedList.removeFromTail();
		expect(third).to.eql('third');
		expect(linkedList.tail.value).to.eql('second');
		expect(linkedList.tail.next).to.eql(null);
		
		let second = linkedList.removeFromTail();
		expect(second).to.eql('second');
		expect(linkedList.tail.value).to.eql('first');
		expect(linkedList.tail.next).to.eql(null);
		
		let first = linkedList.removeFromTail();
		expect(first).to.eql('first');
		expect(linkedList.head).to.eql(null);
		expect(linkedList.tail).to.eql(null);
	});

	it('should return correct values with `find`', () => {
		linkedList.addToTail('first');
		linkedList.addToTail('second');
		linkedList.addToTail('third');
		expect(linkedList.find('first')).to.eql('first');
		expect(linkedList.find('second')).to.eql('second');
		expect(linkedList.find('third')).to.eql('third');
		expect(linkedList.find('aaa')).to.eql(null);
	});
});

describe('removeDuplicates', () => {
	let linkedList;

	beforeEach(() => {
		DoublyLinkedList.prototype.removeDuplicates = removeDuplicates;
		linkedList = new DoublyLinkedList();
		linkedList.addToTail('1');
		linkedList.addToTail('2');
		linkedList.addToTail('1');
		linkedList.addToTail('3');
		linkedList.addToTail('2');
		linkedList.addToTail('1');
		linkedList.addToTail('4');
		linkedList.addToTail('1');
	});

	it('should remove all duplicates from doubly linked list', () => {
		linkedList.removeDuplicates();
		expect(linkedList.head.value).to.eql('1');
		expect(linkedList.head.next.value).to.eql('2');
		expect(linkedList.head.next.next.value).to.eql('3');
		expect(linkedList.head.next.next.next.value).to.eql('4');
		expect(linkedList.tail.value).to.eql('4');
		expect(linkedList.length).to.eql(4);
	});
});

describe('removeDuplicatesWithoutBuffer', () => {
	let linkedList;

	beforeEach(() => {
		DoublyLinkedList.prototype.removeDuplicatesWithoutBuffer = removeDuplicatesWithoutBuffer;
		linkedList = new DoublyLinkedList();
		linkedList.addToTail('1');
		linkedList.addToTail('2');
		linkedList.addToTail('1');
		linkedList.addToTail('3');
		linkedList.addToTail('2');
		linkedList.addToTail('1');
		linkedList.addToTail('4');
		linkedList.addToTail('1');
	});

	it('should remove all duplicates from doubly linked list', () => {
		linkedList.removeDuplicatesWithoutBuffer();
		expect(linkedList.head.value).to.eql('1');
		expect(linkedList.head.next.value).to.eql('2');
		expect(linkedList.head.next.next.value).to.eql('3');
		expect(linkedList.head.next.next.next.value).to.eql('4');
		expect(linkedList.tail.value).to.eql('4');
		expect(linkedList.length).to.eql(4);
	});
});