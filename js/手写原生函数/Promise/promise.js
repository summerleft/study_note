class Promise {
    constructor(excutorCallBack) {
        this.status = "pending";
        this.value = undefined;
        this.fulfillAry = [];
        this.rejectedAry = [];
        
        let resolve = result => {
            if (this.status !== 'pending') return;
            let timer = setTimeout(() => {
                this.status = 'fulfilled';
                this.value = result;
                this.fulfillAry.forEach(item => item(this.value));
            }, 0)
        }

        let reject = reason => {
            if (this.status !== 'pending') return;
            let timer = setTimeout(() => {
                this.status = 'rejected';
                this.value = reason;
                this.rejectedAry.forEach(item => item(this.reason));
            })
        }
        try {
            excutorCallBack(resolve, reject);
        } catch(err) {
            reject(err);
        }   
    }

    then(fulfilledCallBack, rejectedCallBack) {
        this.fulfillAry.push(fulfilledCallBack);
        this.rejectedAry.push(rejectedCallBack);
    }
}