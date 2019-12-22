import React from "react";

import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HorizontalNavBar from "./HorizontalNavBar";
import TvIcon from "@material-ui/icons/Tv";

import "./navbar.css";

const drawerWidth = 240;

export default class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          style={{
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth
          }}
        >
          <HorizontalNavBar />
        </AppBar>
        <Drawer
          style={{
            width: drawerWidth,
            flexShrink: 0
          }}
          variant="permanent"
          anchor="left"
        >
          <img
            alt="logo"
            src="https://res.cloudinary.com/dsqfchskj/image/upload/v1576945232/Tutor/20160816-Smarter-tutoring-logo-for-WordPress-banner_navy-blue-01-2-705x323_izss7b.png"
            style={{ width: "150px" }}
            className="mx-auto mt-4"
          ></img>

          <List className="mt-5">
            <ListItem button selected>
              <ListItemIcon>
                <TvIcon style={{ color: "#1D4575" }} />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
          </List>
        </Drawer>
        <main
          style={{
            flexGrow: 1,
            // backgroundColor: theme.palette.background.default,
            padding: "24px"
          }}
        ></main>
      </div>
    );
  }
}
