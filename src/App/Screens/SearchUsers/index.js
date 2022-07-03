import * as React from "react";
import { Container, NavBar } from "../../Components";
import Profile from "../../Components/Profile";

const SearchUsers = () => {
  return (
    <div >
      <NavBar />
      <Container >
        <Profile />
      </Container>
    </div>
  );
}

export default SearchUsers;
