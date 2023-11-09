import React from 'react'
import './App.css'

// #1 create state object and inputs for data 
    //create state object for badges make empty arr
  // each component(?)/property will be an empty string 
export default function App() {
  const [badges, setBadges] = React.useState([])
  const [byeButton, setByeButton] = React.useState(true)
  const [formData, setFormData] = React.useState({
      firstName: "", 
      lastName: "",
      email:"",
      phone: "",
      birthPlace:"",
      favFood:"",
      about:"",
    }
    )

//#5 create  handleChange function to manage the state of all inputs 
//      run set formData 
//      return an object that has prevFormData but updates based on name  data 
//#6 add onChange event handler to inputs 
function handleChange(event) {
  checkInputs()
  const {name, value} = event.target 
  console.log('formData:', formData)
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }))
  }

function checkInputs(){
  if (formData.firstName &&
    formData.lastName &&
    formData.email &&
    formData.phone &&
    formData.birthPlace &&
    formData.favFood && 
    formData.about) {
      console.log('')
      setByeButton(false)
      return true
    } else {
      // submit button disabled
      setByeButton(true)
      return false 
    }
  } 
  
  
  //#8 handleSubmit function just prevent default--console log form data to verify it is working 
  function handleSubmit(event) {
    console.log('handleSub')
    event.preventDefault()
    //#7 run a check to verify the data is getting logged correctly
    //make a new badge         
    if (checkInputs()){
      console.log('inside checkInput TRUE')
      
      //add FormData to badge arr {err shows prev Form Data is not iterable }
      const newBadge = {...formData}
      //put that in badge arr
      setBadges([...badges, newBadge])
      // console.log(badges) //make sure it works
      //reset form data 
      setFormData({
        firstName: "", 
        lastName: "",
        email:"",
        phone: "",
        birthPlace:"",
        favFood:"",
        about:"",
      })
      setByeButton(true)
    } else {
      console.log('inside checkInput FALSE')
      setByeButton(true)
      alert("Please enter all data fields ")
  }
}
    //check that the formData is all filled out--check if the statments are truthy (filled out)if they are then put that data into a badge arr 
    //#2 set up form element with inputs for firstName, lastName, email, phone, favFood, place of birth,text area, and submit button <see syntax notes>
    //#3 add the state properties as name field in each input copy/paste
    //#4 add a value field that points to formData.<selected state property>
return (
  <div className='form-container'>
    {/* //#9 add handleSubmit function to form */}
    <form className='form' onSubmit={handleSubmit}>
      <input 
        type="text"
        placeholder="First Name"
        className="form--input"
        name="firstName"
        minLength="3"
        onChange={handleChange}
        value={formData.firstName}
        />
      <input 
        type="text"
        placeholder="Last Name "
        className="form--input"
        name="lastName"
        minLength="3"
        onChange={handleChange}
        value={formData.lastName}
        />
      <input 
        type="email"
        placeholder="Email"
        className="form--input"
        name="email"
        minLength="3"
        onChange={handleChange}
        value={formData.email}
        />
      <input 
        type="text"
        placeholder="Place of Birth "
        className="form--input"
        name="birthPlace"
        minLength="3"
        onChange={handleChange}
        value={formData.birthPlace}
        />
      <input 
        type="tel"
        placeholder="Phone Number"
        className="form--input"
        name="phone"
        minLength="10"
        onChange={handleChange}
        value={formData.phone}
        pattern="[0-9]*"
        />
      <input 
        type="text"
        placeholder="Favorite Food"
        className="form--input"
        name="favFood"
        minLength="3"
        onChange={handleChange}
        value={formData.favFood}
        />
      <textarea 
        placeholder="Tell Us About Yourself"
        className="form--input"
        name="about"
        minLength="3"
        onChange={handleChange}
        value={formData.about}
        />
    {!!!byeButton && <button className='form--submit'>Submit</button>}
    </form>
    {/* #setup div for formData inputs
        #map over badges, for each badge, set  it up 
    */}
      <div className='badge--container'>
        <h2 className='badge--header'>Badge:</h2>
        {badges.map((badge, index) => {
          return (
            <div className='badge--inputs' key={index}>
              {/* console.log(badge.firstName) */}
              <a className='badge--section'>
              <p> Name: {badge.firstName} {badge.lastName}  </p> 
              <p>Phone: {badge.phone} </p>
              <p>Place of Birth: {badge.birthPlace} </p>
              <p>Favorite Food: {badge.favFood}</p>
              <p>Email: {badge.email}</p>
              </a>
              <p className='badge--about'> {badge.about} </p>
            </div>
          )  
        })}
      </div>
    </div>
  )
}


//Game Plan 
//# Create a badge after submit  
//setup a div with the information collected  

//# Clear the data after submit 

//ISSUES:
// before mapping, the data was showing up correctly in the handle submit function, when i console.log(badges) now it is returning nothing just emptying the input field
//# if value is empty, disable the submit button 

// SYNTAX NOTES
//setup inputs this way specify types to correspond w/ required infor: e.g. text, email, tel?, 
// <input 
//   type=""
//   placeholder=""
//   className=""
//   name=""
//   onChange={}
//   value={}
// />

//phone type should be tel and have pattern attribute pattern="[0-9]*" <>
// use minLength="3" for all inputs except phone minLength="10"

//setup state objects this way 
// {
  //   firstName: "", 
  //   lastName: "",
  //   email:"",
  //   phone: "",
  //   birthPlace:"",
  //   favFood:""
  // }
  
  // RE: HandleChange Function 
  //return an object by surrounding it in () to make use of implicit return 
  //return an object that has all of the properties of the prevform but update the porperty based on the name data pulled from the input making the change
  
//resources:  
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/tel
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation
  // https://www.w3schools.com/tags/att_input_minlength.asp
  // https://surajsharma.net/blog/disable-button-in-react