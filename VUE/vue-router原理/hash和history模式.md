## hash实现
hash是URL中hash(#)及后面的部分，常用作锚点在页面内进行导航，**改变URL中的hash部分不会引起页面刷新**

通过hashchange事件监听URL的变化，改变URL的方式只有：
1. 通过浏览器前进后退改变URL
2. 通过```<a>```标签改变URL
3. 通过```window.location```改变URL

#### hashchange事件
当URL的片段标识符更改时，将触发hashchange事件 (跟在＃符号后面的URL部分，包括＃符号)
```javascript
window.addEventListener('hashchange', function() {
    console.log('The hash has changed')
}, false)
// false表示事件冒泡，true表示事件捕获模式，通常为false
```
或使用```onhashchange```事件处理程序属性
```javascript
function locationHashChanged() {
    if (location.hash === '#cool-feature') {
        console.log("You're visiting a cool feature");
    }
}
window.onhashChange = locationHashChanged;
```


## history实现
history提供了pushState和replaceState两个方法，**它们改变URL的path部分不会引起页面刷新**
#### history.pushState()
```history.pushState()```方法向当前浏览器会话的历史堆栈中添加一个状态（state）

调用```pushState()```和```window.location = "#foo"```基本上一样, 他们都会在当前的document中创建和激活一个新的历史记录。但是```pushState()```有以下优势:
1. 新的URL可以是任何和当前URL同源的URL。但是设置```window.location```只会在你只设置锚的时候才会使当前的URL
2. 非强制修改URL。相反，设置```window.location = "#foo"```; 仅仅会在锚的值不是```#foo```情况下创建一条新的历史记录
3. 可以在新的历史记录中关联任何数据。```window.location = "#foo"```形式的操作，你只可以将所需数据写入锚的字符串中
> pushState() 不会造成 hashchange事件调用, 即使新的URL和之前的URL只是锚的数据不同

#### history.replaceState()
```replaceState()```方法使用```state objects```, ```title```,和```URL```作为参数，修改当前历史记录实体，如果你想更新当前的state对象或者当前历史实体的URL来响应用户的的动作的话这个方法将会非常有用

history提供类似hashchange事件的popstate事件，但popstate事件有些不同：
1. 通过浏览器前进后退改变 URL 时会触发 popstate 事件
2. 通过```pushState/replaceState```或```<a>```标签改变URL不会触发 popstate 事件。
3. 好在我们可以拦截pushState/replaceState的调用和```<a>```标签的点击事件来检测 URL变化
4. 通过js调用history的back, go, forward方法课触发该事件