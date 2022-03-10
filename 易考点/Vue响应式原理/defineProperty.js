function reactive(obj, key, value) {
    Object.defineProperty(data, key, {
        get() {
            console.log(`访问了${key}属性`);
            return value;
        },
        set(val) {
            console.log(`将${key}由->${value}->设置成->${val}`);
            if (value !== val) {
                value = val;
            }
        }
    })
}

const data = {
    name: 'hejunjie',
    age: 24
}
Object.keys(data).forEach(key => reactive(data, key, data[key]));
console.log(data.name);
data.name = 'summerleft';
console.log(data.name);

data.hobby = '打篮球';
console.log(data.hobby);
data.hobby = '打游戏';
console.log(data.hobby);