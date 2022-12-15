import React from 'react';
import {Route, BrowserRouter, Routes} from 'react-router-dom';

import './App.css';

import Header from './components/header'

import Index from './page/index';
import OnlineStudy from './page/onlineStudy';
import IntegratedSystem from './page/integratedSystem';
import Network from './page/network';
import Email from './page/email';
import SafeInformation from './page/safeInformation';

function App() {
  return (
    <>
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Index  title="Trang chủ" />} />
          <Route exact path="/online-study" element={<OnlineStudy title="Trang chủ" />} />
          <Route exact path="/integrated-system" element={<IntegratedSystem title="Trang chủ" />} />
          <Route exact path="/network" element={<Network title="Trang chủ" />} />
          <Route exact path="/email" element={<Email title="Trang chủ" />} />
          <Route exact path="/safe-information" element={<SafeInformation title="Trang chủ" />} />
          {/* <Route component={NotFound} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
