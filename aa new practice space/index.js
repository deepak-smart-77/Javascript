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

let myNum = 100;

// myNum = myNum.toLocaleString("en-US"); //Us english
// myNum = myNum.toLocaleString("hi-IN");  //india
// myNum = myNum.toLocaleString("de-DE");  //standard german

// // myNum = myNum.toLocaleString("en-US", {style: "currency", currency: "USD"});
// myNum = myNum.toLocaleString("hi-IN", {style: "currency", currency: "INR"});
// myNum = myNum.toLocaleString(undefined, {style: "unit", unit: "celsius"});
myNum = myNum.toLocaleString(undefined, {style: "percent"});


console.log(myNum);