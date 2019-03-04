'use strict';

export const arr: number[] = [0, 3, 4, 8, 1, 9, 18];

export function chop (array:number[], number:number) {
  return array.indexOf(number);
}

console.log(chop(arr, 9));