function howManySmaller(arr, n) {
    // Step 1: Round off each element in the array to two decimal places
    const roundedArr = arr.map(num => Number(num.toFixed(2)));

    // Step 2: Count the number of elements in the rounded array that are smaller than n
    let count = 0;
    for (let i = 0; i < roundedArr.length; i++) {
        if (roundedArr[i] < n) {
            count++;
        }
    }

    // Step 3: Return the count
    return count;
}
