/* 
  Intcode rules
  99: immediately halt (break?)
  1: add items at positions of next two integers, place them at position of 3rd integer
  2: multiply items at positions of next two integers, place them at position of 3rd integer
  After 1 and 2, advance 4 integers, check value there
  Other than 1, 2, 99: something went wrong
  Before performing any operations, replace [1] with '12' and [2] with '2'
*/

function intcodeComp(opArr) {
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

module.exports = {
  intcodeComp,
}