import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import Home from "./ui/pages/home";

// header && footer
import Header from "./ui/organisms/header";

// styles
import "./styles/index.scss";
import { Footer } from "./ui/organisms";

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
