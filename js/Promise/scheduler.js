class Schedular {
    constructor(limit) {
        this.tasks = [];
        this.tasksLimit = limit;
        this.runningCount = 0;

    }

    addTask(fn, delay) {
        const task = () => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    fn();
                    resolve();
                }, delay)
            })
        }
        this.tasks.push(task);
    }

    executionTask() {
        if (this.runningCount < this.tasksLimit && this.tasks.length) {
            this.runningCount++;
            this.tasks.shift()().then(() => {
                this.runningCount--;
                this.executionTask();
            })
        }
    }

    startScheduler() {
        for (let i = 0; i < this.tasksLimit; i++) {
            this.executionTask();
        }
    }
}