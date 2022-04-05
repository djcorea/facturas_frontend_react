import React from 'react'
import { Routes, Route,BrowserRouter } from "react-router-dom";
import { LoginPage } from '../components/login/LoginPage';
import { Navbar } from '../components/ui/Navbar';
import { DashboardRouter } from './DashboardRouter';

export const AppRouter = () => {
    return (
    <BrowserRouter>
    
      <div>
        <Routes>
          <Route path="" element={<LoginPage />} />
          <Route path="/*" element={<DashboardRouter/>} />
          
        </Routes>
      </div>
    </BrowserRouter>
    );
}
