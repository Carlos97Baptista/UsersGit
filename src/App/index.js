import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import {SearchUsers, UsersHistoric} from "./Screens";

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<SearchUsers />} />
        <Route path="historic" element={<UsersHistoric />} />
      </Routes>
  );
}

export default App;
