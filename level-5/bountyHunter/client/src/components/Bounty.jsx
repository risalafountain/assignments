import React, { useState, useContext } from 'react';
import BountyForm from "../components/BountyForm"
import { BountyContext } from '../context/BountyProvider';

function Bounty(props) {

    // console.log(props)
    const { bountyAmount, firstName, lastName, living, type, id } = props
    const { delBounty } = useContext(BountyContext)
    const [showForm, setShowForm] = useState(false)
    const [isEditing, setIsEditing] = React.useState(false)

    function handleToggle() {
        setIsEditing(prev => !prev)
    }


    return (
        <>
            {!isEditing ?(
                <div>
                    <h1>{firstName} {lastName}</h1>
                    <h3>{bountyAmount}</h3>
                    <h3>{living}</h3>
                    <h3>{type}</h3>
                    <button className='form-button' onClick={handleToggle}>Edit</button>
                    <button className='form-button' onClick={() => delBounty(id)}>Delete</button>
                </div>):(
                    <BountyForm
                    entry = {{ bountyAmount, firstName, lastName, living, type, id }}
                    handleToggle = {handleToggle}            
                    />
                    )
                }
        </>
    )
}

export default Bounty;