function solution(array) {
    let counting = [];
    
    counting.length = Math.max(...array) + 1;
    counting.fill(0);
    
    for(i = 0; i < array.length; i++) {
        counting[array[i]] += 1;
    }
    let maxValue = Math.max(...counting);
    let mostNum = counting.indexOf(maxValue);
    
    let countBox = counting.filter(x => x === maxValue).length;
    
    if(countBox === 1) {
        return mostNum;
    } else { 
        return -1;}
}