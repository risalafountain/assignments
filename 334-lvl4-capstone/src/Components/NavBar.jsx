import React, { useState } from 'react';
import {Link} from 'react-router-dom'

function NavBar() {
    return (
        <div className='navBar'>
            <h1>Magic the Gathering</h1>
            
            <button>
                <Link to="/"
                    className="link">
                    Home
                </Link>
            </button>

            <button>
                <Link to='/favorites'
                    className="link">
                    Favorite Cards
                </Link>
            </button>

        </div>
    );
}

export default NavBar;