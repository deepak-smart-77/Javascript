//switch ---> m0re efficient way th if - else statements


let grade = 55 ;

switch(true){
    case grade >= 90:
        console.log("v.good");
        break;
    case grade >= 75:
        console.log("good");
        break;
    case grade >= 65:
        console.log("not bad");
        break;
    case grade >= 50:
        console.log("just pass");
        break;
    case grade < 50:
        console.log("u failed");
        break;
    default:
        console.log("wrong value...");
        
}

//-----------------------------------------
// Logical operators AND(&&) OR(||)


// let temp = 3 ;
// let sunny = true;

// if(temp > 0 && temp < 30 && sunny){
//     console.log("the weather is good")
// }
// else{
//     console.log("the weather is bad");
// }


//--------------------------------------------
// Not logical operator(!)



let temp = 15;
let sunny = false;

if(!(temp > 0)){
    console.log("its cold outside");
}
else{
    console.log("its warm outside");
}
if(!(sunny)){
    console.log("its cloudy");
}
else{
    console.log("its sunny");
}