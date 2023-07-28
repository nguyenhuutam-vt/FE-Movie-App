import React from "react";
import { styled } from "styled-components";
import Navbar from "../../Component/Navbar";
import SearchGenres from "./SearchGenres";
import { Grid } from "@mui/material";

const Search = ({ search }) => {
  const Container = styled.div`
    height: 100%;
    width: 100%;
  `;
  return (
    <Container>
      <Grid container spacing={1} sx={{ marginRight: "-8px!important" }}>
        {search?.map((item, index) => {
          return (
            <Grid item xs={6} sm={4} md={3} key={index}>
              <SearchGenres search={item} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Search;
