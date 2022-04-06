// index.html

function jsonp({ url, params, callback }) {
    return new Promise((resolve, reject) => {
        let script = document.createElement('script');
        window[callback] = function(data) {
            resolve(data);
            document.body.removeChild(script);
        }
        params = { ...params, callback };
        let arrs = [];
        for (let key in params) {
            arrs.push(`${key}=${params[key]}`);
        }
        script.src = `${url}?${arrs.join('&')}`;
        document.body.appendChild(script)
    })
}

jsonp({
    url: 'http://localhost:3000/say',
    params: { wd: 'ILoveYou' },
    callback: 'show'
}).then((data) => {
    console.log(data);
})

// server.js
let express = require('express');
let app = express();

app.get('/say', function(req, res){
    let { wd, callback } = req.query;
    res.end(`${callback}('我不爱你')`)
})
app.listen(3000);