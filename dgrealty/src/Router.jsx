import { Routes, Route, Navigate } from "react-router-dom";

import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import Listings from "./Pages/Listings/Listings";
import MeetTheTeam from "./Pages/MeetTheTeam/MeetTheTeam";
import Taxes from "./Pages/Taxes/Taxes";

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/home' replace />} />
      <Route path='contact' element={<Contact />} />
      <Route path='home' element={<Home />} />
      <Route path='listings' element={<Listings />} />
      <Route path='meettheteam' element={<MeetTheTeam />} />
      <Route path='taxes' element={<Taxes />} />
    </Routes>
  );
};

export default Router;
