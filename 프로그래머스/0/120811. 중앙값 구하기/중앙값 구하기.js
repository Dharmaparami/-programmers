function solution(array) {
    let midNum = Math.floor(array.length / 2);

    array = array.sort((a, b) => a - b);

    return array[midNum];
}