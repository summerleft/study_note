function debounceV1(fn, delay) {
  let timer = null;
  return function () {
    if (timer) {
      clearTimeout(timer);
    } else {
      timer = setTimeout(() => {
        fn();
      }, delay);
    }
  }
}

/**
 * 绑定this 以及增加参数
 * @param {需要进行监听的函数} fn 
 * @param {时间延迟} delay 
 */
function debounceV2(fn, delay) {
  let timer = null;
  return function (...args) {
    if (timer) {
      clearTimeout(timer);
    } else {
      setTimeout(() => {
        fn.apply(this, args);
      }, delay);
    }
  }
}

/**
 * 增加是否立即执行
 * @param {需要进行监听的函数} fn 
 * @param {时间延迟} delay 
 * @param {是否立即执行} immediate 
 */
function debounceV3(fn, delay, immediate = true) {
  let timer = null;
  let isFirst = true; //是否当前轮次第一次调用
  return function (...args) {
    if (timer) {
      clearTimeout(timer)
    }
    if (immediate && isFirst) {
      fn.apply(this, args);
      isFirst = false
    } else {
      timer = setTimeout(() => {
        fn.apply(this, args);
        isFirst = true;
      }, delay);
    }
  }
}


/**
 * 增加取消功能
 * @param {*} fn 
 * @param {*} delay 
 * @param {*} immediate 
 */
function debounceV4(fn, delay, immediate = false) {
  let timer = null;
  let isFirst = true;
  function _debounce(...args) {
    if (timer) {
      clearTimeout(timer)
    }
    if (immediate && isFirst) {
      fn.apply(this, args);
      isFirst = false
    } else {
      timer = setTimeout(() => {
        fn.apply(this, args);
        isFirst = true;
      }, delay);
    }
  }
  _debounce.cancel = function () {
    clearTimeout(timer);
    timer = null;
  }
  return _debounce
}


function debounceV5(fn, delay, immediate = false) {
  let timer = null;
  let isFirst = true;
  function _debounce(...args) {
    return new Promise((resolve, reject) => {
      if (timer) {
        clearTimeout(timer)
      }
      if (immediate && isFirst) {
        try {
          const res = fn.apply(this, args);
          isFirst = false;
          resolve(res)
        } catch (error) {
          reject(error)
        }
      } else {
        try {
          timer = setTimeout(() => {
            const res = fn.apply(this, args);
            isFirst = true;
            resolve(res)
          }, delay);
        } catch (error) {
          reject(error)
        }
      }
    })

  }
  _debounce.cancel = function() {
    clearTimeout(timer);
    timer = null;
  }
  return _debounce
}



