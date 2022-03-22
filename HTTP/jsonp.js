const jsonp = (url, data={}, callback='callback') => {
    let dataStr = url.indexOf('?')=== -1 ? '?' : '&';
    for (let key in data) {
        dataStr += `${key}=${data[key]}&`
    }
    dataStr += `callback=` + callback

    let oScript = document.createElement('script');
    oScript.src = url + dataStr;
    document.body.appendChild(oScript);
    window[callback] = (data) => {
        console.log(data);
    }
}