import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './pages/AboutMe';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import PriceMenu from './pages/PriceMenu';
import Booking from './pages/Booking';
import { Toaster } from "./components/ui/toaster"; // Assuming this is correctly pathed
// import './App.css'; // If you have App.css specific styles

// Main App component
function App() {
  // Define current page - this might be managed by routing or state in a more complex app
  // For now, we'll pass a placeholder or derive from router if needed by Header/Footer
  const currentPage = "Home"; // Example, you'll likely get this from useLocation or similar

  return (
    <Router>
      {/* Apply the new dark background and a default text color for contrast */}
      <div className="flex flex-col min-h-screen bg-brandDark text-slate-50 font-sans"> {/* Changed background to brandDark, default text to light */}
        <Header currentPage={currentPage} />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            {/* Redirect base path to /about-me or any default page */}
            <Route path="/" element={<Navigate replace to="/about-me" />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/price-menu" element={<PriceMenu />} />
            <Route path="/booking" element={<Booking />} />
            {/* Add more routes as needed */}
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
