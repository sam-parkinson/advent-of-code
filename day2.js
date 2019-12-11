/* 
  Intcode rules
  99: immediately halt (break?)
  1: add items at positions of next two integers, place them at position of 3rd integer
  2: multiply items at positions of next two integers, place them at position of 3rd integer
  After 1 and 2, advance 4 integers, check value there
  Other than 1, 2, 99: something went wrong
  Before performing any operations, replace [1] with '12' and [2] with '2'
*/

function intcodeCompErrState(opArr) {
  // set to initial state
  opArr[1] = 12;
  opArr[2] = 2;
  // track position
  // for loop here represents the intcode computer, increment in steps of 4
  for (let i = 0; i < (opArr.length - 4); i += 4) {
    if (opArr[i] === 99) {
      break
    } else {
      const j = opArr[i + 1];
      const k = opArr[i + 2];
      const l = opArr[i + 3];
      if (opArr[i] === 1) {
        opArr[l] = opArr[j] + opArr[k];
      } else if (opArr[i] === 2) {
        opArr[l] = opArr[j] * opArr[k];
      }
    } 
  }

  return opArr[0];
}

function intcodeCompOut(arr) {
  const ans = 19690720;
  for (let i = 0; i < (arr.length - 3); i += 4) {
    if (arr[i] === 99) {
      break;
    } else {
      const j = arr[i + 1];
      const k = arr[i + 2];
      const l = arr[i + 3];
      if (arr[i] === 1) {
        arr[l] = arr[j] + arr[k];
      } else if (arr[i] === 2) {
        arr[l] = arr[j] * arr[k];
      }
    } 
  }
  console.log(arr[0])
  if (arr[0] === ans) {
    console.log(arr[1], arr[2]);
    return true;
  } else 
    return false;
}

function intcodeSolver(opArr) {
  const ans = 19690720;
  for (let i = 0; i < 100; i++) {
    for (let j = 0; j < 100; j++) {
      let flag = false;
      opArr[0] = 1;
      opArr[1] = i;
      opArr[2] = j;
      flag = intcodeCompOut(opArr);
      if (flag === true) {
        return [i, j];
      }
    }
  }
}

module.exports = {
  intcodeCompErrState,
  intcodeSolver,
  intcodeCompOut
}