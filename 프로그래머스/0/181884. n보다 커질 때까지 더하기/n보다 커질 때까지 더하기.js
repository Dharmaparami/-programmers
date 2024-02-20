function solution(numbers, n) {
    let sum = 0;
    let i = 0;
 
    while(sum <= n) {
     sum = sum + numbers[i];
        i++; 
    }
    return sum;
}