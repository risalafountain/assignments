import React, { useContext } from "react"
import {ThemeContext} from "./themeContext"


export default function Header(props) {
// this hook accepts the whole context, save into var.   
    // const context = useContext(ThemeContext)
    // console.log(context)
// destructure 
const {color} = useContext(ThemeContext)

    return (
        // <div className="light-theme">
        <div className={`${color}-theme`}>

            <h2>Theme Context</h2>
            <h3>You are currently using {color} mode</h3>
        </div>
    )
}