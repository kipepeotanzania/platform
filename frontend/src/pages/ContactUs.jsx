import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function ContactUs() {
  useEffect(() => { AOS.init({ duration: 1000, once: true }); }, []);
  return (
    <main>
      <section className="contact-hero" style={{background: 'var(--color-primary)', color: '#fff', padding: '4rem 0', textAlign: 'center', width: '100%'}}>
        <div style={{paddingLeft: 'clamp(1rem, 5vw, 3rem)', paddingRight: 'clamp(1rem, 5vw, 3rem)'}}>
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} style={{fontFamily: 'Poppins, Nunito, Quicksand, sans-serif', fontSize: '2.5rem', fontWeight: 700}}>
            Contact Us
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }} style={{fontSize: '1.1rem', marginTop: '1.2rem', fontWeight: 400}}>
            We would love to hear from you! Fill out the form below or find us on the map.
          </motion.p>
        </div>
      </section>
      <section data-aos="fade-up" style={{padding: '3rem 0', background: '#fff', color: '#000', width: '100%'}}>
        <div style={{textAlign: 'center', width: '100%', paddingLeft: 'clamp(1rem, 5vw, 3rem)', paddingRight: 'clamp(1rem, 5vw, 3rem)'}}>
          <form style={{display: 'flex', flexDirection: 'column', gap: '1.2rem', maxWidth: 400, margin: '0 auto'}}>
            <input type="text" placeholder="Your Name" required style={{padding: '0.7rem 1rem', borderRadius: 6, border: '1px solid var(--color-primary)', fontSize: '1rem'}} />
            <input type="email" placeholder="Your Email" required style={{padding: '0.7rem 1rem', borderRadius: 6, border: '1px solid var(--color-primary)', fontSize: '1rem'}} />
            <textarea placeholder="Your Message" required rows={5} style={{padding: '0.7rem 1rem', borderRadius: 6, border: '1px solid var(--color-primary)', fontSize: '1rem'}} />
            <button type="submit" style={{background: 'var(--color-primary)', color: '#fff', border: 'none', borderRadius: 6, padding: '0.7rem 1.2rem', fontWeight: 600, fontSize: '1rem', cursor: 'pointer', transition: 'background 0.2s'}}>Send Message</button>
          </form>
          <div style={{marginTop: '2.5rem'}}>
            <div style={{width: '100%', height: 250, background: '#b5eeb3', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#a7648a', fontWeight: 700, fontSize: '1.2rem'}}>
              [Map Placeholder]
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 