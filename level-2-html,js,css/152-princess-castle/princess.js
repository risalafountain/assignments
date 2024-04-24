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
            
            gotPowerUp() {
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
                if (this.hasStar) {
                  console.log(`\nName: ${gameName} \nStatus: ${this.status} \nTotal Coins: ${this.totalCoins} \n `)      
                } else {
                  console.log(`\nName: ${gameName} \nStatus: ${this.status} \nTotal Coins: ${this.totalCoins} \n `)      
                }
              }
            }
            
            
const player1 = new Player(gameName, "Big", 0, false)

//how/where do i call this function? or where do I call this function? How do I "put the random range function inside a setInterval function that ends after a player is dead?"
// function randomRange() {
//   let randomNum = Math.random() *2
// }
// player1ow do i fill this out? 
// intervalId = setInterval(randomRange, 2000 )

const fish = setInterval(()=>{
  const randomRange = Math.floor(Math.random() * 3)
  if (randomRange === 0) {
    player1.gotHit()
  } else if (randomRange === 1) {
    player1.gotPowerUp()
  } else {
    player1.addCoin()
  }
 if (player1.status === "Unalived") {
  clearInterval(fish)
 } 
 player1.print()
},1000)
