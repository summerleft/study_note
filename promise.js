
class Scheduler {
    constructor() {
        // this.cache = [];
        this.tasks = [];
        this.runTasks = [];
    }
    
    add(promiseCreator) {
        // if (this.cache.length >= 2) {
        //     return;h
        // } else {
        //     this.cache.push(promiseCreator);
        // }
        this.tasks.push(promiseCreator);
        this.runTasks.length < 2 ? this.runTasks.push(promiseCreator) : (function() {})();
        return new Promise((resolve, reject) => {
            this.runTasks.forEach((task) => {
                return new Promise((resolve, reject) => {
                    Promise.resolve(task).then((res) => {
                        resolve();
                        this.runTasks.findIndex((item) => item === task);
                        if (index > 0) {
                            this.runTasks.splice(index, 1)
                        }
                    }, (err) => {
    
                    })
                })
            })
            
            resolve();
        })
        
        
        // return new Promise((resolve, reject) => {
        //     Promise.resolve(promiseCreator).then(() => {
        //         for (let i in this.cache) {
        //             if (this.cache[i] === promiseCreator) {
        //                 delete this.cache[i];
        //             }
        //         }
        //         resolve();
        //     })
        // })
    }
}

const timeout = (time) => new Promise(resolve => {
    setTimeout(resolve, time)
})

const scheduler = new Scheduler()
const addTask = (time, order) => {
    scheduler.add(() => timeout(time)).then(() => 
        console.log(order)
    )
}

addTask(1000, '1')
addTask(500, '2')
addTask(300, '3')
addTask(400, '4')