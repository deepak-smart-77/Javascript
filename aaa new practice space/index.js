// let numbers = [1, 2, 3, 4, 5]
// let squares = numbers.map(square)

// squares.forEach(print)

// function square(element){
//     return Math.pow(element,2)
// }

// function print(element){
//     console.log(element);
// }


// let ages=[12,18,19,21,32,11,10]
// let adults = ages.filter(checkAge);

// console.log(adults);
// adults.forEach(print)

// function checkAge(element){
//     return element >= 18;
// }
// function print(element){
//     console.log(element);
// }

// let prices = [10, 20, 39, 19, 49];
// let totalPrice = prices.reduce(checkOut);
// console.log(totalPrice);

// function checkOut(total, element){
//     return total + element;
// }

///-----constructor---static---

// class Student{

//     static numberOfStudents = 0;

//     constructor(name, age, gpa){
//         this.name=name;
//         this.age=age;
//         this.gpa=gpa;
//         Student.numberOfStudents+=1;
//     }
//     study(){
//         console.log(`${this.name} is studying`);
//     }
// }

// const student1 = new Student("Deepak", 20, 7.5);
// const student2 = new Student("Raghul", 20, 7.6);

// console.log(student1.name);
// student2.study()
// console.log(Student.numberOfStudents);

///-----inheritance---super keyword---//

// class Animal{

//     alive = true;

//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }

//     eat(){
//         console.log(`${this.name} is sleeping`);
//     }
//     sleep(){
//         console.log(`${this.name} is eating`);
//     }
// }

// class Rabbit extends Animal{

//     constructor(name,age,runSpeed){
//         super(name,age);
//         this.runSpeed=runSpeed;
//     }
//     run(){
//         console.log(`${this.name} is running`);
//     }
// }
// class Fish extends Animal{

//     constructor(name,age,swimSpeed){
//         super(name,age);
//         this.swimSpeed=swimSpeed;
//     }
//     swim(){
//         console.log(`${this.name} is swimming`);
//     }
// }

// const fish = new Fish("fish",5,40);
// const rabbit = new Rabbit("rabbit",4,60);

// rabbit.run();
// fish.swim();
// console.log(rabbit.name);
// console.log(rabbit.age);
// console.log(rabbit.runSpeed);

///-----getter setter----

// class Car{

//     constructor(power,gas){
//         this._power=power;
//         this._gas=gas;
//     }

//     get power(){
//         return `${this._power}hp`
//     }
//     get gas(){
//         return `${this._gas}L (${this._gas/50*100})%`
//     }
//     set gas(value){
//         if(value>50){
//             value = 50;
//         }
//         else if(value < 0){
//             value = 0;
//         }
//         this._gas=value;
//     }
// }

// const car = new Car(400,25);
// car.gas = 1000;
// console.log(car.power);
// console.log(car.gas);

///---object as arguments

// class Car{
//     constructor(model,year,color){
//         this.model=model;
//         this.year=year;
//         this.color=color;
//     }
//     drive(){
//         console.log(`you are driving ${this.model}`);
//     }
// }

// const car1=new Car("ferrari",2024,"black")
// const car2=new Car("lambo",2023,"blue")

// // changeColor(car1, "gold")
// // displayInfo(car1);

// // function displayInfo(car){
// //     console.log(car.model);
// //     console.log(car.color);
// //     console.log(car.year);
// // }

// // function changeColor(car, color){
// //     car.color=color;
// // }

// const cars =[car1,car2];

// console.log(cars[0].model);
// cars[0].drive()

////error handling------

// try{
//     let x = window.prompt("enter a number");
//     x= Number(x);

//     if(isNaN(x)) throw "that wasnt a number"
//     if(x == "" ) throw "that is empty"

//     console.log(`${x} is a number`);

// }
// catch(error){
//     console.log(error);
// }
// finally{
//     console.log("this always executes"); 
// }

///------setTimeOut()--

