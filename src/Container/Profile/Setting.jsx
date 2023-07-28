import styled from "styled-components";
import { mobile } from "../../responsive";
import NavbarDetail from "../../Component/NavbarDetail";
import Footer from "./../../Component/Footer/Footer";
import "./Setting.css";
const Setting = () => {
  const Container = styled.div`
    background-color: #1b0301;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    ${mobile({
      fontSize: "12px",
    })}
  `;
  const Body = styled.div`
    width: 70%;
    zoom: 1.2;
    padding: 20px;
    margin-top: 100px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: left;
    background-color: black;
    border-radius: 10px;
  `;
  const Content = styled.div`
    width: 100%;
    border-radius: 10px;
    background-color: black;
    border: 1px solid red;
    box-sizing: border-box;
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `;
  const StyledH1 = styled.h1``;
  const StyledH2 = styled.h2`
    margin: unset;
  `;
  const StyledP = styled.p`
    margin: unset;
  `;
  const StyledB = styled.b`
    margin: unset;
  `;
  const StyledS = styled.div`
    margin-bottom: 20px;
    margin-top: 30px;
  `;
  return (
    <Container>
      <NavbarDetail />
      <Body>
        <StyledH1>Setting</StyledH1>
        <StyledH2>Notifications Settings</StyledH2>
        <StyledP>Select notification you want to receive</StyledP>
        <StyledS>
          <StyledB>Security</StyledB>
          <StyledP>Control security alert you will be notified.</StyledP>
        </StyledS>
        <Content>
          <div>
            <StyledB>Unusual activity notifications</StyledB>
            <StyledP>
              Donec in quam sed urna bibendum tincidunt quis mollis mauris.
            </StyledP>
          </div>
          <label className="switch">
            <input type="checkbox" className="input__check" />
            <span className="slider"></span>
          </label>
        </Content>
        <Content>
          <div>
            <StyledB>Unauthorized financial activity</StyledB>
            <StyledP>
              Fusce lacinia elementum eros, sed vulputate urna eleifend nec.
            </StyledP>
          </div>
          <label className="switch">
            <input type="checkbox" className="input__check" />
            <span className="slider"></span>
          </label>
        </Content>
        <StyledS>
          <StyledB>System</StyledB>
          <StyledP>Please enable system alert you will get.</StyledP>
        </StyledS>
        <Content>
          <div>
            <StyledB>Notify me about new features and updates</StyledB>
            <StyledP>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </StyledP>
          </div>
          <label className="switch">
            <input type="checkbox" className="input__check" />
            <span className="slider"></span>
          </label>
        </Content>
        <Content>
          <div>
            <StyledB>Notify me by email for latest news</StyledB>
            <StyledP>
              Nulla et tincidunt sapien. Sed eleifend volutpat elementum.
            </StyledP>
          </div>
          <label className="switch">
            <input type="checkbox" className="input__check" />
            <span className="slider"></span>
          </label>
        </Content>
        <Content>
          <div>
            <StyledB>Notify me about tips on using account</StyledB>
            <StyledP>
              Donec in quam sed urna bibendum tincidunt quis mollis mauris.
            </StyledP>
          </div>
          <label className="switch">
            <input type="checkbox" className="input__check" />
            <span className="slider"></span>
          </label>
        </Content>
      </Body>
      <Footer />
    </Container>
  );
};

export default Setting;
