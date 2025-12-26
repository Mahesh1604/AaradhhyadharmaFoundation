import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Volunteer from './pages/get-involved/Volunteer';
import Partner from './pages/get-involved/Partner';
import Contact from './pages/get-involved/Contact';
import Donate from './pages/Donate';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ForgotPassword from './pages/auth/ForgotPassword';
import AnimalWelfare from './pages/programs/AnimalWelfare';
import OrphanageSupport from './pages/programs/OrphanageSupport';
import NeedyPeopleAssistance from './pages/programs/NeedyPeopleAssistance';
import AnimalRescue from './pages/programs/AnimalRescue';
import MissionVision from './pages/about/Mission';
import TeamFounders from './pages/about/Team';
import Locations from './pages/about/Locations';
import FAQ from './pages/about/FAQ';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/partner" element={<Partner />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          {/* About Us */}
          <Route path="/mission" element={<MissionVision />} />
          <Route path="/team" element={<TeamFounders />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/faq" element={<FAQ />} />

          {/* Programs */}
          <Route path="/programs/animal-welfare" element={<AnimalWelfare />} />
          <Route path="/programs/orphanage-support" element={<OrphanageSupport />} />
          <Route path="/programs/needy-assistance" element={<NeedyPeopleAssistance />} />
          <Route path="/programs/animal-rescue" element={<AnimalRescue />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