// let timer1=setTimeout(firstMsg,3000)
// let timer2=setTimeout(secoundMsg,6000)
// let timer3=setTimeout(thirdMsg,9000)

// function firstMsg(){
//     alert(`buy this course for 500`)
// }
// function secoundMsg(){
//     alert(`this is not a scam`)
// }
// function thirdMsg(){
//     alert(`do it now`)
// }

// document.getElementById("myButton").onclick=function(){
//     clearTimeout(timer1);
//     clearTimeout(timer2);
//     clearTimeout(timer3);
//     alert(`thanks for buying`)

// }

//---setInterval()---


// let count = 0;

// let max = window.prompt("count upto ??");
// max = Number(max);

// const myTimer = setInterval(countUp,1000)

// function countUp(){
//     count+=1;
//     console.log(count);
//     if(count >= max){
//         clearInterval(myTimer)
//     }
// }

///---date object---

// let date = new Date();
// // let date = new Date(2023,1,1,2,4);

// let year = date.getFullYear();
// let dayOfMonth = date.getDate();
// let dayOfweek = date.getDay()
// let month = date.getMonth()
// let hour = date.getHours()

// date = date.toLocaleString();
// // console.log(date);
// document.getElementById("myLabel").innerHTML = year;
// document.getElementById("myLabel1").innerHTML = dayOfMonth;
// document.getElementById("myLabel2").innerHTML = dayOfweek;
// document.getElementById("myLabel3").innerHTML = month;
// document.getElementById("myLabel4").innerHTML = hour;

//---clock program--

// clock();
// setInterval(clock, 1000)

// function clock(){

//     let date = new Date();
//     date=date.toLocaleTimeString()
//     document.getElementById("myLabel").innerHTML = date;

// }

// console.time("Response time: ")

// // alert("click here")
// setTimeout(abc,3000)
// function abc(){
//     console.log("hello");
// }
// console.timeEnd("Response time: ")

////-----promise---

// const promise= new Promise(loadFile);

// function loadFile(resolve,reject){
//     let fileLoaded = true;

//     if(fileLoaded){
//         resolve("File Loaded")
//     }
//     else{
//         reject("File NOT loaded")
//     }
// }
// promise.then(value => console.log(value))
// promise.catch(error => console.log(error))

//---async function

// async function loadFile(){
//     let fileLoaded = true;

//     if(fileLoaded){
//         return ("File Loaded")
//     }
//     else{
//         return ("File NOT loaded")
//     }
// }
// loadFile().then(value => console.log(value))
//           .catch(error => console.log(error))

//---await--

// async function loadFile(){
//     let fileLoaded = false;

//     if(fileLoaded){
//         return ("File Loaded")
//     }
//     else{
//         throw ("File NOT loaded")
//     }
// }

// async function startProess() {
//     try{
//     let message =  await loadFile()
//     console.log(message);
//     }
//     catch(error){
//     console.log(error);
//     }
// }
// startProess();

///---es6 module--

// import * as moduleValue from "./es6module.js"

// console.log(moduleValue.PI);
//  let circumference = moduleValue.getCircum(10);
//  console.log(circumference);
//  let area = moduleValue.getArea(10);
//  console.log(area);


///-----DOM--

// let element = document.getElementById("myTitle");
// element.style.backgroundColor = "blue"

// let fruits = document.getElementsByName("fruits");
// fruits.forEach(checkedFruits)
// function checkedFruits(fruit){
//     if(fruit.checked){
//         console.log(fruit.value);
//     }
// }

// let vegeis = document.getElementsByTagName("li");
// vegeis[2].style.backgroundColor = "lightgreen";

// let desserts = document.getElementsByClassName("dessert");
// desserts[1].style.backgroundColor="pink"
// desserts[0].style.backgroundColor="grey"
// desserts[2].style.backgroundColor="lightblue"

// let elements = document.querySelectorAll("[for]");
// elements.forEach(abc);

// function abc(element){
//     element.style.backgroundColor = "grey"
// }
// let elementss = document.querySelectorAll("li");
// elementss.forEach(abcd);

