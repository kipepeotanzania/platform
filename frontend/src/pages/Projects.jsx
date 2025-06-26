import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Projects() {
  useEffect(() => { AOS.init({ duration: 1000, once: true }); }, []);
  return (
    <main>
      <section className="projects-hero" style={{background: 'var(--color-accent)', color: '#000', padding: '4rem 0', textAlign: 'center', width: '100%'}}>
        <div style={{paddingLeft: 'clamp(1rem, 5vw, 3rem)', paddingRight: 'clamp(1rem, 5vw, 3rem)'}}>
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} style={{fontFamily: 'Poppins, Nunito, Quicksand, sans-serif', fontSize: '2.5rem', fontWeight: 700}}>
            Our Projects
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }} style={{fontSize: '1.1rem', marginTop: '1.2rem', fontWeight: 400}}>
            Explore our initiatives and the positive change we create together.
          </motion.p>
        </div>
      </section>
      <section data-aos="fade-up" style={{padding: '3rem 0', background: '#fff', color: '#000', width: '100%'}}>
        <div style={{width: '100%', paddingLeft: 'clamp(1rem, 5vw, 3rem)', paddingRight: 'clamp(1rem, 5vw, 3rem)'}}>
          <h2 style={{fontFamily: 'Nunito, Poppins, Quicksand, sans-serif', fontWeight: 700, fontSize: '2rem', textAlign: 'center'}}>Initiatives</h2>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem', marginTop: '2rem', width: '100%'}}>
            {[1,2,3,4].map(i => (
              <motion.div key={i} whileHover={{ scale: 1.04 }} className="project-card" style={{background: 'var(--color-neutral)', borderRadius: 12, padding: '1.5rem', boxShadow: '0 2px 8px rgba(167,100,138,0.08)'}}>
                <div style={{height: 120, background: '#eee', borderRadius: 8, marginBottom: 16}}></div>
                <h3 style={{fontFamily: 'Poppins, Nunito, Quicksand, sans-serif', fontWeight: 600}}>Project Title {i}</h3>
                <p style={{fontSize: '1rem'}}>Short description of the project and its impact. [Placeholder]</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 