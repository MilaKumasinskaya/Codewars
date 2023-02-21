function threeInOne(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i += 3) {
        let sum = 0;
        for (let j = 0; j < 3 && i + j < arr.length; j++) {
            sum += arr[i + j];
        }
        result.push(sum);
    }
    return result;
}