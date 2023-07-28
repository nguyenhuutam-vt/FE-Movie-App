import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { styled } from "styled-components";
import CardList from "./CardList";
import "slick-carousel/slick/slick.css";
import "../Upcoming1/Card/card.css";
import "slick-carousel/slick/slick-theme.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Link, NavLink } from "react-router-dom";

// const refreshPage = () => {
//   window.location.reload(true);
// };
const Recommended = ({ recommend }) => {
  console.log("recommende", recommend);
  const Container = styled.div`
    width: 60%;
  `;
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    // nextArrow: <SampleNextArrow className="sample" />,
    // prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const ListLike = styled.div`
    padding: 0 3rem 3rem 3rem;
  `;
  const ListCards = styled.div`
    display: flex;
  `;
  const ImgCast = styled.img`
    object-fit: cover;
    width: 100%;
  `;
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <Container>
      {" "}
      <h1 className="text-center mb-5" style={{ color: "wheat" }}>
        Maybe you like
      </h1>
      <Slider {...settings}>
        {recommend?.map((item) => {
          return (
            <>
              {/* <ImgCast
                src={`https://image.tmdb.org/t/p/original${item?.backdrop_path}`}
                alt=""
              /> */}
              {isLoading ? (
                <div className="cards">
                  <SkeletonTheme color="#202020" highlightColor="#444">
                    <Skeleton height={300} duration={2} />
                  </SkeletonTheme>
                </div>
              ) : (
                <NavLink
                  to={`/movie/${item?.id}`}
                  style={{ textDecoration: "none", color: "white" }}
                  // onClick={refreshPage}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="cards" style={{ marginLeft: "80px" }}>
                    <img
                      className="cards__img"
                      src={`https://image.tmdb.org/t/p/original${item?.poster_path}`}
                    />
                    <div className="cards__overlay">
                      <div className="card__title">
                        {item ? item?.original_title : ""}
                      </div>
                      <div className="card__runtime">
                        {item ? item?.release_date : ""}
                        <span className="card__rating">
                          {item ? item?.vote_average : ""}
                          <i class="fa-thin fa-star"></i>
                        </span>
                      </div>
                      <div className="card__description">
                        {item ? item?.overview.slice(0, 118) + "..." : ""}
                      </div>
                    </div>
                  </div>
                </NavLink>
              )}
            </>
          );
        })}
      </Slider>
    </Container>
  );
};

export default Recommended;
