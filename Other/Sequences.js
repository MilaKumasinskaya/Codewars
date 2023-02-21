function flattenArray(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            result = result.concat(flattenArray(arr[i]));
        } else {
            result.push(arr[i]);
        }
    }
    return result;
}

function findCombos(arr) {
    arr = flattenArray(arr);
    if (arr.length <= 1) {
        return 1;
    }
    let permutations = new Set();
    function generatePermutations(currIndex) {
        if (currIndex === arr.length) {
            permutations.add(arr.join());
            return;
        }
        for (let i = currIndex; i < arr.length; i++) {
            [arr[currIndex], arr[i]] = [arr[i], arr[currIndex]];
            generatePermutations(currIndex + 1);
            [arr[currIndex], arr[i]] = [arr[i], arr[currIndex]];
        }
    }
    generatePermutations(0);
    return permutations.size;
}
