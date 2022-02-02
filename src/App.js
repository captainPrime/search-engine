import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import "./App.css";
import SearchResultPage from "./pages/SearchResultPage";
import DetailsPage from "./pages/DetailsPage";
function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route exact path="/" element={<SearchPage />} />
          <Route exact path="/search" element={<SearchResultPage />} />
          <Route exact path="/search/:id" element={<DetailsPage />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
