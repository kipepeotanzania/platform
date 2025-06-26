import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ImmersiveTravel from './pages/ImmersiveTravel';
import Volunteering from './pages/Volunteering';
import Projects from './pages/Projects';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/travel" element={<ImmersiveTravel />} />
        <Route path="/volunteering" element={<Volunteering />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
