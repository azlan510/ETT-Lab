// import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";

import { BrowserRouter,/* Routes, Route*/ } from "react-router-dom";
import App from "./App.jsx";
// import AboutPage from "./components/About/AboutPage.jsx";
// import ProjectsPage from "./components/Projects/ProjectsPage.jsx";
// import Navbar from "./components/Navbar.jsx";
// import Footer from "./components/Footer.jsx";
// import Contact from "./components/Contact/Contact.jsx";
// import ErrorPage from "./components/ErrorPage.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
