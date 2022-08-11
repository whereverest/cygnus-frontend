import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import Home from "./ui/pages/home";

// styles
import "./styles/index.scss";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
