import React from 'react'
import './App.css'

export default function App() {
  const [formData, setFormData] = React.useState({
      firstName: "", 
      lastName: "",
      email:"",
      phone: "",
      birthPlace:"",
      favFood:"",
      about:""
    }
  )

  return (
    <form>
      <input 
        type=""
        placeholder="First Name"
        className=""
        name="firstName"
        // onChange={}
        // value={}
    />
      <input 
        type=""
        placeholder="Last Name "
        className=""
        name="lastName"
        // onChange={}
        // value={}
    />
      <input 
        type=""
        placeholder="Email"
        className=""
        name="email"
        // onChange={}
        // value={}
    />
      <input 
        type=""
        placeholder="Place of Birth "
        className=""
        name="phone"
        // onChange={}
        // value={}
    />
      <input 
        type="number"
        placeholder="Phone Number"
        className=""
        name="birthPlace"
        // onChange={}
        // value={}
    />
      <input 
        type=""
        placeholder="Favorite Food"
        className=""
        name="favFood"
        // onChange={}
        // value={}
    />
      <textarea 
        // value={}
        placeholder="Tell Us About Yourself"
        className=""
        name="about"
        // onChange={}
    />
    <button>Submit</button>
    </form>
  )
}


//set up form element in return with inputs for firstName, lastName, email, phone, favFood, place of birth,text area, and submit button 

//setup inputs this way specify types to correspond w/ required infor: e.g. text, email, tel?, 
  // <input 
  //   type=""
  //   placeholder=""
  //   className=""
  //   name=""
  //   onChange={}
  //   value={}
  // />

//setup state objects 
  // {
  //   firstName: "", 
  //   lastName: "",
  //   email:"",
  //   phone: "",
  //   birthPlace:"",
  //   favFood:""
  // }
