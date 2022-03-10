+ ```Object.create()```
创建一个新对象，使用现有的对象来提供新创建的对象的```__proro__```
  + 该方法是浅拷贝
  + 使用该API实现类式继承
    ```javascript
    Child.prototype = Object.create(Parent.prorotype);
    Child.prototype.constructor = Child;
    ```
  + ```Object.create(null)```没有继承任何原型方法
    ```javascript
    Object.create({}).toSring // function toString()
    Object.create(null).toString // undefined
    ```