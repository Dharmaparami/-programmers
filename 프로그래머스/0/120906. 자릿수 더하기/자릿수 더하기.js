function solution(n) {
    var answer = Array.from(String(n)).reduce((acc,num) => acc + +num, 0);
    return answer;
}



// function solution(n) {
//     var answer = 0;
//     const numbers =String(n);
//     for(i = 0; i < numbers.length; i++) {
//     answer += (+numbers[i]);
//     }
//     return answer;
// }