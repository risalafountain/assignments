import React from "react";
import Friend from "./Friend";
import data from "./data";
import Pet from "./Pet";

export default function FriendList(props) {
    //console.log(props.pets)
    const amigo = data.map(item => {
        return (
          <Friend 
          key = {item.id}
        //   friendPic = {item.img}
        //   friendName = {item.name}
        //   friendAge = {item.age}
        //in lieu of making  
        {...item}
        //   pets = {item.pets}
          />
        )
      })
return (
    <div className="list--container">
        {amigo}
       
    </div>
)
}

//How do I choose the pet name? 
    //should i filter through the array and create a new array from the filtered list of the pet names? 
    //i noticed that {props.pets.name} is rendering the human name not the pet

// const friendArr = [
//   {
//     id: 1,
//     name: "Ben",
//     age: 29,
//     pets: [
//       {
//         name: "spot",
//         breed: "tabby"
//       },{
//         name: "John Johnson",
//         breed: "husky"
//       },{
//         name: "Bear the bear",
//         breed: "Grizzly"
//       }
//     ]
//   },{
//     id: 2,
//     name: "Bob",
//     age: 31,
//     pets: [
//       {
//         name: "Sally",
//         breed: "Australian Shepard"
//       }
//     ]
//   },{
//     id: 3,
//     name: "Marcus",
//     age: 25,
//     pets: [
//       {
//         name: "Indy",
//         breed: "Akita"
//       },{
//         name: "Anna",
//         breed: "persian cat"
//       }
//     ]
//   },{
//     id:4,
//     name: "Jacob",
//     age: 20,
//     pets: [
//       {
//         name: "fluffy",
//         breed: "sphynx cat"
//       },{
//         name: "patches",
//         breed: "sphynx cat"
//       },{
//         name: "tiger",
//         breed: "sphynx cat"
//       },{
//         name: "oscar",
//         breed: "sphynx cat"
//       }
//     ]
//   }
// ]
