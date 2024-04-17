
import React, { useContext } from "react";
import { Context } from "../Context/ContextProvider";
import AddTaskForm from "./AddTaskForm";
import Card from "./Card";


export default function Home(){

    const {allTasks} = useContext(Context)
    //map over data so we can see the cards
    const cards = allTasks.map(card => <Card key ={card.id} {...card} />)
    
    return(
        <div className="container">
            
            <h4>Create New Task:</h4>
            <AddTaskForm />
            {cards}
        </div>
    )
}