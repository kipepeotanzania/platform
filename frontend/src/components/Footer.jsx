import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Immersive Travel', path: '/travel' },
  { name: 'Volunteering', path: '/volunteering' },
  { name: 'Projects', path: '/projects' },
  { name: 'About Us', path: '/about' },
  { name: 'Contact Us', path: '/contact' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section footer-social">
          <a href="https://instagram.com/kipepeo_tanzania" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="https://www.linkedin.com/company/kipepeo-tanzania/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedin} /></a>
        </div>
        <div className="footer-section footer-nav">
          {navLinks.map(link => (
            <Link key={link.name} to={link.path} className="footer-link">{link.name}</Link>
          ))}
        </div>
        <div className="footer-section footer-mission">
          <p>Empowering Communities, Transforming Lives. <span className="footer-tagline">Kipepeo</span></p>
        </div>
      </div>
    </footer>
  );
} 