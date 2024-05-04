import React from "react";
import { useState } from "react";
import { createContext } from "react";
import axios from 'axios'

export const UserContext = createContext()
//this is also axios
const userAxios = axios.create()

//setup interceptor
userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    config.headers.Authorization = `Bearer ${token}`
    return config
})


export default function UserProvider(props){
    const initState = {
        user: JSON.parse(localStorage.getItem('user')) ||  {},
        //get the token item or return empty string
        token: localStorage.getItem("token") || "",
        issues: []
    }
    const [userState, setUserState] = useState (initState)

    function signup(credentials) {
        axios.post('/api/auth/signup', credentials)
            .then(res => {
                const {user, token} = res.data
                //save both pieces of data in local storage so it still exists if erased or window is closed
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))
                getUserIssues()
                setUserState(prevUserState => ({
                    ...prevUserState,
                    user,
                    token
                }))
            })
            //this doesn't work says data is undefined
            .catch(err => console.log(err))
    }
    function login(credentials) {
        axios.post('/api/auth/login', credentials)
            .then(res => {
                const {user, token} = res.data
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))
                getUserIssues()
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
            issues: []
        })
    }

    function getUserIssues(){
        userAxios.get("/api/main/issue/user")
        .then(res => {
            setUserState(prevState => ({
                ...prevState,
                issues: res.data
            }))
        })
        .catch(err => console.log(err))
    }

    function addIssue(newIssue){
        //use axios interceptor to do the stuff only once
        userAxios.post('/api/main/issue/', newIssue)
        .then(res => {
            console.log(res.data)
            setUserState(prevState => ({
                ...prevState,
                issues: [...prevState.issues, res.data] 
            }))
        })
        .catch(err => console.log(err))
    }
//need to create a way to see all issues (profile?)
//how do i see all my users? i forgot who i've signed up  


    return(
        <UserContext.Provider
            value={{
                ...userState,
                addIssue,
                getUserIssues,
                logout,
                login,
                signup
            }}
        >
            {props.children}
        </UserContext.Provider>
    )
}

