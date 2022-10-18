import { Link } from "react-router-dom";
import Avatar from "../atoms/Avatar";

function UserListItem(props) {
    const setuser = () => {  
      console.log(props.id);
      localStorage.setItem("selectUser", props.id);
    }
  return (
    <Link onClick={setuser} to={`/timeline/${props.id}`} className="users__list-item">
      
      <div className="users__list-item-photo">
        <Avatar />
      </div>
      <div className="users__list-item-name">{props.name}</div>
    </Link>
  );
}

export default UserListItem;
