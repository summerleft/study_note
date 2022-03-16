### 1. 什么是同源，什么是同源策略，同源策略的表现是什么？
+ 同源：两个URL的协议、域名和端口号都相同，则两个URL同源
+ 同源策略：用于限制一个源的文档或者它加载的脚本与另一个源的资源进行交互
+ 同源策略的表现：
  + DOM层面：限制来自不同源的JS脚本对当前DOM对象的读写
  + 数据层面：限制不同源站点读取当前站点的Cookie、IndexedDB和localStorage等的数据
  + 网络层面：限制不同源的站点通过XHR等方式将数据发送给不同源的站点

### 2. 跨域解决方案有哪些
1. DOM层面和数据层面
    + 片段标识符：通过监听url中hash的改变实现数据传递
    + ```window.name```:两个网页在同一个窗口时，其中一个设置了该属性，另一个则可以读取
    + ```document.domain```:存放文档的服务器的主机名，可手动将其设置成当前或上级域名，具有相同的```document.domain```页面就相当于处于同域名服务器
    + ```postMessage```:HTML5新增，跨文档通信API，允许跨窗口通信，无论是否同源
2. 网络层面
    + 通过代理：服务端不存在这样的限制
    + JSONP
      + src属性可以访问任何URL资源且不受同源限制
      + 若script访问的资源包含JS代码，下载后自动执行
    + CORS：服务器实现CORS接口即可
      + 简单请求
        1. HEAD/GET/POST
        2. 头信息不超出Accept、Accept-Language、Content-Language、Last-Event-ID、Content-Type
      + 流程
        1. 浏览器发出CORS请求，头信息包含Origin字段
        2. 服务器根据Origin判断源是否在许可范围内
        3. 若不在许可范围，服务器返回HTTP响应，不包含```Access-Control-Allow-Origin```字段，从而抛出错误
        4. 若在许可范围，服务器返回的相应包含```Access-Control-Allow-Origin、Access-Control-Allow-Credentials、Access-Control-Expose-Header```等
      + 非简单请求
        1. 浏览器发起预检请求(OPTIONS)，服务器检查相关字段后做出回应
        2. 若否定请求，返回正常HTTP相应，无CORS相关头信息
        3. 若通过，执行正常请求


### 3. 针对Web页面安全有哪些常见的攻击手段(XSS、CSRF)？
##### XSS攻击
+ 跨站脚本攻击（Cross Site Scripting）
+ 往HTML或DOM中注入恶意脚本
+ 影响：盗取Cookie，监听用户行为，修改DOM，在页面内生成浮窗广告
+ 注入方式：存储型，反射型，基于DOM型
  + 存储型
    1. 利用漏洞将恶意JS代码提交到网站数据库
    2. 用户向网站请求包含了恶意JS脚本的页面
    3. 浏览时，脚本将用户的Cookie等上传到服务器
  + 反射型
    1. 用户点击恶意连接，恶意脚本属于用户发送给网站请求中的一部分
    2. 网站把恶意JS脚本返回给用户
    3. 恶意JS脚本被执行，黑客利用此来做一些坏事
  + 基于DOM
    1. 将恶意脚本注入到用户界面（通过网络劫持修改页面内容）
    2. 恶意脚本在界面中被执行
+ 容易发生XSS攻击的位置
  1. 数据从一个不可靠的链接进入到一个web应用程序
  2. 没有过滤掉恶意代码的动态内容被发送给web用户
+ 如何阻止XSS攻击
  1. 服务器对输入脚本进行过滤或转码
     + 过滤标签字符
     + 转码一些保留字符
  2. 利用CSP（内容安全策略）
  3. 使用HttpOnly属性
     + 使Cookie只能用在HTTP请求过程中，无法读取

##### CSRF
+ Cross-site request forgery 跨站请求伪造：引诱用户打开黑客网站，在黑客网站中利用用户的登录状态发起跨站请求
+ 产生影响
  + 利用已通过已认证的用户权限进行各种操作
+ 攻击原理
  + 根据黑客盗用的cookie模拟用户操作
+ 攻击前提条件
  1. 目标站点有CSRF漏洞
  2. 登录受信任的网站，并在本地生成Cookie
  3. 在不登出网站的前提下访问危险网站
+ 攻击方式
  + 自动发起GET/POST请求
  + 引诱用户点击链接 
+ 防止CSRF攻击的策略
  + 利用Cookie的SameSite属性
    + Strict完全禁止第三方Cookie
  + 服务端验证请求的来源站点
  + CSRF Token
