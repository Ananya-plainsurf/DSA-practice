// reverse string
// I/P = reverse('hello')
// O/P = olleh

function reverse(s, i = 0, str = "") {
  if (i === s.length) {
    return str;
  }
  //   str = s[i] + str;
  return reverse(s, i + 1, s[i] + str);
}

console.log(reverse("hello"));
console.log(reverse("Bhaskar"));
