import React from "react";
import Layout from "./Components/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DetailPage from "./Components/DetailPage";
import Scroll from "./Components/Scroll";

const App = () => {
  return (
    <Layout>
      <Router>
        <Routes>
          <Route path="/" element={<Scroll />}></Route>
          <Route path="/detail-page/:id" element={<DetailPage />}></Route>
        </Routes>
      </Router>
    </Layout>
  );
};

export default App;
