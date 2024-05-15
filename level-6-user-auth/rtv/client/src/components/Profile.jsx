import React, {useContext, useEffect} from 'react'
import IssueForm from './IssueForm.jsx'
import IssueList from './IssueList.jsx'
import Issue from './Issue.jsx'
import { UserContext } from '../context/UserProvider.jsx'

export default function Profile(){
  //issues indicates the arr here
  const {
    user: {username}, 
    issues,
    getUserIssues, 
    getAllComments
  } = useContext(UserContext)

  useEffect(() => {
    getUserIssues()
    getAllComments()//these are attached to our issues 
  }, [])

  return (
    <div className="profile">
      <h1>Welcome @{username}!</h1>
      <h3>Add an Issue</h3>
      <IssueForm addIssue = {addIssue} />
      {/* <IssueForm /> that means this is already passsed into the IssueForm? */}
      <h3>Your Issues:</h3>
      <IssueList issues={issues} />
    </div>
  )
}
