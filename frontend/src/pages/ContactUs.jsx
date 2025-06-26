import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function ContactUs() {
  useEffect(() => { AOS.init({ duration: 1000, once: true }); }, []);
  return (
    <main style={{width:'100vw', overflowX:'hidden', background:'#fff'}}>
      {/* Header Section */}
      <section className="contact-hero" style={{background: 'linear-gradient(120deg, #b5eeb3 0%, #a7648a 100%)', color: '#fff', padding: '4rem 0', textAlign: 'center', width: '100%'}}>
        <div style={{paddingLeft: 'clamp(1rem, 5vw, 3rem)', paddingRight: 'clamp(1rem, 5vw, 3rem)'}}>
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} style={{fontFamily: 'Poppins, Nunito, Quicksand, sans-serif', fontSize: '2.5rem', fontWeight: 800, letterSpacing:'-1px', textShadow:'0 2px 16px #a7648a'}}>
            Contact Us
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }} style={{fontSize: '1.2rem', marginTop: '1.2rem', fontWeight: 500, fontFamily:'Open Sans, Inter, sans-serif', color:'#fff'}}>
            We'd love to hear from you!
          </motion.p>
        </div>
      </section>
      {/* Contact Info Section */}
      <section data-aos="fade-up" style={{padding: 'clamp(3rem, 8vw, 5rem) 0', background: '#fff', color: '#000', width: '100%'}}>
        <div style={{maxWidth:500, margin:'0 auto', background:'#f8f8f8', borderRadius:18, boxShadow:'0 2px 16px rgba(167,100,138,0.07)', padding:'2.5rem clamp(1rem, 5vw, 3rem)', display:'flex', flexDirection:'column', alignItems:'center', gap:'2.2rem'}}>
          {/* Email */}
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} style={{width:'100%', textAlign:'center'}}>
            <a href="mailto:kipepeoaptanzania@gmail.com" style={{display:'inline-flex', alignItems:'center', gap:10, fontFamily:'Open Sans, Inter, sans-serif', fontSize:'1.1rem', color:'#a7648a', textDecoration:'underline', fontWeight:600}}>
              <FontAwesomeIcon icon={faEnvelope} style={{fontSize:'1.5rem', color:'#a7648a'}}/>
              kipepeoaptanzania@gmail.com
            </a>
          </motion.div>
          {/* Instagram */}
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }} style={{width:'100%', textAlign:'center'}}>
            <a href="https://instagram.com/kipepeo_tanzania" target="_blank" rel="noopener noreferrer" style={{display:'inline-flex', alignItems:'center', gap:10, fontFamily:'Open Sans, Inter, sans-serif', fontSize:'1.1rem', color:'#a7648a', textDecoration:'underline', fontWeight:600}}>
              <FontAwesomeIcon icon={faInstagram} style={{fontSize:'1.5rem', color:'#a7648a'}}/>
              @kipepeo_tanzania
            </a>
          </motion.div>
          {/* Location Note */}
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }} style={{width:'100%', textAlign:'center'}}>
            <div style={{fontFamily:'Poppins, Nunito, sans-serif', fontWeight:700, fontSize:'1.15rem', color:'#a7648a', marginBottom:8}}>Location</div>
            <div style={{fontFamily:'Open Sans, Inter, sans-serif', fontSize:'1.1rem', color:'#000', background:'#b5eeb3', borderRadius:10, padding:'1rem 1.2rem', display:'inline-block', fontWeight:500, boxShadow:'0 2px 8px rgba(167,100,138,0.06)'}}>
              📍 We are located in Mto wa Mbu, less than 5 minutes from Jua Manyara Lodge and Camping.
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 