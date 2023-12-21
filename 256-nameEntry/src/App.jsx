import React from "react";

export default function App(){
  //create a state for all the new data 
  const [formData, setFormData] = React.useState({
    newName: "",
    names:[] //will store all the previous Names
  })
  // console.log(formData) //its blank
 
  function handleChange(event){
    const {name, value, type} = event.target
    // console.log(event.target.value) //checks that the keystrokes are being recorded 
    //get the value entered in the input box
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: value
      }
    })
  }

  function handleSubmit(event){
    event.preventDefault()
    if (formData.newName === "") {
      alert("Please Enter a Name")
    }else {
      setFormData((prevFormData) => {
        return {
          ...prevFormData,
          //add newName to new arr named names
          names: [...prevFormData.names, formData.newName],
          //reset newName to empty string 
          newName:""
        }
      })
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="newName"
        placeholder="Name"
        className="form--input"
        name="newName"
        onChange={handleChange}
        value={formData.newName}
      />
      <button>Submit Entry</button>
      <div>
      <h1>Current Input: {formData.newName}</h1>
      <h1>Previously Used Names</h1>
        <ol>
          {/* map over names, for each name, make it a <li>*/}
          {formData.names.map((name) => {
           // console.log(name) //why wont this work as a <li>
            return <li>{name}</li>
          }
          )}
        </ol>
          </div>
    </form>
  )

}