import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  Button,
} from "@mui/material";

const PopUp = ({ open, item, onClose }) => {
  const popupStyle = {
    maxWidth: "600px",
    margin: "0 auto",
  };

  const imageStyle = {
    maxWidth: "100%",
    height: "auto",
    display: "block",
    margin: "0 auto",
  };

  const titleStyle = {
    fontSize: "28px", // Increased font size
    fontWeight: "bold", // Added bold style
    marginBottom: "10px",
  };

  const contentStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const infoStyle = {
    margin: "10px 0",
    fontSize: "18px",
    fontWeight: "bold",
  };

  const buttonStyle = {
    marginTop: "20px",
    marginLeft: "150px",
  };

  return (
    <Dialog open={open} onClose={onClose} style={popupStyle}>
      <DialogTitle style={titleStyle}>{item.title}</DialogTitle>
      <DialogContent>
        <img
          src={item.urls.regular}
          alt={item.alt_description}
          style={imageStyle}
        />
        <div style={contentStyle}>
          <Typography variant="body1" style={infoStyle}>
            Photo by: {item.user.name}
          </Typography>
          <Typography variant="body1" style={infoStyle}>
            Likes: {item.likes}
          </Typography>
        </div>
        <Button
          variant="contained"
          color="primary"
          href={item.links.html}
          target="_blank"
          rel="noopener noreferrer"
          style={buttonStyle}
        >
          View on Unsplash
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default PopUp;
