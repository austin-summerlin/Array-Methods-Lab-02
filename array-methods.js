/* eslint-disable keyword-spacing */
export function map(arr, callback) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) newArr[i] = callback(arr[i]);
  return newArr;
}

export function filter(arr, callback) {
  const newArr = [];
  for (const elem of arr) if (callback(elem)) newArr[newArr.length] = elem;

  return newArr;
}

export function findIndex(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) return i;
  }
  return -1;
}

export function reduce(arr, callback, initialValue) {
  let acc = initialValue || arr[0];
  for (const elem of arr) {
    if (elem !== undefined) {
      const newAccumulation = callback(acc, elem);
      acc = newAccumulation;
    }
  }
  return acc;
}

export function every(arr, callback) {

}