import React from 'react'
import Default from "../templates/Default"
import PostList from '../molecules/PostList';
import Loading from "../atoms/Loading"

export default function TimeLine() {
  const userselect = localStorage.getItem("userselect")

  const [posts, setPosts] = React.useState([]);
  //const [user, setUser] = React.useState({});

  const [loading, setLoading] = React.useState(true);

  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("authorization", localStorage.getItem("token"));

  React.useEffect(() => {
    fetch(`http://localhost:8080/user/${userselect}/posts`,{headers:headers})
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        //setUser(data[0].userData);
        setLoading(false);
      });
  }, [userselect]);

  
  
  return loading ? (
    <Loading />
  ) :  (
    <Default>
      <div className="user-blog">
        {/* <UserBio
          src={user.avatar}
          name={`${user.fn} ${user.ln}`}
          bio={user.bio}
        /> */}
        <PostList posts={posts} />
      </div>
    </Default>
  )
}
