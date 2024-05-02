import React from "react";
import Issue from "./Issue";

export default function TodoList(props) {
  const {issues} = props
  return (
    <div>
      {issues.map(issue => <Issue {...issue} key = {issue._id} /> )}
    </div>
  )
}