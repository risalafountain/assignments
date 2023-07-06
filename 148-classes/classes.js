//Constructor functions
//blueprint for generate js objects 
//blueprint for car objects each object that is generated with this will have a make and a model 

//constructor is "what are the properties to be a car?" but we can also add methods which are doing words but you don't typically want to add methods to the constructor because every car is getting a new version of this method. 

//create a prototype instead 
//1declare what it means to be a "car" as a constructor 
//2declare what it does as a method or function

// function Car(make, model) {
//     this.make = make 
//     this.model = model
// }

// Car.prototype.honk = function () {
//     console.log("honk")
// }

// //instatiate or instantiations
//     //this is making a new instance of a car using the blueprint
// const jeep = new Car ("jeep", "cherokee")
// const mazda = new Car ("mazda", "3")
// console.log(jeep.make) //jeep

//ES6 classes were created to help clean this up here is the exact same thing in ES6 function 

//after the constructor but before the class ends is where we put the methods/functions

// class Car {
//     constructor(make,model){
//         this.make = make 
//         this.model = model
//     } 
//     honk(){
//         console.log("honk")
//     }
//     drive(){
//         console.log("vroooooom")
//     }
// }

// const ford = new Car ("ford", "bronco")
// console.log(ford.make) // ford
// ford.honk() // honk
// ford.drive()// vroooooom

//some vehicles will have prpoerties that others won't 

class Vehicle {
    constructor(make, model){
        this.make = make
        this.model = model
    }
    
    honk(){
        console.log("hooonk")
    }
    
    drive(){
        console.log("Vrooom")
    }
}

//if we have a motorcycle, we could create a new class that has the same properties as Vehicle but also has an additional property
//however doing it this way is not DRY...it's repeating all the other properties as the above class Vehicle 
    // class Motorcycle {
    //     constructor(make, model, hasSideCar) {
    //         this.make = make
    //         this.model = model
    //         this.hasSideCar = hasSideCar
    //     }
        
    //      honk(){
    //         console.log("hooonk")
    //     }
        
    //     drive(){
    //         console.log("Vrooom")
    //     }
    // }

//in order to setup Motorcycle to inherit the properties of the vehicle class, use the word EXTEND. This means that anytime we create a motorcycle object, it will automatically inherit the vehicle properties.  
/*
how to read it:
step 1: anything tied to the motorcycle object automatically has access to the vehicle methods of honk() and drive() because of extend
step 2: the constructor for motorcycle is similar to the constructor for make and model except it has the addition of hasSideCar. since hasSideCar is specific to Motorcyle, we stillneed to instruct the constructor on how to apply that my adding this.hasSideCar = hasSideCar everything else that is already in the constructor for Vehicle, then use SUPER
*/

class Motorcycle extends Vehicle {
    constructor(make, model, hasSideCar) {
        super (make, model)
        this.hasSideCar = hasSideCar
    }
}

const jeep = new Vehicle("jeep", "cherokee")
const harley = new Motorcycle("harley", "davidson", true) //hasSideCar =  true (yes)

harley.honk() 

//when you call honk on the harley object, JS checks the Motorcycle blueprint. if it doesn't see the honk method inside the prototype for motorcycle so it then looks at the super class, sees that it does exist, and calls it just the same.   

//start general and get more indepth as the need arises 

//classes can extend other classes to keep the code dry 



