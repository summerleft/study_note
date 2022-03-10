let hunterUnion = {
    topics: {},
    subscribe: function(topic, fn) {
        if (!this.topics[topic]) {
            this.topics[topic] = [];
        }
        this.topics[topic].push(fn);
    },
    publish: function(topic, money) {
        if (!this.topics[topic]) {
            return;
        }
        for (let fn of this.topics[topic]) {
            fn(money);
        }
    }

}

function Hunter(name, level) {
    this.name = name;
    this.level = level;
}

Hunter.prototype.subscribe = function(topic, fn) {
    console.log(`${this.level}猎人${this.name}订阅了${topic}的任务`);
    hunterUnion.subscribe(topic, fn);
}

Hunter.prototype.publish = function(topic, money) {
    console.log(`${this.level}猎人${this.name}发布了${topic}的任务并悬赏${money}元`);
    hunterUnion.publish(topic, 100);
}

let hunterMo = new Hunter('timo', '黑铁');
let hunterVn = new Hunter('vn', '白银');
let hunterEz = new Hunter('Ez', '黄金');
let hunterRookie = new Hunter('Rookie', '王者');

hunterVn.subscribe('老虎', function(money) {
    console.log(`Vn订阅了关于老虎的任务并想挣${money}元`);
})

hunterRookie.publish('老虎', 100)