// fruits into basket

function fruitsIntoBasket(fruits) {
  const map = new Map();
  let max = 0;
  let left = 0;

  for (let right = 0; right < fruits.length; right++) {
    map.set(fruits[right], (map.get(fruits[right]) || 0) + 1);
    while (map.size > 2) {
      const fruit = map.get(fruits[left]);
      map.set(fruit, map.get(fruit) - 1);

      if (map.get(fruit) === 0) {
        map.delete(fruit);
      }
      left++;
    }
    max = Math.max(max, right - left + 1);
  }

  return max;
}
console.log(fruitsIntoBasket([1, 2, 3, 2, 2])); // 4
console.log(fruitsIntoBasket([0, 1, 2, 2])); // 3
