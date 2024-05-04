import React, {useContext} from 'react'
import IssueForm from './IssueForm.jsx'
import IssueList from './IssueList.jsx'
import Issue from './Issue.jsx'
import { UserContext } from '../context/UserProvider.jsx'

export default function Profile(){
  //issues indicates the arr here
  const {user: {username}, addIssue, issues} = useContext(UserContext)

  return (
    <div className="profile">
      <h1>Welcome @{username}!</h1>
      <h3>Add an Issue</h3>
      <IssueForm addIssue = {addIssue} />
      <h3>Your Issues</h3>
      <IssueList issues={issues} />
    </div>
  )
}
