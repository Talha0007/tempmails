import React from "react";
import { Switch, Routes, Route } from "react-router-dom";

// import AppBar from "./components/AppBar";

// importing pages
import LandingPage from "./pages/LandingPage";
import EmailGen from "./pages/EmailGen";
import NameGen from "./pages/NameGen";
import UserGen from "./pages/UserGen";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";

const App = () => {
  return (
    <div>
      <Routes basename="/">
        <Switch>
          <Route path="/" element={<LandingPage />} />
          <Route path="/emailgen" element={<EmailGen />} />
          <Route path="/usernamegen" element={<UserGen />} />
          <Route path="/namegen" element={<NameGen />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Switch>
      </Routes>
    </div>
  );
};

export default App;
