import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Index";
import { useEffect, useInsertionEffect, useState } from "react";
import Loader from "./components/Loader";
// import axios from 'axios'
// import { useDispatch, useSelector } from "react-redux";
// import { SetPortfolioData } from "./redux/rootslice";
// import { response } from "express";
function App() {
  const [showLoading, setShoeLoading] = useState(false);

  return (
    <BrowserRouter>
      {showLoading ? <Loader /> : null}

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
