function bigToSmall(arr) {
    let flatArr = [].concat(...arr); // flatten the 2D array into a 1D array
    let sortedArr = flatArr.sort((a, b) => b - a); // sort the array in descending order
    let result = sortedArr.join(">"); // join the array elements with ">"
    return result;
}