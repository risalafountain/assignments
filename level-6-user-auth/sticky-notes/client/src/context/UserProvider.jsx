import React, { useState } from 'react';
import { createContext } from "react";
import axios from 'axios'

export const UserContext = createContext()
const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    config.headers.Authorization = `Bearer ${token} `
    return config
})

export default function UserProvider(props){
//STATE 
    const initState = {
        user: JSON.parse(localStorage.getItem('user')) || {},
        token: localStorage.getItem('token') || '',
        notes: [],
        errMssg: ""
    }

    const [userState, setUserState] = useState(initState)
    const [allNotes, setAllNotes] = useState([])

//SIGNUP
    function signup(credentials){
        axios.post('/api/auth/signup', credentials)
        .then (res => {
            const {user, token} = res.data
            console.log('Response Data:', res.data)

            //save both pieces of data in local storage(won't erase on refresh)
            localStorage.setItem('token', token)
            localStorage.setItem('user', JSON.stringify(user))
            console.log('User data after signup', localStorage.getItem('user'))
            getNotes() //where is this coming from 
            setUserState(prevUserState => ({
                ...prevUserState,
                user,
                token
            }))
        })
        .catch(err => handleAuthErr(err.response.data.errMssg))
    }

//LOGIN
    function login(credentials){
        axios.post('/api/auth/login', credentials)
        .then(res => {
            const {user, token} = res.data
            console.log('Response Data:', res.data)
            //save both pieces of data in local storage(won't erase on refresh)
            localStorage.setItem('token', token)
            localStorage.setItem('user', JSON.stringify(user))
            console.log('User data after login', localStorage.getItem('user'))
            getNotes()
            setUserState(prevUserState => ({
                ...prevUserState,
                user,
                token
            }))
        })
        .catch(err => handleAuthErr(err.response.data.errMssg))
    }

//LOGOUT
    function logout(){
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setUserState({
            user: {},
            token: "",
            notes: []
        })
    }

//CREATE NEW NOTE 
    function addNote(newNote){
    //use axios interceptor  
    userAxios.post('/api/main/note/', newNote)
    .then(res => {
        console.log(res.data)
        setUserState(prevState => ({
            ...prevState,
            notes: [...prevState.notes, res.data]
        }))
    })
    .catch(err => console.log(err))  
    }

//GET ALL NOTES by id
    function getAllNotes(){
        userAxios.get('/api/main/note/user')
        .then(res => {
            setUserState(prevState => ({
                notes: res.data
            }))
        })
        .catch(err => console.log(err))
    }

//HANDLE AUTH ERR 
    function handleAuthErr(errMssg) {
        setUserState(prevState => ({
            ...prevState,
            errMssg
        }))
    }

//RESET ERR 
    function resetAuthErr(){
        setUserState(prevState => ({
            ...prevState,
            errMssg: ''
        }))
    }



return (
    <UserContext.Provider
        value = {{
            ...userState,
            signup,
            login,
            logout,
            handleAuthErr,
            resetAuthErr,
            addNote,
            getAllNotes,
        }}
    >
        {props.children}
    </UserContext.Provider>
)

    


}