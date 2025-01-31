// let total = sum(2,3);
// displayDOM(total);

// function sum(x,y){
//     let result = x + y;
//     return result;
// }


// sum(2, 3, displayConsole);

// function sum(x, y, callBack){
//     result = x + y;
//     callBack(result);
// }

// function displayConsole(output){
//     console.log(output);
// }

// function displayDOM(output){
//     document.getElementById("label").innerHTML = output;
// }


//-----array.foreach----


// let students = ["deepak", "raghul", "cibi"]
// students.forEach(capitalize)
// students.forEach(print)

// function capitalize(element, index, array){
//     array[index] = element[0].toUpperCase() + element.substring(1);

// }
// console.log(students[0]);

// function print(element){
//     console.log(element);
// }


//-------array.map----


// let numbers = [1, 2, 3, 4, 5];
// let squares = numbers.map(square);

// squares.forEach(print);

// function square(element){
//     return Math.pow(element,2);
// }

// function print(element){
//     console.log(element);
// }

// console.log(squares[3]);


//-----array.filter()---


// let ages = [14, 18, 19, 21, 31, 17, 42];
// let adults = ages.filter(checkAge);

// adults.forEach(print);

// function checkAge(element){
//     return element >= 18;
// }

// function print(element){
//     console.log(element);
// }

//----array.reduce()----

let prices = [ 12, 24, 67];
let totalPrice = prices.reduce(add);

console.log(totalPrice);

function add(total, element){
    return total + element;
}