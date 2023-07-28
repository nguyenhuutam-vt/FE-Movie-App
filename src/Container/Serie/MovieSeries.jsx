import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import MediaItem from "./MediaItem";

const MovieSeries = ({ feature }) => {
  console.log("featureee", feature);
  return (
    <Grid container spacing={1} sx={{ marginRight: "-8px!important" }}>
      {feature?.map((media, index) => (
        <Grid item xs={6} sm={4} md={3} key={index}>
          <MediaItem media={media} />
        </Grid>
      ))}
    </Grid>
  );
};

export default MovieSeries;
