'use strict';

const compose = (args) => {
  return function(a) {
    let currValue = a;
    for (let i = args.length - 1; i >= 0; i--) {
      currValue = args[i](currValue);
    }
    return currValue;
  };
};

module.exports = { compose };
