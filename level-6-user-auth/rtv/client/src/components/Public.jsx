import React, { useContext, useEffect } from 'react'
import IssueList from './IssueList.jsx'
import Issue from './Issue.jsx'
import { UserContext } from '../context/UserProvider.jsx'

export default function Public(){

  const {
    getAllIssues, 
    allIssues, 
    getAllComments,
  } = useContext(UserContext)
  
  useEffect(()=> {
    getAllIssues()
    getAllComments()
  }, [])

  return (
    <div className="public">
        <h1>All Issues: </h1>
        <IssueList issues = {allIssues} />
    </div>
  )
}