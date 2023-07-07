//create class called player 
//create constructor method with name, status, totalCoins, hasStar
//add methods gotHit(), gotPowerUp(), addCoin(), print()
const readline = require ("readline-sync")
const playerName = ["Mario", "Luigi"]

const namePicked = readline.keyInSelect (playerName)
const gameName = playerName[namePicked] 
console.log(`You chose ${gameName}`)

class Player {
    constructor (name, status, totalCoins, hasStar) {
        this.name = name; //string "mario" "luigi"
        this.status = status; //status changed from poweredUp to Big to Small to Dead 
        this.totalCoins = totalCoins; //number
        this.hasStar = hasStar; //boolean
    }
     
    gotHit(){
        console.log(`you were hit`)
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


function solution(inputString){

  //step 1: split string into array
  const splitStr = inputString.split(" ")
  //step 2: iterate the array   //map, for loops
  const mappedArr = splitStr.map(word => {
    //step 3: string method to manipulate the data
    return word.charAt(0).toUpperCase() + word.slice(1)
  })

  return mappedArr.join(" ")
  //step 4: put it all back together


}
 console.log(solution("the princess is in another castle!!!"))

 // The Princess Is In Another Castle

 //talk it out  // asking questions

 //psuedo code plan 

 //problem solving





 //string method to manipulate the data
 //find index 0 of each word
 //split the string into an array

 return inputString.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")