// const percent = function(x, y){
//     return x/y * 100;
// }

// console.log(`${percent(3, 100)}%`)

// const percent = (x, y) => x / y * 100 ;

// console.log(`${percent(13, 100)}%`);


// let cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];

// shuffle(cards);

// // console.log(cards);
// cards.forEach(cards => console.log(cards))

// function shuffle(array){
//     let currentIndex = array.length;

//     while(currentIndex != 0){
//         let randomIndex = Math.floor(Math.random() * array.length);
//         currentIndex -= 1;

//         let temp = array[currentIndex];
//         array[currentIndex] = array[randomIndex];
//         array[randomIndex] = temp;
//     }
//     return array;
    
// }

//-----nested function------

let userName = "Deepak";
let userInbox = 0;

login();

function login(){

    displayname();
    displaymsg();

    function displayname(){
        console.log(`hello ${userName}`)
    }
    function displaymsg(){
        console.log(`you have ${userInbox} messages`)
    }
}
 