import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SaveIcon from "@mui/icons-material/Save";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import { mobile } from "../../responsive";
import "./Edit.css";

const EditProfile = ({ data }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [fullName, setFullName] = useState(data.fullName);
  const [email, setEmail] = useState(data.email);
  const [phone, setPhone] = useState(data.phoneNumber);
  const [address, setAddress] = useState(data.address);
  const [dateOfBirth, setDateOfBirth] = useState(data.dateOfBirth);

  const Button = styled.button`
    background-color: red;
    align-items: center;
    display: flex;
    color: white;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    ${mobile({
      padding: "0px",
      backgroundColor: "transparent",
    })}
  `;
  const handleEditProfile = () => {
    setIsEditing(true);
  };

  const handleSaveProfile = () => {
    setIsEditing(false);
  };

  const Label = styled.div`
    font-size: 24px;

    ${mobile({
      fontSize: "16px",
    })}
  `;
  const Text = styled.div`
    margin-bottom: 10px;
    display: flex;
    align-items: center;
  `;
  const TextB = styled.p`
    ${mobile({ display: "none" })}
  `;
  const Div = styled.div`
    width: 100%;
    position: absolute;
    justify-content: center;
    display: flex;
  `;
  return (
    <form className="form">
      <Div>
        {isEditing ? (
          <Button type="submit" onClick={handleSaveProfile}>
            <SaveIcon />
            <TextB>Save Profile</TextB>
          </Button>
        ) : (
          <Button onClick={handleEditProfile}>
            <DriveFileRenameOutlineIcon />
            <TextB>Edit Profile</TextB>
          </Button>
        )}
      </Div>
      <Label>Full Name</Label>
      {isEditing ? (
        <input
          className="input"
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
      ) : (
        <Text>
          {data.fullName == null ? "Enter your full name" : data.fullName}
        </Text>
      )}
      <Label htmlFor="email">Email</Label>
      {isEditing ? (
        <input
          className="input"
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      ) : (
        <Text>{data.email == null ? "Enter your email" : email}</Text>
      )}
      <Label htmlFor="phone">Phone</Label>
      {isEditing ? (
        <input
          className="input"
          type="tel"
          name="tel"
          placeholder="Phone"
          value={phone}
          required
          onChange={(e) => setPhone(e.target.value)}
        />
      ) : (
        <Text>
          {data.phoneNumber == null
            ? "Enter your phone number"
            : data.phoneNumber}
        </Text>
      )}
      <Label htmlFor="address">Address</Label>
      {isEditing ? (
        <input
          className="input"
          type="text"
          name="address"
          placeholder="Enter address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
      ) : (
        <Text>{data.address == null ? "Enter address" : data.address}</Text>
      )}
      <Label htmlFor="dateOfBirth">Date of Birth</Label>
      {isEditing ? (
        <input
          className="input"
          type="date"
          lang="vi"
          value={dateOfBirth}
          onChange={(e) => setDateOfBirth(e.target.value)}
          required
        />
      ) : (
        <div className="button2">
          <Text>
            {data.dateOfBirth == null
              ? "Select date of Birth"
              : data.dateOfBirth}
          </Text>
        </div>
      )}
    </form>
  );
};
export default EditProfile;
