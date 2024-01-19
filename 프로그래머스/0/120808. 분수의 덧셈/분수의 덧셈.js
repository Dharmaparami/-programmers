function solution(numer1, denom1, numer2, denom2) {
    let X = numer1 * denom2 + numer2 * denom1;
    let Y = denom1 * denom2;
    let A = numer1 * denom2 + numer2 * denom1;
    let B = denom1 * denom2;
    let r;
    if(A > B) {
        while(B !== 0) {
            r = A % B;
            A = B;
            B = r;
        }
        return [X/A, Y/A];
    } else if (A < B) {
        while(A !== 0) {
            r = B % A;
            B = A;
            A = r;
        }
        return [X/B, Y/B];
    } else {
        return [1 , 1];
    }
}

