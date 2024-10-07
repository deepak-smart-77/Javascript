
// let username = window.prompt("whats ur name");
// console.log(username);
 let username;
 document.getElementById("mybutton").onclick = function() {
    username = document.getElementById("mytext").value;
    document.getElementById("mylabel").innerHTML = "Hello " + username;
    console.log(username);
 }