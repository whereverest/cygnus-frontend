import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// organisms
import Header from "./ui/organisms/header";
import Footer from "./ui/organisms/footer";

// pages
import Home from "./ui/pages/home";

// styles
import "./styles/index.scss";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
