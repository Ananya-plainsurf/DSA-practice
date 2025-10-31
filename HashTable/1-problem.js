// create a hash table

class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  set(key, value) {
    const position = myHashTable._hash(key);
    if (!this.data[position]) {
      this.data[position] = [key, value];
      return position;
    }
  }

  get(key) {
    const position = this._hash(key);
    return this.data[position][1];
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  keys() {
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        keysArray.push(this.data[i][0]);
      }
    }
    return keysArray;
  }
}

const myHashTable = new HashTable(50);
console.log(myHashTable._hash("mango"));
console.log(myHashTable.set("grapes", 10000));
console.log(myHashTable.set("mango", 500));
console.log(myHashTable.set("apple", 2));
console.log(myHashTable.get("grapes"));
console.log(myHashTable.keys());
