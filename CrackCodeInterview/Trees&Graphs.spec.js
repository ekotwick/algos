'use strict';

const expect = require('chai').expect;

const path = require('./Trees&Graphs');

const BinaryTree = path.BinaryTree;
const BinarySearchTree = path.BinarySearchTree;
const Graph = path.Graph;

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

describe('BinarySearchTree', () => {
  let bst;

  beforeEach(() => {
    bst = new BinarySearchTree(10);
  });

  it('should have `length`, `value`, `left`, and `right` properties', () => {
    expect(bst).to.have.own.property('length');
    expect(bst).to.have.own.property('value');
    expect(bst).to.have.own.property('left');
    expect(bst).to.have.own.property('right');
  });

  it('should have `insert`, `find`, `search`, breadth first traversal, and depth first traversal methods', () => {
    expect(bst.insert).to.be.a('function');
    expect(bst.insert).to.be.a('function');
    expect(bst.bft).to.be.a('function');
    expect(bst.dft).to.be.a('function');
    expect(bst.search).to.be.a('function');
  });

  it('—`insert` should add elements to the tree', () => {
    expect(bst.length).to.eql(1);
    bst.insert(1);
    bst.insert(2);
    bst.insert(3);
    expect(bst.length).to.eql(4);
    bst.insert(4);
    bst.insert(5);
    expect(bst.length).to.eql(6);
  });

  it('—`find` should use breadth first search or depth first search to determine whether an element exists in the tree', () => {
    bst.insert(1);
    bst.insert(2);
    bst.insert(3);
    bst.insert(4);
    bst.insert(5);
    expect(bst.find(5, 'depth-first', 'pre-order')).to.eql(true);
    expect(bst.find(4, 'depth-first', 'in-order')).to.eql(true);
    expect(bst.find(3, 'depth-first', 'post-order')).to.eql(true);
    expect(bst.find(2, 'breadth-first')).to.eql(true);
    expect(bst.find(1)).to.eql(true);
    expect(bst.find(6)).to.eql(false);
    expect(bst.find(0)).to.eql(false);
  });

  it('—`search` should leverage the logical structure of the BinarySearchTree (and not be the ridiculous `find` algorithm used for the BinaryTree', () => {
    let valuesToInsert = [25, 5, 17, 21, 28, 0, 14, 50, 1, 45, 13, 12, 11, 30, 35, 33, 31, 34];
    for (let i = 0; i < valuesToInsert.length; i++) {
      bst.insert(valuesToInsert[i]);
    }
    expect(bst.search(10)).to.eql(true);
    expect(bst.search(25)).to.eql(true);
    expect(bst.search(50)).to.eql(true);
    expect(bst.search(35)).to.eql(true);
    expect(bst.search(31)).to.eql(true);
    expect(bst.search(6)).to.eql(false);
    expect(bst.search(100)).to.eql(false);
  });

  it ('should insert values in order', () => {
    let bst = new BinarySearchTree(15);
    let valuesToInsert = [25, 5, 17, 21, 28, 0, 14, 50, 1, 45, 13, 12, 11, 30, 35, 33, 31, 34];
    for (let i = 0; i < valuesToInsert.length; i++) {
      bst.insert(valuesToInsert[i]);
    }

    let testArr = [];
    const pusher = (val) => testArr.push(val);

    bst.dft(pusher, 'pre-order');
    expect(testArr).to.eql([15,5,0,1,14,13,12,11,25,17,21,28,50,45,30,35,33,31,34]);

    testArr =[];
    bst.dft(pusher, 'in-order');
    expect(testArr).to.eql([0,1,5,11,12,13,14,15,17,21,25,28,30,31,33,34,35,45,50]);

    testArr =[];
    bst.dft(pusher, 'post-order');
    expect(testArr).to.eql([1,0,11,12,13,14,5,21,17,31,34,33,35,30,45,50,28,25,15]);

    testArr =[];
    bst.bft(pusher);
    expect(testArr).to.eql([15,5,25,0,14,17,28,1,13,21,50,12,45,11,30,35,33,31,34]);
  });
});

describe('Graph', () => {
  let graph;

  beforeEach(() => {
    graph = new Graph();
    graph.insert(1,2,3,4,5,6);
    graph.insert(2,3,4,1,5);
    graph.insert(4,7,8,4,13,14);
    graph.insert(3,1,2,6,4);
    graph.insert(5,4,1,23,4,3);
  });

  it('should have `insert`, `findNode`, `remove`, and `findEdge` methods', () => {
    expect(graph.insert).to.be.a('function');
    expect(graph.findNode).to.be.a('function');
    expect(graph.remove).to.be.a('function');
    expect(graph.findEdge).to.be.a('function');
  });

  it('should have `node` property...', () => {
    expect(graph).to.have.own.property('nodes');
  });

  it('...which should be an object literal, the values of which are Set instances', () => {
    expect(graph.nodes).to.be.instanceof(Object);
    expect(graph.nodes[1]).to.be.instanceOf(Set);
    expect(graph.nodes[2]).to.be.instanceOf(Set);
    expect(graph.nodes[3]).to.be.instanceOf(Set);
    expect(graph.nodes[4]).to.be.instanceOf(Set);
    expect(graph.nodes[5]).to.be.instanceOf(Set);
  });

  it('`inset` should insert nodes and all related edges to the graph', () => {
    expect(graph[1]).to.exist();
    expect(graph[2]).to.exist();
    expect(graph[3]).to.exist();
    expect(graph[4]).to.exist();
    expect(graph[5]).to.exist();
    expect(graph[6]).to.not.exist();
    graph.insert(6,5,3,1,6,7);
    expect(graph[7]).to.exist();
  });

  it('`findNode` should check to see whether the graph contains a specified node', () => {
    expect(findNode[1]).to.eql(true);
    expect(findNode[2]).to.eql(true);
    expect(findNode[3]).to.eql(true);
    expect(findNode[4]).to.eql(true);
    expect(findNode[5]).to.eql(true);
    expect(findNode[6]).to.eql(false);
  });

  it('`findEdge` should determine whether a given edge (startNode - endNode pair) exists in the graph', () => {

  });

  it('`remove` should remove a given node from the graph, and connected nodes should be adjusted accordingly', () => {

  });
});