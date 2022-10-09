function debounce(fn, delay) {
    let timer = null;
    return function() {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            fn();
        }, delay);
    }
}

function throttle(fn, delay) {
    let canRun = true;
    return function() {
        if (!canRun) {
            return;
        }
        canRun = false;
        setTimeout(() => {
            fn();
            canRun = true;
        }, delay)
    }
}