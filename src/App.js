import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Footer />
      </div>
      <div className="container-fluid">
        <Routes>{/*<Route path="/" element={<Home />} />*/}</Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
