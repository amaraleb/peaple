import React from 'react'
import { Link } from 'react-router-dom'

export default function PostListItem(props) {
  const userselect = localStorage.getItem("userselect")  
  return (
    // <Link to={`/users/${userselect}/posts/`} className="user-blog__posts-item">
            <h2 className="container">
              {props.title}
              {props.description}
              {props.createdAt}
            </h2>
            
    // </Link>
  );
}

