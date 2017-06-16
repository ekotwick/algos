'use strict';

const spy = require('sinon').spy;
const expect = require('chai').expect;
const path = require('./NumberSubSequences');

const checkInput = path.checkInput;
const processInput = path.processInput;
const numberSubSequences = path.numberSubSequences;

describe('numberSubSequences', () => {
  // it('should preprocess input with a utility function', () => {
  //  let processSpy = spy(processInput);
  //  let checkSpy = spy(checkInput);
  //  numberSubSequences('banana,ban');
  //  expect(processSpy.callCount).to.eql(1);
  //  expect(processSpy.calledWith('banana,ban'));
  //  expect(checkSpy.callCount).to.eql(1);
  //  expect(checkSpy.calledWith('banana,ban'));
  //  expect(processInput('banana,ban')).to.eql(['banana', 'ban']);
  //  expect(checkSpy('banana,ban')).to.eql(true);
  // });

  // it('should accept a string as an input which should consist of sequence X and subsequence Z seperated by a comma', () => {
  //  let func = () => { return 1 };
  //  let checkSpy = spy(checkInput);
  //  expect(checkSpy(['banana'])).to.throw('invalid input');
  //  expect(checkSpy({'a': 'h'})).to.throw('invalid input');
  //  expect(checkSpy(4)).to.throw('invalid input');
  //  expect(checkSpy(true)).to.throw('invalid input');
  //  expect(checkSpy(func)).to.throw('invalid input');
  //  expect(checkSpy('banana')).to.throw('invalid input');
  // });

  it('should return an integer which should indicate how many subsequences Z appear in sequence X, respecting order', () => {
    expect(numberSubSequences(',nope')).to.eql(0);
    expect(numberSubSequences('nope,')).to.eql(1);
    expect(numberSubSequences('banana,ban')).to.eql(3);
    expect(numberSubSequences('banana,banromodomo')).to.eql(0);
    expect(numberSubSequences('bananaromodomo,ban')).to.eql(3);
    expect(numberSubSequences('bananaromodomoan,ban')).to.eql(7);
    expect(numberSubSequences('babgbag,bag')).to.eql(5);
    expect(numberSubSequences('rabbbit,rabbit')).to.eql(3);
  });
});