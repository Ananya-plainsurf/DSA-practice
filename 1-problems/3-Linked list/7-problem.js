var MyHashMap = function () {
  this.size = 1000;
  this.buckets = Array.from({ length: this.size }, () => []);
};

MyHashMap.prototype._hash = function (key) {
  return key % this.size;
};
/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
  const idx = this._hash(key);
  const bucket = this.buckets[idx];
  const valueExists = this.get(key);
  if (valueExists !== -1) {
    for (let i of bucket) {
      if (i[0] === key) {
        i[1] = value;
        return;
      }
    }
  }
  bucket.push([key, value]);
};

/**
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
  const idx = this._hash(key);
  const bucket = this.buckets[idx];
  if (bucket.length) {
    for (let [k, v] of bucket) {
      if (k === key) {
        return v;
      }
    }
  }
  return -1;
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
  const idx = this._hash(key);
  const bucket = this.buckets[idx];

  for (let i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === key) {
      bucket.splice(i, 1);
      return; // exit early once removed
    }
  }
};

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
const map = new MyHashMap();
map.put(1, 10);
map.put(2, 20);
map.put(1001, 30); // Collision with key=1 (same hash bucket)

console.log(map.get(1)); // 10
console.log(map.get(2)); // 20
console.log(map.get(1001)); // 30

map.put(1, 99);
console.log(map.get(1)); // 99 (updated)

map.remove(2);
console.log(map.get(2)); // -1 (removed)
