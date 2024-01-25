let thr1 = "aya";
let thr2 = "woo";
let two1 = "ye";
let two2 = "ma";
let orTwo;
let andTwo;
let orThr;
let andThr;
function solution(babbling) {
 let canSay = 0;
    
    for(i = 0; i < babbling.length; i++) {
        orTwo = babbling[i].includes(two1) || babbling[i].includes(two2);
        andTwo = babbling[i].includes(two1) && babbling[i].includes(two2);
        orThr = babbling[i].includes(thr1) || babbling[i].includes(thr2);
        andThr = babbling[i].includes(thr1) && babbling[i].includes(thr2); 
        if(babbling[i].length === 2) {
         orTwo? canSay++ : canSay+=0;
         } else if(babbling[i].length === 3) {
             orThr? canSay++ : canSay+=0;
         } else if(babbling[i].length === 4) {
             andTwo? canSay++ : canSay+=0;
         } else if(babbling[i].length === 5) {
            (orThr&&orTwo)? canSay++ : canSay+=0;
         } else if(babbling[i].length === 6) {
             andThr? canSay++ : canSay+=0;
         } else if(babbling[i].length === 7) {
             (orThr&&andTwo)? canSay++ : canSay+=0;
         } else if(babbling[i].length === 8) {
             (andThr&&orTwo)? canSay++ : canSay+=0;
         } else if(babbling[i].length === 10) {
             (andThr&&andTwo)? canSay++ : canSay+=0;
         } else {
             canSay+=0;
         }
    }
    return canSay;
}
        
