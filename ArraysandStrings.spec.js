'use strict';

const expect = require('chai').expect;

const path = './ArraysAndStrings';

const urlify = require(path).urlify;
const isUnique = require(path).isUnique;
const checkPermutation = require(path).checkPermutation;
const palindromePermutation = require(path).palindromePermutation;


describe('isUnique', () => {

	it('should determine whether a string has all unique characters', () => {
		expect(isUnique('')).to.eql(true);
		expect(isUnique(' ')).to.eql(true);
		expect(isUnique('  ')).to.eql(false);
		expect(isUnique('abcdefg')).to.eql(true);
		expect(isUnique('aabcdeg')).to.eql(false);
		expect(isUnique('AaBbCcDd')).to.eql(true);
		expect(isUnique('AAaBbCcDd')).to.eql(false);
	});

});

describe('checkPermutation', () => {

	it('should determine whether, given two strings, one is a permutation of another', () => {
		expect(checkPermutation('','')).to.eql(true);
		expect(checkPermutation(' ','  ')).to.eql(false);
		expect(checkPermutation('  ','  ')).to.eql(true);
		expect(checkPermutation('aa','aa')).to.eql(true);
		expect(checkPermutation('ab','ba')).to.eql(true);
		expect(checkPermutation('aa','ab')).to.eql(false);
		expect(checkPermutation('aa','aA')).to.eql(false);
		expect(checkPermutation('aa ','aa')).to.eql(false);
		expect(checkPermutation('aa ',' aa')).to.eql(true);
	});
});

describe('urlify', () => {

	it('should replace all spaces with "%20"', () => {
		expect(urlify('')).to.eql(null);
		expect(urlify(' ')).to.eql('%20');
		expect(urlify(' a')).to.eql('%20a');
		expect(urlify('a ')).to.eql('a%20');
		expect(urlify('a a')).to.eql('a%20a');
		expect(urlify('a a ')).to.eql('a%20a%20');
		expect(urlify('a  a ')).to.eql('a%20%20a%20');
	});

});

describe('palindromePermutation', () => {

	it('should determine whether a given string is a permutation of a palindrome', () => {
		expect(palindromePermutation('')).to.equal(true);
		expect(palindromePermutation('a')).to.equal(true);
		expect(palindromePermutation('aa')).to.equal(true);
		expect(palindromePermutation('aa ')).to.equal(true);
		expect(palindromePermutation('aab')).to.equal(true);
		expect(palindromePermutation('ab')).to.equal(false);
		expect(palindromePermutation('aa  ')).to.equal(true);
		expect(palindromePermutation('aab ')).to.equal(true);
		expect(palindromePermutation('aabb')).to.equal(true);
		expect(palindromePermutation('aabb ')).to.equal(true);
		expect(palindromePermutation('aabbc')).to.equal(true);
		expect(palindromePermutation('aabc')).to.equal(false);
		expect(palindromePermutation('aabbccde')).to.equal(false);
	});

});