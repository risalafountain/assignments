import React, { useContext } from "react"
import {ThemeContext} from "./themeContext"
import Navbar from "./Navbar"


export default function Header(props) {
// this hook accepts the whole context, save into var.   
    // const context = useContext(ThemeContext)
    // console.log(context)
// destructure 
const {color} = useContext(ThemeContext)

    return (
        // <div className="light-theme">
        <div className={`${color}-theme`}>
            <Navbar />
            <h2>Click the button to toggle from {color} theme!</h2>
            <h3>You are currently using {color} mode</h3>
        </div>
    )
}