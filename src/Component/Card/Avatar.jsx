import styled, { keyframes } from "styled-components";
const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const Card = styled.div`
  width: 100px;
  height: 100px;
  background: #07182e;
  position: relative;
  display: flex;
  place-content: center;
  place-items: center;
  overflow: hidden;
  cursor: pointer;
  border-radius: 50%;
`;
const CardBefore = styled.div`
  content: "";
  position: absolute;
  width: 100px;
  height: 130%;
  background-image: linear-gradient(
    180deg,
    rgb(0, 183, 255),
    rgb(255, 48, 255)
  );
  animation: ${rotateAnimation} 3s linear infinite;
  transition: all 0.2s linear;
`;
const CardAfter = styled.div`
  content: "";
  position: absolute;
  background: #07182e;
  inset: 5px;
  border-radius: 50%;
`;
const Avatar = () => {
  return (
    <Card>
      <CardBefore />
      <CardAfter />
    </Card>
  );
};
export default Avatar;
