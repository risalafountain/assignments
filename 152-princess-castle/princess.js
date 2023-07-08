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
     
    gotHit(){
    //create variable w/ array of statuses 
       const statusUpdate  = ["poweredUp", "big", "small", "unalived"]
    //iterate through the arrays 
      statusUpdate.forEach(status => {
    //assign each status to player class
        return this.statusUpdate
       console.log(`you were hit`)
      });
   }
   
    gotPowerUp () {

   }
   
    addCoin() {
   }
   
   print(){    
   }
}

const player1 = new Player(gameName, "small", 0, false)

player1.gotHit()

// function randomRange {

// }