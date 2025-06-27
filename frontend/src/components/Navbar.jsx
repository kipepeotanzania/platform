import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Immersive Travel', path: '/travel' },
  { name: 'Volunteering', path: '/volunteering' },
  { name: 'Projects', path: '/projects' },
  { name: 'About Us', path: '/about' },
  { name: 'Contact Us', path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  return (
    <nav className={`navbar${scrolled ? ' navbar-scrolled' : ''}`}> 
      <div className="navbar-inner">
        <div className="navbar-logo">
          <Link to="/" className="navbar-logo-link" aria-label="Kipepeo Home">
            <img src={logo} alt="Kipepeo logo" className="navbar-logo-img" />
            <span className="logo-placeholder">Kipepeo</span>
          </Link>
        </div>
        <button className="navbar-burger" aria-label="Open menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(m => !m)}>
          <span className="burger-bar"></span>
          <span className="burger-bar"></span>
          <span className="burger-bar"></span>
        </button>
      </div>
      <ul className={`navbar-links${menuOpen ? ' open' : ''}`}> 
        {navLinks.map(link => (
          <li key={link.name}>
            <Link to={link.path} className={location.pathname === link.path ? 'active' : ''}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      {menuOpen && <div className="navbar-backdrop" onClick={()=>setMenuOpen(false)}></div>}
    </nav>
  );
} 