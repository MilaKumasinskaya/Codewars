function cutIt(arr) {
    // Find the length of the shortest string
    const shortestLength = Math.min(...arr.map(str => str.length));

    // Cut each string to the shortest length
    const result = arr.map(str => str.slice(0, shortestLength));

    return result;
}
