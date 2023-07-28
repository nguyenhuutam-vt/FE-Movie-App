import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import "./card.css";
import dayjs from "dayjs";
const Cards = ({ movie }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="cards">
          <SkeletonTheme color="#202020" highlightColor="#444">
            <Skeleton height={300} duration={2} />
          </SkeletonTheme>
        </div>
      ) : (
        <Link
          to={`/detail/${movie.id}`}
          style={{ textDecoration: "none", color: "white" }}
        >
          <div className="cards">
            <img
              className="cards__img"
              src={process.env.REACT_APP_IMG_URL + `${movie?.mainPoster}`}
            />
            <div className="cards__overlay">
              <div className="card__title">{movie ? movie.movieName : ""}</div>
              <div className="card__runtime">
                {dayjs(movie?.releasedDate).format("DD-MM-YYYY ")}
                {/* {movie ? movie.releasedDate : ""} */}
                {/* <span className="card__rating">
                  {movie ? movie.vote_average : ""}
                  <i class="fa-thin fa-star"></i>
                </span> */}
              </div>
              <div className="card__description">{movie?.description}</div>
            </div>
          </div>
          <div style={{ width: "65%" }}>{movie?.movieName}</div>
        </Link>
      )}
    </>
  );
};

export default Cards;
