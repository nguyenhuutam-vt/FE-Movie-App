import { MenuItem } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import { styled } from "styled-components";
import axiosInstance from "../../service/axios";
import { useParams } from "react-router-dom";
const Moviee = ({ watch, seasons, isSeries }) => {
  const [episodes, setEpisodes] = useState();
  const { id } = useParams();
  const getEpisodes = (seasionId) => {
    axiosInstance
      .get(`/movies-episode/${id}/season/${seasionId}`)
      .then((res) => {
        setEpisodes(res.data.data);
        console.log(res.data.data, "episode");
      })
      .catch((err) => {
        console.log("episode error");
      });
  };
  useEffect(() => {
    if (isSeries && isSeries === true) {
      getEpisodes(seasons[0].id);
    }
  }, []);
  const handleEpisode = (seasonId) => {
    getEpisodes(seasonId);
    console.log(seasonId);
  };
  const Container = styled.div`
    height: 100%;
    width: 100%;
    text-align: center;
    padding: 100px 0px;
  `;
  const Dropdown = styled.div`
    position: relative;
    margin-left: 60px;
    margin-top: 20px;
  `;
  const WorldWide = styled.div`
    width: 140px;
    height: 40px;
    background-color: #171616;
    color: white;
    border-radius: 5px;
    border-color: white;
    border: 1px solid;
  `;
  const WorldDropdown = styled.div`
    position: absolute;

    background: wheat;
    width: 10%;
    height: 0%;
    border-radius: 15px;
    padding-bottom: 80px;
    padding-top: 30px;
    z-index: 1000;
  `;
  const [isActive, setActive] = useState(false);

  return (
    <Container>
      <>
        <iframe
          type="text/html"
          style={{ backgroundColor: "#000", marginLeft: "30px" }}
          width="1000px"
          height="500px"
          src={watch?.video}
          // src={"https://www.themoviedb.org/video/play?key=" + videoTester?.key}
          frameborder="0"
          allowfullscreen
        ></iframe>
      </>

      {isSeries === true && (
        <Dropdown>
          <WorldWide onClick={(e) => setActive(!isActive)}>
            <div className="p">Season</div>
          </WorldWide>
          {isActive && (
            <WorldDropdown>
              {seasons.map((item) => (
                <>
                  <MenuItem
                    onClick={(e) => handleEpisode(item.id)}
                    id={item.id}
                    className="dropdown-item"
                    value={10}
                  >
                    {item.seasonName}
                  </MenuItem>
                </>
              ))}
            </WorldDropdown>
          )}
        </Dropdown>
      )}
    </Container>
  );
};

export default Moviee;
