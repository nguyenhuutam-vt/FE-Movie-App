import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { mobile } from "../responsive";
import NavbarDetail from "../Component/NavbarDetail";
import Banner from "../assets/img/Banner_Detail_Page.png";
import CardVideo from "../Component/Card/CardVideo";
import PostersCard from "../Component/Card/Posters";
import OverViewCard from "../Component/Card/OverviewCard";
import Footer from "../Component/Footer/Footer";
import { Link, useParams } from "react-router-dom";
import axiosInstance from "../service/axios";
import { Button } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { memo } from "react";
const Detail = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState([]);
  useEffect(() => {
    axiosInstance
      .get(`/movies/details/${id}`)
      .then((res) => {
        setDetail(res.data);
      })
      .catch((err) => {});
  }, []);

  const [trailer, setTrailer] = useState([]);
  useEffect(() => {
    axiosInstance
      .get(`/movies/details/${id}`)
      .then((res) => {
        setTrailer(res.data.movieTrailers[0]);
      })
      .catch((err) => {});
  }, []);
  console.log("trailer", trailer);
  console.log("detail", detail);
  console.log("id", id);
  const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: black;
    /* font-family: Berlin Sans FB; */
  `;
  const BannerD = styled.header`
    display: flex;
    /* justify-content: space-between; */
    width: 100%;
    text-align: center;
    height: 50cqmax;
    background-size: contain;
    /* background-image: url({} ); */
    background-repeat: no-repeat;
    ${mobile({
      height: "220px",
    })}/* background-position: fixed; */
  `;
  const Content = styled.div`
    flex-direction: row;
    display: flex;
    justify-content: space-around;
    position: relative;
    ${mobile({
      flexDirection: "column",
      fontSize: "8px",
      padding: "27px",
    })}
  `;
  const DFooter = styled.footer`
    flex-direction: row;
    display: flex;
    justify-content: space-between;
    margin-top: 100px;
    ${mobile({
      flexDirection: "column",
      width: "100%",
      marginTop: "50px",
    })}
  `;
  const Img = styled.img`
    background-size: cover;
    width: 100%;
    height: auto;
  `;
  const OverView = styled.footer`
    width: 50%;
    margin-left: 37px;
    ${mobile({
      width: "100%",
      marginLeft: "0",
    })}
  `;
  const Posters = styled.footer`
    width: 50%;
    text-align: center;
    align-items: center;
    ${mobile({
      width: "100%",
    })}
  `;
  const handleWatch = () => {
    axiosInstance({
      method: "post",
      url: `/watchlist`,
      params: {
        movieId: id,
      },
    })
      .then((res) => {
        toast.success("Add Success");
      })
      .catch((err) => {});
  };
  return (
    <Container>
      <ToastContainer />
      <NavbarDetail />
      {/* <BannerD>
        <img
          src={process.env.REACT_APP_IMG_URL + `${detail?.mainPoster}`}
          alt=""
        />
      </BannerD> */}
      <div style={{ marginTop: "70px", textAlign: "center" }}>
        <Img src={process.env.REACT_APP_IMG_URL + `${detail?.banner}`} alt="" />
      </div>

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Link to={`/watch/${id}`}>
          <Button
            variant="contained"
            sx={{ width: "max-content", background: "red" }}
            size="large"
            startIcon={<PlayArrowIcon />}
          >
            watch now
          </Button>
        </Link>
        <Button
          variant="contained"
          sx={{ width: "max-content", background: "red" }}
          size="large"
          startIcon={<PlayArrowIcon />}
          onClick={handleWatch}
        >
          Add Watch List
        </Button>
      </div>

      <Content>
        <CardVideo
          Title={"WATCH TRAILER"}
          Video={trailer?.trailerName}
        ></CardVideo>
        <CardVideo
          Title={"WATCH MOVIE NOW"}
          Video={trailer?.trailerName}
        ></CardVideo>
      </Content>
      <DFooter>
        <OverView>
          <OverViewCard detail={detail} />
        </OverView>
        <Posters>
          <PostersCard detail={detail} />
        </Posters>
      </DFooter>
      <Footer />
    </Container>
  );
};
export default memo(Detail);
