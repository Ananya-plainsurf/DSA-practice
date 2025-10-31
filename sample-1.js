// Array
// testing how arrays actually work

class Array {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get() {
    return {
      length: this.length,
      data: this.data,
    };
  }

  push(data) {
    this.data[this.length] = data;
    this.length++;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(idx) {
    for (let i = idx; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    return this.length--;
  }
}

const newArray = new Array();
newArray.push("Anu");
newArray.push("chiku");
newArray.push("pintu");
newArray.delete(0);
// console.log(newArray.pop());
console.log(newArray);
