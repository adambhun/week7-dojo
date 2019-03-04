'use strict';

export const arr: number[] = [0, 3, 4, 8, 1, 9, 18];

export function chop (array:number[], number:number) {
  return array.indexOf(number);
}

export function chop2 (array:number[], number:number) {
  for (let index = 0; index < array.length; index++) {
    if (array[index] === number) {
      return index;
    }
  }
}



console.log(chop2(arr, 9));