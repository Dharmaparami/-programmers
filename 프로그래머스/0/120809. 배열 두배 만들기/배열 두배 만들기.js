function solution(numbers) {
    for(let i = 0; i < numbers.length; i++) {
    numbers.push(numbers[0] * 2);
    numbers.shift();
    }
    return numbers;
}
