import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function AboutUs() {
  useEffect(() => { AOS.init({ duration: 1000, once: true }); }, []);
  return (
    <main>
      <section className="about-hero" style={{background: 'var(--color-primary)', color: '#fff', padding: '4rem 0', textAlign: 'center', width: '100%'}}>
        <div style={{paddingLeft: 'clamp(1rem, 5vw, 3rem)', paddingRight: 'clamp(1rem, 5vw, 3rem)'}}>
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} style={{fontFamily: 'Poppins, Nunito, Quicksand, sans-serif', fontSize: '2.5rem', fontWeight: 700}}>
            About Us
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }} style={{fontSize: '1.1rem', marginTop: '1.2rem', fontWeight: 400}}>
            Our story, our team, our passion for change.
          </motion.p>
        </div>
      </section>
      <section data-aos="fade-up" style={{padding: '3rem 0', background: '#fff', color: '#000', width: '100%'}}>
        <div style={{textAlign: 'center', width: '100%', paddingLeft: 'clamp(1rem, 5vw, 3rem)', paddingRight: 'clamp(1rem, 5vw, 3rem)'}}>
          <h2 style={{fontFamily: 'Nunito, Poppins, Quicksand, sans-serif', fontWeight: 700, fontSize: '2rem'}}>Our Story</h2>
          <p style={{fontSize: '1.1rem', marginTop: '1rem'}}>Kipepeo was founded to bridge cultures and empower communities. [Placeholder for story]</p>
          <div style={{display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '2rem', flexWrap: 'wrap', width: '100%'}}>
            {[1,2,3].map(i => (
              <motion.div key={i} whileHover={{ scale: 1.04 }} className="team-card" style={{background: 'var(--color-neutral)', borderRadius: 12, padding: '1.5rem', minWidth: 220, boxShadow: '0 2px 8px rgba(167,100,138,0.08)'}}>
                <div style={{height: 100, width: 100, background: '#eee', borderRadius: '50%', margin: '0 auto 1rem'}}></div>
                <h3 style={{fontFamily: 'Poppins, Nunito, Quicksand, sans-serif', fontWeight: 600}}>Team Member {i}</h3>
                <p style={{fontSize: '1rem'}}>Role/Title<br/>[Placeholder]</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 