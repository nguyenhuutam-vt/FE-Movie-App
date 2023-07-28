import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import NavbarDetail from "./../../Component/NavbarDetail";
import Modal from "react-modal";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
// import Avatar2 from "../../Component/Card/Avatar";
import Avatar1 from "../../assets/img/M logo 2.png";
import { mobile } from "../../responsive";
import EditProfile from "./EditProfile";
import Footer from "../../Component/Footer/Footer";
import BillingPlan from "../../Component/BillingPlan/BillingPlan";
const Profile = () => {
  const userInfo = useSelector((prop) => prop.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch.user.getUserInfo();
  }, []);
  const data = userInfo?.userInfo;
  const [Avatar, setAvatar] = useState(Avatar1);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalUp, setModalUp] = useState(false);
  const Container = styled.div`
    color: white;
    background-color: #1b0301;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    ${mobile({
      fontSize: "12px",
    })}
  `;
  const Body = styled.div`
    width: 70%;
    margin-top: 100px;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: black;
    border-radius: 10px;
  `;
  const SAvatar = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: #1b0301 solid 5px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    cursor: pointer;
    background-color: #1b0301;
    ${mobile({
      width: "50px",
      height: "50px",
    })}
    img {
      ${mobile({
        width: "50px",
        height: "50px",
      })}
    }
  `;
  const Name = styled.p`
    text-align: center;
    color: white;
    margin-left: 10px;
    font-size: 32px;
    ${mobile({ fontSize: "12px" })}
  `;
  const Button = styled.button`
    padding: 10px 20px;
    background-color: red;
    color: white;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    ${mobile({
      padding: "0px",
    })}
  `;
  const handleAvatarClick = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };
  const OpenModalUp = () => {
    setModalUp(true);
  };
  const closeModalUp = () => {
    setModalUp(false);
  };
  const handleImageSelect = (event) => {
    const newAvatar = URL.createObjectURL(event.target.files[0]);
    setAvatar(newAvatar);
    setModalIsOpen(false);
  };
  const InfoUser = styled.div`
    display: flex;
    align-items: center;
  `;
  const Content = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    background-color: #1b0301;
    border-radius: 10px;
    padding: 20px;
    margin-top: 10px;
    ${mobile({
      padding: "10px",
      width: "90%",
    })}
  `;
  const Info = styled.div`
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `;
  console.log("data", data);
  return (
    <Container onDoubleClick={closeModalUp}>
      {data && (
        <>
          <NavbarDetail ImgLogin={data.avatar == null ? Avatar : data.avatar} />
          <Body>
            <Info>
              <InfoUser>
                <SAvatar onClick={handleAvatarClick}>
                  <img
                    src={data.avatar == null ? Avatar : data.avatar}
                    alt=""
                  />
                </SAvatar>
                <Name>{data.username}</Name>
              </InfoUser>
              {data?.billingPlan_id === 1 ? (
                <button className="button" onClick={OpenModalUp}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 24">
                    <path d="m18 0 8 12 10-8-4 20H4L0 4l10 8 8-12z"></path>
                  </svg>
                  Unlock Premium
                </button>
              ) : (
                <div></div>
              )}
              {/* <button className="button" onClick={OpenModalUp}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 24">
                  <path d="m18 0 8 12 10-8-4 20H4L0 4l10 8 8-12z"></path>
                </svg>
                Unlock Premium
              </button> */}
            </Info>
            <Content onClick={closeModalUp}>
              <EditProfile data={data} />
              <Button>Reset Password</Button>
            </Content>
            {modalUp === false ? modalIsOpen : <BillingPlan closeModalUp />}
          </Body>
          <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
            <h2>Choose a new photo</h2>
            <input type="file" onChange={handleImageSelect} />
            <button onClick={closeModal}>Close</button>
          </Modal>
          <Footer />
        </>
      )}
    </Container>
  );
};
export default Profile;
