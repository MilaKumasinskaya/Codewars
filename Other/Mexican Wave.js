function wave(str) {
    const waveArr = [];

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            const capitalizedChar = str[i].toUpperCase();
            const waveStr = str.slice(0, i) + capitalizedChar + str.slice(i + 1);
            waveArr.push(waveStr);
        }
    }

    return waveArr;
}
