import React from "react"
import { Link } from 'react-router-dom'


export default function Navbar(props) {
    const { logout, token } = props
    return (
        <div className="navbar">
            <h1>Sticky Notes</h1>
            {token && <Link to='/profile'></Link>}
            {token && <button onClick={logout}>Logout</button>}
        </div>
    )
}