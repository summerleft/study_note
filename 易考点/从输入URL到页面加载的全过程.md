### 从输入URL到页面加载的全过程

1. 输入URL
2. 查找缓存：若有页面则显示页面内容，没有则进行下一步
3. DNS域名解析：浏览器向DNS服务器发起请求，解析URL中的域名对应的IP地址（DNS服务器基于UDP）
4. 建立TCP连接：解析出IP后，根据IP地址和默认80端口，和服务器建立TCP连接
5. 发起HTTP请求：请求报文作为TCP三次握手的第三次数据发送给服务器
6. 服务器响应请求并返回结果：做出响应，把对应的数据发送给浏览器
7. 关闭TCP连接：四次挥手
8. 浏览器渲染
   1. 构建DOM树，根节点是document对象
   2. 构建CSS规则树
   3. 构建render树，结合1和2
   4. 布局
   5. 绘制
9. JS解析
   1. 创建window对象
   2. 加载文件
   3. 预编译
   4. 解释执行