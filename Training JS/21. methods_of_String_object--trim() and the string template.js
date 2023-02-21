function fiveLine(s) {
    s = s.trim(); // remove whitespace from both ends of s
    let result = "";
    for (let i = 1; i <= 5; i++) {
        result += `${s.repeat(i)}\n`;
    }
    return result.trim(); // remove whitespace from the end of the result
}