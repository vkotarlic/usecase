import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Navigation from 'components/Navigation/Navigation';
import Search from 'pages/Search/Search';
import History from 'pages/History/History';

const App = () => {
  return (
    <RecoilRoot>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </Router>
    </RecoilRoot>
  );
};

export default App;
