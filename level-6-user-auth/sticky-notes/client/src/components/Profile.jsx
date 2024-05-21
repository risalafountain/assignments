import React, { useContext } from "react"
import { UserContext } from "../context/UserProvider"
import NoteForm from "./NoteForm"
import NoteList from "./NoteList"


export default function Profile(){
    const {
        user: {username},
        notes,
        addNote,
        getAllNotes,
    } = useContext(UserContext)
    return(
        <div>
            <h1>Welcome Back, @{username}!</h1>
            <h3>New Note:</h3>
            <NoteForm addNote = {addNote}/>
            <h3>Your Notes:</h3>
            <NoteList getAllNotes = {getAllNotes} />
        </div>
    )
}