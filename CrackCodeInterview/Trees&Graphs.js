'use strict';

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

  getNodes() {
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
    return [...this.nodes[start]];
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

module.exports = { BinaryTree, BinarySearchTree, Graph }