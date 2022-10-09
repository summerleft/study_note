function randomSort(arr) {
    return arr.sort((a, b) => Math.random() - 0.5);
}

const input = [1,2,3,4,5,6,7,8];
console.log(randomSort(input));