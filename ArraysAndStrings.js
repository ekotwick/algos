'use strict';

const isUnique = str => {

	const charCountHash = {};

	for (let i = 0; i < str.length; i++) {
		if (charCountHash[str[i]]) return false;
		else charCountHash[str[i]] = true;
	}

	return true;
};

const checkPermutation = (str1, str2) => {

	const charCountHash = {};

	for (let i = 0; i < str1.length; i++) {
		if(charCountHash[str1[i]]) charCountHash[str1[i]]++;
		else charCountHash[str1[i]] = 1;
	}

	for (let j = 0; j < str2.length; j++) {
		if(charCountHash[str2[j]]) charCountHash[str2[j]]--;
		else return false;
	}

	const charCount = Object.values(charCountHash);
	for (let k = 0; k < charCount.length; k++) {
		if (charCount[k] > 0) return false;
	}

	return true;
};

const urlify = str => {

	if (!str.length) return null;

	return str.split('').map(ch => {
		if (ch === ' ') return '%20';
		return ch;
	}).join('');
};

const palindromePermutation = str => {

	const charSet = {};

	for (let i = 0; i < str.length; i++) {
		if(str[i] === ' ') continue;
		if(charSet[str[i]]) charSet[str[i]]++;
		else charSet[str[i]] = 1;
	}

	let oddCharacters = Object.values(charSet).filter(num => num % 2 > 0);

	if (oddCharacters.length < 2) return true;
	return false;
};

const oneAway = (str1, str2) => {
	if (str1.length === str2.length) return sameLength(str1, str2);
	return diffLength(str1, str2);
};

const sameLength = (s1, s2) => {

	let diffCount = 0;

	for (let i = 0; i < s1.length; i++) {
		if (s1[i] !== s2[i]) {
			diffCount++;
			if (diffCount > 1) return false;
		}
	}

	return true;
};

const diffLength = (s1, s2) => {

	let short = s1.length < s2.length ? s1 : s2;
	let long = short === s1 ? s2 : s1;
	let idxS = 0;
	let idxL = 0;

	while(idxS < short.length || idxL < long.length) {
		if(short[idxS] !== long[idxL]) {
			if (idxS !== idxL) return false;
			idxL++;
		} else {
			idxS++;
			idxL++;
		}
	}

	return true;
};

const stringCompressor = str => {

	let result = '';
	let i = 0;
	let currChar = str[i];
	let count = 0;
	let isCompressed = false;

	while (i < str.length) {

		if (str[i] === currChar) {
			count++;
			i++;
			if (!isCompressed && count > 1) isCompressed = true;
		} else {
			result += currChar;
			result += count;
			currChar = str[i];
			count = 1;
			i++;
		}

	}
	
	result += currChar;
	result += count;

	if (isCompressed) return result;
	return str;
};

const rotateMatrix = matrix => {
	return matrix;
};

const zeroMatrix = matrix => {

	const findZeros = matrix => {
		const rows = new Set();
		const cols = new Set();
		for (let col = 0; col < matrix.length; col++) {
			for (let row = 0; row < matrix.length; row++) {
				if (matrix[col][row] === 0) {
					rows.add(row);
					cols.add(col);
				}
			}
		}
		return [rows, cols];
	};

	const [rows, cols] = findZeros(matrix);

	for (let col = 0; col < matrix.length; col++) {
		for (let row = 0; row < matrix.length; row++) {
			if (rows.has(row) || cols.has(col)) matrix[col][row] = 0;
		}
	}

	return matrix;
};

const stringRotation = (str1, str2) => {
	if (str1 === str2) return false;
	const newString = str1 + str1;
	return newString.includes(str2);
}

module.exports = { isUnique, checkPermutation, urlify, palindromePermutation, oneAway, stringCompressor, zeroMatrix, stringRotation };