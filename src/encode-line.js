const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {
  let encodedLine = str.split("");
  let result = [];

  for (let i = 0; i < encodedLine.length; i++) {
    if (encodedLine[i] == encodedLine[i + 1] && encodedLine[i] !== encodedLine[i - 1]) {
      let count = 2;
      for (let k = i + 2; k < encodedLine.length; k++) {
        if (encodedLine[i] == encodedLine[k]) count++;
      }
      result.push(count + encodedLine[i]);
    } else if (encodedLine[i] !== encodedLine[i - 1]) result.push(encodedLine[i]);
  }

  return result.join("");
}

module.exports = {
  encodeLine
};
