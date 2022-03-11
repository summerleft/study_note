## Flex容器

任何一个容器可以被指定为flex布局
```CSS
.container {
    display: flex | inline-flex;
}
```
分别生成一个块状或行内的flex容器盒子。如果你使用块元素如 div，你就可以使用flex，而如果你使用行内元素，你可以使用 inline-flex。

> 设置 flex 布局之后，子元素的 float、clear、vertical-align 的属性将会失效

有六种属性可以设置在容器上：
+ ```flex-direction```
+ ```flex-wrap```
+ ```flex-flow```
+ ```justify-content```
+ ```align-items```
+ ```align-content```

#### flex-direction
决定主轴的方向
```CSS
.container {
    flex-direction: row | row-reverse | column | column-reverse;
}
```
+ 默认值：```row```，主轴为水平，从左到右排列
+ ```row-reverse```:主轴为水平，从右到左排列
+ ```column```: 主轴为垂直，从上到下排列
+ ```column-reverse```: 主轴为垂直，从下到上排列

#### flex-wrap
决定容器内项目是否可以换行
```CSS
.container {
    flex-wrap: nowrap | wrap | wrap-reverse;
}
```
+ 默认值：```nowrap```，不换行，主轴尺寸固定时，空间不足时，项目尺寸会被挤小至下一行
+ ```wrap```:项目主轴总尺寸超出容器时换行，第一行在上方
+ ```wrap-reverse```: 项目主轴总尺寸超出容器时换行，第一行会被挤到第二行

#### flex-flow
```flex-direction```和```flex-wrap```的简写形式

#### justify-content
定义项目在主轴的对齐方式
```CSS
.container {
    justify-content: flex-start | flex-end | center | space-between | space-around;
}
```

**假设在```flex-direction: row```条件下**
+ 默认值：```flex-start```:在主轴上左对齐
+ ```flex-end```:主轴上靠右对齐
+ ```center```: 主轴上居中
+ ```space-between```: 两端对齐
+ ```space-around```: 每个项目两侧间隔相等，和```space-between```相比，两端的项目不会贴在边缘

#### align-items
定义项目在交叉轴上的对齐方式
```CSS
.container {
    align-items: flex-start | flex-end | center | baseline | stretch;
}
```
**假设在```flex-direction: row```条件下**
+ 默认值```stretch```: 若项目未设置高度或者是auto，占满整个容器
+ ```flex-start```: 交叉轴的起点对齐，即每个项目上端对齐
+ ```flex-end```: 交叉轴终点对齐，即每个项目下端对齐，类似直方图
+ ```center```: 交叉轴中点对齐
+ ```baseline```: 项目的第一行文字的基线对齐

#### align-content
定义多根轴线的对齐方式，如果项目只有一根轴线，该属性不起作用
```CSS
.container {
    align-content: flex-start | flex-end | center | space-between | space-around | stretch;
}
```
假设```flex-direction: row, flex-wrap: wrap```
+ ```flex-wrap```为```nowrap```时，容器仅有一根轴线
+ ```flex-wrap```为```wrap```时，需要设置该属性
+ 默认值：```stretch```，轴线在垂直方向上均匀分布
+ ```flex-start```: 轴线在交叉轴的起点对齐
+ ```flex-end```: 轴线全部在交叉轴终点对齐
+ ```center```: 轴线在交叉轴的中间对齐
+ ```space-between```：轴线两端对齐，之间的间隔相等，即剩余空间等分成间隙
+ ```space-around```：每个轴线两侧的间隔相等，所以轴线之间的间隔比轴线与边缘的间隔大一倍


## Flex项目属性
同样有6个属性可运用在item上
+ ```order```
+ ```flex-basis```
+ ```flex-grow```
+ ```flex-shink```
+ ```flex```
+ ```align-self```

#### order
定义在容器中的排列顺序，数值越小，排列越靠前，默认值为0
```CSS
.item {
    order: <integer>;
}
```

#### flex-basis
定义了在分配多余空间之前，项目占据的主轴空间，浏览器根据这个属性，计算主轴是否有多余空间
```CSS
.item {
    flex-basis: <length> | auto;
}
```
+ 默认值：```auto```，item的尺寸取决于width或height
**当主轴为水平方向的时候，当设置了 flex-basis，项目的宽度设置值会失效，flex-basis 需要跟 flex-grow 和 flex-shrink 配合使用才能发挥效果**
+ 当```flex-basis```值为 0 % 时，是把该项目视为零尺寸的，故即使声明该尺寸为 140px，也并没有什么用
+ 当```flex-basis```值为```auto```时，则跟根据尺寸的设定值(假如为 100px)，则这 100px 不会纳入剩余空间

#### flex-grow
定义项目的放大比例
```CSS
.item {
    flex-grow: <number>;
}
```
+ 默认值为 0，即如果存在剩余空间，也不放大
+ 当所有的项目都以```flex-basis```的值进行排列后，仍有剩余空间，那么这时候```flex-grow```就会发挥作用了
+ 如果所有项目的```flex-grow```属性都为 1，则它们将等分剩余空间
+ 如果一个项目的```flex-grow```属性为 2，其他项目都为 1，则前者占据的剩余空间将比其他项多一倍
+ 当然如果当所有项目以```flex-basis```的值排列完后发现空间不够了，且```flex-wrap：nowrap```时，此时 ```flex-grow``` 则不起作用了，这时候就需要```flex-shrink```

#### flex-shink
定义项目的缩小比例
```CSS
.item {
    flex-shrink: <number>;
}
```
+ 默认值:1，即如果空间不足，该项目将缩小，负值对该属性无效
+ 如果所有项目的```flex-shrink```属性都为 1，当空间不足时，都将等比例缩小
+ 如果一个项目的```flex-shrink`` 属性为 0，其他项目都为 1，则空间不足时，前者不缩小

#### flex
以上三个属性的简写
+ 默认值：0 1 auto

#### align-self
允许单个项目有与其他项目不一样的对齐方式

+ 单个项目覆盖```align-items```定义的属性
+ 默认值为 ```auto```，表示继承父元素的```align-items```属性，如果没有父元素，则等同于```stretch```
+ 取值和```align-items```属性时一样的，只不过```align-self``` 是对单个项目生效的，而 align-items 则是对容器下的所有项目生效的