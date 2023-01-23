import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
// import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
// import BarChartIcon from "@material-ui/icons/BarChart";
// import LayersIcon from "@material-ui/icons/Layers";
import Diversity1TwoToneIcon from "@mui/icons-material/Diversity1TwoTone";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import { NavLink } from "react-router-dom";
import "../App.css";

export const mainListItems = (
  <div>
    <ListItem button>
      <NavLink to="/" className="nav-link">
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </NavLink>
    </ListItem>
    <ListItem button>
      <NavLink exact to="/selection" className="nav-link">
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Seleccionado" />
      </NavLink>
    </ListItem>
    <ListItem button>
      <NavLink exact to="/members" className="nav-link">
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Miembros Cohorte" />
      </NavLink>
    </ListItem>
    {/* Comentar */}
    {/* <ListItem button>
      <NavLink exact to="/cohorte" className="nav-link">
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Cohorte 2(actual)" />
      </NavLink>
    </ListItem> */}
    
    <ListItem button>
      <NavLink exact to="/teams" className="nav-link">
        <ListItemIcon>
          <Diversity3Icon />
        </ListItemIcon>
        <ListItemText primary="Equipos" />
      </NavLink>
    </ListItem>

    <ListItem button>
      <NavLink exact to="/teamsselection" className="nav-link">
        <ListItemIcon>
          <Diversity1TwoToneIcon />
        </ListItemIcon>
        <ListItemText primary="Equipos (Seleccionado)" />
      </NavLink>
    </ListItem>

    {/* <ListItem button>
      <NavLink exact to="/fullmembers" className="nav-link">
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Miembros" />
      </NavLink>
    </ListItem>     */}
    {/* <ListItem button>
      <NavLink exact to="/teamleaders" className="nav-link">
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Team Leaders" />
      </NavLink>
    </ListItem> */}
    {/* <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Proyectos" />
    </ListItem> */}
  </div>
);
