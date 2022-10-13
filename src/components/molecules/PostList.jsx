import React from 'react'


import PostListItem from './PostListItem';

export default function PostList(props) {
  return (
    <div className="user-blog__posts">
      {props.posts.map((post) => (
        <PostListItem 
        key={post.id}
        userId={post.userId} 
        postId={post.id} 
        image={post.image} 
        title={post.title} 
        createdAt={post.createdAt} 
        />
        )
      )}
    </div>  
  )  
}

