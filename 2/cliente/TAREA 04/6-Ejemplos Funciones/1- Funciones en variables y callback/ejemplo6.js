const add = (...params) => {
    let result = 0;
    for (let value of params) {
        result += value;
    }

    return result;
}

console.log(add(2, 3));
console.log(add(2, 3, 4));
console.log(add(2, 3, 4, 5, 6));
