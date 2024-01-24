import { useState } from "react";
import React from "react";


const ThemeContext = React.createContext()

function ThemeContextProvider(props) {

    //insert state and function that pertains to  context move from app component 

    const [color, setColor] = useState("dark")

    const toggleTheme = () => {
        setColor(prevColor => prevColor === "dark" ? "light" : "dark")
    }

    return (

        < ThemeContext.Provider value={{
            color: color,
            toggleTheme: toggleTheme
        }}>

            {props.children}

        </ThemeContext.Provider >
    )
}


export   {ThemeContext, ThemeContextProvider}

{/* use a value prop to pass in whatever data needs to be made available to consumer components (headder/button) */ }