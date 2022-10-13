import React from 'react'
import Default from "../templates/Default"
import PostList from '../molecules/PostList';

export default function TimeLine() {
  const [posts, setPosts] = React.useState([]);
  
  return (
    <Default>
      <PostList posts={posts} />
    </Default>
  )
}
