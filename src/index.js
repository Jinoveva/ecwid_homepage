import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Head from './Head';
import SellingOnline from './SellingOnline';
import SellAnywhere from './SellAnywhere';
import GrowFaster from './GrowFaster';
import ManageSimply from './ManageSimply';
import GlobalSales from './GlobalSales';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Head />
    <SellingOnline />
    <SellAnywhere />
    <GrowFaster/>
    <ManageSimply />
    <GlobalSales />
  </React.StrictMode>
);
