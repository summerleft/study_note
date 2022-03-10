## 2. 导航与搜索

### 2.1 节点导航
顶级节点直接获取
+ ```document``` 入口节点
+ ```document.documentElement``` HTML节点
+ ```document.head``` head节点
+ ```document.body``` body节点

对```node```节点
+ ```node.parentNode``` 获取节点的父节点
+ ```node.previousSibling``` 获取节点的上一个兄弟节点
+ ```node.nextSibling``` 获取节点的下一个兄弟节点
+ ```node.childNodes``` 获取节点的子节点列表
+ ```node.firsChild```和```node.lastChild``` 获取第一个和最后一个子节点

### 2.2 搜索节点
#### 2.2.1 ```document/element.getElementBy*()```
+ ```document.getElementById(id)```:根据id获取文档中的元素
+ ```document.getElementsByName(name)```:根据name获取文档中的元素，很少使用
+ ```document/element.getElementsByTagName(tagName)```: 根据标签名称获取文档或某个元素内的元素
+ ```document/element.getElementByClassName(className)```:根据类名获取文档或某个元素内的元素
> 没有```element.getElementById(id)```

> 除了```document.getElementById()```,其他方法的返回结果都是一个集合

#### 2.1.2 ```document/element.querySelectorAll/querySelector()```
该组方法支持CSS选择器
+ ```document/element.querySelectorAll(CSSSelector)```:返回满足选择器的一组节点列表
+ ```document/element.querySelector(CSSSelector)```:返回第一个满足选择器的元素

## 3. 节点操作
### 3.1 通用节点操作
+ 判断节点类型：```node.nodeType```
+ 获取节点名称：```node.nodeName```
+ 获取或设置节点值：```node.nodeValue```
+ 判断节点是否有子节点```node.hasChildNodes()```
+ 判断节点是否有特定子节点```node.contains(childNode)```

### 3.2 元素节点操作（重点）
+ 判断元素类型：```elem.tagNames```或```elem.nodeName```
+ 元素内容
  + ```elem.innerHTML```：获取或设置元素内的HTML片段
  + ```elem.textContent```：获取或设置元素的文本内容

#### 3.2.1 元素的特性和属性
+ ```elem.hasAttribute(name)```:检查是否存在某个属性
+ ```elem.getAttribute(name)```:获取某个属性的值
+ ```elem.setAttribute(name, value)```:设置某一属性
+ ```elem.removeArribute(name)```:删除某一属性
+ ```elem.attributes()```:获取所有属性对

#### 3.2.2 元素的类和样式
+ ```elem.classList```:一个包elem所有类的可迭代的类数组对象
  + ```elem.classList.contains(class)``` -- 检查是否有某个类。
  + ```elem.classList.add(class)``` -- 添加某个类。
  + ```elem.classList.remove(class)``` -- 移除某个类。
  + ```elem.classList.toggle(class)``` -- 切换某个类，如果有就删除，没有就添加。

+ 直接设置元素的样式，设置```elem.style.*```
```javascript
elem.style.width = "20px";
elem.style.backgroundColor = "red"; 
```
+ 多词CSS属性转化为驼峰写法，如```padding-left```对应```elem.style.paddinLeft```,```-webkit-border-radius```对应```elem.style.WebkitBorderRadius```

## 4. 修改文档
### 4.1 插入节点
1. 创建一个节点
    + 创建一个元素节点：```let elem = document.createElement(tagName)```
    + 创建一个文本节点：```let text = document.createTextNode(data)``` 
    + 从已有节点复制：```let dupNode = node.cloneNode(deep)```,deep为true表示深拷贝，默认为false
2. 编辑节点的属性和内容
3. 把节点插入文档树
    + 传统方式：在父节点执行对节点的插入
      + ```parentNode.appendChild(node)```:把node作为最后一个子节点插入
      + ```parentNode.insertBefore(node, nextSibling)```:在nextSibling之前插入node
    + 现代方式：实现多位置插入，可以在父节点或兄弟节点上执行插入
      + ```parentNode.prepend(...nodes or strings)```:在第一个子节点之前插入
      + ```parentNode.append(...nodes or strings)```:在最后一个子节点之后插入
      + ```nextSibling.before(...nodes or strings)```:在本节点之前同级插入
      + ```previousSibling.after(...nodes or strings)```:在本节点之后插入
      > 支持一次性插入多个，字符串会作为文本节点插入
### 4.2 移除节点
1. 找到需要移除的节点
2. 移除节点：```node.remove()```。IE不兼容此方法，须获取父节点，并在父结点上移除：```node.parentNode.removeChild(node)```
### 4.3 替换节点
与移除类似，使用```node.replaceWith(...nodes or strings)```,IE则使用```parentNode.replaceChild(newNode, node)```

## 5. 事件处理
### 5.1 基本概念
+ ```事件```:某事发生的信号，所有DOM对象都具有这些信号
+ ```时间处理程序```:一个时间信号发生时运行的函数
+ ```事件处理```:为事件分配正确的处理函数，在事件发生时作出处理
+ ```事件类型```:事件的分类
  + 鼠标事件
    + ```click```:鼠标左键在一个元素上被按下且被放开时触发
    + ```contextmenu```:在用户尝试打开上下文菜单（鼠标右键）时被触发
    + ```dblclick```:鼠标双击触发
    + ```mousedown```:指针设备按钮按下时触发
    + ```mouseup```:指针设备按钮放开时触发
    + ```mouseover```:指针被移动到该元素或其子元素上时触发
    + ```mouseenter```:指针被移动到元素时触发，与```mouseover```差别是它不会冒泡，指针从它的子层物理空间移到它的物理空间上时不会触发
    + ```mouseout```:指针不再包含在这个元素或子元素是触发，从一个元素移入其子元素时也会触发
  + 键盘类型
    + ```keydown```:任意键被按下时触发
    + ```keyup```:任意键被松开时触发
  + 焦点事件
    + ```focus```:得到焦点时触发
    + ```blur```:失去焦点时触发
    + ```focusin```:focus的冒泡版本
    + ```focusout```:blur的冒泡版本
  + 表单事件：```submit```,```reset```
  + 剪切板事件：```cut```,```copy```,```paste```
  + 资源事件：```load```,```unload```,```error```,```abort```
### 5.2 事件流
+ 事件冒泡：事件从最小的发生对象开始依次往外围对象冒泡，```button->div->body->html->document```
+ 事件捕获：事件从整个文档开始依次向最小目标捕获，```document->html->body->div->button```
+ DOM事件规范提出了3阶段的事件流：```事件捕获阶段->目标阶段->事件冒泡阶段```
+ 事件捕获阶段很少被使用
### 5.3 事件处理函数
#### 5.3.1 3种事件处理方式
1. HTML特性处理：在HTML元素标签中使用```on<event>```特性
2. DOM0级事件处理：把处理函数赋给节点的对象的```on<event>```属性
3. DOM2级事件处理：使用```node.addEventListener(event, handler, capture)```和```removeEventListener(event, handler)```。```capture```是一个布尔值，表示是否在捕获阶段响应
> HTML特性的方式具有很大的局限性，代码量限制，维护性差，某些事件不支持等。DOM0级事件也对某些事件不支持，关键在于无法为一个事件类型分配多个处理函数。DOM2解决了这些问题，是最通用的方式，推荐使用
