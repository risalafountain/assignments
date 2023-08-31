import React from "react";
import swimImg from "./images/swim.png"
import star from "./images/star.png"

export default function Card() {
    return (
        <div className="card">
            <img src = {swimImg} className="swim"/>
            <div className="card--stats">
                <img src = {star} />
            </div>
        </div>
    )
}