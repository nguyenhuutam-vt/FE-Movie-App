import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { fecthChannel } from "./ApiSearch";
import { Grid } from "@mui/material";
import SearchGenres from "./SearchGenres";
import { styled } from "styled-components";
import Search from "./Search";
import Navbar from "../../Component/Navbar";

const SearchMovie = () => {
  const { searchTerm } = useParams();

  const [search, setSearch] = useState([]);
  useEffect(() => {
    setSearch([]);
    fecthChannel(`${searchTerm}`).then((data) => {
      setSearch(data.results);
    });
  }, []);
  const Container = styled.div`
    height: 100%;
    width: 100%;
    background: black;
  `;
  console.log("search", search);
  return (
    // <Grid container spacing={1} sx={{ marginRight: "-8px!important" }}>
    //   {search.map((item, index) => {
    //     return (
    //       <Grid item xs={6} sm={4} md={3} key={index}>
    //         <SearchGenres search={search} />
    //       </Grid>
    //     );
    //   })}
    // </Grid>\
    <Container>
      <Navbar />
      <Search search={search} />
    </Container>
  );
};

export default SearchMovie;
