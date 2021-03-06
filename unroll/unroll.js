function unroll(squareArray) {
const newArr = [];

while (squareArray.length) { //prevent infinite loop
    newArr.push(
        // step 1: return the first array within the matrix [1,2,3,4] w/ spread operator allows us to recieve it like: 1 2 3 4
        ...squareArray.shift(),
        // step 2: map over each array using the pop method to recieve the very last number in each array
        ...squareArray.map(arr => arr.pop()),
        // step 3: similar to step 1, but also adding reverse 
        ...(squareArray.pop() || []).reverse(),
        // step 4: similar to step 2, map over remaining arrays in reverse, pulling off the first number and retruning them.
        ...squareArray.map(arr => arr.shift()).reverse()
    );
}
return newArr;
}

module.exports = unroll;
