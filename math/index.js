// let x;
// let y = 7;
// let z = 9;
// let maximum;
// let minimum;

// // x = Math.round(x);
// // x = Math.sqrt(x);
// // x = Math.pow(x, 2);
// // x = Math.floor(x);
// // x = Math.ceil(x);
// // x = Math.abs(x);P
// // maximum = Math.max(x,y,z);
// x = Math.PI;
// minimum = Math.min(x,y,z);


// console.log(minimum);


// -----------example---------

let a;
let b;
let c;

// a = window.prompt("Enter side A");
// a = Number(a);

// b = window.prompt("Enter side B");
// b = Number(b);

// c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))

// console.log(c);

document.getElementById("submitbutton").onclick = function(){
    a = document.getElementById("a-textbox").value
    b = document.getElementById("b-textbox").value
    a = Number(a);
    b = Number(b);

    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))
    document.getElementById("result").innerHTML ="side C :"+ c;


}
