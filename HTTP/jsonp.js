const jsonp = ({url, params, callbackName}) => {
    const generateURL = () => {
        let dataStr = '';
        for (let key in params) {
            dataStr += `${key}=${params[key]}&`;
        }
        dataStr += `callback=${callbackName}`;
        return `${url}?${dataStr}`;
    }

    return new Promise((resolve, reject) => {
        callbackName = callbackName || Math.random().toString.replace(',', '');
        let scriptEle = document.createElement('script');
        scriptEle.src = generateURL();
        document.body.appendChild(scriptEle);
        window[callbackName] = (data) => {
            resolve(data);
            document.body.removeChild(scriptEle);
        }
    })
}