import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

import "./styles.css";

/**
 * Define TopBar, a React component of Project 4.
 */
function TopBar (props) {
  return (
    <AppBar className="topbar-appBar" position="absolute">
      <Toolbar>
        <Typography variant="h5" color="inherit">
          Bui Huy Hoang
        </Typography>
        <Typography variant="h5" color="inherit">
          
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
