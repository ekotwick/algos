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
		if(charCountHash[str1[i]]) charCountHash[str1[i]] +=1;
		else charCountHash[str1[i]] = 1;
	};

	for (let j = 0; j < str2.length; j++) {
		if(charCountHash[str2[j]]) charCountHash[str2[j]] -=1;
		else return false;
	};

	const charCount = Object.values(charCountHash);
	for (let k = 0; k < charCount.length; k++) {
		if (charCount[k] > 0) return false;
	};

	return true;
};

const urlify = str => {

	if (!str.length) return null;

	return str.split('').map(ch => {
		if (ch === ' ') return '%20';
		return ch;
	}).join('');
	
};

module.exports = { isUnique, checkPermutation, urlify };