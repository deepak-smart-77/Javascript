let count = 0;

// function increaseValue(){
//     count += 1;
//     document.getElementById("myLabel").innerHTML = count;
// }
// function decreaseValue(){
//     count -= 1;
//     document.getElementById("myLabel").innerHTML =count;
// }


document.getElementById("increaseBtn").onclick = function(){
    count += 1;
    document.getElementById("myLabel").innerHTML=count;
}
document.getElementById("decreaseBtn").onclick = function(){
    count -= 1;
    document.getElementById("myLabel").innerHTML = count;
}
document.getElementById("resetBtn").onclick = function(){
    count = 0;
    document.getElementById("myLabel").innerHTML = count;
}