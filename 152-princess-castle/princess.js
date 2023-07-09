//create class called player 
//create constructor method with name, status, totalCoins, hasStar
//add methods gotHit(), gotPowerUp(), addCoin(), print()
const readline = require ("readline-sync")
const playerName = ["Mario", "Luigi"]

const namePicked = readline.keyInSelect (playerName)
const gameName = playerName[namePicked] 

console.log(`Hello, ${gameName}`)

class Player {
    constructor (name, status, totalCoins, hasStar) {
        this.name = name; //string "mario" "luigi"
        this.status = status; //status changed from poweredUp to Big to Small to Dead 
        this.totalCoins = totalCoins; //number
        this.hasStar = hasStar; //boolean
    }
//each time the method it is called it goes through the array     
    gotHit(){
      switch (this.status) {
        case "Powered Up":
         if (this.hasStar === true) {
            this.status = "Powered Up"
            this.hasStar = false
            console.log("Your star has protected you!")
          } else {
            this.status = "Big"
          }
          break;
      
      case "Big":
        this.status = "Small"
        break;
      
      case "Small":
        this.status = "Unalived"
        console.log("You have lost the game!")
        break;
      }
    }

  gotPowerup() {
    switch (this.status) {
      case "Big":
        this.status = "Powered Up"
        console.log(`Congratulations, ${gameName}! You got a Star!`)
        break; 

      case "Small": 
      this.status = "Big"
      break;  
    }  
  }

  addCoin()
  return this.totalCoins++

}    
  
// when this is called    
//     gotPowerUp () {
//    }
 
// // when this is called, add 1 coin to total  
   
//    print(){    
//    }
// }

// const player1 = new Player(gameName, "small", 0, false)

// player1.gotHit()