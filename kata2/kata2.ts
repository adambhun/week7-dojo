'use strict';

export const arr: number[] = [0, 3, 4, 8, 1, 9, 18];

export function chop (number:number, array:number[]) {
  return array.indexOf(number);
}

export function chop2 (number:number, array:number[]) {
  if (array[0] === undefined) {
    return -1;
  }
  for (let index = 0; index < array.length; index++) {
    if (array[index] === number) {
      return index;
    }
  }
  return -1;
}

export function chop3 (number:number, array:number[]) {
  let counter: number = array.length - 1;
  while (array[0] !== undefined) {
    if (array[array.length - 1] === number) {
      return counter;
    } else {
      counter--;
      array.splice(array.length -1, 1);   
    }
  }
  return -1;
}