function solution(sides) {
    const longestSide= Math.max(...sides);
    const sumSides = sides.reduce((total, sum) => total + sum, 0);
    if (longestSide * 2 - sumSides < 0) {
        return 1;
    } else {
        return 2;
    }
}