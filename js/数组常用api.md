#### ```Array.prototype.splice()```
通过删除或替换现有元素或者原地添加新的元素来修改数组,并以数组形式返回被修改的内容,此方法会改变原数组。函数返回值为删除的值组成的数组

+ 添加元素
```javascript
const myFish = ["angle", "clown", "mandarin", "sturgeon"];
myFish.splice(2, 0, "drum", "guitar");
// myFish: ["angle", "clown", "drum", "guitar" "mandarin", "sturgeon"]
```

+ 删除并添加元素
```javascript
var myFish = ['angel', 'clown', 'drum', 'sturgeon'];
var removed = myFish.splice(2, 1, "trumpet");
// 运算后的 myFish: ["angel", "clown", "trumpet", "sturgeon"]
// 被删除的元素: ["drum"]
```

+ 从索引2的位置开始删除所有元素
```javascript
var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
var removed = myFish.splice(2);

// 运算后的 myFish: ["angel", "clown"]
// 被删除的元素: ["mandarin", "sturgeon"]
```
