import React from "react";
import { styled } from "styled-components";
import "../../Component/Trailer/WatchTrailer.css";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import { mobile } from "../../responsive";
import { NavLink, useNavigate } from "react-router-dom";
const Project = ({ item }) => {
  const Container = styled.div`
    width: 70%;
    height: 100%;

    margin: 0 0.5rem;
    padding: 0.5rem;
    border-radius: 5px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 400ms ease-in-out;
    }
    .disc {
      position: absolute;
      right: 0;
      left: 0;
      bottom: -10rem;
      text-align: left;
      padding: 0.5rem;
      background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8));
      transition: all 400ms ease-in-out;
      h1 {
        font-size: 1rem;
      }

      p {
        width: 90%;
        font-size: 0.8rem;
        a {
          margin-left: 0.4rem;
          color: red;
        }
      }
    }

    :hover > img {
      transform: scale(1.3);
    }

    :hover > .disc {
      bottom: 0;
    }
    ${mobile({
      height: "100%",
    })};
  `;
  const Disc = styled.div`
    transform: translate(-150px, 45px);
    position: absolute;

    display: flex;
  `;
  const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 400ms ease-in-out;
  `;

  // const { img, disc } = props.item;
  const navigate = useNavigate();
  return (
    <Container className="project">
      <Img
        src={process.env.REACT_APP_IMG_URL + `${item?.mainPoster}`}
        alt="project"
      />
      <Disc className="middle">
        <NavLink to={`/detail/${item?.id}`}>
          <div>
            <PlayCircleFilledWhiteIcon
              style={{ color: "yellow", fontSize: "4.1875rem" }}
            />
          </div>
          <div style={{ color: "white", marginTop: "25px" }}>WATCH TRAILER</div>
        </NavLink>
      </Disc>
    </Container>
  );
};

export default Project;
