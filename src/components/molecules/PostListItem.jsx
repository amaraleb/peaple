import React from 'react'
import { Link } from 'react-router-dom'

export default function PostListItem(props) {
  return (
    <Link to={`/users/${props.userId}/posts/${props.postId}`} className="user-blog__posts-item">
            <h2 className="user-blog__posts-item-title">
              {props.title}
            </h2>
            
    </Link>
  );
}

