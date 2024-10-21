// repeat some code while some condition is true
//-------------> while loop


// let userName = "";
// while(userName == "" || userName == null){
//     userName = window.prompt("enter a name")
// }
// console.log("hello",userName);




//doo while loop------------>
//do something then check the condition,repeat if condition is true



// let userName = "";
// do
// {
//     userName = window.prompt("enter a name")
// }
// while(userName == "" || userName == null)

// console.log("hello",userName);

//------------------------->
//FOR LOOP
// --------------> repeat some code certaijn amount of time


// for( let i = 1; i <= 10 ; i++ ){
//     console.log(i);
// }

// // There are 10 flyers
// for (let i = 1; i <= 10; i++) {
//     console.log("Handing out flyer " + i);
// }


// let isRaining = false;

// while (!isRaining) {
//     console.log("Watering plants");

//     // Simulate rain starting at some point
//     if (Math.random() > 0.8) { // Randomly start raining
//         isRaining = true;
//     }
// }
// console.log("It started raining! Stop watering.");



// for (let i = 1; i <= 20; i++) {
//     console.log("Counting coin " + i);
// }



// let friends = ["Alice", "Bob", "Charlie", "David", "Eva"];
// for (let i = 0; i < friends.length; i++) {
//     console.log("Sending email to " + friends[i]);
// }




// let busArrived = false;

// while(!busArrived){
//     console.log("waiting for bus");

//     if(Math.random() > 0.9);
//     busArrived = true;
// }
// console.log("bus is arrived");


// let charge = 54;

// while(charge < 100){
//     console.log("your charge is "+charge+"%");

//     charge+=10;
// }
// console.log("your phone is fully charged");


//----------------->
// break and continue statement
// break statement breaks out the entire loop
// continue statement skips an iteration of a loop


// for(i = 1; i < 20 ; i++){
//     if(i == 10){
//         break;
//     }
//     console.log(i);
// }

//------------------------>
// Nested forloop->loop inside a loop


// for(let i = 1; i <= 3 ; i++){
//     for(let j = 1; j <= 2 ; j++){
//         console.log(j);
//     }
// }

let symbol = window.prompt("enter a symbol");
let row = window.prompt("enter # of rows");
let column = window.prompt("enter # of columns");

for(let i = 1; i <= row; i+=1){
    for(let j = 1; j <= column; j+=1){
        document.getElementById("rec").innerHTML += symbol;
    }
    document.getElementById("rec").innerHTML += "<br>"
}


// const height = 5;

// for (let i = 1; i < height + 1; i++) {
//     let star=""
//     for (let j = 1; j <= i; j++) {
//         star+="*"

//     }
//     console.log(star)
// }

//-----??????????????????????

// for(let i = 1; i <= 5; i++){
//     let number=0;
//     for(let j = 1; j <= 5; j++){
//         number+=i;
//         document.getElementById("tables").innerHTML += number;

//     }
//     document.getElementById("tables").innerHTML += "<br>"
// }