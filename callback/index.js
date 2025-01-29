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


let students = ["deepak", "raghul", "cibi"]
students.forEach(capitalize)
students.forEach(print)

function capitalize(element, index, array){
    array[index] = element[0].toUpperCase() + element.substring(1);

}
console.log(students[0]);

function print(element){
    console.log(element);
}