import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import "../Genres/Genres.css";
import menu from "../../assets/img/MENU 1.png";
import filter from "../../assets/img/filter-icon-svg-3 1.png";
import { mobile } from "../../responsive";
import axiosInstance from "../../service/axios";
import Popular from "../Popular/Popular";
import { Link } from "react-router-dom";
const Genres = ({ type }) => {
  const [isActive, setActive] = useState(false);

  const [movieGenres, setMovieGenres] = useState();

  useEffect(() => {
    axiosInstance
      .get("/movies")
      .then((res) => {
        setMovieGenres(res.data.data);
      })
      .catch((error) => {});
  }, []);
  const handleClickGenre = (id) => {
    axiosInstance
      .get(`/movies?search=genre%3A${id}`)
      .then((res) => {
        setMovieGenres(res.data.data);
      })
      .catch((err) => {});
  };

  const handleClickSeeAll = () => {
    axiosInstance
      .get("/movies")
      .then((res) => {
        setMovieGenres(res.data.data);
      })
      .catch((error) => {});
  };
  const Container = styled.div`
    height: 100%;
    width: 100%;
    color: white;
    ${mobile({
      display: "none",
    })};
  `;
  const [genres, setGenres] = useState([]);
  useEffect(() => {
    axiosInstance
      .get("/genres")
      .then((res) => {
        setGenres(res.data);
      })
      .catch((err) => {});
  }, []);

  const [country, setCountry] = useState([]);
  useEffect(() => {
    axiosInstance
      .get("/country")
      .then((res) => {
        setCountry(res.data.data);
      })
      .catch((err) => {});
  }, []);

  console.log("movieGenres", movieGenres);
  const Wrapper = styled.div`
    width: 100%;
    height: 32px;
    display: flex;
    color: white;

    justify-content: space-between;
    ${mobile({
      height: "100%",
      fontSize: " xx-small",
      justifyContent: "space-around",
    })};
  `;
  const PopularRight = styled.div`
    padding: 0px 70px;
    ${mobile({
      padding: "0px 0px",
      marginRight: " 80px",
    })};
  `;
  const SeeAll = styled.div`
    padding: 0px 190px;
    cursor: pointer;
    ${mobile({
      padding: "0px 0px",
    })};
  `;
  const Movie = styled.div`
    padding: 30px 70px;
    /* position: relative; */
    /* position: relative;
    width: 210px; */
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: 100px;
    ${mobile({
      padding: "0px 10px",
      rowGap: "20px",
      columnGap: "10px",
      marginTop: "35px",
    })};
  `;
  const Wrapperr = styled.div`
    ${mobile({
      padding: "0px 0px",
    })};
  `;
  const ImgWakan = styled.img`
    width: 45%;
    position: relative;
    ${mobile({
      padding: "0px 0px",
      width: "100%",
    })};
  `;
  const Img = styled.div`
    ${mobile({ padding: "0px 0px" })};
  `;
  return (
    <Container>
      <div className="dropdown">
        <div className="head" style={{ display: "flex" }}>
          <div className="dropdown-btn" onClick={(e) => setActive(!isActive)}>
            <div className="p">Genres</div>
          </div>
          <div className="line"></div>
          <div style={{ display: "flex" }}>
            <div style={{ marginRight: "10px" }}>
              <img src={menu} alt="" />
            </div>
            <div>
              <img src={filter} alt="" />
            </div>
          </div>
        </div>
        {isActive && (
          <div className="dropdown-content">
            {genres?.map((item) => {
              return (
                <div>
                  <div
                    className="dropdown-item"
                    onClick={(e) => handleClickGenre(item.id)}
                    style={{ backgroundColor: "" }}
                  >
                    {item?.genresName}
                  </div>
                </div>
              );
            })}
            <select name="genre" id="genre" className="select">
              {country?.map((countrys) => {
                return (
                  <option value="adventure">{countrys?.countryName}</option>
                );
              })}
            </select>
            <select name="genre" id="genre" className="selectt">
              <option>YEAR</option>
              <option value="adventure">2023</option>
              <option value="comedy">2022</option>
              <option value="crime">2021</option>
            </select>
          </div>
        )}
      </div>
      <Container>
        <Wrapper>
          <PopularRight>POPULAR RIGHT NOW</PopularRight>
          <SeeAll onClick={handleClickSeeAll}>SEE ALL</SeeAll>
        </Wrapper>
        <Movie>
          {movieGenres?.map((item) => {
            return (
              <Link to={`/detail/${item?.id}`}>
                <Wrapperr>
                  {" "}
                  <ImgWakan
                    src={process.env.REACT_APP_IMG_URL + `${item?.mainPoster}`}
                    alt=""
                  />
                </Wrapperr>
              </Link>
            );
          })}
        </Movie>
      </Container>
    </Container>
  );
};

export default Genres;
