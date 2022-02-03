import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import UserList from './pages/UserList';

const App = () => {
  return (
  
    <BrowserRouter>
    <Routes>
      {/* on indique la route donc l'url a tapé dans son navigateur (path) et ça va vous amener a la page voulu ici */}
      <Route path="/" element={<Home />} />
      <Route path="/coup-de-coeur" element={<UserList />} />
      <Route path="*" element={<Home />} />
    </Routes>
    </BrowserRouter>
  );
};

export default App;