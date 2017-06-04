'use strict';

const expect = require('chai').expect;
const assert = require('chai').assert;

const path = require('./LinkedList');

const dblLLNode = path.dblLLNode;
const sglLLNode = path.sglLLNode;
const partition = path.partition;
const findKthNode = path.findKthNode;
const deleteMiddle = path.deleteMiddle;
const sumListsForward = path.sumListsForward;
const DoublyLinkedList = path.DoublyLinkedList;
const SinglyLinkedList = path.SinglyLinkedList;
const removeDuplicates = path.removeDuplicates;
const removeDuplicatesWithoutBuffer = path.removeDuplicatesWithoutBuffer;

describe('DoublyLinkedList', () => {
	let linkedList;

	beforeEach(() => {
		linkedList = new DoublyLinkedList();
	});

	it('should have `addToHead`, `addRightAfterHead`, `addToTail`, `removeFromHead`, `removeFromTail` and `find` functions', () => {
		expect(linkedList.addToHead).to.be.a('function');
		expect(linkedList.addRightAfterHead).to.be.a('function');
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
		linkedList.addRightAfterHead('head');
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

	it('should add correctly to empty DoublyLinkedLists with `addRightAfterHead` method', () => {
		linkedList.addRightAfterHead('first');
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
		expect(linkedList.head.value).to.eql('fourth');
		expect(linkedList.head.next.value).to.eql('first');
		expect(linkedList.head.next.prev.value).to.eql('fourth');
		expect(linkedList.head.next.next.value).to.eql('second');
		expect(linkedList.tail.value).to.eql('third');
	});

	it('should add correctly to populated DoublyLinkedLists with `addRightAfterHead` method', () => {
		linkedList.addToTail('first');
		linkedList.addToTail('second');
		linkedList.addToTail('third');
		linkedList.addRightAfterHead('fourth');
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

	it('should have `addRightAfterHead`, `addToTail`, `removeFromHead`, `removeFromTail`, and `find` methods', () => {
		expect(linkedList.addRightAfterHead).to.be.a('function');
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
		linkedList.addRightAfterHead('head');
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
	});

	it('should add correctly to empty SinglyLinkedLists with `addToHead` method', () => {
		linkedList.addToHead('first');
		expect(linkedList.head.value).to.eql('first');
		expect(linkedList.tail.value).to.eql('first');
		expect(linkedList.head.next).to.eql(null);
		expect(linkedList.head.prev).to.eql(null);
		expect(linkedList.tail.next).to.eql(null);
		expect(linkedList.tail.next).to.eql(null);
	}); 

	it('should add correctly to empty SinglyLinkedLists with `addRightAfterHead` method', () => {
		linkedList.addRightAfterHead('head');
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
		expect(linkedList.head.value).to.eql('fourth');
		expect(linkedList.head.next.value).to.eql('first');
		expect(linkedList.head.next.next.value).to.eql('second');
		expect(linkedList.tail.value).to.eql('third');
	});

	it('should add correctly to populated SinglyLinkedLists with `addRightAfterHead` method', () => {
		linkedList.addToTail('first');
		linkedList.addToTail('second');
		linkedList.addToTail('third');
		linkedList.addRightAfterHead('fourth');
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

describe('findKthNode', () => {
	let linkedList;

	beforeEach(() => {
		DoublyLinkedList.prototype.findKthNode = findKthNode;
		linkedList = new DoublyLinkedList();
		linkedList.addToTail('1');
		linkedList.addToTail('2');
		linkedList.addToTail('3');
		linkedList.addToTail('4');
		linkedList.addToTail('5');
		linkedList.addToTail('6');
		linkedList.addToTail('7');
	});

	it('should find the K-th node from the end, where k = 0 is the tail and k = 1 is the first from end', () => {
		expect(linkedList.findKthNode(8)).to.eql(null);
		expect(linkedList.findKthNode(0)).to.eql('7');
		expect(linkedList.findKthNode(1)).to.eql('6');
		expect(linkedList.findKthNode(2)).to.eql('5');
		expect(linkedList.findKthNode(3)).to.eql('4');
		expect(linkedList.findKthNode(4)).to.eql('3');
		expect(linkedList.findKthNode(5)).to.eql('2');
		expect(linkedList.findKthNode(6)).to.eql('1');
	});
});

describe('deleteMiddle', () => {
	let linkedList;

	beforeEach(() => {
		SinglyLinkedList.prototype.deleteMiddle = deleteMiddle;
		linkedList = new SinglyLinkedList();
		linkedList.addToTail('1');
		linkedList.addToTail('2');
		linkedList.addToTail('3');
		linkedList.addToTail('4');
		linkedList.addToTail('5');
		linkedList.addToTail('6');
		linkedList.addToTail('7');
		linkedList.addToTail('8');
	});

	it('should not remove end nodes', () => {
		let node = linkedList.findNode('1');
		expect(linkedList.deleteMiddle(node)).to.eql(null);
		node = linkedList.findNode('8');
		expect(linkedList.deleteMiddle(node)).to.eql(null);
	});

	it('should remove "middle" nodes, i.e., nodes between head and tail', () => {
		let node = linkedList.findNode('2');
		linkedList.deleteMiddle(node);
		expect(linkedList.head.next.value).to.eql('3');
		expect(linkedList.length).to.eql(7);
		node = linkedList.findNode('3');
		linkedList.deleteMiddle(node);
		expect(linkedList.head.next.value).to.eql('4');
		expect(linkedList.length).to.eql(6);
		node = linkedList.findNode('7');
		linkedList.deleteMiddle(node);
		node = linkedList.findNode('6');
		linkedList.deleteMiddle(node);
		node = linkedList.findNode('5');
		linkedList.deleteMiddle(node);
		node = linkedList.findNode('4');
		linkedList.deleteMiddle(node);
		expect(linkedList.head.next.value).to.eql('8');
		expect(linkedList.length).to.eql(2);
	});
});

describe('partition', () => {
	let linkedList;

	beforeEach(() => {
		DoublyLinkedList.prototype.partition = partition;
		linkedList = new DoublyLinkedList();
		linkedList.addToTail('9');
		linkedList.addToTail('0');
		linkedList.addToTail('1');
		linkedList.addToTail('6');
		linkedList.addToTail('7');
		linkedList.addToTail('8');
		linkedList.addToTail('3');
		linkedList.addToTail('5');
		linkedList.addToTail('2');
		linkedList.addToTail('4');
	});

	it('should regroup elements in list around partition, such that all nodes whose value are less than a partition value are "left" of the partition, and all nodes whose values are greater than the partition are "right" of the partition', () => {
		linkedList.partition('0');
		let test = linkedList.printValues();
		expect(test).to.eql('0916783524');
		linkedList.partition('9');
		test = linkedList.printValues();
		expect(test).to.eql('0167835249');
		linkedList.partition('5');
		test = linkedList.printValues();
		expect(test).to.eql('0132456789');
	});
});

describe('sumListsForward', () => {
	let ll1, ll2;

	beforeEach(() => {
		ll1 = new SinglyLinkedList();
		ll2 = new SinglyLinkedList();
	});

	// it('should take two linked lists as arguments, each of which has integers as node values', () => {

	// })

	it('should add 111 and 111 together to make 222', () => {
		ll1.addToTail(1);
		ll1.addToTail(1);
		ll1.addToTail(1);
		ll2.addToTail(1);
		ll2.addToTail(1);
		ll2.addToTail(1);
		expect(sumListsForward(ll1, ll2)).to.eql(222);
	});

	it('should add 617 and 295 to make 912', () => {
		ll1.addToTail(7);
		ll1.addToTail(1);
		ll1.addToTail(6);
		ll2.addToTail(5);
		ll2.addToTail(9);
		ll2.addToTail(2);
		expect(sumListsForward(ll1, ll2)).to.eql(912);
	});

	it('should add 1 and 999 to make 1000', () => {
		ll1.addToTail(1);
		ll2.addToTail(9);
		ll2.addToTail(9);
		ll2.addToTail(9);
		expect(sumListsForward(ll1, ll2)).to.eql(1000);
	});

	it('should add 10 and 2000 to make 2010', () => {
		ll1.addToTail(0);
		ll1.addToTail(1);
		ll2.addToTail(0);
		ll2.addToTail(0);
		ll2.addToTail(0);
		ll2.addToTail(2);
		expect(sumListsForward(ll1, ll2)).to.eql(2010);
	});
});