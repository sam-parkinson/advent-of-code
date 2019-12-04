function fuelPerFuel(fuel) {
  if (fuel <= 8) {
    return 0;
    // base case, 8 - 8 % 3 == 6, 6 / 3 == 2, 2 - 2 == 0, fuel requires no additional fuel to sustain itself
    // 8 is also largest module requring no fuel, per problem specification
  } else {
    const reqFuel = ((fuel - fuel % 3) / 3) - 2;
    return reqFuel + fuelPerFuel(reqFuel);
  }
}

function fuelPerModNew(mod) {
  const fuel = ((mod - mod % 3) / 3) - 2;
  return fuel + fuelPerFuel(fuel);
}

function fuelPerMod(mod) {
  return ((mod - mod % 3) / 3) - 2; 
}

function solveProblemOne(input) {
  let totalFuel = 0;
  for (let i = 0; i < input.length; i++) {
    totalFuel += fuelPerMod(input[i]);
  }
  return totalFuel;
}

function solveProblemTwo(input) {
  let totalFuel = 0;
  for (let i = 0; i < input.length; i++) {
    totalFuel += fuelPerModNew(input[i]);
  }
  return totalFuel;
}

module.exports = {
  solveProblemOne,
  solveProblemTwo,
}