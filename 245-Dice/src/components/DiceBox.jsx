import React, {useState} from "react";

export default function DiceBox(){
    const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6])
    // console.log("DiceBox Component Rendered ")
    function getRandomNumber(){
        // randomize number
        const randomNumber = Math.floor(Math.random()* numbers.length) + 1 
        setNumbers((prevNumbers) => {
            //map through numbers arr to look at each number
            return prevNumbers.map((number) =>
            // for each number check to see if it is the same
            // use -1 to access the correct index e.g. 1=[0] 2=[1] ...w/o this i was getting zero as a randomNumber
            // if number === to prevNumbers generate randomNumber else return number unchanged
            number === prevNumbers[randomNumber -1] ? randomNumber : number
            )  
        })
        console.log(randomNumber)
    }

    //this does exactly what i need in the console but the dom elements remain unchanged
    return(
        <>
        <div className="die--container">
            {/* <h5>  THIS IS TYPED IN THE DICEBOX COMPONENT</h5>  */}
              {/*code from sp237 notes, just plugged in the number parameter */}
            {numbers.map((number) => (
            <div className="die--number" key={number}>{number}</div>
             ))}
            <button className='button' onClick={getRandomNumber} >  Roll </button>
        </div>
      </>
    )
}



// map through numbers Array
// render die component for each one to pass down data through props
// make button randomize number