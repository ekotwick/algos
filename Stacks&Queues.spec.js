'use strict';

const expect = require('chai').expect;

const path = require('./Stacks&Queues');
const linkedList = require('./LinkedList');

const Stack = path.Stack;
const Queue = path.Queue;
const SingleLLNode = linkedList.sglLLNode;
const SingleLL = linkedList.SinglyLinkedList;

describe('Stack', () => {
	let stack;

	beforeEach(() => {
		stack = new Stack();
	});

	it('should be implemented with a linked list', () => {
		expect(stack).to.have.own.property('stack');
		expect(stack.stack).to.be.instanceof(SingleLL);
		stack.push('first');
		expect(stack.stack.head).to.be.instanceof(SingleLLNode);
		expect(stack.stack.head.value).to.eql('first');
	});

	it('should have `push`, `pop`, `peek` and `isEmpty` methods', () => {
		expect(stack.push).to.be.a('function');
		expect(stack.pop).to.be.a('function');
		expect(stack.peek).to.be.a('function');
		expect(stack.isEmpty).to.be.a('function');
	});

	it('—`push` method should add items to the stack', () => {
		stack.push('first');
		expect(stack.stack.length).to.eql(1);
		expect(stack.stack.tail.value).to.eql('first');
		stack.push('second');
		stack.push('third');
		expect(stack.stack.length).to.eql(3);
		expect(stack.stack.tail.value).to.eql('third');
		expect(stack.stack.head.next.value).to.eql('second');
		stack.push('fourth');
		stack.push('fifth');
		stack.push('sixth');
		stack.push('seventh');
		expect(stack.stack.length).to.eql(7);
		expect(stack.stack.tail.value).to.eql('seventh');
	});

	it('—`pop` method should remove items from the stack', () => {
		stack.push('first');
		stack.push('second');
		stack.push('third');
		stack.push('fourth');
		stack.push('fifth');
		stack.push('sixth');
		stack.push('seventh');
		stack.pop();
		expect(stack.stack.length).to.eql(6);
		expect(stack.stack.tail.value).to.eql('sixth');
		stack.pop();
		stack.pop();
		expect(stack.stack.length).to.eql(4);
		expect(stack.stack.tail.value).to.eql('fourth');
		stack.pop();
		stack.pop();
		stack.pop();
		expect(stack.stack.length).to.eql(1);
		expect(stack.stack.tail.value).to.eql('first');
		stack.pop();
		expect(stack.stack.length).to.eql(0);
		expect(stack.stack.tail).to.eql(null);
	});

	it('—`peek` should return the value of the top item in the stack (but not remove it)', () => {
		stack.push('first');
		stack.push('second');
		stack.push('third');
		stack.push('fourth');
		stack.push('fifth');
		stack.push('sixth');
		stack.push('seventh');
		expect(stack.peek()).to.eql('seventh');
		expect(stack.stack.length).to.eql(7);
		stack.pop();
		stack.pop();
		expect(stack.peek()).to.eql('fifth');
		expect(stack.stack.length).to.eql(5);
		stack.pop();
		stack.pop();
		stack.pop();
		expect(stack.peek()).to.eql('second');
		expect(stack.stack.length).to.eql(2);
		stack.pop();
		expect(stack.peek()).to.eql('first');
		expect(stack.stack.length).to.eql(1);
	});

	it('—`isEmpty` should return `true` if there are no items in a stack', () => {
		expect(stack.isEmpty()).to.eql(true);
		stack.push('first');
		expect(stack.isEmpty()).to.eql(false);
		stack.peek();
		expect(stack.isEmpty()).to.eql(false);
		stack.pop();
		expect(stack.isEmpty()).to.eql(true);
	});

	it('should have a `min` property, which is itself a stack, and an associated `getMin` method', () => {
		expect(stack).to.have.own.property('min');
		expect(stack.min).to.be.instanceof(SingleLL);
		expect(stack.getMin).to.be.a('function');
	});

	it('—`getMin` should return the smallest integer value in the stack', () => {
		stack.push(5);
		expect(stack.getMin()).to.eql(5);
		stack.push(4);
		expect(stack.getMin()).to.eql(4);
		stack.push(6);
		expect(stack.getMin()).to.eql(4);
		stack.push(7);
		expect(stack.getMin()).to.eql(4);
		stack.push(3);
		expect(stack.getMin()).to.eql(3);
		stack.push(1);
		expect(stack.getMin()).to.eql(1);
		stack.pop();
		expect(stack.getMin()).to.eql(3);
		stack.pop();
		expect(stack.getMin()).to.eql(4);
		stack.pop();
		stack.pop();
		stack.pop();
		expect(stack.getMin()).to.eql(5);
		stack.pop();
		expect(stack.getMin()).to.eql(undefined);
	});
});

