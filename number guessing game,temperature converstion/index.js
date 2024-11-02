// const answer = Math.floor(Math.random() * 10 + 1);
// let guesses = 0;

// document.getElementById("submitButton").onclick = function(){

//     let guess = document.getElementById("value").value
//     guesses +=1;

//     if(guess == answer){
//         alert(`${answer} is the #..it took ${guesses} guesses`);
//     }
//     else if(guess < answer){
//         alert(`to0 small!!..try bigger`);
//     }
//     else{
//         alert(`too big!!..try smaller`);
//     }
// }


// temperature conversion--------

document.getElementById("submitButton").onclick = function() {

    let temp;

    if(document.getElementById("cButton").checked){
        temp = document.getElementById("textBox").ariaValueMax;
        temp = Number(temp);
        temp = toCelsius(temp);
        document.getElementById("finalAns").innerHTML = temp + "°C";
    }
    else if(document.getElementById("fButton").checked){
        temp = document.getElementById("textBox").value;
        temp = Number(temp);
        temp = toFahrenheit(temp);
        document.getElementById("finalAns").innerHTML = temp + "°F";
    }
    else{
        document.getElementById("finalAns").innerHTML = "select a unit"
    }




}

function toCelsius(temp){
    return (temp - 32) * (5/9);
}
function toFahrenheit(temp){
    return temp * 9/5 + 32;
}
