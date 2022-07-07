import * as React from "react";
import { Rings } from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Route, Routes } from "react-router-dom";
import { NavBar } from "./Components";
import { useUser } from "./Providers/users";
import { SearchUsers, UsersHistoric } from "./Screens";

const App = () => {
  const { loading } = useUser();
  return (
    <>
      <NavBar />
      {loading ? (
        <div style={{width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
        <Rings height="200" width="200" color="grey" ariaLabel="loading" />
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<SearchUsers />} />
          <Route path="historic" element={<UsersHistoric />} />
        </Routes>
      )}
    </>
  );
};

export default App;
