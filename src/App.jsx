import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AboutusPage from "./pages/AboutusPage/AboutusPage";
import Contactus from "./pages/ContactPage/ContactPage";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import { LanguageProvider } from "./i18n/LanguageProvider";

function App() {
  return (
    <div className="mx-auto max-w-[1440px]">
      <LanguageProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutusPage />} />
          <Route path="/contact-us" element={<Contactus />} />
        </Routes>
        {/* <Footer /> */}
      </LanguageProvider>
    </div>
  );
}

export default App;
