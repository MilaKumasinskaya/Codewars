function cutCube(volume, n) {
    const cubeLength = Math.cbrt(volume);
    const smallCubeLength = cubeLength / Math.cbrt(n);
    return Number.isInteger(cubeLength) && Number.isInteger(smallCubeLength);
}
