function alienLanguage(str) {
    const words = str.toUpperCase().split(" ");
    const result = words.map(word => word.slice(0, -1) + word.slice(-1).toLowerCase());
    return result.join(" ");
}