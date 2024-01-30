function solution(my_string, alp) {
    let answer = '';
    for(let char of my_string) {
        if(char === alp) {
            answer += char.toUpperCase()
        } else if(char !== alp) {
            answer += char;
        }
    }
    return answer;
}