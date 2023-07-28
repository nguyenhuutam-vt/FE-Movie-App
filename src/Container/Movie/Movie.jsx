import Navbar from "../../Component/Navbar";
import { styled } from "styled-components";
import TopMovie from "../../Component/TopMovie";
import TopTenMovie from "../../Component/TopTenMovie/TopTenMovie";
import GenresMovie2 from "../../Component/TopTenMovie/Genres";
import { actionComedies, horror } from "../../data/fetchData";
import Footer from "../../Component/Footer/Footer";
import { useEffect } from "react";
import axiosInstance from "../../service/axios";
import { useState } from "react";
const StyledMovie = styled.div`
  background-color: #1b0301;
  width: 100%;
  overflow-x: hidden;
  .clear {
    clear: both;
  }
  .container {
    width: 84%;
    margin: 0 auto;
  }
  .clear {
    clear: both;
  }
`;
const Movie = () => {
  const [cast, setCast] = useState([]);
  useEffect(() => {
    axiosInstance
      .get("/movies/top-ten")
      .then((res) => {
        setCast(res.data.data);
      })
      .catch((err) => {});
  }, []);

  const [action, setAction] = useState([]);
  useEffect(() => {
    axiosInstance
      .get("/movies?search=genre%3A1")
      .then((res) => {
        setAction(res.data.data);
      })
      .catch((err) => {});
  }, []);
  console.log("horror", action);

  const [commedy, setCommedy] = useState([]);
  useEffect(() => {
    axiosInstance
      .get("/movies?search=genre%3A2")
      .then((res) => {
        setCommedy(res.data.data);
      })
      .catch((err) => {});
  }, []);
  console.log("horror", commedy);
  return (
    <StyledMovie>
      <Navbar />
      <TopMovie />
      <TopTenMovie cast={cast} />
      <GenresMovie2 title={action} name={"Action"} />
      <GenresMovie2 title={commedy} name={"Commedy"} />
      <div className="clear"></div>
      <Footer />
    </StyledMovie>
  );
};
export default Movie;
