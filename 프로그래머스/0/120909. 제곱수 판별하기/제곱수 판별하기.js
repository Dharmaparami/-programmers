function solution(n) {
    const root = Math.sqrt(n);
     return root === Math.floor(root) ? 1 : 2;
}