import React from "react";
import GenresMovie from "./GenresMovie";
import { geners, items } from "../../data/fetchData";
import "../Genres/Genres.css";
const Generess = () => {
  return (
    <div className="sidebar">
      {geners.map((item, index) => (
        <GenresMovie key={index} item={item} />
      ))}
    </div>
  );
};

export default Generess;
