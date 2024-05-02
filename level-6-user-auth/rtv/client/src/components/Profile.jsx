import React, {useContext} from 'react'
import IssueForm from './IssueForm.jsx'
import IssueList from './IssueList.jsx'
import Issue from './Issue.jsx'
import { UserContext } from '../context/UserProvider.jsx'

export default function Profile(){
  const {user: {username}, addIssue, issue} = useContext(UserContext)

  return (
    <div className="profile">
      <h1>Welcome @{username}!</h1>
      <h3>Add an Issue</h3>
      {/* <IssueForm addIssue = {addIssue} />
      <h3>Your Issues</h3>
      <IssueList issues={issues} /> */}
    </div>
  )
}
