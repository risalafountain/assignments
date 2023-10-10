import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Star from './components/Star'

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
                  <Star isFilled ={contact.isFavorite} handleClick={toggleFavorite}/>
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

completed here

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
                        // put the first name and last name in their own {} instead of hard coding the name
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="card--contact">{contact.phone}</p>
                    <p className="card--contact">{contact.email}</p>
                </div>
  */

/* 241.25---setting state from child components
    /**
     * Challenge: Move the star image into its own component
     * - It should receive a prop called `isFilled` that it
     *   uses to determine which icon it will display
     * - Import and render that component, passing the value of
     *   `isFavorite` to the new `isFilled` prop.
     * - Don't worry about the abiliity to flip this value quite yet.
     *   Instead, you can test if it's working by manually changing
     *   `isFavorite` in state above.
1: cut out star img
2: render Star component in its place and give it an isFilled Prop with a value of {contact.isFavorite}
3: make sure you import into App.jsx
4: see notes in Star.jsx
5: remove     let starIcon = contact.isFavorite ? "../images/star-yellow.png" : "../images/star-empty.png" since we no longer need it (its already in the Star component)


NEXT CHALLENGE 
(How do we make so that we can click the star and change the value from filled to unfilled?)
--conundrum:  
      the child component <Star isFilled ={contact.isFavorite} />
      that is receiving the value of isFavorite through props but  it is not receiving the ability to change that state. (e.g. filled/not filled--favorite/notfavorite)

      How do we give the child component the ability to change the state that lives in the parent component (App.jsx)??

      --adding an onClick attribute needs to exist on native dom elements (the lowercase elements like article and img) Star doesn't count. 
      --Star is not a real DOM element. when React renders this, it is  looking at the Star component and looking at the img...the img though CAN receive onClick attribute because it IS a dom element
      handleClick is NOT a native event listener and is the difference from onClick event listener
      --so we can pass onClick to the img in Star and say the value{} of the onClick will be the function that comes from props.handleClick
      --the App component is passing the toggleFavorite function to a child component and allowing that child component (Star) to run it whenever the click event happens
      --NOTE::: the context with which the toggleFavorite exists is in the PARENT component so it can change the state that lives inside the parent (isFavorite)
*/

