'use strict';

const chai = require('chai');
const assert = chai.assert;

const compose = require('./Compose').compose;

describe('"compose" Test Suite', function() {

  function addOne(a) {
    return a + 1;
  }

  function timesTwo(a) {
    return a * 2;
  }

  it('takes a list of two single arg functions', function() {
    const a1 = compose([addOne, timesTwo])(1);
    assert.equal(a1, 3);
    const a2 = compose([addOne, timesTwo])(50);
    assert.equal(a2, 101);
    const a3 = compose([addOne, timesTwo])(-5);
    assert.equal(a3, -9);
    const a4 = compose([addOne, timesTwo])(-.5);
    assert.equal(a4, 0);
      // changing order of arguments
    const a5 = compose([timesTwo,addOne])(1);
    assert.equal(a5, 4);
    const a6 = compose([timesTwo, addOne])(-5);
    assert.equal(a6, -8);
      // changing number of arguments
    const a7 = compose([addOne, timesTwo, addOne, addOne, addOne])(1);
    assert.equal(a7, 9);
    const a8 = compose([addOne, timesTwo, addOne, timesTwo, addOne, addOne, timesTwo])(3);
    assert.equal(a8, 35);
  });
});