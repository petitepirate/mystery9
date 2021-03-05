function unroll(squareArray) {
const newArr = [];

while (squareArray.length) {
    newArr.push(
        ...squareArray.shift(),
        ...squareArray.map(a => a.pop()),
        ...(squareArray.pop() || []).reverse(),
        ...squareArray.map(a => a.shift()).reverse()
    );
}
return newArr;
}

module.exports = unroll;
