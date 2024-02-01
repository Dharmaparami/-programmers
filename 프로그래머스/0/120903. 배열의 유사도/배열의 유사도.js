function solution(s1, s2) {
    const answer = s1.filter(char => s2.includes(char));
    return answer.length;
}