function isolateIt(arr) {
    return arr.map(str => {
        const midIndex = Math.floor(str.length / 2);
        if (str.length % 2 === 0) {
            return str.slice(0, midIndex) + '|' + str.slice(midIndex);
        } else {
            return str.slice(0, midIndex) + '|' + str.slice(midIndex + 1);
        }
    });
}
