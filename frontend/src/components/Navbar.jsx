import { useState, useEffect, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Navbar.css';
import logo from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const navLinks = [
  { key: 'home', path: '/' },
  { key: 'travel', path: '/travel' },
  { key: 'volunteering', path: '/volunteering' },
  { key: 'projects', path: '/projects' },
  { key: 'about', path: '/about' },
  { key: 'contact', path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation('common');

  const currentLanguage = useMemo(
    () => (i18n.language ? i18n.language.split('-')[0] : 'en'),
    [i18n.language],
  );
  const nextLanguage = currentLanguage === 'en' ? 'es' : 'en';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  useEffect(() => {
    document.documentElement.lang = currentLanguage;
  }, [currentLanguage]);

  const handleLanguageToggle = () => {
    i18n.changeLanguage(nextLanguage);
  };

  return (
    <nav className={`navbar${scrolled ? ' navbar-scrolled' : ''}`}> 
      <div className="navbar-inner">
        <div className="navbar-logo">
          <Link to="/" className="navbar-logo-link" aria-label="Kipepeo Home">
            <img src={logo} alt="Kipepeo logo" className="navbar-logo-img" />
            <span className="logo-placeholder">Kipepeo</span>
          </Link>
        </div>
        <div className="navbar-actions">
          <button
            type="button"
            className="language-toggle"
            onClick={handleLanguageToggle}
            aria-label={t('nav.toggleLabel')}
            title={`${t('nav.toggleLabel')}: ${nextLanguage === 'en' ? t('nav.english') : t('nav.spanish')}`}
          >
            <span className={`language-option${currentLanguage === 'en' ? ' active' : ''}`}>EN</span>
            <span className={`language-option${currentLanguage === 'es' ? ' active' : ''}`}>ES</span>
          </button>
          <button className={`navbar-burger${menuOpen ? ' menu-open' : ''}`} aria-label="Open menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(m => !m)}>
            <FontAwesomeIcon icon={faBars} style={{ fontSize: '2rem', color: 'var(--color-primary)' }} />
          </button>
        </div>
      </div>
      <ul className={`navbar-links${menuOpen ? ' open' : ''}`}> 
        {navLinks.map(link => (
          <li key={link.path}>
            <Link to={link.path} className={location.pathname === link.path ? 'active' : ''}>
              {t(`nav.${link.key}`)}
            </Link>
          </li>
        ))}
      </ul>
      {menuOpen && <div className="navbar-backdrop" onClick={()=>setMenuOpen(false)}></div>}
    </nav>
  );
} 
