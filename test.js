// try {
//     function ajaxGet(url, (err, res) => {
//         res.children.name = 'test';
//     })
// } catch(e) {
//     console.log('res has no attribute children');
// }


function ajax() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error('testerror'));
        }, 1000)
    })
}

async function test() {
    try {
        const res = await ajax();
        console.log(res);
    } catch(e) {
        console.log(e);
    }
}   

test();

