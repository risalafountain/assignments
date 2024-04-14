import { createContext, useState } from "react";
import axios from 'axios'

export const BountyContext = createContext()


function BountyProvider(props) {
    const [bounties, setBounties] = useState([])
    // const {id} = props //i tried this but props is still undefined
    function getBounties() {
        axios.get('/bounty')
            .then(res => setBounties(res.data))
            .catch(err => console.log(err))
    }

    //add bounty
    function postBounty(newBounty) {
        axios.post('/bounty')
            .then(res => setBounties(prev => [...prev, res.data]))
            .catch(err => console.log(err))
        console.log(`this is the post request: ${newBounty}`)
    }

    //delete bounty //haven't tested this yet 
    function delBounty(id) {
        axios.delete(`http://localhost:9000/bounty/${id}`, id) 
            .then(res => setBounties(newBounty => newBounty.filter(bounty => bounty._id !== id)))
            .catch(err => console.log(err))
    }
    
    //edit bounty 
    function putBounty(id, update) {
        axios.put(`http://localhost:9000/bounty/${id}`, update)
            .then(console.log(`this is the id: ${id}`))//this id is undefined
            // .then(res => setBounties(prev => prev.map(bounty => bounty._id === id ? res.data : bounty)))
            .catch(err => console.log(err))
    }

    return (
        <BountyContext.Provider value={{ getBounties, postBounty, delBounty, putBounty, bounties}}>
            {props.children}
        </BountyContext.Provider>
    );
}

export default BountyProvider