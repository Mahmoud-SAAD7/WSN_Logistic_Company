import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CustomNavbar from "./components/navBar/navBar";
import Services from './components/services/service';
import Footer from './components/footer/footer';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import FeaturedProjects from './components/project/Project';
import Information from './components/project/inforfation/Information';
import ContactImage from './components/contactimage/ContactImage';

function App() {
  return (
    <BrowserRouter>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<>
          <Services />
          <FeaturedProjects />
          <Information />

        </>} />
        <Route path="/about" element={
          <About />
        } />
        <Route path="/contact" element={
          <>
            <Contact />

          </>} />
        <Route path="/services" element={
          <>
            <Services />
            <Information />
          </>
        } />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

