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

	it('should have `push`, `pop`, `peek` and `isEmpty` methods', () => {
		expect(stack.push).to.be.a('function');
		expect(stack.pop).to.be.a('function');
		expect(stack.peek).to.be.a('function');
		expect(stack.isEmpty).to.be.a('function');
	});

	it('should be implemented with a linked list', () => {
		expect(stack).to.have.own.property('stack');
		expect(stack.stack).to.be.instanceof(SingleLL);
		stack.push('first');
		expect(stack.stack.head).to.be.instanceof(SingleLLNode);
		expect(stack.stack.head.value).to.eql('first');
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
});