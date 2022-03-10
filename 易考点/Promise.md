# Promise

+ ES6中的Promise遵守Promise/A+规范

+ 三种状态： pending，fulfilled， rejected

+ ```javascript
  let p1 = new Promise((resolve, reject) => resolve());
  ```

+ 执行器函数是同步执行的

+ Promise.resolve()

  + fullfilled的Promise的值对应传给resolve()函数的第一个参数

+ Promise.reject()

  + 同上，拒绝的理由是传给reject()函数的第一个参数

+ Promise.prototype.then()

  + 最多接收两个参数，onResolved和onRejected，分别会在Promise进入fullfilled和rejected状态时执行
  + 返回一个新的Promise实例，新的Promise基于onResolved处理程序的返回值构建（通过Promise.resolve()包装）
  + 若在then中抛出异常，则会返回拒绝的Promise

+ Promise.prototype.catch() = Promise.prototype.then(null, onRejected)

+ Promise.then()中的内容是微任务

