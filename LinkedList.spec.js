'use strict';

const expect = require('chai').expect;

const path = require('./LinkedList');

const dblLLNode = path.dblLLNode;
const sglLLNode = path.sglLLNode;
const DoublyLinkedList = path.DoublyLinkedList;
const SinglyLinkedList = path.SinglyLinkedList;

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
		linkedList.removeFromHead();
		expect(linkedList.head.value).to.eql('second');
		expect(linkedList.head.prev).to.eql(null);
		linkedList.removeFromHead();
		expect(linkedList.head.value).to.eql('third');
		expect(linkedList.head.prev).to.eql(null);
		linkedList.removeFromHead();
		expect(linkedList.head).to.eql(null);
		expect(linkedList.tail).to.eql(null);
	});

	it('should remove correctly with `removeFromTail` method', () => {
		linkedList.addToTail('first');
		linkedList.addToTail('second');
		linkedList.addToTail('third');
		linkedList.removeFromTail();
		expect(linkedList.tail.value).to.eql('second');
		expect(linkedList.tail.next).to.eql(null);
		linkedList.removeFromTail();
		expect(linkedList.tail.value).to.eql('first');
		expect(linkedList.tail.next).to.eql(null);
		linkedList.removeFromTail();
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

	});

	it('should have `head` and `tail` properties...', () => {

	});

	it('...which are initially set to `null`', () => {

	});

	it('should used `sglLLNode` to add nodes to `SinglyLinkedList`...', () => {

	});

	it('...and each `sglLLNode` should have `value`, `next`, and `prev` properties', () => {

	});

	it('should add correctly to empty SinglyLinkedLists with `addToHead` method', () => {

	});

	it('should add correctly to empty SinglyLinkedLists with `addToTail` method', () => {

	});

	it('should add correctly to populated SinglyLinkedLists with `addToHead` method', () => {

	});

	it('should add correctly to populated SinglyLinkedLists with `addToTail` method', () => {

	});

	it('should remove correctly with `removeFromHead` method', () => {

	});

	it('should remove correctly with `removeFromTail` method', () => {

	});

	it('should return correct values with `find`', () => {

	});
});