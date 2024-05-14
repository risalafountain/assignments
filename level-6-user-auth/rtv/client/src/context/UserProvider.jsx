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
        issues: [],
        errMssg: ""
    }
    const [userState, setUserState] = useState (initState)

//SIGNUP
    function signup(credentials) {
        axios.post('/api/auth/signup', credentials)
            .then(res => {
                const {user, token} = res.data
                console.log('Response data:', res.data); // Log the response data

                //save both pieces of data in local storage so it still exists if erased or window is closed
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))
                console.log('User data after signup:', localStorage.getItem('user'));
                getUserIssues()
                setUserState(prevUserState => ({
                    ...prevUserState,
                    user,
                    token
                }))
            })
            .catch(err => handleAuthErr(err.response.data.errMssg))
    }
//LOGIN
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
            .catch(err => handleAuthErr(err.response.data.errMssg))
    }

//HANDLE ERR
    function handleAuthErr(errMssg){
        setUserState(prevState => ({
            ...prevState,
            errMssg
        }))
    }

//RESET ERR    
    function resetAuthErr(){
        setUserState(prevState=>({
            ...prevState,
            errMssg:""
        }))
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
//GET ALL USER ISSUES
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

//CREATE NEW ISSUE
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

    


    return(
        <UserContext.Provider
            value={{
                ...userState,
                signup,
                login,
                logout,
                addIssue,
                getUserIssues,
                resetAuthErr
            }}
        >
            {props.children}
        </UserContext.Provider>
    )
}

