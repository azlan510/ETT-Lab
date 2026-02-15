

import "./index.css";

import { Routes, Route } from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import AboutPage from "./components/About/AboutPage.jsx";
import ProjectsPage from "./components/Projects/ProjectsPage.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Contact from "./components/Contact/ContactSec.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import ResumePage from "./components/Resume/ResumePage.jsx";


function App() {
  return (
    <>
    <div className="d-flex flex-column min-vh-100 ">
  
      <Navbar />

        <main className="flex-grow-1 ">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        </main>
      <Footer />
      </div>
    </>
  );
}

export default App;
