import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cooking from "./pages/Cooking";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Cooking />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
