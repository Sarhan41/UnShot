import React, { useState } from "react";
import { Search } from "@mui/icons-material";
import { IconButton, Input, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);

    if (newSearchTerm) {
      navigate(`/searchTerm/${newSearchTerm}`);
    } else { navigate('/')}
  };

  return (
    <Paper
      elevation={1}
      sx={{
        backgroundColor: "#fff",
        padding: "6px 12px",
        display: "flex",
        alignItems: "center",
        borderRadius: 5,
        height: "fit-content",
      }}
    >
      <Input
        placeholder="Search Images..."
        inputProps={{ style: { color: "#333", fontSize: "14px" } }}
        sx={{ "&::placeholder": { color: "#666" } }}
        value={searchTerm}
        onChange={handleChange}
      />
      <IconButton color="inherit" size="small" sx={{ marginLeft: 8 }}>
        <Search color="#333" />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
