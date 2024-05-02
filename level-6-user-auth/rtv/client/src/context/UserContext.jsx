import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const UserContext = createContext()

export default function UserProvider(props){
    const initState = {user: {}, token: "", issues:[]}

    const [userState, setUserState] = useState (initState)

    return(
        <UserContext.Provider
            value={{
                ...userState,
            }}
        >
            {props.children}
        </UserContext.Provider>
    )
}

