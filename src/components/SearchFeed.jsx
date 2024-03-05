import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import Videos from "./Videos";
import { fetchFromAPI } from "../utils/fetchfromAPI";
//Stack is a container component for arranging elements vertically or horizontally.
//Utilizing sx small screen the flexDirection is column for larger ie medium is larger.
//The Box component is a generic container for grouping other components. It's a fundamental building block when working with Material UI—you can think of it as a <div> with extra built-in features, like access to your app's theme and the sx prop.
//Use typography to present your design and content as clearly and efficiently as possible.

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();
  useEffect(() => {
    const encodedSearchTerm = encodeURIComponent(searchTerm);
    console.log(encodedSearchTerm);
    fetchFromAPI(`search?part=snippet&q=${encodedSearchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);
  console.log(videos + " this is in search feed");

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Search Results for:{" "}
        <span style={{ color: "#F31503" }}>{searchTerm}</span>videos
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
