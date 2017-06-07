'use strict';

//'babgbag,bag'
const numberSubSequences = input => {
	let [seq, subseq] = processInput(input);
	return findNumSeqs(seq, subseq);
};

const processInput = input => {
	let seq, subseq;
	if (checkInput(input)) {
		seq = input.split(',')[0];
		subseq = input.split(',')[1];
	}
	return [seq, subseq];
};

const checkInput = input => {
	let err = new Error('invalid input');
	if (typeof input !== 'string') throw err;
	else if (input.split(',').length === 1) throw err;
	else return true;
};

const findNumSeqs = (seq, subseq) => {
	if (subseq === '') return 1;
	else if (seq === '') return 0;

	let lastSeq = seq[seq.length - 1];
	let lastSubseq = subseq[subseq.length - 1];

	let seqLessOne = seq.slice(0,-1);
	let subseqLessOne = subseq.slice(0,-1);

	if (lastSeq === lastSubseq) return findNumSeqs(seqLessOne, subseq) + findNumSeqs(seqLessOne, subseqLessOne);
	else return findNumSeqs(seqLessOne, subseq);
}



module.exports = { numberSubSequences, processInput, checkInput }