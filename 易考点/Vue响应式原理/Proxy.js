const data = {
    name: 'hejunjie',
    age: 24
}

function reactive(target) {
    const handler = {
        get(target, key, receiver) {
            console.log(`访问了${key}属性`);
            return Reflect.get(target, key, receiver);
        },
        set(target, key, value, receiver) {
            console.log(`将${key}由->${target[key]}->设置成->${value}`);
            Reflect.set(target, key, value, receiver);
        }
    }

    return new Proxy(target, handler);
}

const proxyData = reactive(data);

console.log(proxyData.name);
proxyData.name = 'summerleft';
console.log(proxyData.name)

proxyData.hobby = 'basketball';
console.log(proxyData.hobby);
proxyData.hobby = 'game';