let myNum = 100;

// myNum = myNum.toLocaleString("en-US"); //Us english
// myNum = myNum.toLocaleString("hi-IN");  //india
// myNum = myNum.toLocaleString("de-DE");  //standard german

// myNum = myNum.toLocaleString("en-US", {style: "currency", currency: "USD"});
// myNum = myNum.toLocaleString("hi-IN", {style: "currency", currency: "INR"});
// myNum = myNum.toLocaleString(undefined, {style: "unit", unit: "celsius"});
myNum = myNum.toLocaleString(undefined, {style: "percent"});


console.log(myNum);