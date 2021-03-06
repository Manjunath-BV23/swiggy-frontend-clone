import styled from "styled-components";
import { Link } from "react-router-dom";
import {useSelector} from "react-redux";

import "./Nav.css";
import {
  faSearch,
  faPercent,
  faLifeRing,
  faCartShopping,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

document.title = `Order food online from India's best food delivery service. Order from restaurants near you`;

const Main = styled.div`
  width: 100%;
  height: 80px;
  padding: 0.5% 5%;
  box-shadow: 0 15px 40px -20px rgb(40 44 63 / 15%);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 5;
  background: white;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  alignitems: center;
  height: 100%;
`;

const Div1 = styled.div`
  width: 13%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;

  h4 {
    font-size: calc(0.25em + 1vw);
  }
  h4:hover {
    color: orange;
  }
`;

const Div2 = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Icon = styled.img`
  width: 50px;
  height: 50px;
  transition: transform 0.8s;
`;

const Items = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  span {
    color: #3d4152;
    font-size: 16px;
    font-weight: 600;
  }
  span:hover {
    color: orange;
  }
`;

export const NavBar = () => {
  const userName = useSelector((store) => (store.login.userLogged.user_name));

  console.log(userName);
  return (
    <Main>
      <FlexContainer>
        <Div1>
          <Link to={"/restaurants"}>
            <Icon
              className="logo"
              src="https://cdn.iconscout.com/icon/free/png-64/swiggy-1613371-1369418.png"
            />
          </Link>
          <h4>other</h4>
        </Div1>

        <Div2>
          <Items>
            <FontAwesomeIcon className="icons" icon={faSearch} size="lg" />
            <span><Link style ={{textDecoration: "none", color: "black"}} to={`/search/`}>Search</Link></span>
          </Items>
          <Items>
            <FontAwesomeIcon className="icons" icon={faPercent} size="lg" />
              <span><Link style ={{textDecoration: "none", color: "black"}} to={`/offers/restaurant/`}>Offers</Link></span>
          </Items>
          <Items>
            <FontAwesomeIcon className="icons" icon={faLifeRing} size="lg" />
            <span><Link style ={{textDecoration: "none", color: "black"}} to={`/help/`}>Help</Link></span>
          </Items>
          <Items>
            <FontAwesomeIcon className="icons" icon={faUser} size="lg" />
            <span><Link style ={{textDecoration: "none", color: "black"}} to={`/my-account/:comp/`}>{userName}</Link></span>
          </Items>
          <Items>
            <FontAwesomeIcon
              className="icons"
              icon={faCartShopping}
              size="lg"
            />
            <span><Link style ={{textDecoration: "none", color: "black"}} to={`/cart/`}>Cart</Link></span>
          </Items>
        </Div2>
      </FlexContainer>
    </Main>
  );
};
