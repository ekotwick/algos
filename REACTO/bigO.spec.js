'use strict';

const path = require('./bigO');
const expect = require('chai').expect;

const findDef = path.findDef;
const searchString = path.searchString;
const stringPermutation = path.stringPermutation;

describe('searchString', () => {
  it('should return the first index appearance of one string inside of another string', () => {
    expect(searchString('or','hello world')).to.eql(7);
    expect(searchString('howdy', 'hello')).to.eql(-1);
  });
});

describe('findDef', () => {
  let dictionary = [
    'a - the_first_thing',
    'b - the_second_thing',
    'c - the_third_thing',
    'd - the_fourth_thing'
  ]
  it('should take a dictionary (array of strings) and a word (string) as arguments and return the definition of the word if the definition exists, undefined otherwise', () => {
    expect(findDef('a',dictionary)).to.eql('the_first_thing');
    expect(findDef('b',dictionary)).to.eql('the_second_thing');
    expect(findDef('c',dictionary)).to.eql('the_third_thing');
    expect(findDef('d',dictionary)).to.eql('the_fourth_thing');
    expect(findDef('e',dictionary)).to.eql(undefined);
  });
});

describe('stringPermutation', () => {
  it('should return all permutations of a string', () => {

  });
});