// function abcd(element){
//     element.style.backgroundColor = "lightblue"
// }
// let elementsss = document.querySelectorAll(".dessert");
// elementsss.forEach(abcde);

// function abcde(element){
//     element.style.backgroundColor = "pink"
// }

// let element = document.querySelector("#vegeis");
// let children = Array.from(element.children);

// children.forEach(child => child.style.backgroundColor = "lightblue")

//---add/chnage HTML elements--

// const nameTag = document.createElement("h1");
// nameTag.textContent=window.prompt("enter ur name");
// document.body.append(nameTag)

// const myList = document.querySelector("#fruits");
// const listItems = document.createElement("li");
// listItems.textContent = "carrot";
// // myList.prepend(listItems);
// myList.insertBefore(listItems,myList.getElementsByTagName("li")[1])

///----add/change css properties--

// const title = document.getElementById("myTitle");

// title.style.backgroundColor ="pink";
// title.style.color = "black";
// title.style.fontFamily = "arial";
// title.style.textAlign = "center";
// title.style.border = "2px solid"

//---events--

// const element = document.getElementById("myButton");
// const element = document.body;
// const element = document.getElementById("myTextBox");
// const element = document.getElementById("myDiv");

// element.onclick = doSomething;
// element.onload = doSomething;
// element.onchange = doSomething;
// // element.onmouseover = doSomething;
// // element.onmouseout = doSomethingElse;
// element.onmousedown = doSomething;
// element.onmouseup = doSomethingElse;


// function doSomething(){
//     // document.getElementById("myButton").onclick = function(){
//     //     document.getElementById("myLabel").innerHTML = "hello"
//     // }
//     // alert("you did something")
//     element.style.backgroundColor = "pink";
// }
// function doSomethingElse(){
//     element.style.backgroundColor="aqua"
// }

///---.addEventListener---

// const innerdiv = document.getElementById("innerdiv");
// const outerdiv = document.getElementById("outerdiv");

// innerdiv.addEventListener("click", changeRed)
// outerdiv.addEventListener("click",changeRed)

// function changeRed(){
//     this.style.backgroundColor = "red";
    
// }

///---practic--

// const myButton = document.querySelector("#myButton");
// const myImage = document.querySelector("#myimg");

// myButton.addEventListener("click",() => {
//     if(myImage.style.visibility == "hidden"){
//         myImage.style.visibility = "visible";
//     }
//     else{
//         myImage.style.visibility = "hidden"
//     }
// })

//detect key----

// window.addEventListener("keydown", event => console.log(event.key))

// const myDiv = document.getElementById("myDiv");
// window.addEventListener("keydown", move);
// let x=0;
// let y=0;

// function move(event){

//     switch(event.key){
//         case "ArrowDown":
//             y+=5;
//             myDiv.style.top = y +"px";
//             break;
//         case "ArrowUp":
//             y-=5;
//             myDiv.style.top = y +"px";
//             break;
//         case "ArrowRight":
//             x+=5;
//             myDiv.style.left = x +"px";
//             break;
//         case "ArrowLeft":
//             x-=5;
//             myDiv.style.left = x +"px";
//             break;
//         default:
//             break;                    
//     }
// }

///---canvas API

// let canvas = document.getElementById("myCanvas");
// let context = canvas.getContext("2d")

// context.beginPath();
// // // context.moveTo(0,0);
// // // context.lineTo(500,500);
// // // context.stroke()

///---window--

// console.log(window.innerHeight);
// console.log(window.innerWidth);

// console.log(window.location.href);
// window.location.href = "https://google.com"
// console.log(window.location.pathname);

// const myButton = document.getElementById("myBtn");

// myBtn.addEventListener("click", () => window.close())
// myBtn.addEventListener("click", () => window.print())
// myBtn.addEventListener("click", () => window.open("https://google.com"))

// let age = window.prompt("enter ur age");

// if(age < 18 ){
//     window.alert("you mus 18 year to enetr this site");
//     window.close();
// }