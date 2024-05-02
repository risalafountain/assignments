import React, { useState } from 'react'

const initInputs = {
  title: "",
  description: "",
}

export default function IssueForm(props){
  const [inputs, setInputs] = useState(initInputs)
  const {addIssue} = props
  const { title, description } = inputs
  
  function handleChange(e){
    const {name, value} = e.target
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
  }

  function handleSubmit(e){
    e.preventDefault()
    // addIssue(inputs)
    // //clear inputs after submit
    // setInputs(initInputs)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="title" 
        value={title} 
        onChange={handleChange} 
        placeholder="Title"/>
      <input 
        type="text" 
        name="description" 
        value={description} 
        onChange={handleChange} 
        placeholder="Description"/>
      <button>Add Issue</button>
    </form>
  )
}