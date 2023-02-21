function tailAndHead(arr) {
    let result = arr.reduce((acc, cur, index) => {
        if (index !== 0) {
            let curTail = Number(String(cur)[0]); // get the tail of the current element
            let prevHead = Number(String(arr[index-1])[String(arr[index-1]).length-1]); // get the head of the previous element
            acc.push(curTail + prevHead); // add the tail and head to the accumulator array
        }
        return acc;
    }, []);

    return result.reduce((acc, cur) => acc * cur); // calculate the product of the accumulator array
}
