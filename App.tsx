import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Catalog } from './pages/Catalog';
import { PropertyDetail } from './pages/PropertyDetail';
import { Calculator } from './pages/Calculator';
import { Construction } from './pages/Construction';
import { MessageCircle } from 'lucide-react';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const WhatsAppButton = () => (
  <a 
    href="https://wa.me/5491112345678" 
    target="_blank" 
    rel="noopener noreferrer"
    className="fixed bottom-8 right-8 z-50 group flex items-center justify-center"
    aria-label="Contactar por WhatsApp"
  >
    <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-25 group-hover:opacity-40 transition-opacity"></div>
    <div className="relative bg-gradient-to-tr from-green-600 to-green-400 text-white p-4 rounded-full shadow-2xl hover:shadow-green-500/50 transition-all duration-300 transform group-hover:-translate-y-1 group-hover:scale-110">
      <MessageCircle size={28} className="drop-shadow-sm" />
    </div>
  </a>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-sans bg-white selection:bg-teko-navy selection:text-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/terrenos" element={<Catalog />} />
            <Route path="/propiedad/:id" element={<PropertyDetail />} />
            <Route path="/calculadora" element={<Calculator />} />
            <Route path="/construccion" element={<Construction />} />
            {/* Fallback routes for demo pages not fully implemented but required by nav */}
            <Route path="/nosotros" element={<Home />} /> 
            <Route path="/inversion" element={<Home />} /> 
            <Route path="/contacto" element={<Home />} /> 
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;