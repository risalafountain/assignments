import React from "react";


//2: change the state functions to use an implicit return

export default function NewFriends() {
    const [people, setPeople] = React.useState([
        {
            firstName: "Clark",
            lastName: "Kent"
        }
    ])
//add a new person object 
    setPeople(prevPeople => {
        return [
            ...prevPeople, 
           {
            firstName: "Barry", 
            lastName:"Allen"
        },{
            firstName: "Diana",
            lastName: "Prince"
        },{
            firstName: "Bruce", 
            lastName: "Wayne"
        } 
        ]
    })

    function getNewFriend() {

    }

    return (
        <main className="contact-card">
           <h2 className="contact--name">
                First: {people.firstName} Last: {people.lastName}
           </h2>
           <button>click here to generate a new friend</button>
        </main>
    )
}

