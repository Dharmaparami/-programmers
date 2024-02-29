function solution(num_list) {
    let sum = 0;
    let multiply = 1;
    for(i = 0; i < num_list.length; i++) {
        sum+=num_list[i];
        multiply*=num_list[i];
    }
    sum = sum**2;
    return sum > multiply? 1 : 0;
}