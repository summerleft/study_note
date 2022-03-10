function Hunter(name, level) {
    this.name = name;
    this.level = level;
    this.list = [];
}

Hunter.prototype.publish = function(money) {
    console.log(this.level + '猎人' + this.name + '寻求帮助');
    this.list.forEach((item) => {
        item(money);
    })
}

Hunter.prototype.subscribe = function(target, fn) {
    console.log(this.level + '猎人' + this.name + '订阅了' + target.name);
    target.list.push(fn);
}

let hunterMo = new Hunter('timo', '黑铁');
let hunterVn = new Hunter('vn', '白银');
let hunterEz = new Hunter('Ez', '黄金');
let hunterRookie = new Hunter('Rookie', '王者');

hunterVn.subscribe(hunterMo, function(money) {
    console.log('Vn收到了Timo的求救并收了' + money + '元');
})

hunterEz.subscribe(hunterMo, function() {
    console.log('Ez收到了Timo的求救并去他家了');
})

hunterRookie.subscribe(hunterMo, function() {
    console.log('Rookie收到了Timo的求救直接帮他通关了');
})

hunterMo.publish(12);

