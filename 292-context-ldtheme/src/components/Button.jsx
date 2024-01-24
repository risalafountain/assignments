import React, { useContext } from "react";
import { ThemeContext } from "./themeContext";

export default function Button(props) {
// const context = React.useContext(ThemeContext)
// destructure makes it cleaner 
const {color, toggleTheme} = React.useContext(ThemeContext)
    // console.log(context)

    return (
        // <button onClick={context.toggleTheme} className={`${context}-theme`}> Change Theme</button>
        <button onClick={toggleTheme} className={`${color}-theme`}> Change Theme</button>
    )
}

