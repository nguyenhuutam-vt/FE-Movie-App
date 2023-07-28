import React from "react";
import { Button, Grid } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import MediaItem from "./MediaItem";
import Container from "../Movie/Container";
const PersonMediaGrid = ({ movie }) => {
  const [displayCount, setDisplayCount] = useState(10);
  const [medias, setMedias] = useState(movie);
  const handleLoadMore = () => {
    setDisplayCount((prevDisplayCount) => prevDisplayCount + 10); // Tăng số lượng phần tử hiển thị lên 10
  };
  const displayedData = medias.slice(0, displayCount);
  return (
    <>
      {" "}
      <Container header="medias">
        <Grid container spacing={1} sx={{ marginRight: "-8px!important" }}>
          {displayedData?.map((item, index) => {
            return (
              <Grid item xs={6} sm={4} md={3} key={index}>
                <MediaItem media={item} />
              </Grid>
              // <div>asd</div>
            );
          })}
        </Grid>

        <Button
          style={{ background: "transparent", color: "red" }}
          onClick={handleLoadMore}
        >
          Load More
        </Button>
      </Container>
    </>
  );
};

export default PersonMediaGrid;
