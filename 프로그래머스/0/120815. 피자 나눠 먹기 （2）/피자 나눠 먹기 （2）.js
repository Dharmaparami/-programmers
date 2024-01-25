function solution(n) {
    let pizza = 1;
    let pieces = 6 * pizza;
    
    while(pieces % n !== 0) {
        pizza++;
        pieces = 6 * pizza;
    }
    
    return pizza;
}