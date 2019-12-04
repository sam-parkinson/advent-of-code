/* 
  Intcode rules
  99: immediately halt (break?)
  1: add items at positions of next two integers, place them at position of 3rd integer
  2: multiply items at positions of next two integers, place them at position of 3rd integer
  After 1 and 2, advance 4 integers, check value there
  Other than 1, 2, 99: something went wrong
  Before performing any operations, replace [1] with '12' and [2] with '2'
*/