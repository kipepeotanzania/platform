import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

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
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar${scrolled ? ' navbar-scrolled' : ''}`}> 
      <div className="navbar-logo">
        <span className="logo-placeholder">Kipepeo</span>
      </div>
      <ul className="navbar-links">
        {navLinks.map(link => (
          <li key={link.name}>
            <Link to={link.path} className={location.pathname === link.path ? 'active' : ''}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
} 