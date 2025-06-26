import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-social">
          <a href="#" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="#" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedin} /></a>
        </div>
        <div className="footer-newsletter">
          <form>
            <input type="email" placeholder="Your email" aria-label="Email" required />
            <button type="submit">Sign Up</button>
          </form>
        </div>
        <div className="footer-mission">
          <p>Empowering Communities, Transforming Lives. <span className="footer-tagline">Kipepeo</span></p>
        </div>
      </div>
    </footer>
  );
} 