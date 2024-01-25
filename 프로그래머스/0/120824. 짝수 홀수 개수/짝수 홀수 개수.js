function solution(num_list) {
    let evenArray = num_list.slice().filter(x => x % 2 === 0);
    let oddArray = num_list.slice().filter( x => x % 2 !== 0);
    let answer = [ 0, 0 ];
    answer[0] = evenArray.length;
    answer[1] = oddArray.length;
    return answer;
}