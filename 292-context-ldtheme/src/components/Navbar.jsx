import React, { useContext } from "react"
import {ThemeContext} from "./themeContext"


export default function Navbar(props) {
    // this hook accepts the whole context, save into var.   
        // const context = useContext(ThemeContext)
        // console.log(context)
    // destructure 
    const {color} = useContext(ThemeContext)
    
        return (
            // <div className="light-theme">
            <div className={`${color}-theme`}>
                <a className="link"> Home </a>
                <a className="link"> About </a>
                <a className="link"> Contact </a>
                {/* <a className="link">Home About Contact</a> */}
               
            </div>
        )
    }