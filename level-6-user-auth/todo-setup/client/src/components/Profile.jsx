import React, {useContext} from 'react'
import TodoForm from './TodoForm.jsx'
import TodoList from './TodoList.jsx'
import Todo from './Todo.jsx'
import { UserContext } from '../context/UserProvider.jsx'

export default function Profile(){
  const {user: {username}} = useContext(UserContext)

  return (
    <div className="profile">
      <h1>Welcome @{username}!</h1>
      <h3>Add A Todo</h3>
      <TodoForm />
      <h3>Your Todos</h3>
    </div>
  )
}
