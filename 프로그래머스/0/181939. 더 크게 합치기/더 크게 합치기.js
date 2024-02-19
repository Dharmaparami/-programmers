function solution(a, b) {
    let ab = +('' + a + b);
    let ba = +('' + b + a);
    return ab - ba > 0? ab : ba;
}