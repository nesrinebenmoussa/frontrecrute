import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/Login";
import Offres from "./pages/Offres";
import ConsultPost from "./pages/ConsultOffer";
import React from "react";
import Home from "./pages/Home";
import AddAnnonce from "./pages/AddAnnonce";
import AllOffres from './pages/allOffres'
import Questionaire from "./pages/Questionaire";
import CV from "./pages/CV";
import ConsulterAnnonce from "./pages/consulterAnnonce";
import CVS from './pages/cvs'

function App() {
  return (
    <>
      <link
        rel='stylesheet'
        href='https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css'
        integrity='sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4'
        crossorigin='anonymous'></link>
      <Router>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/Profile' element={<Profile />} />
          <Route path='/' element={<Home />} />
          <Route path='/MyOffres/:id' element={<Offres />} />
          <Route path="MyOffres/all" element={<AllOffres />} />
          <Route path='/AddAnnonce' element={<AddAnnonce />} />
          <Route path='/Postulation/:id' element={<ConsultPost />} />
          <Route path="/Questionaire/:id" element={<Questionaire />} />
          <Route path="/CV/:id" element={<CV />} />
          <Route path="/consulter/:id" element={<ConsulterAnnonce />} />
          
          <Route path="/cvs/:diplome" element={<CVS />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
