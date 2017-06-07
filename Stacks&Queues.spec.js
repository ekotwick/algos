'use strict';

const spy = require('sinon').spy;
const expect = require('chai').expect;
const should = require('chai').should;
const assert = require('chai').assert;

const path = require('./Stacks&Queues');
const linkedList = require('./LinkedList');

const Stack = path.Stack;
const Queue = path.Queue;
const SetOfStacks = path.SetOfStacks;
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

describe('SetOfStacks', () => {
	let stackSet;

	beforeEach(() => {
		stackSet = new SetOfStacks();
	});

	it('should have `set` and `stackSize` properties', () => {
		expect(stackSet).to.have.own.property('set');
		expect(stackSet).to.have.own.property('stackSize');
	});

	it('—`set` should be an array and the first element of it should be a stack', () => {
		expect(stackSet.set).to.be.instanceof(Array);
		expect(stackSet.set[0]).to.be.instanceof(Stack);
	});

	it('—`stackSize` should be an integer value', () => {
		expect(stackSet.stackSize).to.be.a('number');
		stackSet.setStackSize(1.1);
		expect(stackSet.stackSize).to.eql(0);
		stackSet.setStackSize(1);
		expect(stackSet.stackSize).to.eql(1);
	});

	it('should have `setStackSize`, `push`, pop`, `popAt` and `popAtRollOver` properties', () => {
		expect(stackSet.setStackSize).to.be.a('function');
		expect(stackSet.push).to.be.a('function');
		expect(stackSet.pop).to.be.a('function');
		expect(stackSet.popAt).to.be.a('function');
		expect(stackSet.popAtRollOver).to.be.a('function');
	});

	it('—`setStackSize` should set the size for each stack in `set`', () => {
		const setStackSizeSpy = spy(stackSet, 'setStackSize');
		stackSet.setStackSize(4);
		expect(setStackSizeSpy.callCount).to.eql(1);
		assert(setStackSizeSpy.calledWith(4));
		expect(stackSet.stackSize).to.eql(4);
	});

	it('—`push` should add item to stack, and when stack is at capacity, initialize a new stack at the next index of `set`', () => {
		stackSet.setStackSize(3);
		stackSet.push(1);
		stackSet.push(2);
		expect(stackSet.set.length).to.eql(1);
		stackSet.push(3);
		expect(stackSet.set[0].stack.length).to.eql(3);
		expect(stackSet.set[1]).to.be.instanceof(Stack);
		stackSet.push(4);
		expect(stackSet.set.length).to.eql(2);
		expect(stackSet.set[0].stack.tail.value).to.eql(3);
		expect(stackSet.set[1].stack.tail.value).to.eql(4);
	});

	it('—`pop` should remove the most recent item added to the set of stacks, and remove empty stacks from `set`', () => {
		stackSet.setStackSize(2);
		stackSet.push(1);
		stackSet.push(2);
		stackSet.push(3);
		const popAtSpy = spy(stackSet, 'popAt');
		expect(stackSet.set.length).to.eql(2);
		expect(stackSet.set[1].stack.tail.value).to.eql(3);
		stackSet.pop();
		expect(stackSet.set.length).to.eql(1);
		expect(stackSet.set[0].stack.tail.value).to.eql(2);
		expect(popAtSpy.callCount).to.eql(1);
		assert(popAtSpy.calledWith(1));
		stackSet.pop();
		expect(stackSet.set.length).to.eql(1);
		expect(stackSet.set[0].stack.tail.value).to.eql(1);
		expect(popAtSpy.callCount).to.eql(2); // 2 because called a second time
		assert(popAtSpy.calledWith(0));
	});

	it('—`popAt` should remove the top-most item in a stack at a specific index in `set`, and remove empty stacks from `set`', () => {
		stackSet.setStackSize(2);
		stackSet.push(1);
		stackSet.push(2);
		stackSet.push(3);
		stackSet.push(4);
		stackSet.push(5);
		stackSet.push(6);
		stackSet.push(7);
		stackSet.push(8);
		expect(stackSet.set.length).to.eql(5); // 4 because a new stack is created as soon as one is filled, even if there is nothing to place in the newly created stack
		expect(stackSet.set[1].stack.tail.value).to.eql(4);
		let test1 = stackSet.popAt(1);
		expect(test1).to.eql(4);
		expect(stackSet.set[1].stack.tail.value).to.eql(3);
		let test2 = stackSet.popAt(1);
		expect(test2).to.eql(3);
		expect(stackSet.set.length).to.eql(4);
		expect(stackSet.set[1].stack.tail.value).to.eql(6);
	});

	it('—`popAtRollOver` should, remove item from stack at specified index of set and then adjust all stacks in `set` such that all but the last are filled', () => {
		stackSet.setStackSize(2);
		stackSet.push(1);
		stackSet.push(2);
		stackSet.push(3);
		stackSet.push(4);
		stackSet.push(5);
		stackSet.push(6);
		expect(stackSet.set.length).to.eql(4);
		let test1 = stackSet.popAtRollOver(1);
		expect(test1).to.eql(4);
		expect(stackSet.set[1].stack.tail.value).to.eql(5);
		expect(stackSet.set[2].stack.tail.value).to.eql(6);
		expect(stackSet.set[1].stack.length).to.eql(2);
		expect(stackSet.set[2].stack.length).to.eql(1);
		let test2 = stackSet.popAtRollOver(0);
		expect(test2).to.eql(2);
		expect(stackSet.set.length).to.eql(3);
		expect(stackSet.set[1].stack.tail.value).to.eql(6);
		expect(stackSet.set[0].stack.tail.value).to.eql(3);
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