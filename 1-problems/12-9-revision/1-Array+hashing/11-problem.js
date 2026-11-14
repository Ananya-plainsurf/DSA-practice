function characterReplacement(s, k) {
  let left = 0;
  let maxLength = 0;
  let maxFrequency = 0;

  const map = new Map();

  for (let right = 0; right < s.length; right++) {
    map.set(s[right], map.get(s[right] || 0) + 1);

    maxFrequency = Math.max(maxFrequency, map.get(s[right]));

    let window = right - left + 1;
    if (window - maxFrequency > k) {
      map.set(s[left], map.get(s[left] - 1));
      left++;
    }

    maxLength = Math.max(maxLength, right - left);

    // 3. Check if window is invalid

    // 4. Update maxLength
  }

  return maxLength;
}

console.log(characterReplacement("AABAB", 1));
