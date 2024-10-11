// let counter = 0;

// function setResult(){
//     document.getElementById("result").innerHTML = counter;
// }
// setResult()

// document.getElementById("increase").onclick = function(){
//     counter += 1;
//     setResult()
// }
// document.getElementById("reset").onclick = function(){
//     counter = 0;
//     setResult()
// }
// document.getElementById("decrease").onclick = function(){
//     counter -= 1;
//     setResult()
// }


document.getElementById("roll").onclick = function() {
    let x = Math.floor((Math.random() *6 ) + 1);
    let y = Math.floor((Math.random() * 6) + 1);
    let z = Math.floor((Math.random() * 6) + 1);

    document.getElementById("dice-1").innerHTML = x;
    document.getElementById("dice-2").innerHTML = y;
    document.getElementById("dice-3").innerHTML = z;

}