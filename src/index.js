import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Head from './Head';
import SellingOnline from './SellingOnline';
import SellAnywhere from './SellAnywhere';
import GrowFaster from './GrowFaster';
import ManageSimply from './ManageSimply';
import GlobalSales from './GlobalSales';
import Page from './Page'
import FinalPage from './FinalPage'
import Footer from './Footer'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Head />
    <SellingOnline />
    <SellAnywhere />
    <GrowFaster/>
    <ManageSimply />
    <GlobalSales />
    <Page />
    <FinalPage />
    <Footer />
  </React.StrictMode>
);
