//create class called player 
//create constructor method with name, status, totalCoins, hasStar
//add methods gotHit(), gotPowerUp(), addCoin(), print()
class Player {
    constuctor (name, status, totalCoins, hasStar) {
        this.name = name; 
        this.status = status; //poweredUp, Big, Small, Dead 
        this.totalCoins = totalCoins; //number
        this.hasStar = hasStar;
    }
    setName(namePicked) {
        if (namePicked === "Mario" || namePicked === "Luigi") {
            this.name = namePicked    
        } 
    }
    gotHit(){
        
    }

    
}


