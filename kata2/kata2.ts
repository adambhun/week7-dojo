'use strict';

export const arr: number[] = [0, 3, 4, 8, 1, 9, 18];

export function chop (number:number, array:number[]):number {
  return array.indexOf(number);
}

export function chop2 (number:number, array:number[]):number {
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

export function chop3 (number:number, array:number[]):number {
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

let counter: number = 0;
export function chop4 (number:number, array:number[]):number {
  if (array[0] === undefined) {
    return -1;
  }  
  if (number === array[0]) {
    console.log(counter, number, arr, arr[0]);
    return counter;
    
  } else {
    counter++;
    array.splice(0, 1)
    return chop4(number, array);
  }
}

chop4(0, arr);