// Best time to buy and sell stocks

function buySellStock(prices) {
  let minPrice = prices[0];
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    const price = prices[i];
    let maxProfit = price - minPrice;
    profit = Math.max(profit, maxProfit);
    minPrice = Math.min(minPrice, price);
  }
  return profit;
}

console.log(buySellStock([7, 1, 5, 3, 6, 4]));
console.log(buySellStock([2, 5]));
console.log(buySellStock([7, 6, 4, 3, 1]));
console.log(buySellStock([9, 8, 7, 1, 5, 10]));
