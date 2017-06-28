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
    graph.insertNode('a','b','c','d','e');
    graph.insertNode('f','b','c','a');
    graph.insertNode('c','g','h','c','y','x','d');
    graph.insertNode('b','a','z','e','c');
    graph.insertNode('d','c','a','z','b');
    graph.insertNode('m','m');
  });

  it('should have `insertNode`, `findNode`, `getNode`, `getNodes`, `removeNode`, `insertEdge`, findEdge`, `removeEdge`, `getEdges`, `getAllEdges` methods', () => {
    expect(graph.insertNode).to.be.a('function');
    expect(graph.findNode).to.be.a('function');
    expect(graph.removeNode).to.be.a('function');
    expect(graph.findEdge).to.be.a('function');
  });

  it('should have `nodes` property...', () => {
    expect(graph).to.have.own.property('nodes');
  });

  it('...which should be an object literal, the values of which are Set instances', () => {
    expect(graph.nodes).to.be.instanceof(Object);
    expect(graph.nodes['a']).to.be.instanceOf(Set);
    expect(graph.nodes['f']).to.be.instanceOf(Set);
    expect(graph.nodes['b']).to.be.instanceOf(Set);
    expect(graph.nodes['c']).to.be.instanceOf(Set);
    expect(graph.nodes['d']).to.be.instanceOf(Set);
  });

  it('`insertNode` should insertNode nodes and all related edges to the graph', () => {
    expect(graph.nodes['a']).to.exist;
    expect(graph.nodes['f']).to.exist;
    expect(graph.nodes['b']).to.exist;
    expect(graph.nodes['c']).to.exist;
    expect(graph.nodes['d']).to.exist;
    expect(graph.nodes['z']).to.exist;
    expect(graph.nodes['x']).to.exist;
    expect(graph.nodes['o']).to.not.exist;
    graph.insertNode('e','d','b','a','e','g','o');
    expect(graph.nodes['o']).to.exist;
  });

  it('`findNode` should check to see whether the graph contains a specified node', () => {
    expect(graph.findNode('a')).to.eql(true);
    expect(graph.findNode('f')).to.eql(true);
    expect(graph.findNode('b')).to.eql(true);
    expect(graph.findNode('c')).to.eql(true);
    expect(graph.findNode('d')).to.eql(true);
    expect(graph.findNode('e')).to.eql(true);
    expect(graph.findNode('g')).to.eql(true);
    expect(graph.findNode('h')).to.eql(true);
    expect(graph.findNode('y')).to.eql(true);
    expect(graph.findNode('x')).to.eql(true);
    expect(graph.findNode('z')).to.eql(true);
    expect(graph.findNode('s')).to.eql(false);
    expect(graph.findNode('r')).to.eql(false);
    expect(graph.findNode('w')).to.eql(false);
    expect(graph.findNode('u')).to.eql(false);
    expect(graph.findNode('v')).to.eql(false);
    expect(graph.findNode('t')).to.eql(false);
  });

  it('`getNode` should return a specified node together with its connections; returns undefined for non-existent nodes and an empty array for nodes without connections', () => {
    expect(graph.getNode('a')).to.eql({'a': ['b','c','d','e']});
    expect(graph.getNode('d')).to.eql({'d': ['c','a','z','b']});
    expect(graph.getNode('x')).to.eql({'x': []});
    expect(graph.getNode('z')).to.eql({'z': []});
  });

  it('`getNodes` should return all the nodes in the graph', () => {
    let test = ['a','f','b','c','d','e','g','h','y','x','z','m'];
    let nodes = graph.getNodes();
    expect(nodes.length).to.eql(test.length);
    test.forEach(n => {
      expect(nodes.includes(n)).to.eql(true);
    });
  });

  it('`removeNode` should remove a given node from the graph, and connected nodes should be adjusted accordingly; it should return the graph (for chaning purposes)', () => {
    expect(graph.removeNode('z')).to.be.instanceof(Graph);
    expect(graph.getNode('b')).to.eql({'b': ['a','e','c']});
    expect(graph.getNode('d')).to.eql({'d': ['c','a','b']});
    expect(graph.getNode('f')).to.eql({'f': ['b','c','a']});
    graph.removeNode('a');
    expect(graph.getNode('f')).to.eql({'f': ['b','c']});
    expect(graph.getNode('b')).to.eql({'b': ['e','c']});
    expect(graph.getNode('d')).to.eql({'d': ['c','b']});
  });

  it('`insertEdge` should create an edge between an existing node (arg1) and either an existing node or a new node (arg2), and it should return the graph instance', () => {
    expect(graph.insertEdge('a','t')).to.be.instanceof(Graph);
    expect(graph.getNodes().includes('t')).to.eql(true);
    expect(graph.getNode('a')['a'].includes('t')).to.eql(true);
    graph.insertEdge('a','m');
    expect(graph.getNode('a')['a'].includes('m')).to.eql(true);
  })

  it('`findEdge` should determine whether a given edge (startNode - endNode pair) exists in the graph (not that these are directional edges)', () => {
    expect(graph.findEdge('f','b')).to.eql(true);
    expect(graph.findEdge('b','f')).to.eql(f);
    expect(graph.findEdge('c','c')).to.eql(true);
    expect(graph.findEdge('d','z')).to.eql(true);
    expect(graph.findEdge('b','e')).to.eql(true);
    expect(graph.findEdge('a','f')).to.eql(false);
    expect(graph.findEdge('e','b')).to.eql(false);
    expect(graph.findEdge('f','d')).to.eql(false);
    expect(graph.findEdge('e','b')).to.eql(false);
    expect(graph.findEdge('f','z')).to.eql(false);
    expect(graph.findEdge('z','f')).to.eql(false);
  });

  it('`removeEdge` should remove an edge for a given node, without, however, removing the source node from the graph, and should return undefined for non-existent nodes and edges', () => {
    graph.removeEdge('c','x');
    expect(graph.getNodes().includes('x')).to.eql(true);
    expect(graph.getNode('c')).to.eql(['c','g','h','c','y','d']);
    graph.removeEdge('a','d');
    expect(graph.getNode('a')).to.eql(['b','c','e']);
    expect(graph.getNode('d')).to.eql(['c','a','z','b']);
  });

  it('`getEdges` should return all the edges for a given node; it should return undefined for non-existent nodes and return an empty array for nodes without edges', () => {
    expect(graph.getEdges('a')).to.eql(['f','b','c','d','e']);
    expect(graph.getEdges('c')).to.eql(['g','h','c','y','x']);
    expect(graph.getEdges('z')).to.eql([]);
    expect(graph.getEdges('x')).to.eql([]);
  });

  it('`getAllEdges` should return an array of all edges in the graph', () => {
    let allEdgesTest = [['a','b'],['a','c'],['a','d'],['a','e'],['f','b'],['f','c'],['f','a'],['c','g'],['c','h'],['c','c'],['c','y'],['c','x'],['c','d'],['b','a'],['b','z'],['b','e'],['b','c'],['d','c'],['d','a'],['d','z'],['d','b'],['m','m']];
    let allEdgesMethod = graph.getAllEdges();
    let test = allEdgesTest.filter(e => !allEdgesMethod.includes(e));
    expect(test).to.have.length(0);
  });
});