// Implementation of MyHashSet
var MyHashSet = function () {
  this.size = 1000;
  this.buckets = Array.from({ length: this.size }, () => []);
};

MyHashSet.prototype._hash = function (key) {
  return key % this.size;
};

MyHashSet.prototype._bucket = function (key) {
  const index = this._hash(key);
  return this.buckets[index];
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
  const bucket = this._bucket(key);
  // Only add if it doesn’t already exist
  if (!bucket.includes(key)) {
    bucket.push(key);
  }
};

/**
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.remove = function (key) {
  const bucket = this._bucket(key);
  const pos = bucket.indexOf(key);
  if (pos !== -1) {
    bucket.splice(pos, 1);
    return true;
  }
  return false;
};

/**
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
  const bucket = this._bucket(key);
  return bucket.includes(key);
};

// Example usage / testing
const mySet = new MyHashSet();
mySet.add(10);
mySet.add(20);
console.log(mySet.contains(10)); // true
console.log(mySet.contains(30)); // false
mySet.remove(10);
console.log(mySet.contains(10)); // false
