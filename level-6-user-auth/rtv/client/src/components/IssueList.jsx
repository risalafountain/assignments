import React from "react";
import Issue from "./Issue";

export default function IssueList(props) {
  const {issues} = props
  // console.log("Issue:", issues)
  if (!issues){
    return(
      <div>Loading...</div>
    )
  }
  return (
    <div className="issue-list">
      {issues.map(issue => issue ? <Issue {...issue} key = {issue._id} /> : null )}
    </div>
  )
}