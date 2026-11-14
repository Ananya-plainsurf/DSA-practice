// best time to buy and sell stocks

function buySell(arr) {
  let maxProfit = 0;
  let minProfit = arr[0];
  for (let i = 1; i < arr.length; i++) {
    let price = arr[i];
    minProfit = Math.min(price, minProfit);
    let profit = price - minProfit;
    maxProfit = Math.max(maxProfit, profit);
  }
  return maxProfit;
  //   for (let i = 0; i < arr.length; i++) {
  //     const buy = arr[i];
  //     for (let j = i + 1; j < arr.length; j++) {
  //       const sell = arr[j];
  //       if (sell > buy) {
  //         let profit = sell - buy;
  //         max = Math.max(max, profit);
  //       }
  //     }
  //   }

  //   return max;
}
console.log(buySell([7, 1, 5, 3, 6, 4])); // 5
console.log(buySell([7, 6, 4, 3, 1])); // 0
console.log(buySell([9, 8, 7, 6, 5])); // 0
console.log(buySell([9, 1, 2, 3, 10])); // 9
console.log(buySell([5, 3, 6, 1, 4])); //3
