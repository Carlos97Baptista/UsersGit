import * as React from "react";
import styled from "styled-components";
import SearchInput from "../SearchInput";
import { FaClock } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
const NavBar = () => {
  const path = useLocation();
  return (
    <Bar>
      {path.pathname === "/historic" ? (
        <></>
      ) : (
        <Link to="historic">
          <h1 style={{ color: "#ff00ff", marginLeft: 50 }}>
            <FaClock />
          </h1>
        </Link>
      )}
      <NavContainer>teste</NavContainer>
      <SearchInput />
      <SliceContainer>
        <SliceBar /> <SliceBar color="#8b008b" />
      </SliceContainer>
    </Bar>
  );
};

export default NavBar;

const Bar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #020101;
  -webkit-box-shadow: 0px 0px 31px 0px rgba(255, 0, 255, 0.2);
  -moz-box-shadow: 0px 0px 31px 0px rgba(255, 0, 255, 0.2);
  box-shadow: 0px 0px 31px 0px rgba(255, 0, 255, 0.2);
  height: 100px;
  width: 100%;
  padding: 0px;
  contain: content;
`;
const NavContainer = styled.div`
  flex: 1;
`;
const SliceContainer = styled.div`
  margin: 0px;
  padding: 0px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
  contain: content;
  padding: 0px;
`;
const SliceBar = styled.div`
  position: relative;
  background-color: ${(props) => (props.color ? props.color : "#ff00ff")};
  transform: rotate(45deg);
  margin-left: 60px;
  right: -40px;
  height: 300px;
  width: 60px;
`;
