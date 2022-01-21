import * as React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import SearchPage from './pages/SearchPage';
import './App.css';
import SearchResultPage from './pages/SearchResultPage';
function App() {
return (
  <div className="container">
     <Router>
          <Routes>
                  <Route exact path="/" element={<SearchPage />}/>
                  <Route exact path="/search" element={<SearchResultPage />}/>
          </Routes>
      </Router> 
  </div>
)
}
export default App;