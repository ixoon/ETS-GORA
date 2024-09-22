import React from "react";
import Home from "./pages/home";
import Admin from "./pages/admin";
import Dashboard from "./pages/dashboard";
import ProtectedRoute from "./components/protectedRoute";
import AnnouncementDetails from './pages/announcementDetail';
import School from "./pages/school";
import Professors from "./pages/professors";
import Contact from "./pages/contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout"; // Importuj Layout

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/admin" element={<Admin />}/>
        <Route path="/admin/dashboard" element={<ProtectedRoute><Layout><Dashboard /></Layout></ProtectedRoute>}/>
        <Route path="/announcement/:id" element={<Layout><AnnouncementDetails /></Layout>} />
        <Route path="/skola" element={<Layout><School /></Layout>}/>
        <Route path="/organizacija" element={<Layout><Professors /></Layout>}/>
        <Route path="/kontakt" element={<Layout><Contact /></Layout>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
