import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChild, faPeopleGroup, faLeaf, faBed, faLaptop, faChalkboardTeacher, faBook, faUtensils, faFutbol, faVenus, faHandsHelping, faPlane, faDonate } from '@fortawesome/free-solid-svg-icons';
import myPhoto1 from '../assets/myphoto1.jpg';
import logo from '../assets/logo.png';

const projectCards = [
  { icon: faBed, title: 'Dormitories' },
  { icon: faLaptop, title: 'IT Classroom' },
  { icon: faChalkboardTeacher, title: 'New Classrooms' },
  { icon: faBook, title: 'Library' },
  { icon: faUtensils, title: 'Kitchen & Dining' },
  { icon: faFutbol, title: 'Sports Area' },
  { icon: faVenus, title: 'Women Empowerment' },
];

export default function Home() {
  const aboutRef = useRef(null);
  const navigate = useNavigate();
  useEffect(() => { AOS.init({ duration: 1000, once: true }); }, []);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Helper for image fallback
  const handleImgError = (e) => {
    e.target.onerror = null;
    e.target.src =
      'data:image/svg+xml;utf8,<svg width="420" height="280" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="%23b5eeb3"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="24" fill="%23a7648a" font-family="Poppins, Nunito, sans-serif">Image not found</text></svg>';
  };

  return (
    <main style={{width:'100vw', overflowX:'hidden', background:'#fff'}}>
      {/* Hero Section */}
      <section style={{
        minHeight: '90vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        background: `linear-gradient(120deg, #b5eeb3 0%, #a7648a 100%), url(${logo}) center/40% no-repeat`,
        backgroundBlendMode: 'overlay',
        opacity: 1,
        overflow: 'hidden',
        padding: 0
      }}>
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} style={{textAlign:'center', width:'100%', padding:'clamp(1rem, 5vw, 3rem)'}}>
          <h1 style={{fontFamily:'Poppins, Nunito, sans-serif', fontWeight:800, fontSize:'clamp(2.5rem, 6vw, 4rem)', color:'#fff', marginBottom:'1.5rem', letterSpacing:'-1px'}}>
            Igniting hope. Inspiring change. Empowering communities.
          </h1>
          <p style={{fontFamily:'Open Sans, Inter, sans-serif', fontSize:'1.3rem', color:'#fff', marginBottom:'2.5rem', maxWidth:600, marginLeft:'auto', marginRight:'auto'}}>
            We're on a mission to build a brighter future through education, innovation, and sustainable development.
          </p>
          <motion.button whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.97 }} onClick={scrollToAbout} style={{background:'#b5eeb3', color:'#a7648a', border:'none', borderRadius:30, padding:'1rem 2.5rem', fontWeight:700, fontSize:'1.1rem', fontFamily:'Poppins, Nunito, sans-serif', cursor:'pointer', boxShadow:'0 4px 16px rgba(167,100,138,0.10)', display:'inline-flex', alignItems:'center', gap:12, transition:'background 0.2s'}}>
            <FontAwesomeIcon icon={faLeaf} style={{fontSize:'1.3rem', color:'#aa9a99', marginRight:8, transition:'transform 0.4s'}}/>
            Explore Our Mission
          </motion.button>
        </motion.div>
      </section>

      {/* Who We Are */}
      <section ref={aboutRef} style={{width:'100vw', background:'#fff', display:'flex', flexWrap:'wrap', alignItems:'center', justifyContent:'center', padding:'clamp(2rem, 8vw, 5rem) 0'}}>
        <div data-aos="fade-right" style={{flex:'1 1 350px', minWidth:280, maxWidth:600, padding:'clamp(1rem, 5vw, 3rem)'}}>
          <h2 style={{fontFamily:'Poppins, Nunito, sans-serif', fontWeight:700, fontSize:'2.2rem', color:'#a7648a', marginBottom:'1.2rem'}}>Who We Are</h2>
          <p style={{fontFamily:'Open Sans, Inter, sans-serif', fontSize:'1.1rem', color:'#000', marginBottom:'1.5rem'}}>
            Founded in 2023, Kipepeo Tanzania is more than just an NGO—it's a catalyst for transformation.<br/><br/>
            From humble beginnings, we've grown into a beacon of hope, touching lives across Tanzania.<br/><br/>
            With a focus on education, community growth, and sustainable development, we create real, lasting change.
          </p>
          <motion.button whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.97 }} onClick={()=>navigate('/about')} style={{background:'#a7648a', color:'#fff', border:'none', borderRadius:30, padding:'0.8rem 2rem', fontWeight:700, fontSize:'1rem', fontFamily:'Poppins, Nunito, sans-serif', cursor:'pointer', boxShadow:'0 2px 8px rgba(167,100,138,0.10)', transition:'background 0.2s'}}>Meet the Team</motion.button>
        </div>
        <div data-aos="fade-left" style={{flex:'1 1 350px', minWidth:280, maxWidth:600, display:'flex', alignItems:'center', justifyContent:'center', padding:'clamp(1rem, 5vw, 3rem)'}}>
          <img src={myPhoto1} alt="Kipepeo Team" style={{width:'100%', maxWidth:420, borderRadius:18, boxShadow:'0 4px 24px rgba(167,100,138,0.10)'}} onError={handleImgError}/>
        </div>
      </section>

      {/* What We Do / Our Approach */}
      <section style={{width:'100vw', background:'#b5eeb3', padding:'clamp(2rem, 8vw, 5rem) 0'}}>
        <div style={{display:'flex', flexWrap:'wrap', justifyContent:'center', gap:'2.5rem', padding:'0 clamp(1rem, 5vw, 3rem)'}}>
          <div data-aos="fade-up" style={{flex:'1 1 220px', minWidth:220, maxWidth:340, background:'#fff', borderRadius:18, boxShadow:'0 2px 8px rgba(167,100,138,0.08)', padding:'2rem 1.2rem', textAlign:'center'}}>
            <FontAwesomeIcon icon={faChild} style={{fontSize:'2.5rem', color:'#a7648a', marginBottom:16}}/>
            <h3 style={{fontFamily:'Poppins, Nunito, sans-serif', fontWeight:700, fontSize:'1.2rem', color:'#a7648a', margin:'1rem 0 0.5rem'}}>Education First</h3>
            <p style={{fontFamily:'Open Sans, Inter, sans-serif', fontSize:'1rem', color:'#000'}}>Unlocking opportunities through quality schooling and IT literacy.</p>
          </div>
          <div data-aos="fade-up" data-aos-delay="100" style={{flex:'1 1 220px', minWidth:220, maxWidth:340, background:'#fff', borderRadius:18, boxShadow:'0 2px 8px rgba(167,100,138,0.08)', padding:'2rem 1.2rem', textAlign:'center'}}>
            <FontAwesomeIcon icon={faPeopleGroup} style={{fontSize:'2.5rem', color:'#a7648a', marginBottom:16}}/>
            <h3 style={{fontFamily:'Poppins, Nunito, sans-serif', fontWeight:700, fontSize:'1.2rem', color:'#a7648a', margin:'1rem 0 0.5rem'}}>Community Empowerment</h3>
            <p style={{fontFamily:'Open Sans, Inter, sans-serif', fontSize:'1rem', color:'#000'}}>From skill-building for women to job-ready programs.</p>
          </div>
          <div data-aos="fade-up" data-aos-delay="200" style={{flex:'1 1 220px', minWidth:220, maxWidth:340, background:'#fff', borderRadius:18, boxShadow:'0 2px 8px rgba(167,100,138,0.08)', padding:'2rem 1.2rem', textAlign:'center'}}>
            <FontAwesomeIcon icon={faLeaf} style={{fontSize:'2.5rem', color:'#a7648a', marginBottom:16}}/>
            <h3 style={{fontFamily:'Poppins, Nunito, sans-serif', fontWeight:700, fontSize:'1.2rem', color:'#a7648a', margin:'1rem 0 0.5rem'}}>Sustainable Projects</h3>
            <p style={{fontFamily:'Open Sans, Inter, sans-serif', fontSize:'1rem', color:'#000'}}>Infrastructure that supports holistic, long-term growth.</p>
          </div>
        </div>
        <div style={{textAlign:'center', marginTop:'2.5rem'}}>
          <motion.button whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.97 }} onClick={()=>navigate('/projects')} style={{background:'#a7648a', color:'#fff', border:'none', borderRadius:30, padding:'0.8rem 2rem', fontWeight:700, fontSize:'1rem', fontFamily:'Poppins, Nunito, sans-serif', cursor:'pointer', boxShadow:'0 2px 8px rgba(167,100,138,0.10)', transition:'background 0.2s'}}>Our Projects</motion.button>
        </div>
      </section>

      {/* Get Involved */}
      <section style={{width:'100vw', background:'#aa9a99', padding:'clamp(2rem, 8vw, 5rem) 0'}}>
        <h2 data-aos="fade-up" style={{fontFamily:'Poppins, Nunito, sans-serif', fontWeight:700, fontSize:'2rem', color:'#fff', textAlign:'center', marginBottom:'2.5rem'}}>Get Involved</h2>
        <div style={{display:'flex', flexWrap:'wrap', justifyContent:'center', gap:'2.5rem', padding:'0 clamp(1rem, 5vw, 3rem)'}}>
          <motion.div data-aos="fade-up" whileHover={{ scale: 1.04 }} style={{flex:'1 1 220px', minWidth:220, maxWidth:340, background:'#fff', borderRadius:18, boxShadow:'0 2px 8px rgba(167,100,138,0.08)', padding:'2rem 1.2rem', textAlign:'center', cursor:'pointer'}} onClick={()=>navigate('/volunteering')}>
            <FontAwesomeIcon icon={faHandsHelping} style={{fontSize:'2.2rem', color:'#a7648a', marginBottom:16}}/>
            <h3 style={{fontFamily:'Poppins, Nunito, sans-serif', fontWeight:700, fontSize:'1.1rem', color:'#a7648a', margin:'1rem 0 0.5rem'}}>Volunteer</h3>
            <p style={{fontFamily:'Open Sans, Inter, sans-serif', fontSize:'0.98rem', color:'#000'}}>Share your skills and time with our community projects.</p>
          </motion.div>
          <motion.div data-aos="fade-up" data-aos-delay="100" whileHover={{ scale: 1.04 }} style={{flex:'1 1 220px', minWidth:220, maxWidth:340, background:'#fff', borderRadius:18, boxShadow:'0 2px 8px rgba(167,100,138,0.08)', padding:'2rem 1.2rem', textAlign:'center', cursor:'pointer'}} onClick={()=>navigate('/travel')}>
            <FontAwesomeIcon icon={faPlane} style={{fontSize:'2.2rem', color:'#a7648a', marginBottom:16}}/>
            <h3 style={{fontFamily:'Poppins, Nunito, sans-serif', fontWeight:700, fontSize:'1.1rem', color:'#a7648a', margin:'1rem 0 0.5rem'}}>Immersive Travel</h3>
            <p style={{fontFamily:'Open Sans, Inter, sans-serif', fontSize:'0.98rem', color:'#000'}}>Experience authentic journeys that connect you with local culture and community.</p>
          </motion.div>
          <motion.div data-aos="fade-up" data-aos-delay="200" whileHover={{ scale: 1.04 }} style={{flex:'1 1 220px', minWidth:220, maxWidth:340, background:'#fff', borderRadius:18, boxShadow:'0 2px 8px rgba(167,100,138,0.08)', padding:'2rem 1.2rem', textAlign:'center', cursor:'pointer'}} onClick={()=>window.alert('Donation coming soon!')}>
            <FontAwesomeIcon icon={faDonate} style={{fontSize:'2.2rem', color:'#a7648a', marginBottom:16}}/>
            <h3 style={{fontFamily:'Poppins, Nunito, sans-serif', fontWeight:700, fontSize:'1.1rem', color:'#a7648a', margin:'1rem 0 0.5rem'}}>Donate</h3>
            <p style={{fontFamily:'Open Sans, Inter, sans-serif', fontSize:'0.98rem', color:'#000'}}>Your support helps us reach more communities and change more lives.</p>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{width:'100vw', background:'#fff', padding:'clamp(3rem, 10vw, 6rem) 0', textAlign:'center'}}>
        <motion.h2 data-aos="fade-up" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} style={{fontFamily:'Poppins, Nunito, sans-serif', fontWeight:800, fontSize:'2.2rem', color:'#a7648a', marginBottom:'2rem'}}>
          Join us in building a future where every child has a chance to fly.
        </motion.h2>
        <motion.button whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.97 }} onClick={()=>navigate('/volunteering')} style={{background:'#b5eeb3', color:'#a7648a', border:'none', borderRadius:30, padding:'1rem 2.5rem', fontWeight:700, fontSize:'1.1rem', fontFamily:'Poppins, Nunito, sans-serif', cursor:'pointer', boxShadow:'0 4px 16px rgba(167,100,138,0.10)', transition:'background 0.2s'}}>Get Involved</motion.button>
      </section>
    </main>
  );
} 