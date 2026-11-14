arr = [10, 20, 30, 40];
// print(0)
// |- print(0+1)
//     |- print(1+1)
//         |- print(2+1)
//             |- print(3+1)
//                 |- 4 === arr.length return
//             |- clg(arr[i]) // 40
//         |- clg(arr[i]) //30
//     |- clg(arr[i]) // 20
// |- clg(arr[i]) //10

// function printArr(arr){
//     function print(i){
//         if(i === arr.length) return;

//         print(i+1)
//         console.log(arr[i]);
//     }
//     print(0)
// }

// sum(0)
//  |- num = arr[0] // 10
//     num + sum(0+1)
//             |- num = arr[1] // 20
//                 num + sum(1+1)
//                         |- num = arr[2] // 30
//                             num + sum(2+1)
//                                     |- num = arr[3] //40
//                                         num + sum(3+1)
//                                                 |- 4 === arr.length return 0
//                                     |- 40 + 0 = 40
//                         |- 30 + 40 = 70
//                 |- 20 + 70 = 90
//         |- 10 + 90 = 100
// function sumArr(arr) {
//   if (arr.length === 0) return 0;
//   if (arr.length === 1) return arr[0];
//   function sum(i) {
//     if (i === arr.length - 1) return arr[i];
//     return arr[i] + sum(i + 1);
//   }

//   return sum(0);
// }
// console.log(sumArr(arr));

// max(0)
// |- math.max(12, max(0+1))
//                 |- math.max(45, max(1+1))
//                                 |- math.max(7, max(2+1))
//                                                 |- math.max(89, max(3+1))
//                                                                 |- 4 === arr.length -1 return 23
//                                                 |- 89
//                                 |- 89
//                 |- 89
// |- 89

// function findMax(arr) {
//   function max(i) {
//     if (i === arr.length - 1) return arr[i];

//     return Math.max(arr[i], max(i + 1));
//   }

//   return max(0);
// }

// console.log(findMax([12, 45, 7, 89, 23]));

// arr = [1, 3, 2, 4];
// sorted(0) | (-arr[0] > arr[0 + 1]); // 1 > 3 - false
// sorted(0 + 1) | (-arr[1] > arr[1 + 1]); //3 > 2 - true base case return false
// return false;
// function sortedArr(arr) {
//   if (arr.length <= 1) return true;
//   function sorted(i) {
//     if (i === arr.length - 1) return true;
//     if (arr[i] > arr[i + 1]) return false;
//     return sorted(i + 1);
//   }

//   return sorted(0);
// }
// console.log(sortedArr([1, 3, 2, 4]));
// console.log(sortedArr([1, 2, 4]));
// console.log(sortedArr([1, 2, 3, 4]));
// console.log(sortedArr([2, 2, 3, 4]));
// console.log(sortedArr([12, 2, 3, 4]));

// What exactly are we looking for? (Objective)
// - array and target is given
// - we need to traverse through the array and check if target exist in given array
// - if yes return true else false

// What does the example demonstrate?
// - traversing through left to right
// - on the way check if current element is equal to target

// What do we need to return?
// - boolean if target is found in array return true else false

// What should the base condition be?
// - if(i === arr.length - 1){
//      if(arr[i]===t) return false;
//      return true
//    } or if(i === arr.length) return false
// if (arr[i] === t) return true;
// function findTarget(arr, t) {
//   function find(i) {
//     if (i === arr.length - 1) {
//       if (arr[i] !== t) {
//         return false;
//       }
//       return true;
//     }
//     if (arr[i] === t) return true;
//     return find(i + 1);
//   }
//   return find(0);
// }

// console.log(findTarget([10, 20, 30, 40], 50));
// console.log(findTarget([10, 20, 30, 40], 20));

// function countOccurrence(arr, tar) {
//   if (arr.length === 0) return 0;
//   function count(i) {
//     if (i === arr.length) return 0;

//     return (arr[i] === tar ? 1 : 0) + count(i + 1);
//   }
//   return count(0);
// }

// console.log(countOccurrence([2, 4, 2, 6, 3, 4, 2], 2));
// console.log(countOccurrence([2, 4, 2, 6, 3, 4, 2], 4));

// function reverseString(str) {
//   if (str.length <= 1) return str;
//   let res = "";
//   function reverse(i) {
//     if (i === str.length) return;
//     reverse(i + 1);
//     res += str[i];
//   }

//   reverse(0);
//   return res;
// }
// console.log(reverseString("hello"));

// function isPalindrome(str) {
//   if (str.length <= 1) return true;
//   function palindrome(i, j) {
//     if (i >= j) return true;
//     if (str[i] !== str[j]) return false;

//     return palindrome(i + 1, j - 1);
//   }

//   return palindrome(0, str.length - 1);
// }
// console.log(isPalindrome("madam"));
// console.log(isPalindrome("hello"));
// console.log(isPalindrome("ab"));
// console.log(isPalindrome("a"));
// console.log(isPalindrome(""));

// function countVowels(str) {
//   if (!str.length) return 0;
//   const hasSet = new Set(["a", "e", "i", "o", "u"]);

//   function count(i) {
//     if (i === str.length) return 0;

//     return (hasSet.has(str[i]) ? 1 : 0) + count(i + 1);
//   }
//   return count(0);
// }

// console.log(countVowels("education"));
// console.log(countVowels("rhythm"));

// function removeOccurrence(str, targ) {
//   if (!str.length) return 0;
//   let res = "";
//   function remove(i) {
//     if (i === str.length) return "";

//     return (str[i] !== targ ? str[i] : "") + remove(i + 1);
//   }
//   return remove(0);
// }
// console.log(removeOccurrence("banana", "a"));
