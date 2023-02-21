function longestRepetition(s) {
    let maxChar = '';
    let maxLength = 0;
    let currentChar = '';
    let currentLength = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === currentChar) {
            currentLength++;
        } else {
            currentChar = s[i];
            currentLength = 1;
        }

        if (currentLength > maxLength) {
            maxChar = currentChar;
            maxLength = currentLength;
        }
    }

    return [maxChar, maxLength];
}
