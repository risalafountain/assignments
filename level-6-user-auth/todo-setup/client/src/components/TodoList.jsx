import React from "react";
import Todo from "./Todo";

export default function TodoList(props) {
  const {todos} = props
  return (
    <div>
      {todos.map(todo => <Todo {...todo} key = {todo._id} /> )}
    </div>
  )
}