import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AboutusPage from "./pages/AboutusPage/AboutusPage";
import Contactus from "./pages/ContactPage/ContactPage";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import { LanguageProvider } from "./i18n/LanguageProvider";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage/ProductDetailPage";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import MainFrom from "./pages/DashboardPage/components/forms/MainForm/MainFrom";

function App() {
  return (
    <div className="mx-auto max-w-[1440px] overflow-hidden">
      <LanguageProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutusPage />} />
          <Route path="/contact-us" element={<Contactus />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/MainForm/:id?" element={<MainFrom />} />
        </Routes>
        <Footer />
      </LanguageProvider>
    </div>
  );
}

export default App;
