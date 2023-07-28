import { styled } from "styled-components";
import Navbar from "../../Component/Navbar";

import watchingPhone from "../../assets/img/watchingPhone.png";
import watchingLap from "../../assets/img/watchingLap.png";
import bgTop from "../../assets/img/1.png";

const StyledAbout = styled.div`
  a {
    text-decoration: none;
  }

  /* Sections */
  .section {
    height: 100vh;
    min-height: 500px;
    position: relative;
  }

  /* Containers */
  .content-container {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 2;
    clip: rect(auto, auto, auto, auto);
    pointer-events: none;
  }
  .content-inner {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 100vh;
    padding: 0;
    z-index: 99;
    transform: translateZ(0);
    backface-visibility: hidden;
    will-change: transform;
    perspective: 1000;
    pointer-events: all;
  }
  .content-center {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .content-center p {
    width: 50%;
  }

  .content-left {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Aesthetics */
  .top-section {
    background: url(${bgTop});
    background-color: #1b0301;
  }
  .center-section {
    background: url(${watchingPhone}) left / 50% 100% no-repeat,
      url(${watchingLap}) right / 50% 100% no-repeat;
  }
  .bottom-section {
    background: #1b0301;
  }
  .section h1 {
    font-size: 200px;
    font-weight: 900;
    text-transform: uppercase;
    text-align: center;
  }
  .content2 h1 {
    font-size: 100px;
  }
  .content3 h1 {
    font-size: 100px;
    padding-left: 2em;
  }
  .content3 p {
    width: 80%;
    font-size: 26px;
  }
  .section p,
  .section a {
    font-weight: 700;
    letter-spacing: 7px;
    text-transform: uppercase;
    text-align: center;
    font-size: 24px;
  }

  .content-theme-dark h1 {
    color: #ffffff;
    text-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
  }
  .content-theme-dark p,
  .content-theme-dark a {
    color: #ffffff;
  }
  .content-theme-light h1 {
    color: #ffffff;
    text-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
  }
  .content-theme-light p,
  .content-theme-light a {
    color: #ffffff;
    text-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
  }
`;
const About = () => {
  return (
    <StyledAbout>
      <Navbar></Navbar>
      <div className="section top-section">
        <div class="content-container content-theme-dark">
          <div class="content-inner">
            <div class="content-center">
              <h1>M Cinema</h1>
              <p>Unlimited movies, TV shows, and more</p>
            </div>
          </div>
        </div>
      </div>

      <div class="section center-section">
        <div class="content-container content-theme-light">
          <div class="content-inner">
            <div class="content-center content2">
              <h1>Watch anywhere</h1>
              <p>
                Stream unlimited movies and TV shows on your phone, tablet,
                laptop, and TV.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="section bottom-section">
        <div class="content-container content-theme-light">
          <div class="content-inner">
            <div class="content-left content3">
              <h1>Pricing</h1>
              <p>Plan is 260,000 ₫ a month.</p>
            </div>
          </div>
        </div>
      </div>
    </StyledAbout>
  );
};

export default About;
