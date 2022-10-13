import React from 'react'
import Default from "../templates/Default"
import Loading from "../atoms/Loading"
import UserList from '../molecules/UserList';
import { useNavigate } from "react-router-dom";

export default function Users() {
  
  const [users, setUsers] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const navigate = useNavigate();
  

  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("authorization", localStorage.getItem("token"));

  React.useEffect(() => {
    fetch("http://localhost:8080/user/",{headers:headers})
      .then((response) => response.json())
      .then((data) => {     
        setUsers(data);
        setLoading(false);
        console.log(data);
      })
      .catch(error => {navigate("/")})
      
  }, []);
    
  
  return loading ? (
    <Loading />
  ) :  (
    <Default>
      <UserList users={users} />
    </Default>
  )
}
