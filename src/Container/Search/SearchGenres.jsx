import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import CircularRate from "../Serie/CircularRate";
const SearchGenres = ({ search }) => {
  console.log("searchh", search);
  const Container = styled.div`
    width: 60%;
    padding: 30px 30px;
    background-color: black;
    margin-left: 50px;
  `;
  return (
    <Container>
      <Link to={`/movie/${search.id}`}>
        <Box
          sx={{
            paddingTop: "160%",
            "&:hover .media-info": { opacity: 1, bottom: 0 },
            "&:hover .media-back-drop, &:hover .media-play-btn": { opacity: 1 },
            color: "primary.contrastText",
            position: "relative",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: "darkgrey",
            backgroundImage: `url(https://image.tmdb.org/t/p/original${search?.backdrop_path})`,
          }}
        >
          <Box
            className="media-back-drop"
            sx={{
              opacity: { xs: 1, md: 0 },
              transition: "all 0.3s ease",
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
              backgroundImage:
                "linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))",
            }}
          />
          <Button
            className="media-play-btn"
            variant="contained"
            color="error"
            startIcon={<PlayArrowIcon />}
            sx={{
              display: { xs: "none", md: "flex" },
              opacity: 0,
              background: "red",
              transition: "all 0.3s ease",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              "& .MuiButton-startIcon": { marginRight: "-4px" },
            }}
          />
          <Box
            className="media-info"
            sx={{
              transition: "all 0.3s ease",
              opacity: { xs: 1, md: 0 },
              position: "absolute",
              bottom: { xs: 0, md: "-20px" },
              width: "100%",
              height: "max-content",
              boxSizing: "border-box",
              padding: { xs: "10px", md: "2rem 1rem" },
            }}
          >
            <Stack spacing={{ xs: 1, md: 2 }}>
              <CircularRate value={search?.vote_average} />

              <Typography>{search?.release_date}</Typography>

              <Typography variant="body1" fontWeight="700">
                {search?.title}
              </Typography>
            </Stack>
          </Box>
        </Box>
      </Link>
    </Container>
  );
};

export default SearchGenres;
