function solution(num_list, n) {
    return num_list.filter((number, index) => index <= n - 1);
}