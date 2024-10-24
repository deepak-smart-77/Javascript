// function startProgram(){
//     let userName = "deepak";
//     let age = 20;

//     happyBirthday(userName,age);
// }

// function happyBirthday(userName,age){
//     console.log("happy birthday to",userName ,"..You r",age,"years old");
// }

// startProgram();


// return--->


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


//ternary operator---------->



let adult = checkAge(15);
console.log(adult);

function checkAge(age){

    return age >= 18 ? true : false
}


checkWinner(true)

function checkWinner(win){

    win ? console.log("YOU WIN") : console.log("YOU LOSE")
}