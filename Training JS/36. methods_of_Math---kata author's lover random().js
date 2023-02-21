function rndCode() {
    const letters = 'ABCDEFGHIJKLM';
    const symbols = '~!@#$%^&*';
    const digits = '0123456789';
    const usedCodes = new Set();

    while (true) {
        let code = '';
        code += letters[Math.floor(Math.random() * letters.length)];
        code += letters[Math.floor(Math.random() * letters.length)];
        code += digits[Math.floor(Math.random() * digits.length)];
        code += digits[Math.floor(Math.random() * digits.length)];
        code += digits[Math.floor(Math.random() * digits.length)];
        code += digits[Math.floor(Math.random() * digits.length)];
        code += symbols[Math.floor(Math.random() * symbols.length)];
        code += symbols[Math.floor(Math.random() * symbols.length)];

        if (!usedCodes.has(code)) {
            usedCodes.add(code);
            return code;
        }

        // If we've already generated all possible codes, break out of the loop
        if (usedCodes.size === letters.length ** 2 * 10 ** 4 * symbols.length ** 2) {
            break;
        }
    }

    // If we've generated all possible codes and still haven't found a unique one,
    // throw an error
    throw new Error('Unable to generate unique code');
}
