//create class called player 
//create constructor method with name, status, totalCoins, hasStar
//add methods gotHit(), gotPowerUp(), addCoin(), print()
const readline = require ("readline-sync")
const playerName = ["Mario", "Luigi"]
let intervalId

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
              
              addCoin() {
                return this.totalCoins++
              }
              
              print (){
                if (hasStar = true) {
                  console.log(`\nName: ${gameName} \nStatus: ${this.status} \nTotal Coins: ${this.totalCoins} \nStatus: ${this.status} \n You have a Star!`)      
                } else {
                  console.log(`\nName: ${gameName} \nStatus: ${this.status} \nTotal Coins: ${this.totalCoins} \nStatus: ${this.status} \n You do not have a Star!`)      
                }
              }
            }
            
            
const player1 = new Player(gameName, "small", 0, false)

//how do i call this function? or where do I call this function? 
function randomRange() {
  let randomNum = Math.random() *2
  if (randomNum === 0) {
    gotHit()
  } else if (randomNum === 1) {
    gotPowerup()
  } else {
    addCoin()
  }
}

//how do i fill this out? 
intervalId = setInterval(randomRange, 2000 )


