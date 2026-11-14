// Check if a String is a Palindrome

// A palindrome reads the same forward and backward.

// Examples:

// madam     → true
// racecar   → true
// abba      → true

// hello     → false
// abc       → false

function palindrome(s) {
  function check(s, l, r) {
    if (l >= r) {
      return true;
    }

    if (s[l] !== s[r]) {
      return false;
    }
    return check(s, l + 1, r - 1);
  }
  return check(s, 0, s.length - 1);
}

console.log(palindrome("madam"));
console.log(palindrome("hello"));
console.log(palindrome("hel0p0leh"));
console.log(palindrome("hel0pk0leh"));
console.log(palindrome("paap"));
