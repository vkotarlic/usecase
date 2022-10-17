import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Navigation from 'components/Navigation/Navigation';
import Search from 'pages/Search/Search';
import History from 'pages/History/History';
import PageOne from 'pages/PageOne/PageOne';
import PageTwo from 'pages/PageTwo/PageTwo';

const App = () => {
  return (
    <RecoilRoot>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/history" element={<History />} />
          <Route path="/page-1" element={<PageOne />} />
          <Route path="/page-2" element={<PageTwo />} />
        </Routes>
      </Router>
    </RecoilRoot>
  );
};

export default App;
