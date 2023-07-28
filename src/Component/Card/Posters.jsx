import { styled } from "styled-components";
import IPosters1 from "../../assets/img/IPoster1.png";
import IPosters2 from "../../assets/img/IPoster2.png";
import IPosters3 from "../../assets/img/IPoster3.png";
import IPosters4 from "../../assets/img/IPoster4.png";
import IPosters5 from "../../assets/img/IPoster5.png";
import IPosters6 from "../../assets/img/transformer.avif";
import { mobile } from "../../responsive";
const Posters = ({ detail: { posters } }) => {
  console.log("poster", posters);
  const GridPoster = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 17px;
    padding: 10px;
  `;
  return (
    <container>
      <h1 className="text">POSTERS</h1>
      {posters?.map((item) => {
        return (
          <GridPoster>
            <img
              className="posters"
              src={process.env.REACT_APP_IMG_URL + `${item?.posterName}`}
              alt=""
            />
            {/* <img className="posters" src={IPosters2} alt="" />
      <img className="posters" src={IPosters3} alt="" />
      <img className="posters" src={IPosters4} alt="" />
      <img className="posters" src={IPosters5} alt="" />
      <img className="posters" src={IPosters6} alt="" /> */}
          </GridPoster>
        );
      })}
    </container>
  );
};

export default Posters;
