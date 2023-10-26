import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <AppBar
      sx={{
        backgroundColor: "#f5f5f5",
        height: "64px",
        borderRadius: 10,
        width: "90%",
        position: "static",
        mx: "auto",
        mt: "20px",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          variant="h3"
          component="h1"
          ml={4}
          color="black"
          sx={{ fontFamily: "cursive", fontSize: "36px", fontWeight: 600 }}
        >
          <Link to="/" >
          UnShot
          </Link>
        </Typography>
        <SearchBar />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
