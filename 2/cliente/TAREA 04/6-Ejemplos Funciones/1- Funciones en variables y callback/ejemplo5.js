const powerOfTwo = (add) => {
    return add * add;
}


const add = (paramOne, paramTwo, callback) => {
    let sum = paramOne + paramTwo;
    return callback(sum);
}


console.log(add(2, 3, powerOfTwo));