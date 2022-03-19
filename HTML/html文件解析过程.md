### DOM解析过程
+ 顺序：从第一行开始一行一行解析
+ 渐进式：浏览器会迫不及待的将解析完成的部分显示出来

##### ```window.onload```和```DOMContentLoaded```有什么区别？
+ ```window.onload```在页面全部内容加载完成后执行
+ ```DOMContentLoaded```在纯HTML被完全加载以及解析完成后触发

##### 页面加载步骤
1. 解析HTML结构
2. 加载外部的脚本和样式文件
3. 解析并执行脚本代码
4. 执行$(function(){})内对应代码
5. 加载图片等二进制资源
6. 页面加载完毕，执行window.onload()

##### HTML加载过程中遇到外链资源时
会请求响应资源，有些是阻塞型有些是非阻塞型
阻塞型资源包括
+ 内联css
+ 内联javascript
+ 外联普通javascript
+ 外联defer javascript
+ javascript标签之前的外联css
+ 这些阻塞型的资源请求并执行完之后dom树的解析便完成了，这时document对象就会派发DOMContentLoaded事件，表示dom树构建完成

非阻塞型资源
+ javascript标签之后的外联css
+ image
+ iframe
+ 外联async javascript

关于三种外联部javascript标签
+ 外联普通javascript：下载js时html暂停解析，下载完成后执行js，执行完毕后html继续解析
+ 外联defer javascript：下载js时html继续解析，html解析完成后执行js，全部加载并执行完成后派发DOMContentLoaded
+ 外联async javascript：下载js时html继续解析，下载完成后立即执行，此时html暂停解析，执行完成后html继续解析。若未下载完成，不阻塞DOMContentLoaded