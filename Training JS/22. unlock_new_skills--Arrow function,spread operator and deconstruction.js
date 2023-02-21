const shuffleIt = (arr, ...swaps) => {
    swaps.forEach(([i, j]) => {
        [arr[i], arr[j]] = [arr[j], arr[i]];
    });
    return arr;
};