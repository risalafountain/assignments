import React, { useContext, useState } from "react"
import AuthForm from "./AuthForm"
import { UserContext } from '../context/UserProvider'


const initInputs = { username: '', password: '' }

export default function Auth() {
    const [inputs, setInputs] = useState(initInputs)
    const [toggle, setToggle] = useState(false)
    //this is the user data 
    const { signup, login, errMssg } = useContext(UserContext)

    function handleChange(e) {
        const { name, value } = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    }

    function handleSignup(e) {
        e.preventDefault()
        signup(inputs)
    }

    function handleLogin(e) {
        e.preventDefault()
        login(inputs)
    }

    function handleToggle() {
        setToggle(prev => !prev)
    }

    return (
        <div>
            <h1>Sticky Notes</h1>
            <p>Log in to see your notes</p>
           { !toggle ?
            <>
                <AuthForm
                    handleChange={handleChange}
                    handleSubmit={handleSignup}
                    inputs={inputs}
                    btnText="Sign Up"
                    errMssg={errMssg}
                />
                <p onClick={handleToggle}>Already a member?</p>
            </>
            :
            <>
                <AuthForm
                    handleChange={handleChange}
                    handleSubmit={handleLogin}
                    inputs={inputs}
                    btnText="Log In"
                    errMssg={errMssg}
                />
                <p onClick={handleToggle}>Not a member?</p>
            </>
            }
        </div>
    )
}