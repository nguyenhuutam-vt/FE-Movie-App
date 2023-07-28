import { styled } from "styled-components";

import { topMovie } from "../../data/fetchData";
import {ReactComponent as Num1} from "../../assets/img/number/1.svg";
import {ReactComponent as Num2} from "../../assets/img/number/2.svg";
import {ReactComponent as Num3} from "../../assets/img/number/3.svg";
import {ReactComponent as Num4} from "../../assets/img/number/4.svg";
import {ReactComponent as Num5} from "../../assets/img/number/5.svg";
import {ReactComponent as Num6} from "../../assets/img/number/6.svg";
import {ReactComponent as Num7} from "../../assets/img/number/7.svg";
import {ReactComponent as Num8} from "../../assets/img/number/8.svg";
import {ReactComponent as Num9} from "../../assets/img/number/9.svg";
import {ReactComponent as Num10} from "../../assets/img/number/10.svg";

const StyledCardTopTen = styled.div`
  background-color: #000000;
  display: flex;
  flex-wrap: wrap;
  .items{
    display: flex;
    justify-content: space-between;
    width: 20%;
    .num{
        background: ${props => props.bg};
    }
  }
`;

const CardTopTen = ({bg, ...rest}) => {
  return (
    <StyledCardTopTen bg={bg} {...rest}>
      {topMovie.map((item) => {
        return (
          <div className="items">
            <div className="num">
            {
                item.top == 1 ?
                (<Num1/>) : (item.top == 2) ?
                (<Num2/>) : (item.top == 3) ?
                (<Num3/>) : (item.top == 4) ?
                (<Num4/>) : (item.top == 5) ?
                (<Num5/>) : (item.top == 6) ?
                (<Num6/>) : (item.top == 7) ?
                (<Num7/>) : (item.top == 8) ?
                (<Num8/>) : (item.top == 9) ?
                (<Num9/>) : (<Num10/>)
              }
            </div>
            <img src={item.img} alt="" />
          </div>
        );
      })}
      
    </StyledCardTopTen>
  );
};
export default CardTopTen;
