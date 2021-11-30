/**
 * arr {array:int [0,1]}
 * return {int} minimum number of swaps required to make array sorted
 */

function minSwaps(arr) {
  let oneStart = 0;
  let zeroStart = 0;
  let oneCarry = 0;
  let zeroCarry = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      zeroCarry++;
      oneStart += oneCarry;
    } else {
      oneCarry++;
      zeroStart += zeroCarry;
    }
  }

  return oneStart > zeroStart ? zeroStart : oneStart;
}

module.exports = minSwaps;
