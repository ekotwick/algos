'use strict';

const expect = require('chai').expect;

const path = require('./ArraysAndStrings');

const urlify = path.urlify;
const oneAway = path.oneAway;
const isUnique = path.isUnique;
const checkPermutation = path.checkPermutation;
const stringCompressor = path.stringCompressor;
const palindromePermutation = path.palindromePermutation;


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

describe('oneAway', () => {
	it('should determine whether two strings are different by no more than one letter', () => {
		expect(oneAway('', '')).to.eql(true);
		expect(oneAway('a', '')).to.eql(true);
		expect(oneAway('dog', 'd')).to.eql(false);
		expect(oneAway('dog', 'dg')).to.eql(true);
		expect(oneAway('dog', 'd g')).to.eql(true);
		expect(oneAway('dog', 'dig')).to.eql(true);
		expect(oneAway('dog', 'dogo')).to.eql(true);
		expect(oneAway('dog', 'dab')).to.eql(false);
		expect(oneAway('dog', 'dago')).to.eql(false);
		expect(oneAway('dog', 'd g ')).to.eql(false);
		expect(oneAway('dog', 'dogoo')).to.eql(false);
		expect(oneAway('dog', 'doggoo')).to.eql(false);
	});
});

describe('stringCompressor', () => {
	it('should replace all consecutively repeating characters in a string by the character followed by the number of consecutive repetitions of that character', () => {
		expect(stringCompressor('aa')).to.eql('a2');
		expect(stringCompressor('aaa')).to.eql('a3');
		expect(stringCompressor('aaab')).to.eql('a3b1');
		expect(stringCompressor('aaabc')).to.eql('a3b1c1');
		expect(stringCompressor('aaabbc')).to.eql('a3b2c1');
		expect(stringCompressor('aabbcc')).to.eql('a2b2c2');
	});
	it('should return the original string if there are no consecutively repeating characters', () => {
		expect(stringCompressor('')).to.eql('');
		expect(stringCompressor('a')).to.eql('a');
		expect(stringCompressor('abc')).to.eql('abc');
		expect(stringCompressor('abca')).to.eql('abca');
	});
});
