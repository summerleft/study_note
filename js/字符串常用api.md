#### ```String.prototype.charAt()```
```javascript
str.charAt(index);
```
返回索引值为```index```的字符，若```index```值超出范围，返回空字符串

---
#### ```String.prototype.charCodeAt()```
```javascript
str.charCodeAt(index);
```
指定```index```处字符的UTF-16代码的Unicode值；如果```index```超出范围，```charCodeAt()```返回 NaN

---
#### ```String.prototype.concat()```
将一个或多个字符串与原字符串连接合并，形成一个新的字符串并返回
```javascript
str.concat(str2, [, ...strN])
```
```concat```方法将一个或多个字符串与原字符串连接合并，形成一个新的字符串并返回。```concat```方法并不影响原字符串。如果参数不是字符串类型，它们在连接之前将会被转换成字符串

---
#### ```String.prototype.endsWith()```
用来判断当前字符串是否是以另外一个给定的子字符串结尾的，根据判断结果返回 ```true```或```false```


---
#### ```String.prototype.includes()```
```includes()```方法用于判断一个字符串是否包含在另一个字符串中，根据情况返回```true```或```false```

---
#### ```String.prototype.indexOf()```
```indexOf()```方法返回调用它的```String```对象中第一次出现的指定值的索引，从```fromIndex```处进行搜索。如果未找到该值，则返回-1。
```javascript
str.indexOf(searchValue, [, fromIndex]);
```

---
#### ```String.prototype.substring()```
返回一个字符串在开始索引到结束索引之间的一个子集, 或从开始索引直到字符串的末尾的一个子集
```str.substring(indexStart[, indexEnd])```
+ ```indexStart```:需要截取的第一个字符的索引，该索引位置的字符作为返回的字符串的首字母
+ ```indexEnd```:可选,一个 0 到字符串长度之间的整数，以该数字为索引的字符不包含在截取的字符串内

