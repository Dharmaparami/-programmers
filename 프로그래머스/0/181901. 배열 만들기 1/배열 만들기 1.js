function solution(n, k) {
    const array = [];
    array[0] = 1;
    for(let i = 1; i< n; i++) {
        array[i] = i+1;
    }
    
    return array.filter((num)=> (num % k === 0));
}