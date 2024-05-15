import { useContext } from "react"
import comment from "../../../models/comment"
import UserProvider from "../context/UserProvider"
//do i need to import react??

export default function CommentList(props){
    const {issueId} = props
    const {allComments} = useContext(UserProvider)
    const filteredComments = allComments.filter(comment => comment.issue === issueId)
    const commentElements = filteredComments.map(comment => {
        return (
            <>
                <p>{comment.username} says:</p>
                <p>"{comment.title}"</p>
            </>
        )
    })

    //if you click on show comments it should show up in the console
    console.log(allComments)
    //check if it works and if it works then put it on the page 
    //console.log(filteredComments)

    return (
        <div>
            {commentElements}
        </div>
    )
}

//setup with prop drilling 