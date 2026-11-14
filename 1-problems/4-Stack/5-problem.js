var MinStack = function () {
  this.array = [];
  this.min = Infinity;
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  if (this.min > val) {
    this.min = val;
  }
  this.array.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.array.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.array[this.array.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  //     const newArr = [...this.array]
  //   return newArr.sort((a, b) => a - b)[0];
  return this.min;
};

var obj = new MinStack();
obj.push(2);
obj.push(1);
obj.push(5);
obj.push(6);
obj.push(4);
obj.pop();
var param_3 = obj.top();
var param_4 = obj.getMin();
console.log({ param_3, param_4 });
