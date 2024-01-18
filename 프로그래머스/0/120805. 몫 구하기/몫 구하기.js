function solution(num1, num2) {
     if( num1 < num2) {
         return 0;
     } else if( num1 === num2) {
         return 1;
     } else {
        return (num1 - num1 % num2) / num2;
     }
};

// 나눗셈 나눈수 =몫x나눌수 + 나머지