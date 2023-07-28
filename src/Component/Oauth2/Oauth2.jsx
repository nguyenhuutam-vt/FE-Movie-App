import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
const Oauth2 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams, setSeachParams] = useSearchParams();
  useEffect(() => {
    dispatch.auth.setAuth(true);
    localStorage.setItem("access_token", searchParams.get("access_token"));
    navigate("/");
  }, []);
  return <></>;
};

export default Oauth2;
