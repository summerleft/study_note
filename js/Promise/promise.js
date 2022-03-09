class Promise {

    constructor(excecutor) {
        this.PromiseState = "pending";
        this.PromiseResult = null;
        this.callbacks = [];
        
        try {
            // 同步调用执行器函数
            excecutor(this.resolve, this.reject);    
        } catch(e) {
            reject(e);
        }
        
    }

    resolve = (data) => {
        if (this.PromiseState !== "pending") return;
        this.PromiseState = "fulfilled";
        this.PromiseResult = data;
        this.callbacks.forEach(item => {
            item.onResolved(data);
        })
    }

    reject = (data) => {
        if (this.PromiseState !== "pending") return;
        this.PromiseState = "rejected";
        this.PromiseResult = data;
        this.callbacks.forEach(item => {
            item.onRejected(data);
        })
    }

    then(onResolved, onRejected) {
        const self = this;
        return new Promise((resolve, reject) => {
            if (this.PromiseState === "fulfilled") {
                try {
                    let result = onResolved(this.PromiseResult);
                    if (result instanceof Promise) {
                        result.then(v => {
                            resolve(v);
                        }, r => {
                            reject(r);
                        })
                    } else {
                        resolve(result);
                    }
                } catch(e) {
                    reject(e);
                }
            }
            if (this.PromiseState === "rejected") {
                onRejected(this.PromiseResult);
            }
            if (this.PromiseState === "pending") {
                this.callbacks.push({
                    onResolved: function() {
                        const result = onResolved(self.PromiseResult);
                        if (result instanceof Promise) {
                            result.then(v => {
                                resolve(v);
                            }, r => {
                                reject(r);
                            })
                        } else {    
                            resolve(result);
                        }
                    },
                    onRejected: function() {
                        try{
                            const result = onRejected(self.PromiseResult);
                            if (result instanceof Promise) {
                                result.then(v => {
                                    resolve(v);
                                }, r => {
                                    reject(r);
                                })
                            } else {
                                resolve(result);
                            }
                        } catch(e) {
                            reject(e);
                        }
                    }
                });
                // this.callback = {onResolved, onRejected}
            }
        })


    }
}
