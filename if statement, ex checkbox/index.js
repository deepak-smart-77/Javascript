// let salary = 45000;
// if(salary >= 40000){
//     console.log("ur salary is good!");
// }
// else if(salary >= 15000){
//     console.log("ur salary is okeii!");
// }
// else{
//     console.log("ur salary is notmuch!");
// }


// let online = false;

// if(online){
//     console.log("ur online");
// }
// else{
//     console.log("ur offline");
// }

//----------------------checkbox


document.getElementById("MyButton").onclick = function(){
const checkbox = document.getElementById("MyCheckbox");
const visa = document.getElementById("visaButton");
const paypal = document.getElementById("payPalButton");
const mastercard = document.getElementById("masterCardButton");
    if(checkbox.checked){
        console.log("Thank for visting us ");
    }
    else{
        console.log("pls conform u are a passenger before paying");
    }

    if(visa.checked){
        console.log("ur paying with visa");
    }
    else if(paypal.checked){
        console.log("ur paying with paypal");
    }
    else if(mastercard.checked){
        console.log("ur paying with mastercard");
    }
    else{
        console.log("pls select paying method");
    }
}    