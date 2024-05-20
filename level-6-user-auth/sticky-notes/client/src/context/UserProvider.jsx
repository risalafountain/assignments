import React, { useState } from 'react';
import { createContext } from "react";
import axios from 'axios'

export const UserContext = createContext()
const userAxios = axios.create()

export default function UserProvider(props){
//STATE 
    const initState = {
        user: {},
        token: "",
        notes: [],
        errMssg: ""
    }

    const [userState, setUserState] = useState(initState)
    const [allNotes, setAllNotes] = useState([])

//SIGNUP
    

//LOGIN

return (
    <UserContext.Provider
        value = {{
            ...userState,
            
        }}
    >
        {props.children}
    </UserContext.Provider>
)

    


}