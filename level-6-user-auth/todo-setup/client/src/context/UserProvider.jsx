import React, { useState } from 'react'
import axios from 'axios'
import { config } from 'dotenv'

export const UserContext = React.createContext()
//this is also axios
const userAxios = axios.create()
//setup interceptior
userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    config.headers.Authorization = `Bearer ${token}`
})

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
            .catch(err => console.log(err))
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
    function addTodo(newTodo){
        //use axios interceptor to do the stuff only once
        userAxios.post('/api/todo/', newTodo)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    return (
        <UserContext.Provider
            value={{
                ...userState,
                signup,
                login,
                logout,
                addTodo
            }}
        >
            {props.children}
        </UserContext.Provider>
    )
}