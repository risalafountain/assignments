import React from "react";

export default function Box(props) {
    //console.log(props.on)
    //console.log(props.id) //1 2 3 4 5 6
    // const [on, setOn] = React.useState(props.on)
    
    const styles ={
        backgroundColor: 
         props.on ? "#222222" : "transparent"
    }

    // function toggle() {
    //     setOn(prevOn => !prevOn)
    // }

    return (
        <div 
        style={styles} className='box'  
        onClick={()=>props.toggle(props.id)}
        >
        </div>
        
    )
}