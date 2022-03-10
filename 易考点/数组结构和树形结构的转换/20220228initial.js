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
    return arr.reduce((accu, item) => {
        if (item.pid === pid) {
            const children = arrToTree(arr, item.id);
            if (children.length) {
                item.children = children;
            }
            delete item.pid;
            accu.push({...item});
        }
        return accu;
    }, [])
}


const treeToArray = (tree, res = [], pid = null) => {
    for (let item of tree) {
        item.children && treeToArray(item.children, res, item.id)
        res.push({
            id: item.id,
            pid: item.pid,
            name: item.name
        })

    }
    return res
}
// console.log(arrToTree(arr));
console.log(treeToArray(tree));