function colorOf(r, g, b) {
    // Convert RGB values to hex string form
    const hexR = r.toString(16).padStart(2, '0');
    const hexG = g.toString(16).padStart(2, '0');
    const hexB = b.toString(16).padStart(2, '0');

    // Combine hex strings to form a web color code
    const colorCode = "#" + hexR + hexG + hexB;

    return colorCode;
}