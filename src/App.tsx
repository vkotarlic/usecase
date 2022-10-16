import React from 'react';
import Navigation from 'components/Navigation/Navigation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Search from 'pages/Search/Search';
import History from 'pages/History/History';

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </Router>
  );
};

export default App;
