import React, { useState } from 'react'
import axios from 'axios'
import { config } from 'dotenv'

export const UserContext = React.createContext()
//this is also axios
const userAxios = axios.create()

//setup interceptor
userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    config.headers.Authorization = `Bearer ${token}`
    return config
})

export default function UserProvider(props) {
    const initState = {
        user: JSON.parse(localStorage.getItem('user')) || {},
        //get the token item or return empty string
        token: localStorage.getItem("token") || "",
        todos: [],
        errMssg: ""
    }

    const [userState, setUserState] = useState(initState)
    function signup(credentials) {
        axios.post('/api/auth/signup', credentials)
            .then(res => {
                const { user, token } = res.data
                //save both pieces of data in local storage so it still exists if erased or window is closed
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))
                getUserTodos()
                setUserState(prevUserState => ({
                    ...prevUserState,
                    user,
                    token
                }))
            })
            .catch(err => handleAuthErr(err.response.data.errMssg))
    }

    function login(credentials) {
        axios.post('/api/auth/login', credentials)
            .then(res => {
                const { user, token } = res.data
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))
                getUserTodos()
                setUserState(prevUserState => ({
                    ...prevUserState,
                    user,
                    token
                }))
            })
            .catch(err => handleAuthErr(err.response.data.errMssg))
    }
    function handleAuthErr(errMssg) {
    // console.log("ErrMssg in UserProvider:", errMssg) 
    setUserState(prevState => ({
        ...prevState,
        errMssg
    }))
    }

    function resetAuthErr(){
        setUserState(prevState =>({
            ...prevState,
            errMssg: ""
        }))
    }

    //reset local storage reset state
    function logout() {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setUserState({
            user: {},
            token: "",
            todos: []
        })
    }

    function getUserTodos() {
        userAxios.get("/api/todo/user")
            .then(res => {
                setUserState(prevState => ({
                    ...prevState,
                    todos: res.data
                }))
            })
            .catch(err => console.log(err))
    }

    function addTodo(newTodo) {
        //use axios interceptor to do the stuff only once
        userAxios.post('/api/todo/', newTodo)
            .then(res => {
                setUserState(prevState => ({
                    ...prevState,
                    todos: [...prevState.todos, res.data]
                }))
            })
            .catch(err => console.log(err))
    }

return (
    <UserContext.Provider
        value={{
            ...userState,
            signup,
            login,
            logout,
            addTodo,
            getUserTodos,
            resetAuthErr
        }}
    >
        {props.children}
    </UserContext.Provider>
)
}