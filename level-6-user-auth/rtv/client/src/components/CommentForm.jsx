import React, { useContext, useState } from 'react';
import UserProvider from '../context/UserProvider';

export default function CommentForm(props) {
    const [formData, setFormData] = useState({
        title: ''
    })
    const { addComment } = useContext(UserProvider)
    const { issueId } = props

    function handleChange(e) {
        const { name, value } = e.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(formData)
        addComment(issueId, formData)
        setFormData({ title: '' })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                placeholder='Comment'
                name='title'
                value={formData.text}
                onChange={handleChange}
            />
            <button>Leave Comment</button>
        </form>
    )
}