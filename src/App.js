import React from "react";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./components/Homepage";
import ObjectPage from "./components/ObjectPage";
import ObjectsForSale from "./components/ObjectsForSale";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
import Services from "./components/Services";
import Blogg from "./components/Blogg";
import About from "./components/About";
import CreateBlogg from "./components/CreateBlogg";

import data from "./data/objects.json";

function App() {
  const [objects, setObjects] = useState([]);

  useEffect(() => {
    setObjects(
      data.objects.map((object) => {
        return { ...object, id: uuidv4() };
      })
    );
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <main id="main" className="container-fluid main p-2 p-md-5">
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/services" element={<Services />} />
          <Route
            path="/forsale"
            element={<ObjectsForSale objects={objects} />}
          />
          <Route
            path="forsale/:id"
            element={<ObjectPage objects={objects} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blogg />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
