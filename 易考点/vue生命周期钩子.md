### 组件挂载
+ 父组件beforeCreate -> 父组件created -> 父组件beforeMount -> 子组件beforeCreate -> 子组件created -> 子组件beforeMount -> 子组件mounted -> 父组件mounted

### 子组件更新
+ 父beforeUpdate -> 子beforeUpdate -> 子updated -> 父updated

### 父组件更新
+ 父beforeUpdate -> 父updated

### 组件销毁过程
+ 父beforeDestoy -> 子beforeDestroy -> 子destroyed -> 父destroyed