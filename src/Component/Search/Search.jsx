import React, { useState } from "react";
import "../../Component/Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import { Paper } from "@mui/material";
import { Input } from "@mui/joy";
const Search = () => {
  const [searchTerm, setSearchTerm] = useState();
  console.log("searchTerm", searchTerm);
  const navigate = useNavigate();

  const onhandleSubmit = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (searchTerm) {
        const encoded = encodeURIComponent(searchTerm);
        navigate(`/searchMovie/${encoded}`);
        window.location.reload(false);
      }
    }
  };

  return (
    <div class="search-box">
      <button class="btn-search">
        <SearchIcon />
      </button>
      <input
        placeholder="Enter Name Movie Search"
        value={searchTerm}
        class="input-search"
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ fontSize: "x-large", fontFamily: "initial" }}
        onKeyDown={onhandleSubmit}
      />{" "}
    </div>
  );
};

export default Search;
