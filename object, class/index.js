// const car ={
//     model:"Mustang",
//     color:"red",
//     year:"2022",

//     drive:function(){
//         console.log(`you're driving a ${this.model}`);
//     },
//     brake:function(){
//         console.log("you step on the brake");
//     }
    

// }

// console.log(car.model);
// console.log(car.color);
// console.log(car.year);
// car.drive();
// car.brake();

// // this.name = "deepak"
// // console.log(this.name);


// //------class----//

// class player{
//     score=0;

//     pause(){
//         console.log("You pause the game");
//     }
//     exit(){
//         console.log("You exit the game");
//     }
// }

// const player1 = new player();
// const player2 = new player();

// player1.score += 1

// console.log(player1.score);
// player1.pause();


// //------constructor----//


// class student{

//     constructor(name, age, gpa){
//         this.name = name;
//         this.age = age;
//         this.gpa = gpa;
//     }
//     study(){
//         console.log(`${this.name} is studying`);
//     }
// }

// const student1 = new student("deepak", 20, 7.2);
// const student2 = new student("dinesh", 21, 8.2);

// console.log(`he is ${student1.name}, secured gpa of ${student1.gpa}. His age is ${student1.age}`);
// console.log(student2.name);

// student1.study();
// student2.study();

//------static---//

class cars{
    static no_of_cars = 0;

    constructor(model){
        this.model =model;
        cars.no_of_cars += 1;
    }
    static startrac(){
        console.log("3....2.....1....GO!!!");
    }
}

const car1 = new cars("bugatti")
const car2 = new cars("ferrari")
const car3 = new cars("audi")


console.log(`There are ${cars.no_of_cars} cars `);
cars.startrac();