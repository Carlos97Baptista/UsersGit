import * as React from "react";
import styled from "styled-components";
import { FaSearch } from 'react-icons/fa';
const SearchInput = () => {
  return (
    <InputBox>
    <Input/>
    <InputBtn><FaSearch/></InputBtn>
    </InputBox>
  );
}

export default SearchInput;


const InputBox = styled.div`
display: flex ;
flex-direction:row ;
justify-content: space-between ;
background-color: #f2f3f4;
width: 300px ;
height: 40px ;
border-radius: 25px ;
`;
const Input = styled.input`
background-color: transparent;
border-color: transparent ;
width: 250px ;
height: 35px ;
border-radius: 25px 0px 0px 25px ;
padding-left: 10px ;
`;
const InputBtn = styled.button`
background-color: #bdc2c7;
border-color: transparent ;
justify-content: center ;
align-items: center ;
width: 50px ;
height: 100% ;
cursor: pointer;
border-radius: 0px 25px 25px 0px ;
`;