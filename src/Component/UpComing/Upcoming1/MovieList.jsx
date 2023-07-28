import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./movieList.css";
import Cards from "./Card/Cards";
import axiosInstance from "../../../service/axios";
const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const { type } = useParams();

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getData();
  }, [type]);

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        type ? type : "upcoming"
      }?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&page=3`
    )
      .then((res) => res.json())
      .then((data) => setMovieList(data.results));
  };

  const [upComming, setUpComming] = useState([]);
  useEffect(() => {
    axiosInstance
      .get("/movies/upcoming")
      .then((res) => {
        setUpComming(res.data.data);
      })
      .catch((err) => {});
  }, []);
  console.log("upComming", upComming);
  return (
    <div className="movie__list">
      <h2 className="list__title">{(type ? type : "AUGUST").toUpperCase()}</h2>
      <div className="list__cards">
        {upComming?.map((movie) => (
          <Cards movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
