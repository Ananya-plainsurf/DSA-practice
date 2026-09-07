// Best time to buy and sell stocks

function buySellStock(prices) {
  let profit = 0;
  let minProfit = Infinity;

  for (let i = 0; i < prices.length; i++) {
    minProfit = Math.min(minProfit, prices[i]);
    if (prices[i] > minProfit) {
      const currentProfit = Math.max(prices[i] - minProfit);
      profit = Math.max(profit, currentProfit);
    }
  }
  return profit;
  //   while (i < j && j < prices.length) {
  //     const today = prices[i];
  //     const tomorrow = prices[j];
  //     console.log({ today, tomorrow });

  //     if (tomorrow > today) {
  //       profit += tomorrow - today;
  //       console.log({ profit });
  //     }
  //     i++;
  //     j++;
  //   }
  //   return profit;
}
// console.log(buySellStock([7, 1, 5, 3, 6, 4]));
// console.log(buySellStock([7, 6, 4, 3, 1]));
console.log(buySellStock([1, 2]));
console.log(buySellStock([2, 4, 1]));
