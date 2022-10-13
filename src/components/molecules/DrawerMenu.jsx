import React from "react";
import Drawer from "@mui/material/Drawer";
import { List, ListItem } from "@mui/material";
import { Link } from "react-router-dom";

export default function DrawerMenu(props) {
 
  const exit = () => {
    localStorage.clear();
  }

  return (
    <Drawer
      className="drawer"
      anchor="right"
      open={props.open}
      onClose={() => {
        props.setOpen(false);
      }}
    >
      <ListItem>
        <Link to="/users">Usuários</Link>
      </ListItem>
      <ListItem>
        <Link to="/timeline">Time-line</Link>
      </ListItem>
      <ListItem>
        <Link to="/profile">Perfil</Link>
      </ListItem>
      <ListItem>
        <Link onClick={exit} to="/">Sair</Link>
      </ListItem>
    </Drawer>
  );
}