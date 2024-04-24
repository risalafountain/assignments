import React from "react";
import Navbar from './Navbar'

export default function Card() {
    return (
        <header>
            <Navbar />
            <h1 className="header--title">Popular Vacation Spots</h1>
            <p className="header--subtitle">header subtitle Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dignissim tellus tempus eros pellentesque facilisis.</p>
        </header>
    )
}