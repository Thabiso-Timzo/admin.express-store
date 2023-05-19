import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login/Login";
import ResetPassword from "./pages/reset-password/ResetPassword";
import ForgotPassword from "./pages/forgot-password/ForgotPassword";
import MainLayout from "./components/layout/MainLayout";
import MinWidth from "./components/min-width/MinWidth";

function App() {
  return (
    <>
      {window.innerWidth > 768 ? (
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/reset-password' element={<ResetPassword />} />
            <Route path='/forgot-password' element={<ForgotPassword />} />
            <Route path='/admin' element={<MainLayout />}>
              <Route index element={<Dashboard/>} />
            </Route>
          </Routes>
        </BrowserRouter>
      ): (
        <>
          <MinWidth />
        </>
      )}
    </>
  );
}

export default App;