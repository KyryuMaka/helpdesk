import React from 'react';
import {Route, BrowserRouter, Routes} from 'react-router-dom';

// Styling
import './App.css';

// Components
import Header from './components/header/index'
import Footer from './components/footer'

// Pages
import Index from './page/index';
import OnlineStudy from './page/onlineStudy';
import IntegratedSystem from './page/integratedSystem';
import Network from './page/network';
import Email from './page/email';
import SafeInformation from './page/safeInformation';

import NotFound from './page/404';

function App() {
  return (
    <>
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Index  title="Trang chủ" />} />
          
          <Route exact path="/online-study" element={<OnlineStudy title="Trang chủ" />} />
          <Route exact path="/computer-settings" element={<IntegratedSystem title="Cấu hình máy tính" />} />
          <Route exact path="/network" element={<Network title="Trang chủ" />} />
          <Route exact path="/email" element={<Email title="Trang chủ" />} />
          <Route exact path="/safe-information" element={<SafeInformation title="Trang chủ" />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
