import React, { useState } from 'react';
//must import link for them to work 
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <div className='navBar'>
            <h1>Magic the Gathering</h1>
{/* the to="" is the endpoint in the url */}
            <Link to="/"
                className="link">
                <button>
                    Home
                </button>
            </Link>

            <Link to='/favorites'
                className="link">
                <button>
                    Favorite Cards
                </button>
            </Link>

        </div>
    );
}

export default NavBar;