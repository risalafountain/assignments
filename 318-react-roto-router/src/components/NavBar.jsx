import React, { useState } from 'react';
import {Link} from 'react-router-dom'

function NavBar() {
    return (  
        <div className='navBar'>
           <button>
            <Link to= '/' className='link'>Home</Link>
            </button>
           
           <button>
            <Link to = '/about' className='link'>About</Link>
            </button>
           
           <button>
            <Link to = '/services' className='link'>Services</Link>
            </button>
        </div>
    );
}

export default NavBar