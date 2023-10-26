import React from "react";
import { Card, CardContent, CardMedia, Typography, Link } from "@mui/material";

const PhotoCard = ({ data }) => {
  const { urls, user, likes, alt_description, links } = data;

  return (
    <Card style={{
      display: "flex",
      flexDirection: "column",
      marginBottom: "44px",
    }}>
      <div
        style={{
          width: "100%",
          paddingBottom: "75%", // 4:3 aspect ratio
          position: "relative",
        }}
      >
        <CardMedia
          component="img"
          alt={alt_description}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          src={urls.regular}
          title={user.username}
        />
      </div>
      <CardContent>
        <Typography variant="subtitle1" color="textSecondary" style={{ marginBottom: "8px" }}>
          Photo by {user.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" style={{ marginBottom: "8px" }}>
          Likes: {likes}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          <Link href={links.html} target="_blank" rel="noopener noreferrer">
            View on Unsplash
          </Link>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PhotoCard;
