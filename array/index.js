//  let fruits = ["apple","banana","orange"];

// //  console.log(fruits);
// // console.log(fruits[2]);

// fruits[1] = "strawberry";    // change the value
// // console.log(fruits);


// fruits.push("lemon");  //add a element
// fruits.pop();  //removes a element
// fruits.unshift("cocunut");  //add element at beginning
// fruits.shift();  //remove elements at beginning


// let length = fruits.length;
// let index = fruits.indexOf("orange")

// console.log(length);
// console.log(index);
// // console.log(fruits);


// // loop through array-------

// let prices = [20,40,45,60];

// // for(let i = 0; i < prices.length ; i++){
// //     console.log(prices[i]);
// // }

// for(let price of prices){
//     console.log(price);
// }


// // let fruitss = ["orange","apple","mango","banana"];

// // fruitss = fruitss.sort().reverse()

// // for(let fruit of fruitss){
// //     console.log(fruit);
// // }


// 2D array-----

let sFriends = ["calvin","kiran","sanjay","yogi"];
let cFriends = ["raghul","sathya","cibi","nadeem"];
let aFriends = ["poori","hari","kishore","ebi"];

let friends = [sFriends,cFriends,aFriends];

// friends[1][2] = "cals"

for(let friend of friends){
    for(let each of friend){
        console.log(each);
    }
}
    