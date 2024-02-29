import axios from "axios";
import { useState } from "react";
import React from "react";

export const Context = React.createContext()

export default function ContextProvider(props) {

    const [allEntries, setAllEntries] = useState([])
    //if i uncomment this line below it breaks my code and the newthing.Title descriptions are not known in the app component
    // const [newThing, setNewThing] = useState({
    //     title: "",
    //     imgUrl: '',
    //     description: "",
    // })

    function getRequest() {
        axios.get(`"https://api.vschool.io/risalaf/thing"`)
            .then(console.log("this is in the Context"))
            .then(res => setAllEntries(res.data))
            .catch(error => console.log(error))
    }
    //ADDING THING
    function postRequest(newThing) {
        axios.post("https://api.vschool.io/risalaf/thing", newThing)
            .then(response => setAllEntries(prev => [...prev, response.data]))
            .catch(error => console.log(error))
        console.log(`this is the post request: ${newThing}`)
    }
    //only deletes from back end until refresh also, the console log isn't showing
    function deleteRequest(id) {
        axios.delete(`https://api.vschool.io/risalaf/thing/${id}`)
            .then(response => setAllEntries(newThing => newThing.filter(thing => thing._id !== id) ))    
    }
    //EDIT THING
    function putRequest(id, update) {
        axios.put(`https://api.vschool.io/risalaf/thing/${id}`, update)
            .then(response => setAllEntries(prev => prev.map(ugly => ugly._id === id ? response.data : ugly)))
            // .then(response => )
            .catch(error => console.log(error))
    }

    return (
        <Context.Provider value={{
            deleteRequest,
            allEntries, setAllEntries,
            putRequest
        }}>
            {props.children}
        </Context.Provider>
    )
}
