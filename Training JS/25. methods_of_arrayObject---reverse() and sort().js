function sortIt(arr) {
    let counts = {};
    for (let num of arr) {
        if (counts[num]) {
            counts[num]++;
        } else {
            counts[num] = 1;
        }
    }
    let sorted = Object.entries(counts).sort((a, b) => {
        if (a[1] !== b[1]) {
            return a[1] - b[1];
        } else {
            return b[0] - a[0];
        }
    });
    let result = [];
    for (let [num, count] of sorted) {
        for (let i = 0; i < count; i++) {
            result.push(Number(num));
        }
    }
    return result;
}