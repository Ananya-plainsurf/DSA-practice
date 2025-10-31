// merge sorted array
// arr1 = [0,3,4,31] arr2 = [4,6,30]
// o/p = [0,3,4,4,6,30,31]

function mergeSortedArray(arr1, arr2) {
  if (!arr1.length) {
    return arr2;
  }
  if (!arr2.length) {
    return arr1;
  }
  let newArray = [];
  let a1 = 0;
  let a2 = 0;
  while (a1 < arr1.length && a2 < arr2.length) {
    let itemToPush = 0;
    if (arr1[a1] < arr2[a2]) {
      itemToPush = arr1[a1];
      a1++;
    } else {
      itemToPush = arr2[a2];
      a2++;
    }
    newArray.push(itemToPush);
  }

  while (a1 < arr1.length) {
    newArray.push(arr1[a1]);
    a1++;
  }
  while (a2 < arr2.length) {
    newArray.push(arr2[a2]);
    a2++;
  }
  return newArray;
}
console.log(mergeSortedArray([0, 3, 4, 31], [4, 6, 30]));
console.log(mergeSortedArray([31], [4, 6, 30]));
console.log(mergeSortedArray([], [4, 6, 30]));
