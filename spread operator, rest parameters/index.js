// let num = [1,2,3,4,5,6]
// let max = Math.max(...num);

// console.log(max)


// let frnds1 = ["cals","yogi","kira","nope"];
// let frnds2 = ["raghul","sathya","cibi","nadeem"];

// frnds1.push(...frnds2);

// console.log(...frnds1);


// rest parameters------

let a=1;
let b=2;
let c=3;
let d=4;
let e=5;

console.log(sum(a,b,e));

function sum(...numbers){
    total = 0;
    for(let number of numbers){
        total += number
    }
    return total
}