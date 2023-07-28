import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import "./MovieUpComing.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { styled } from "styled-components";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Container from "./Container";
import MediaVideosSlide from "./MediaVideosSlide";
import Cast from "./Cast";
import MovieTeaster from "./MovieTeaster";
import Recommended from "./Recommended";
import { LoadingButton } from "@mui/lab";
import Comment from "./Comment";

const TrailerItem = styled.div`
  margin-top: -100px;
`;
const MovieUpComing = () => {
  const [currentMovieDetail, setMovie] = useState();
  const [videoTester, setVideoTester] = useState(null);
  const [imgTeaster, setImgTeaster] = useState(null);
  const [recommend, setRecommend] = useState(null);
  const [comment, setComment] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);
  const [onRequest, setOnRequest] = useState(false);
  //   useEffect(() => {
  //     const height = (iframeRef.current.offsetWidth * 9) / 16 + "px";
  //     iframeRef.current.setAttribute("height", height);
  //   }, []);

  const { id } = useParams();
  console.log("videoTester", videoTester);
  console.log("currentMovieDetail", currentMovieDetail);
  console.log("getDataImg", imgTeaster);
  console.log("recommend", recommend);
  console.log("comment", comment);
  useEffect(() => {
    getData("");
    getDataa();
    getDataImg("");
    getRecommend("");
    getComment("");
    window.scrollTo(0, 0);
  }, []);

  // const onFavoriteClick = async () => {
  //   if (!user) return dispatch(setAuthModalOpen(true));

  //   if (onRequest) return;

  //   if (isFavorite) {
  //     onRemoveFavorite();
  //     return;
  //   }

  //   setOnRequest(true);

  //   const body = {
  //     mediaId: media.id,
  //     mediaTitle: media.title || media.name,
  //     mediaType: mediaType,
  //     mediaPoster: media.poster_path,
  //     mediaRate: media.vote_average,
  //   };

  //   const { response, err } = await favoriteApi.add(body);

  //   setOnRequest(false);

  //   if (err) toast.error(err.message);
  //   if (response) {
  //     dispatch(addFavorite(response));
  //     setIsFavorite(true);
  //     toast.success("Add favorite success");
  //   }
  // };
  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=394a932c98b41cda99cc5b67d380cc7a&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setVideoTester(data.results));
  };
  const getDataImg = () => {
    fetch(
      `
      https://api.themoviedb.org/3/movie/${id}/credits?api_key=394a932c98b41cda99cc5b67d380cc7a&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setImgTeaster(data.cast));
  };
  const getDataa = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=394a932c98b41cda99cc5b67d380cc7a&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setMovie(data));
  };
  const getComment = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=394a932c98b41cda99cc5b67d380cc7a&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setComment(data.results));
  };

  const getRecommend = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=394a932c98b41cda99cc5b67d380cc7a&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setRecommend(data.results));
  };
  return (
    <div className="movie">
      <div className="movie__intro">
        <img
          className="movie__backdrop"
          src={`https://image.tmdb.org/t/p/original${
            currentMovieDetail ? currentMovieDetail.backdrop_path : ""
          }`}
        />
      </div>
      <div className="movie__detail">
        <div className="movie__detailLeft">
          <div className="movie__posterBox">
            <img
              className="movie__poster"
              src={`https://image.tmdb.org/t/p/original${
                currentMovieDetail ? currentMovieDetail.poster_path : ""
              }`}
            />
          </div>
        </div>
        <div className="movie__detailRight">
          <div className="movie__detailRightTop">
            <div className="movie__name">
              {currentMovieDetail ? currentMovieDetail.original_title : ""}
            </div>
            <div className="movie__tagline">
              {currentMovieDetail ? currentMovieDetail.tagline : ""}
            </div>
            <div className="movie__rating">
              {currentMovieDetail ? currentMovieDetail.vote_average : ""}{" "}
              <i class="fas fa-star" />
              <span className="movie__voteCount">
                {currentMovieDetail
                  ? "(" + currentMovieDetail.vote_count + ") votes"
                  : ""}
              </span>
            </div>
            <div className="movie__runtime">
              {currentMovieDetail ? currentMovieDetail.runtime + " mins" : ""}
            </div>
            <div className="movie__releaseDate">
              {currentMovieDetail
                ? "Release date: " + currentMovieDetail.release_date
                : ""}
            </div>
            <div className="movie__genres">
              {currentMovieDetail && currentMovieDetail.genres
                ? currentMovieDetail.genres.map((genre) => (
                    <>
                      <span className="movie__genre" id={genre.id}>
                        {genre.name}
                      </span>
                    </>
                  ))
                : ""}
              <LoadingButton
                variant="text"
                sx={{
                  width: "max-content",
                  "& .MuiButon-starIcon": { marginRight: "0" },
                }}
                style={{ color: "red" }}
                size="large"
                startIcon={
                  isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />
                }
                loadingPosition="start"
                loading={onRequest}
                // onClick={onFavoriteClick}
              />
            </div>
          </div>
          <div className="movie__detailRightBottom">
            <div className="synopsisText">Synopsis</div>
            <div>{currentMovieDetail ? currentMovieDetail.overview : ""}</div>
          </div>
        </div>
      </div>

      {/* ========= */}
      {/* <div className="trailerSize">
        <iframe
          class="responsive-iframe"
          src={"https://www.themoviedb.org/video/play?key=" + videoTester?.key}
          width="500px"
          height="500px"
        />
      </div> */}

      <MovieTeaster videoTester={videoTester} />

      {/* <iframe
        type="text/html"
        style={{ backgroundColor: "#000" }}
        width="1000px"
        height="500px"
        src={
          "//www.youtube.com/embed/" +
          videoTester?.key +
          "?autoplay=1&origin=https%3A%2F%2Fwww.themoviedb.org&hl=en&modestbranding=1&fs=1&autohide=1"
        }
        // src={"https://www.themoviedb.org/video/play?key=" + videoTester?.key}
        frameborder="0"
        allowfullscreen
      ></iframe> */}

      <Cast imgTeaster={imgTeaster} />
      <Comment comment={comment} />
      <Recommended recommend={recommend} />

      {/* <div ref={videoRef} style={{ paddingTop: "2rem" }}>
        <Container header="Videos">
          <MediaVideosSlide videos={videoTester} />
        </Container>
      </div> */}

      {/* ========= */}
      {/* <div className="movie__links">
        <div className="movie__heading">Useful Links</div>
        {currentMovieDetail && currentMovieDetail.homepage && (
          <a
            href={currentMovieDetail.homepage}
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <p>
              <span className="movie__homeButton movie__Button">
                Homepage <i className="newTab fas fa-external-link-alt"></i>
              </span>
            </p>
          </a>
        )}
        {currentMovieDetail && currentMovieDetail.imdb_id && (
          <a
            href={"https://www.imdb.com/title/" + currentMovieDetail.imdb_id}
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <p>
              <span className="movie__imdbButton movie__Button">
                IMDb<i className="newTab fas fa-external-link-alt"></i>
              </span>
            </p>
          </a>
        )}
      </div> */}

      <div className="movie__production">
        {currentMovieDetail &&
          currentMovieDetail.production_companies &&
          currentMovieDetail.production_companies.map((company) => (
            <>
              {company.logo_path && (
                <div className="productionCompanyImage">
                  <img
                    className="movie__productionComapany"
                    src={
                      "https://image.tmdb.org/t/p/original" + company.logo_path
                    }
                  />
                  <span style={{ fontSize: "xx-large" }}>{company.name}</span>
                </div>
              )}
            </>
          ))}
      </div>
    </div>
  );
};

export default MovieUpComing;