describe('Queue', () => {
	let queue;

	beforeEach(() => {
		queue = new Queue();
	});

	it('should have `push`, `pop`, `peek` and `isEmpty` methods', () => {
		expect(queue.push).to.be.a('function');
		expect(queue.pop).to.be.a('function');
		expect(queue.peek).to.be.a('function');
		expect(queue.isEmpty).to.be.a('function');
	});

	it('should be implemented with a linked list', () => {
		expect(queue).to.have.own.property('queue');
		expect(queue.queue).to.be.instanceof(SingleLL);
		queue.push('first');
		expect(queue.queue.head).to.be.instanceof(SingleLLNode);
		expect(queue.queue.head.value).to.eql('first');
	});

	it('—`push` method should add items to the queue', () => {
		queue.push('first');
		expect(queue.queue.length).to.eql(1);
		expect(queue.queue.tail.value).to.eql('first');
		expect(queue.queue.head.value).to.eql('first');
		queue.push('second');
		queue.push('third');
		expect(queue.queue.length).to.eql(3);
		expect(queue.queue.tail.value).to.eql('third');
		expect(queue.queue.head.next.value).to.eql('second');
		queue.push('fourth');
		queue.push('fifth');
		queue.push('sixth');
		queue.push('seventh');
		expect(queue.queue.length).to.eql(7);
		expect(queue.queue.tail.value).to.eql('seventh');
	});

	it('—`pop` method should remove items from the queue', () => {
		queue.push('first');
		queue.push('second');
		queue.push('third');
		queue.push('fourth');
		queue.push('fifth');
		queue.push('sixth');
		queue.push('seventh');
		expect(queue.queue.head.value).to.eql('first');
		queue.pop();
		expect(queue.queue.length).to.eql(6);
		expect(queue.queue.tail.value).to.eql('seventh');
		expect(queue.queue.head.value).to.eql('second');
		queue.pop();
		queue.pop();
		expect(queue.queue.length).to.eql(4);
		expect(queue.queue.tail.value).to.eql('seventh');
		expect(queue.queue.head.value).to.eql('fourth');
		queue.pop();
		queue.pop();
		queue.pop();
		expect(queue.queue.length).to.eql(1);
		expect(queue.queue.tail.value).to.eql('seventh');
		expect(queue.queue.head.value).to.eql('seventh');
		queue.pop();
		expect(queue.queue.length).to.eql(0);
		expect(queue.queue.tail).to.eql(null);
	});

	it('—`peek` should return the value of the top item in the queue (but not remove it)', () => {
		queue.push('first');
		queue.push('second');
		queue.push('third');
		queue.push('fourth');
		queue.push('fifth');
		queue.push('sixth');
		queue.push('seventh');
		expect(queue.peek()).to.eql('first');
		expect(queue.queue.length).to.eql(7);
		queue.pop();
		queue.pop();
		expect(queue.peek()).to.eql('third');
		expect(queue.queue.length).to.eql(5);
		queue.pop();
		queue.pop();
		queue.pop();
		expect(queue.peek()).to.eql('sixth');
		expect(queue.queue.length).to.eql(2);
		queue.pop();
		expect(queue.peek()).to.eql('seventh');
		expect(queue.queue.length).to.eql(1);
	});

	it('—`isEmpty` should return `true` if there are no items in a queue', () => {
		expect(queue.isEmpty()).to.eql(true);
		queue.push('first');
		expect(queue.isEmpty()).to.eql(false);
		queue.peek();
		expect(queue.isEmpty()).to.eql(false);
		queue.pop();
		expect(queue.isEmpty()).to.eql(true);
	});
});