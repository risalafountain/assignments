import React, { useContext } from 'react'
import IssueList from './IssueList.jsx'
import Issue from './Issue.jsx'
import UserProvider from '../context/UserProvider.jsx'

export default function Public(){

  // const {
  //   getAllIssues, 
  //   allIssues, 
  //   getAllComments
  // } = useContext(UserProvider)
  
  // useEffect(()=> {
  //   getAllIssues()
  //   getAllComments()
  // }, [])

  return (
    <div className="public">
        <h1>All Issues: </h1>
        {/* <IssueList issues = {allIssues} /> */}
    </div>
  )
}