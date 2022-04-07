+ 自我认知
  + http缓存分为强制缓存和协商缓存
    + 强制缓存：检查缓存中的有效期，若有效直接调用缓存，无效则发送请求
    + 协商缓存：先发送请求询问服务端是否可以读取缓存数据，若可以则读取缓存

#### 什么是缓存
+ 浏览器缓存是对已请求过的文件进行缓存，以便下一次访问时重复使用，节省带宽，降低服务器压力
+ 相关响应头字段为Expires, Cache-Control, Last-Modified, Etag

#### 强缓存
+ Expires：过期时间，若设置，浏览器在该时间内直接读取（缺点：客户端时间和服务端不一致）
+ Cache-Control：若和Expires同时存在，则覆盖Expires，max-age存在，则设置为在该时间之内强制命中缓存

#### 协商缓存
+ Last-Modified/If-Modified-Since和Etag/If-None-Match成对出现，一一对应
+ Etag/If-None-Match（http1.1）
  + Etag由服务器生成返回前端，用于根据资源内容生成唯一标识符
  + If-None-Match：资源过期时，浏览器用此字段带上Etag值，服务器根据该值返回200/304
+ Last-Modified/If-Modified-Since:
  + Last-Modified:源头服务器认定的资源做出修改的日期及时间
  + If-Modified-Since:资源过期时，请求头带上该值，后端比较该时间，返回200/304
