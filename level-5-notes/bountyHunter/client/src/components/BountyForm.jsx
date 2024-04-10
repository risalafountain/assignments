import React, { useContext } from "react";
import { BountyContext } from '../context/BountyProvider';

export default function EditBountyForm(props) {
    console.log('edited bounty form')
    const { entry, handleToggle } = props
    const { putBounty } = useContext(BountyContext)

    const [editedBounty, setEditedBounty] = React.useState({
        firstName: entry.firstName,
        lastName: entry.lastName,
        living: entry.living,
        bountyAmount: entry.bountyAmount,
        type: entry.type
    })


    function handleChange(event) {
        const { name, value } = event.target
        setEditedBounty(prevEditedBounty => {
            return {
                ...prevEditedBounty,
                [name]: value
            }
        })
        console.log(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log(editedBounty)
        putBounty(entry.id, editedBounty)
        handleToggle()
    }

    return (

        <form className="form" onSubmit={handleSubmit}>

            <input
                type="text"
                placeholder="First Name"
                className='form--input'
                name="firstName"
                value={editedBounty.firstName}
                onChange={handleChange}
            />
            <input
                type="text"
                placeholder="Last Name"
                className='form--input'
                name="lastName"
                value={editedBounty.lastName}
                onChange={handleChange}
            />
            <input
                type="text"
                placeholder="living"
                className='form--input'
                name="living"
                value={editedBounty.living}
                onChange={handleChange}
            />
            <input
                type="text"
                placeholder="Bounty Amount"
                className='form--input'
                name="bountyAmount"
                value={editedBounty.bountyAmount}
                onChange={handleChange}
            />
            <input
                type="text"
                placeholder="Jedi or Sith?"
                className='form--input'
                name="type"
                value={editedBounty.type}
                onChange={handleChange}
            />

            <button onClick={handleSubmit}>Update Values</button>
            <button onClick={handleToggle}>Cancel</button>

        </form>
    )
}

//post on form

//delete on button 

//edit on button 

