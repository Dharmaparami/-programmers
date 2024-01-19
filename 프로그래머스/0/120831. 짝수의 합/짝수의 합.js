function solution(n) {
    let j = 0;
    for(let i = 0; i <= n; i += 2) {
        j = j + i;
    }
    return j;
}