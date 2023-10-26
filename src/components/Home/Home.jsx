import React, { useEffect, useState } from "react";
import { fetchFromUnsplash } from "../../utils/fetchFromApi";
import { useParams } from "react-router-dom";
import Loading from "../Loading";
import { Typography, Grid } from "@mui/material";
import PhotoCard from "./PhotoCard";
import PopUp from "./PopUp";

const Home = () => {
  const { searchTerm } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isPopup, setIsPopup] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleOpen = (item) => {
    setIsPopup(true);
    setSelectedItem(item);
  };
  const handleClose = () => {
    setIsPopup(false);
    setSelectedItem(null);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const query = searchTerm ? searchTerm : "animals";
        const searchData = await fetchFromUnsplash(
          `search/photos?query=${query}`
        );
        setLoading(false);
        setData(searchData.results);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(
          "An error occurred while fetching data. Please try again later."
        );
        setLoading(false);
      }
    };

    fetchData();
  }, [searchTerm]);

  return (
    <div style={{ width: "90%", margin: "auto", marginTop: "20px" }}>
      {loading ? <Loading /> : null}
      {error ? (
        <Typography
          variant="h6"
          style={{ marginTop: "20px", textAlign: "center", color: "red" }}
        >
          {error}
        </Typography>
      ) : (
        <Grid container spacing={2}>
          {data.map((item, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={index}
              style={{ cursor: "pointer" }}
              onClick={() => handleOpen(item)}
            >
              <PhotoCard data={item} />
            </Grid>
          ))}
        </Grid>
      )}

      {isPopup && selectedItem && (
        <div>
          <PopUp
            open={isPopup}
            item={selectedItem}
            onClose={handleClose}
            style={{ display: "block" }}
          />
        </div>
      )}
    </div>
  );
};

export default Home;
