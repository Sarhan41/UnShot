import axios from "axios";

const BASE_URL = "https://api.unsplash.com";
const ACCESS_KEY = import.meta.env.VITE_REACT_APP_ACCESS_KEY;

const options = {
  params: {
    per_page: 20,
  },
  headers: {
    Authorization: `Client-ID ${ACCESS_KEY}`,
  },
};

export const fetchFromUnsplash = async (url) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    if (data.errors) {
      throw new Error(data.errors[0]);
    }
    return data;
  } catch (error) {
    console.error("Error in fetchFromUnsplash:", error);
    throw new Error("An error occurred while fetching data from the API.");
  }
};

