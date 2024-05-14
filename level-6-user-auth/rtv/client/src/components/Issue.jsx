import React from 'react'

export default function Issue(props) {
  const { title, description, _id, username, createdAt } = props
  const timeStamp = moment(createdAt).fromNow()
  return (
    <div className="issue">
      <h1>Title: {title}</h1>
      <h3>Issue posted by: {username}</h3>
      <h3>Description: {description}</h3>
      <p>{timeStamp}</p>
      <div>
        <p>Upvotes: 0 </p>
        <button>Upvote</button>
      </div>
      <div>
        <p>Downvotes: 0 </p>
        <button>Downvote</button>
      </div>
      {/* <img src={imgUrl} width={300} /> */}
    </div>
  )
}