import React from "react";
import Issue from "./Issue";

export default function IssueList(props) {
  const {issues} = props
  console.log("Issue:", issues)
  if (!issues){
    return(
      <div>Loading...</div>
    )
  }
  return (
    <div>
      {issues.map(issue => <Issue {...issue} key = {issue._id} /> )}
    </div>
  )
}