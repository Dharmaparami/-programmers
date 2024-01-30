function solution(my_string) {
    let newarray = [];
    for(let char of my_string) {
        newarray.unshift(char);
    }
    return newarray.join('');
}