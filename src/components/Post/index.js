import React from 'react';

import './index.css';

function HeaderPost({ author, date }) {
  return (
    <div className="headerPost">
      <img src={author.avatar} alt={author.name}/>
      <div>
        <h3>{author.name}</h3>
        <span>{date}</span>
      </div>
    </div>
  )
}

function Comment({comments}) {
  return (
    <div className="commentList">
      {comments.map(comment => (
        <div className="comment" key={comment.id}>
          <img src={comment.author.avatar} alt={comment.author.name}/>
          <p><strong>{comment.author.name}</strong> {comment.content}</p>
        </div>
      ))}
    </div>
  )
}

function Post({ author, date, content, comments }) {
  return (
    <li>
      <HeaderPost author={author} date={date} />
      <div className="contentPost">{content}</div>
      <Comment comments={comments} />
    </li>
  )
}

export default Post;