import React from "react";
import Welcome from "./components/Welcome";
import Signup from "./components/Signup";
import CreateAccount from "./components/CreateAccount";
import Account from "./components/Account";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="signup" element={<Signup />} />
        <Route path="account" element={<Account />} />
        <Route path="creataccount" element={<CreateAccount />} />
      </Routes>
    </div>
  );
};

export default App;
