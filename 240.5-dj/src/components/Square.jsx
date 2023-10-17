import React from "react";

export default function Square(props){
    // console.log(props.color)
    const styles ={
        backgroundColor: props.color
    }
    return(
        <div style = {styles} className="box" ></div>
    )
}