import axios from "axios";
import { useState } from "react";
import React from "react";

export const Context = React.createContext()

export default function ContextProvider(props) {
    
    const [allEntries, setAllEntries] = useState([])
    function getRequest() {
        axios.get(`"https://api.vschool.io/risalaf/thing"`)
            .then(res => setAllEntries(res.data))
            .catch(error => console.log(error))
    }

    function deleteRequest(id) {
        try {
            const res = axios.delete(`https://api.vschool.io/risalaf/thing/${id}`)
        } catch (error) {
            console.log(error)
        }       
    }

    return (
        <Context.Provider value={{
            deleteRequest,
            allEntries, setAllEntries
        }}>
            {props.children}
        </Context.Provider>
    )
}
