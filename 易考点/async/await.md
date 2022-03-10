### async/await

##### async
+ 用于声明异步函数
+ 若异步函数使用了return，则这个值会被Promise.resolve()包装成一个Promis对象

##### await
+ 暂停异步函数后面的代码
+ 必须在异步函数中使用，不能在顶级上下文如&lt;scipt&gt;中使用
+ JS在碰到await时，会记录在哪里暂停执行，即使await后面跟着一个能立即使用的值，其余部分也会被异步求值
```javascript
async funtion foo() {
    console.log(2);
    async null;
    console.log(4);
}

console.log(1);
foo();
console.log(3);
// 1
// 2
// 3
// 4
```