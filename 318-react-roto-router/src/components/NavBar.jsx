import React, { useState } from 'react';
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <div className='navBar'>
            <h1>ABC Plumbing</h1>
            <img src="https://cdn.pixabay.com/photo/2024/02/02/09/08/ai-generated-8547706_1280.jpg" className='logo' />

            <button>
                <Link to='/' className='link'>Home</Link>
            </button>

            <button>
                <Link to='/about' className='link'>About</Link>
            </button>

            <button>
                <Link to='/services' className='link'>Services</Link>
            </button>
        </div>
    );
}

export default NavBar