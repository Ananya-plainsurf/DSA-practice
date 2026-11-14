// palindrome check
// madam -> true | racecar -> true | hello -> false

function palindromeCheck(s, left = 0, right = s.length - 1) {
  if (left >= right) return true;
  if (s[left] !== s[right]) return false;

  return palindromeCheck(s, left + 1, right - 1);
}
console.log(palindromeCheck("madam"));
console.log(palindromeCheck("racecar"));
console.log(palindromeCheck("hello"));
