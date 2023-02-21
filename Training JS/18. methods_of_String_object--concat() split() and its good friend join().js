function splitAndMerge(str, separator) {
    const words = str.split(" ");
    const result = words.map(word => word.split("").join(separator));
    return result.join(" ");
}