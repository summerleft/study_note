// 输入
// url = 'https://www.nowcoder.com/discuss/v2/post?type=0&key=test'
// key = 'abcd'
// // 输出
// res = 'https://www.nowcoder.com/discuss/v2/post?type=0&key=abcd'

// function replaceKey(url, keyValue) {
//     const urlObj = new URL(url);
//     urlObj.searchParams.set('key', keyValue);
//     return urlObj.href;
// }

function replaceKey(url, keyValue) {
    const urlObj = new URL(url);
    urlObj.searchParams.set('key', keyValue);
    return urlObj.href;
}

console.log(replaceKey('https://www.nowcoder.com/discuss/v2/post?type=0&key=test', 'abcd'));