function solution(n, control) {
    controlarr = Array.from(control);
    const W = controlarr.filter(char => char == "w").length
    const S = controlarr.filter(char => char == "s").length
    const D = controlarr.filter(char => char == "d").length
    const A = controlarr.filter(char => char == "a").length
    return n + W - S +10*D -10*A;
}