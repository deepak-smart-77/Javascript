// function startProgram(){
//     let userName = "deepak";
//     let age = 20;

//     happyBirthday(userName,age);
// }

// function happyBirthday(userName,age){
//     console.log("happy birthday to",userName ,"..You r",age,"years old");
// }

// startProgram();


// let width;
// let height;
// let area;


// width = window.prompt("Enter width");
// height = window.prompt("Enter height");


// function getArea(width, height){
//     return width * height;
// }

// area = getArea(width, height);

// console.log("The area is", area);


// let adult = checkAge(18);
// console.log(adult);

// function checkAge(age){

//     return age >= 18 ? true : false
// }


// let userName = "deepak";
// let items = 12;
// let total  = 2000;

// // console.log(`hello ${userName}`);
// // console.log(`u have ${items} in ur cart`);
// // console.log(`ur total is ${total} rupees`);

// let text =
// `Hello ${userName}<br>
// You have ${items} in your cart<br>
// Your total is ${total} rupees`

// // console.log(text);
// document.getElementById("abc").innerHTML = text;

// let myNum = 100;

// // myNum = myNum.toLocaleString("en-US"); //Us english
// // myNum = myNum.toLocaleString("hi-IN");  //india
// // myNum = myNum.toLocaleString("de-DE");  //standard german

// // // myNum = myNum.toLocaleString("en-US", {style: "currency", currency: "USD"});
// // myNum = myNum.toLocaleString("hi-IN", {style: "currency", currency: "INR"});
// // myNum = myNum.toLocaleString(undefined, {style: "unit", unit: "celsius"});
// myNum = myNum.toLocaleString(undefined, {style: "percent"});


// console.log(myNum);


// document.getElementById("submitBtn").onclick = function(){

//     let temp;

//     if(document.getElementById("celsiusBtn").checked){
//         temp = document.getElementById("textBox").value;
//         temp = Number(temp);
//         temp = toCelsius(temp);
//         document.getElementById("outputValue").innerHTML = temp + "°C";
//     }
//     else if(document.getElementById("fahrenheitBtn").checked){
//         temp = document.getElementById("textBox").value;
//         temp = Number(temp);
//         temp = toFahrenheit(temp);
//         document.getElementById("outputValue").innerHTML = temp + "°F";
//     }
//     else{
//         document.getElementById("outputValue").innerHTML = "Select a unit";
//     }
// }

// function toCelsius(temp){
//     return (temp - 32) * (5/9);
// }

// function toFahrenheit(temp){
//     return temp * 9 / 5 +32;
// }




// let fruits = ["apple","banana","orange"];

// console.log(fruits);
// console.log(fruits[2]);

// fruits[1] = "strawberry";    // change the value
// console.log(fruits);


// fruits.push("lemon");  //add a element
// fruits.pop();  //removes a element
// fruits.unshift("cocunut");  //add element at beginning
// fruits.shift();  //remove elements at beginning


// let length = fruits.length;
// let index = fruits.indexOf("orange")

// console.log(length);
// console.log(index);
// console.log(fruits);


// let prices = [20,40,45,60];

// for(let i = prices.length -1; i >= 0 ; i-=1){
//     console.log(prices[i]);
// }

// for(let price of prices){
//     console.log(price);
// }


// let fruitss = ["orange","apple","mango","banana"];

// fruitss = fruitss.sort().reverse()

// for(let fruit of fruitss){
//     console.log(fruit);
// }



let fruits = ["mango", "apple", "banana"];
let vegies = ["carrots", "beans", "potatoes"];
let meats = ["eggs", "chicken","fish"];

let groceryList = [fruits, vegies, meats];

for(let list of groceryList){
    for(let food of list){
        console.log(food)
    }
}
