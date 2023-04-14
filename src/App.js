import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.scss';

import NavBar from './PagesManagement/NavBar';
import Categories from './PagesManagement/Categories';
import Items from './PagesManagement/Items';

const App = props => {
  return (
   <div className="App">
      <Router>
         <div>
         <NavBar/>

         <Routes>
            <Route path="/" exact/>
            <Route path="/categories" element={<Categories />} /> 
            <Route path="/items" element={<Items />} /> 
         </Routes>
         </div>
      </Router>
   </div>
  );
}

export default App;
