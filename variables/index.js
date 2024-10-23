//1.declaration
//2.assignment
let firstname = "bro";
let age = 20;
let student = true;

console.log("Hello",firstname);
console.log("You are",age,"years old");
console.log("Enrolled:",student);

document.getElementById("p1").innerHTML = "Hello " + firstname
document.getElementById("p2").innerHTML = "you are " + age + " years old"
document.getElementById("p3").innerHTML = "Enrolled: " + student
// I made some changes