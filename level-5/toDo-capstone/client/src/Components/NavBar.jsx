import React from "react";
import { Link } from "react-router-dom";

export default function NavBar(){
    return(
        <div className="navBar">
            <h1>Chore List </h1>
            <ol>Project Requirements: 
                <li>need 3 page views/routes</li>
                <li>at least 2 crud methods</li>
                 </ol>
                 <Link to={'/'} className='button'>Home</Link>
                 <Link to={'/favorites'} className='button'>Favorite Tasks</Link>
                 <Link to = {'/resources'} className='button'>Resources</Link>
        </div>
    )
}