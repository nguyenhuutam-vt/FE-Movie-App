import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../service/axios";
import { styled } from "styled-components";
import Navbar from "../../Component/Navbar";
import Moviee from "./Moviee";
import Footer from "../../Component/Footer/Footer";
import Swal from "sweetalert2";
import { useRef } from "react";
const WatchMovie = () => {
  const { id } = useParams();
  const [watch, setWatch] = useState();
  const [episodes, setEpisodes] = useState();
  const [seasons, setSeasons] = useState();
  const navigate = useNavigate();
  const isSeries = useRef();
  const getSeasons = async () => {
    await axiosInstance
      .get(`/seasons/${id}`)
      .then((res) => {
        setSeasons(res.data);
      })
      .catch((err) => {
        console.log("season error");
      });
  };
  useEffect(() => {
    axiosInstance
      .get(`/watching-movie/${id}`)
      .then((res) => {
        const data = res.data;
        isSeries.current = data.series;
        if (data.series === false) {
          setWatch(data);
        } else {
          getSeasons();
        }
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Please upgrade to Premium to watch this film!",
          footer: '<a href="/">Update to Premium </a>',
        });
      });
  }, []);
  console.log("watch", watch);
  const Container = styled.div`
    height: 100%;
    width: 100%;
    background-color: black;
  `;

  return (
    <Container>
      <Navbar />
      <Moviee watch={watch} seasons={seasons} isSeries={isSeries.current} />
      {/* <h1 className="text-center mb-5" style={{ color: "wheat" }}>
        Trailer
      </h1>

      <iframe
        type="text/html"
        style={{ backgroundColor: "#000", marginLeft: "30px" }}
        width="1000px"
        height="500px"
        src={watch?.video}
        // src={"https://www.themoviedb.org/video/play?key=" + videoTester?.key}
        frameborder="0"
        allowfullscreen
      ></iframe> */}
      <div style={{ marginTop: "325px" }}>
        <Footer />
      </div>
    </Container>
  );
};

export default WatchMovie;
