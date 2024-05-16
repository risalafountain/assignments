import React,{ useContext } from "react"
import {UserContext} from "../context/UserProvider"
//do i need to import react??

export default function CommentList(props){
    const {issueId} = props
    const {allComments} = useContext(UserContext)
    const filteredComments = allComments.filter(comment => comment.issue === issueId)

    const commentElements = filteredComments.map(comment => {
        return (
            <div className="comments"
            key ={comment._id}>
                <p>{comment.username} says:</p>
                <p>"{comment.title}"</p>
            </div>
        )
    })

    return (
        <div>
            {commentElements}
        </div>
    )
}

//setup with prop drilling 