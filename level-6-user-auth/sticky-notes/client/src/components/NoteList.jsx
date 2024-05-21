import React from "react"
import Note from "./Note"


export default function NoteList(props) {
    const { notes } = props

    if (!notes) {
        return (
            <div>Loading...</div>
        )
    }
    return (
        <div className="note-list">
            {notes.map(note => note ? <Note {...note} key={note._id} /> : null)}
        </div>
    )
}