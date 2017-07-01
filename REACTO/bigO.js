'use strict';

// You are attempting to find the index of the first appearance of one string (the needle) inside of another (the haystack).

const searchString = (needle, haystack) => {
  const start = 0;
  for (let h = 0; h < haystack.length - needle.length; h++) {
    for (let n = 0; n < needle.length; n++) { // this loop is called at each step in nesting iteration; we break out of it and resume nesting loop whenever we don't have the right match; what we want to do is loop over the nesting one *while* looping here.
      if (haystack[h + n] !== needle[n]) break;
      // now we need to know when to stop: when we have hit the end of the needle:
      if (n + 1 === needle.length) return h;

    }
  }
  return -1;
};

// be mindful of making a persistent map
const findDef = (word, dictionary) => {
  const map = new Map();
  dictionary.forEach(e => {
    let [entry, definition] = e.split(' - ');
    map[entry] = definition;
  });
  return map[word] ? map[word] : undefined;
};

/** doesn't work; not sure why
const findDef = (word, dictionary) => {
  const processedDictionary = dictionary.map(e => e.split(' - '));
  const dict = new Map(processedDictionary);
  return dict[word] ? dict[word] : undefined;
}
*/

const stringPermutation = (str) => {

}

module.exports = { searchString, findDef, stringPermutation }