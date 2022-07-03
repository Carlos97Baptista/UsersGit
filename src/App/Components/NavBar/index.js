import * as React from "react";
import styled from "styled-components";
import SearchInput from "../SearchInput";

const NavBar = () => {
  return (
<Bar><NavContainer>teste</NavContainer><SearchInput /><SliceContainer><SliceBar/> <SliceBar color="#8b008b"/></SliceContainer></Bar>
  );
}

export default NavBar;


const Bar = styled.div`
display: flex ;
flex-direction:row ;
align-items: center ;
background-color: #020101;
-webkit-box-shadow:0px 0px 31px 0px rgba(255,0,255,0.20);
-moz-box-shadow: 0px 0px 31px 0px rgba(255,0,255,0.20);
box-shadow: 0px 0px 31px 0px rgba(255,0,255,0.20);
height: 100px ;
width: 100% ;
padding: 0px ;
contain: content;
`;
const NavContainer = styled.div`
flex: 1
`
const SliceContainer = styled.div`
margin: 0px ;
padding:0px ;
display: flex ;
flex-direction: row ;
justify-content: flex-end ;
align-items: flex-start ;
contain: content;
padding: 0px ;
`
const SliceBar = styled.div`
position: relative;
background-color: ${(props => props.color ? props.color : "#ff00ff" )} ;
transform: rotate(45deg) ;
margin-left: 60px ;
right: -40px ;
height: 300px ;
width: 60px ;
`;