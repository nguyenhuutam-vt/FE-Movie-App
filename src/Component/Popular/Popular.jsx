import React, { useEffect } from "react";
import { styled } from "styled-components";
import wakan from "../../assets/img/wakanda forever 1.png";
import { popular } from "../../data/fetchData";
import { mobile } from "../../responsive";
import axiosInstance from "../../service/axios";
const Rate = styled.div`
  width: 40px;
  height: 25px;
  border-radius: 20px;
  background-color: ${(props) => props.fill};
  position: absolute;
  /* bottom: 1080px;
left: 155px; */
  text-align: center;
  transform: translate(80px, -320px);
  color: ${(props) => props.fills};
  ${mobile({
    padding: "0px 0px",
    width: "25px",
    height: "12px",

    transform: "translate(22px, -110px)",
    position: "absolute",
    fontSize: "xx-small",
  })};
`;

const RateFill = ({ fill, fills, ...rest }) => {
  return <Rate fill={fill} fills={fills} {...rest}></Rate>;
};
const Popular = ({ movieGenres }) => {
  const Container = styled.div`
    height: 100%;
    width: 100%;
    ${mobile({
      height: "100%",
      transform: " translate(0px, -210px)",
    })};
  `;
  const Wrapper = styled.div`
    width: 100%;
    height: 32px;
    display: flex;
    color: white;

    justify-content: space-between;
    ${mobile({
      height: "100%",
      fontSize: " xx-small",
      justifyContent: "space-around",
    })};
  `;
  const PopularRight = styled.div`
    padding: 0px 70px;
    ${mobile({
      padding: "0px 0px",
      marginRight: " 80px",
    })};
  `;
  const SeeAll = styled.div`
    padding: 0px 190px;
    cursor: pointer;
    ${mobile({
      padding: "0px 0px",
    })};
  `;
  const Movie = styled.div`
    padding: 30px 70px;
    /* position: relative; */
    /* position: relative;
    width: 210px; */
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: 100px;
    ${mobile({
      padding: "0px 10px",
      rowGap: "20px",
      columnGap: "10px",
      marginTop: "35px",
    })};
  `;
  const Title = styled.div`
    width: 230px;
    color: white;
    font-size: 24px;
    ${mobile({
      padding: "0px 0px",
      color: "white",
      fontSize: "8px",
      width: "100%",
    })};
  `;
  const Des = styled.div`
    color: #d1d0d0;
    width: 100%;
    height: 16px;
    font-size: 12px;
    ${mobile({
      padding: "0px 0px",

      height: "0px",
      fontSize: "5px",
    })};
  `;
  const Img = styled.div`
    ${mobile({ padding: "0px 0px" })};
  `;
  const Wrapperr = styled.div`
    ${mobile({
      padding: "0px 0px",
    })};
  `;
  const ImgWakan = styled.img`
    width: 45%;
    position: relative;
    ${mobile({
      padding: "0px 0px",
      width: "100%",
    })};
  `;
  // const [movieGenres, setMovieGenres] = useState();
  // const SeeAll1 = () =>{
  //   useEffect(() => {
  //     axiosInstance
  //       .get("/movies")
  //       .then((res) => {
  //         setMovieGenres(res.data.data);
  //       })
  //       .catch((error) => {});
  //   }, []);
  // }
  // const handleSeeAll = () => {
  //   SeeAll1()
  // };

  return (
    <Container>
      <Wrapper>
        <PopularRight>POPULAR RIGHT NOW</PopularRight>
        <SeeAll>SEE ALL</SeeAll>
      </Wrapper>
      <Movie>
        {movieGenres?.map((item) => {
          return (
            <Wrapperr>
              {" "}
              <Img>
                {" "}
                <ImgWakan
                  src={process.env.REACT_APP_IMG_URL + `${item?.mainPoster}`}
                  alt=""
                />
              </Img>
              {/* <RateFill fill={item.fill} fills={item.color}>
                {item.rate}
              </RateFill>
              <Title>{item.title}</Title>
              <Des>{item.des}</Des> */}
            </Wrapperr>
          );
        })}
      </Movie>
    </Container>
  );
};

export default Popular;
