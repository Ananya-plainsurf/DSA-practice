// if number is palindrome using recursion

// function palindrome(num) {
//   function reverse(n) {
//     if (n.length <= 1) return n;

//     return reverse(n.slice(1)) + n[0];
//   }

//   return num === reverse(num);
// }

function isPalindrome(str) {
  function palindrome(n, l, i) {
    if (i > l) return true;
    const strVal = str[l - 1];
    const val = n[i];
    if (strVal !== val) {
      return false;
    } else {
      return palindrome(n, l - 1, i + 1);
    }
  }
  return palindrome(str, str.length, 0);
}

console.log(isPalindrome("121"));
console.log(isPalindrome("123"));
console.log(isPalindrome("anbcbna"));
console.log(isPalindrome("cat"));
