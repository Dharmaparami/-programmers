function solution(rsp) {
const array = Array.from(rsp);
const answer = array.map((char)=>{
   return char === "2"? 0 : char === "5"? 2 : char === "0"? 5 : "";
    })
    return answer.join('');
}