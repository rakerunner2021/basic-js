const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
 function sortByHeight(arr) {
  let newArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
      newArray.push(arr[i]);
      arr.splice(i, 1, 0);
    }
  }

  newArray.sort((a, b) => a - b);
  let i = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] === 0) {
      arr.splice(j, 1, newArray[i]);
      ++i;
    }
  }
  return arr;
}

module.exports = {
  sortByHeight
};