import { styled } from "styled-components";
import FontBerlin from "../../font/BRLNSR.woff";
import { mobile } from "../../responsive";
import dayjs from "dayjs";
const TextView = styled.p`
  @font-face {
    font-family: "Berlin Sans FB";
    src: local("Berlin Sans FB"), local("Berlin Sans FB"),
      url(${FontBerlin}) format("woff2");
    font-style: normal;
  }
  color: #fff;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  margin: unset;
  margin-block-start: unset;
  padding: 10px;
  ${mobile({
    fontSize: "15.5px",
    lineHeight: "14.2px",
    padding: "0px",
    margin: "0px 10px 20px 10px",
  })}
`;
const TitleText = styled.p`
  color: #7b6844;
  font-size: 24px;
  left: 50%;
  /* font-family: Berlin Sans FB; */
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  padding: 10px;
  margin: unset;
  margin-block-start: unset;
  ${mobile({
    fontSize: "15.5px",
    lineHeight: "14.2px",
    margin: "0px 10px 0px 10px",
    padding: "0px",
  })}
  margin-top: 35px;
`;
const Content = styled.div`
  ${mobile({ display: "flex", flexDirection: "row" })}
`;
const ViewRight = styled.div`
  ${mobile({ width: "40%" })}
`;
const ViewLeft = styled.div`
  ${mobile({ width: "60%" })}
`;
const OverViewCard = ({ detail }) => {
  return (
    <container className="cont">
      <h1 className="text">OVERVIEW</h1>
      <Content>
        <ViewLeft>
          <TextView>{detail?.description}</TextView>
        </ViewLeft>
        <ViewRight>
          <TitleText>DIRECTER</TitleText>
          <TextView>{detail?.director_directorName}</TextView>
          <TitleText>WRITER</TitleText>
          <TextView>{detail?.writer_writerName}</TextView>
          <TitleText>RELEASE DATE</TitleText>
          <TextView>
            {dayjs(detail?.releasedDate).format("DD-MM-YYYY ")}
          </TextView>
          <TitleText>RUNNING TIME</TitleText>
          <TextView>{detail?.runningTime}</TextView>
        </ViewRight>
      </Content>
      <TitleText>CAST</TitleText>
      <TextView>
        Angela Bassett, Letitia Wright, Winston Duke, Danai Gurira, Florence
        Kasumba, Lupita Nyong’o, Martin Freeman, Tenoch Huerta, Dominique
        Thorne, Michaela Coel, Mabel Cadena and Alex Livanalli.
      </TextView>
    </container>
  );
};

export default OverViewCard;
