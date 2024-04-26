import React, { useState } from 'react'
import axios from 'axios'

export const UserContext = React.createContext()

export default function UserProvider(props) {
    const initState = {
        user: JSON.parse(localStorage.getItem('user')) ||  {},
        //get the tken item or return empty string
        token: localStorage.getItem("token") || "",
        todos: []
    }

    const [userState, setUserState] = useState(initState)
    function signup(credentials) {
        axios.post('/api/auth/signup', credentials)
            .then(res => {
                const {user, token} = res.data
                //save both pieces of data in local storage so it still exists if erased or window is closed
                //i dont see the key value pairs i just see the object (2nd param)
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))
                setUserState(prevUserState => ({
                    ...prevUserState,
                    user,
                    token
                }))
            })
            //this doesn't work says data is undefined
            .catch(err => console.log(err.res.data.errMssg))
    }

    function login(credentials) {
        axios.post('/api/auth/login', credentials)
            .then(res => {
                const {user, token} = res.data
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))
                setUserState(prevUserState => ({
                    ...prevUserState,
                    user,
                    token
                }))
            })
            .catch(err => console.log(err.ressponse.data.errMssg))
    }
//reset local storage reset state
    function logout(){
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setUserState({
            user: {},
            token: "",
            todos: []
        })
    }

    return (
        <UserContext.Provider
            value={{
                ...userState,
                signup,
                login,
                logout
            }}
        >
            {props.children}
        </UserContext.Provider>
    )
}