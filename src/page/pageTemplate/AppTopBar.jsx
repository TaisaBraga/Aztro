import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import "./AppTopBar.css";


export default function AppTopBar() {

  return (
    <>
      <div className="AppTopBar">
        <AppBar className="AppBar">
          <Toolbar>
            <IconButton edge="start" aria-label="menu" >
              <MenuIcon className="MenuIcon" />
            </IconButton>
            <Typography className="AppName" style={{fontFamily:"'El Messiri', sans-serif", fontSize:"25px"}}>
              Aztro Signs
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
}
