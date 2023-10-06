import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React from "react"

export default function App() {
    const [contact, setContact] = React.useState({
        firstName: "Jane",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "bulmalovesvegeta@example.com",
        isFavorite: false
    })
   
    //if contact.isFavorite true, then use star-yellow otherwise (:) use star-empty
    let starIcon = contact.isFavorite ? "../images/star-yellow.png" : "../images/star-empty.png"
    
    function toggleFavorite() {
      //console.log("Toggle Favorite")
      setContact(prevContact => {
        return {
          ...prevContact, 
          isFavorite: !prevContact.isFavorite
       }
      })
   }
      
   
    return (
      <main>
            <article className="card">
                <img src="./images/bulma.jpg" className="card--image" />
                <div className="card--info">
                    <img 
                        src={`${starIcon}`} 
                        className="card--favorite"
                        onClick={toggleFavorite}
                        />
                    <h2 className="card--name">
                        {/* put the first name and last name in their own {} instead of hard coding the name*/}
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="card--contact">{contact.phone}</p>
                    <p className="card--contact">{contact.email}</p>
                </div>
                
            </article>
        </main>
    )
  }
  
  /**
   * Challenge: Fill in the values in the markup
   * using the properties of our state object above
   * (Ignore `isFavorite` for now)
   * 
  * Challenge: Use a ternary to determine which star image filename should be used based on the `contact.isFavorite` property
     * 
     * `true` => "star-yellow.png"
     * `false` => "star-empty.png"
     * 
     * then use the starIcon value to display the correct image
    
  */


  /*SP 238.25 HOW TO UPDATE STATE WHEN STATE IS AN OBJECT 
  
  our goal is to be able to click on the star icon and have it flip the isFavorite value between true and false 
  but the isFavorite property is nested within an object
  calling setContact needs to provide a new version of state but we ONLY want to change the isFavorite value and keep the rest the same   
  
  --need to bring in all the properties of the contact (setContact?) object and replace ONLY what needs to be replaced 
  HOW DO WE DO THAT????
  spread in ALL the properties of the prevContact but overwrite the isFavorite property with the new value 
  
  as shown above in the toggleFavorite function 

--call setcontact, since we care about the prev value of state to determine the new one, (use callback function)
--return all of the values of the prevContact but change the isFavorite property to the opposite of whatever it currently is (that's what the ! means )

  */