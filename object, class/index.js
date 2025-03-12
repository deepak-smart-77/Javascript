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

// //------static---//

// class cars{
//     static no_of_cars = 0;

//     constructor(model){
//         this.model =model;
//         cars.no_of_cars += 1;
//     }
//     static startrace(){
//         console.log("3....2.....1....GO!!!");
//     }
// }

// const car1 = new cars("bugatti")
// const car2 = new cars("ferrari")
// const car3 = new cars("audi")


// console.log(`There are ${cars.no_of_cars} cars `);
// cars.startrace();


// //---inheritance---//

// class Animal{
//     alive = true;
//     eat(){
//         console.log(`This ${this.name} is Eating`);
//     }
//     sleep(){
//         console.log(`This ${this.name} is sleeping`);
//     }
// }

// class Dog extends Animal{
//     name = "Dog"; 
//     run(){
//         console.log(`This ${this.name} is running`);
//     }
// }

// class Fish extends Animal{
//     name = "Fish";
//     swim(){
//         console.log(`This ${this.name} is swimming`);
//     }
// }

// class Eagle extends Animal{
//     name = "Eagle";
//     fly(){
//         console.log(`This ${this.name} is flying`);
//     }
// }

// const dog = new Dog();
// const fish = new Fish();
// const eagle = new Eagle();
// console.log(fish.name);
// console.log(fish.alive);
// fish.eat();
// dog.run();
// eagle.fly();

// //---super keyword----

// class Animal{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;    }
// }
// class Rabbit extends Animal{
//     constructor(name,age,runSpeed){
//         super(name,age);
//         this.runSpeed = runSpeed;
//     }

// }
// class Fish extends Animal{
//     constructor(name,age,swimSpeed){
//         super(name,age);
//         this.swimSpeed = swimSpeed;
//     }
// }
// class Hawk extends Animal{
//     constructor(name,age,flySpeed){
//         super(name,age);
//         this.flySpeed = flySpeed;
//     }

// }

// const fish = new Fish("Pirana",1,50);
// const hawk = new Hawk("Hawk",2,80);
// const rabbit = new Rabbit("Rabbit",1,40);

// // console.log(fish.name);
// // console.log(fish.age);
// // console.log(fish.swimSpeed);
// // console.log(rabbit.name);
// // console.log(rabbit.age);
// // console.log(rabbit.runSpeed);
// console.log(hawk.name);
// console.log(hawk.age);
// console.log(hawk.flySpeed);


//-----getter setter----//

class Car{
    constructor(power){
        this._gas = 21;
        this._power = power;
    }

    get power(){
        return `${this._power}hp`;
    }
    get gas(){
        return `${this._gas}L (${this._gas / 50 * 100}%)`
    }
}

let car = new Car(400);
console.log(car.power);
console.log(car.gas);