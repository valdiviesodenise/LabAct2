import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header.js";
import Deals from "./Deals.js";
import Sale from "./Sale.js";
import Poster from "./Poster.js";
import Deals2 from "./Deals2.js";
import Insights from "./Insights.js";
import Ratings from "./Ratings.js";
import Footer from "./Footer.js";

export default function App() {
  return (
    <div>
      <Header />
      <Deals />
      <Sale />
      <Poster />
      <Deals2 />
      <Insights />
      <Ratings />
      <Footer />
    </div>
  );
}
