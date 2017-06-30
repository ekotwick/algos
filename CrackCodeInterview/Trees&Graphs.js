'use strict';

const LinkedList = require('./LinkedList').DoublyLinkedList;
const LLNode = require('./LinkedList').dblLLNode;

// ################################################## //
// ################################################## //
// ##########                              ########## //
// ##########         BINARY TREE          ########## //
// ##########                              ########## //
// ################################################## //
// ################################################## //

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

// ################################################## //
// ################################################## //
// ##########                              ########## //
// ##########     BINARY SEARCH TREE       ########## //
// ##########                              ########## //
// ################################################## //
// ################################################## //

class BinarySearchTree extends BinaryTree {
  constructor(val) {
    super(val);
  }

  search(val) {
    if (this.value === val) return true;
    let dir = val < this.value ? 'left' : 'right';
    if (!this[dir]) return false;
    return this[dir].search(val);
  }

  insert(val) {
    this.length++;
    let dir = this.value > val ? 'left' : 'right';
    if (this[dir]) this[dir].insert(val);
    else this[dir] = new BinarySearchTree(val);
  }
}

// ################################################## //
// ################################################## //
// ##########                              ########## //
// ##########       BINARY TREE FUNCS      ########## //
// ##########                              ########## //
// ################################################## //
// ################################################## //

function minimalTree (arr, start=0, end=arr.length) {
  let mid = Math.floor((end - start) / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid + 1);

  this.value = arr[mid];
  if (left.length) {
    this.left = new BinarySearchTree();
    this.left.minimalTree(left);
  }
  if (right.length) {
    this.right = new BinarySearchTree();
    this.right.minimalTree(right);
  }
  return this;
}

function listOfDepths (depth=0, map={}) {
  if (!map[depth]) {
    map[depth] = new LinkedList();
    map[depth].addToHead(this.value);
  } else {
    map[depth].addToTail(this.value);
  }

  depth++;
  if (this.left) this.left.listOfDepths(depth, map);
  if (this.right) this.right.listOfDepths(depth, map);

  return map;
}

function checkBalance () { // function declaration to deal with `this` context
  this.values = [];

  const pusher = (left, right) => { // arrow function to deal with `this` context
    if (left && !right) {
      if (left.length > 1) this.values.push(false);
    } else if (!left && right) {
      if (right.length > 1) this.values.push(false);
    } else if (!left && !right) {
      this.values.push(true);
    } else {
      if (Math.abs(left.length - right.length) > 1) this.values.push(false);
      else this.values.push(true);
    }
  };

  this.dftBalance(pusher);

  const combiner = (el1, el2) => el1 && el2;

  return this.values.reduce((el1, el2) => combiner(el1, el2), true); // assume true until proven otherwise
}

function dftBalance(callback) {
  callback(this.left, this.right);
  if (this.left) this.left.dftBalance(callback);
  if (this.right) this.right.dftBalance(callback);
}

// ################################################## //
// ################################################## //
// ##########                              ########## //
// ##########             GRAPHS           ########## //
// ##########                              ########## //
// ################################################## //
// ################################################## //

class Graph {
  constructor() {
    this.nodes = {};
  }

  findNode(val) {
    if (Object.keys(this.nodes).includes(val)) return true;
    return false;
  }

  insertNode(val, ...neighbors) {
    if (!this.findNode(val)) this.nodes[val] = new Set(neighbors);
    else neighbors.forEach(n => (this.nodes[val].add(n)));
    neighbors.forEach(n => {
      if (!this.nodes[n]) this.insertNode(n);
    });
  }

  getNode(val) {
    let result = {};
    result[val] = [...this.nodes[val]];
    return result;
  }

  getConnections(node) {
    if (this.findNode(node)) return [...this.nodes[node]];
    else return;
  }

  getAllNodes() {
    return Object.keys(this.nodes);
  }

  removeNode(val) {
    if (!this.findNode(val)) return;
    delete this.nodes[val];
    for (let key in this.nodes) {
      this.nodes[key].delete(val);
    }
    return this;
  }

  findEdge(start, end) {
    if (!this.findNode(start)) return false;
    if (this.nodes[start].has(end)) return true;
    return false;
  }

  insertEdge(start, end) {
    if (this.findEdge(start, end)) return; 
    this.insertNode(start, end);
    return this;
  }

  removeEdge(start, end) {
    if (!this.findEdge(start, end)) return;
    this.nodes[start].delete(end);
    return this;
  }

  getEdges(start) {
    let connections = this.getConnections(start);
    return connections.map(c => [start, c]);
  }

  getAllEdges() {
    let result = [];
    for (let nodeKey in this.nodes) {
      for (let setKey of this.nodes[nodeKey]) {
        result.push([nodeKey, setKey]);
      }
    }
    return result;
  }
}

// ################################################## //
// ################################################## //
// ##########                              ########## //
// ##########         GRAPH FUNCS          ########## //
// ##########                              ########## //
// ################################################## //
// ################################################## //

function findRoute(start, end) {
  if (!this.findNode(start)) return;
  let checker = (n1) => n1 === end;

  let queue = [start];
  let visited = new Set();

  while (queue.length) {
    let current = queue.shift();
    visited.add(current);
    let connections = this.getConnections(current);
    if (connections) {
      connections.forEach(c => {
        if (!visited.has(c)) {
          queue.push(c);
        }
      });
    }
    if (checker(current)) return true;
  }

  return false;
}

module.exports = { BinaryTree, BinarySearchTree, Graph, findRoute, minimalTree, listOfDepths, checkBalance, dftBalance }