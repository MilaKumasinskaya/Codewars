function maxMin(arr1, arr2) {
    const diffArr = arr1.map((num, i) => Math.abs(num - arr2[i]));
    const maxVal = Math.max(...diffArr);
    const minVal = Math.min(...diffArr);
    return [maxVal, minVal];
}
