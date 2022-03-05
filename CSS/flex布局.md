### 1. flex的两根轴线
#### 1.1 主轴
由```flex-direction```定义，可以取四个值
+ ```row```:主轴从左到右延伸
+ ```row-reverse```:主轴从右到左延伸
+ ```column```:主轴从上到下延伸
+ ```column-reverse```:主轴从下到上延伸
### 2. flex容器
文档中采用了flexbox的区域就叫做flex容器。为了创建 flex 容器， 我们把一个容器的```display```属性值改为```flex```或者```inline-flex```
```javascript
container {
    display: flex;
}
```
+ 如果```display```设置为```flex```，那么```flex-container```以块级元素的形式存在
+ 如果```display```设置为```inline-flex```，那么```flex-container```以行内块元素的形式存在
+ 这两个属性值差异的影响在设置了属性值的元素上面，它们在子元素上的效果都是一样的
+ 如果一个元素的父元素开启了flex布局，其子元素的```display```属性对自身的影响将会失效，但是对其内容的影响依旧存在的

之后容器中的直系子元素就会变为flex元素。所有CSS属性都会有一个初始值，所以flex容器中的所有flex元素都会有下列行为：
+ 元素排列为一行(```flex-direction```属性的初始值是```row```)
+ 元素从主轴的起始线开始
+ 元素不会在主维度方向拉伸，但是可以缩小，在未设置```width```属性时，其最大宽度由其内容撑起来
+ ```flex-basis```属性为```auto```
+ ```flex-wrap```属性为```nowrap```

#### flex-wrap
+ ```wrap```:子元素总宽度大于容器最大宽度，则换行显示
+ ```nowrap```:子元素会缩小以适应容器，若无法缩小则溢出屏幕范围

#### flex-flow
```flex-direction```和```flex-wrap```组合为简写属性flex-flow

