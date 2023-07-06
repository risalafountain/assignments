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

class Car {
    constructor(make,model){
        this.make = make 
        this.model = model
    } 
    honk(){
        console.log("honk")
    }
    drive(){
        console.log("vroooooom")
    }
}

const ford = new Car ("ford", "bronco")
console.log(ford.make) // ford
ford.honk() // honk
ford.drive()// vroooooom

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
//better than to create the motorcycle class and 