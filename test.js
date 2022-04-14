class EventEmitter {
    constructor() {
        this.cache = {};
    }

    on(event, fn) {
        if (this.cache[event]) {
            this.cache[event].push(fn);
        } else {
            this.cache[event] = [fn];
        }
    }

    emit(event, ...args) {
        if (this.cache[event]) {
            const tasks = this.cache[event];
            tasks.forEach((fn) => {
                fn(...args);
            })
        }
    }
}

function debounce(fn, delay) {
    let timer = null;
    return function() {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            fn();
        }, delay)
    }
}

function throttle(fn, delay) {
    let canRun = true;
    return function() {
        if (!canRun) return;
        canRun = false;
        setTimeout(() => {
            fn();
            canRun = true;
        }, delay);
    }
}

Function.prototype.myCall = function(context, ...args) {
    context || (context = window);
    const fnSymbol = Symbol("fn");
    context[fnSymbol] = this;
    const res = context[fnSymbol](...args);
    delete context[fnSymbol];
    return res;
}

const curry = function(fn, ...args) {
    return function() {
        args = [...args, ...arguments];
        if (args.length < fn.length) {
            return curry(fn, ...args);
        } else {
            return fn.apply(null, args);
        }
    }
}

const arr = [
    { id: 1, pid: null, name: "研发部" },
    { id: 8, pid: 4, name: "Java后端研发部" },
    { id: 2, pid: null, name: "管理部" },
    { id: 3, pid: 1, name: "前端研发部" },
    { id: 4, pid: 1, name: "后端研发部" },
    { id: 5, pid: 2, name: "行政管理部" },
    { id: 6, pid: 2, name: "人力资源管理部" },
    { id: 7, pid: null, name: "财务部" },
]

const tree = [
    {
        id: 1, name: '研发部', children: [
            { id: 3, name: '前端研发部' },
            {
                id: 4, name: '后端研发部', children: [
                    { id: 8, name: 'Java后端研发部' }
                ]
            }
        ]
    },
    {
        id: 2, name: '管理部', children: [
            { id: 5, name: '行政管理部' },
            { id: 6, name: '人力资源管理部' },
        ]
    },
    { id: 7, name: '财务部' },

]

const arrToTree = (arr, pid = null) => {
    return arr.reduce((pre, cur) => {
        if (cur.pid === pid) {
            const children = arrToTree(arr, cur.id);
            if (children.length) {
                cur.children = children;
            }
            delete cur.id;
            pre.push({...cur})
        }
    }, [])
}

const treeToArr = (tree, res=[], pid=null) => {
    for (let item of tree) {
        item.children && treeToArray(item.children, res, item.id)
        res.push({
            id: item.id,
            pid: pid,
            name: item.name
        })

    }
    return res
}

function deepClone(target, map = new WeakMap()) {
    if (typeof target !== 'object') {
        return target;
    } else {
        const res = Array.isArray(target) ? [] : {};
        if (map.get(target)) {
            return map.get(target);
        }
        map.set(target, res);
        for (const key in target) {
            res[key] = deepClone(target[key]);
        }
    }
    return res;
}

function mergeSort(arr) {
    const len = arr.length;
    if (len < 2) return arr;
    const middle = Math.floor(len / 2),
          left = arr.slice(0, middle),
          right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    const result = [];
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    while (left.length) {
        result.push(left.shift());
    }
    while (right.length) {
        result.push(right.shift());
    }
    return result;
}