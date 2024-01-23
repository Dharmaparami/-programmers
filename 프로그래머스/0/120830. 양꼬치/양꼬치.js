function solution(n, k) {
    let lamb = 12000 * n;
    let drink = 2000 * k;
    let freeDrink = 2000 * Math.floor(n/10);
    
    return lamb + drink - freeDrink;
}