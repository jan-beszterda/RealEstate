import React from "react";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ObjectPage from "./components/ObjectPage";
import ObjectsForSale from "./components/ObjectsForSale";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
import Services from "./components/Services";
import Blogg from "./components/Blogg";
import CreateBlogg from "./components/CreateBlogg";


function App() {
  return <main className="container-sm my-3">
   <Blogg></Blogg>
    </main>;
}

export default App;
