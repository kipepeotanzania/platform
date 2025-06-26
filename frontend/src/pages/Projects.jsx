import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop, faBook, faBed, faUtensils } from '@fortawesome/free-solid-svg-icons';
import P1 from '../assets/P1.jpg';
import P2 from '../assets/P2.jpg';
import P3 from '../assets/P3.jpg';
import P4 from '../assets/P4.jpg';
import Pg1 from '../assets/Pg1.jpg';
import Pg2 from '../assets/Pg2.jpg';
import Pg3 from '../assets/Pg3.jpg';
import Pg4 from '../assets/Pg4.jpg';
import Pg5 from '../assets/Pg5.jpg';
import Pg6 from '../assets/Pg6.jpg';
import Pg7 from '../assets/Pg7.jpg';
import Pg8 from '../assets/Pg8.jpg';
import Pg9 from '../assets/Pg9.jpg';
import Pg10 from '../assets/Pg10.jpg';
import Pg11 from '../assets/Pg11.jpg';
import Pg12 from '../assets/Pg12.jpg';

const galleryImages = [Pg1, Pg2, Pg3, Pg4, Pg5, Pg6, Pg7, Pg8, Pg9, Pg10, Pg11, Pg12];

export default function Projects() {
  useEffect(() => { AOS.init({ duration: 1000, once: true }); }, []);
  return (
    <main style={{width:'100vw', overflowX:'hidden', background:'#fff'}}>
      {/* Header */}
      <section style={{background:'linear-gradient(120deg, #b5eeb3 0%, #a7648a 100%)', color:'#fff', padding:'4rem 0 2.5rem', textAlign:'center', width:'100%'}}>
        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} style={{fontFamily: 'Poppins, Nunito, Quicksand, sans-serif', fontSize: '2.5rem', fontWeight: 800, marginBottom:'1.2rem', letterSpacing:'-1px'}}>
          Our Projects
        </motion.h1>
        <motion.h2 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }} style={{fontFamily:'Poppins, Nunito, sans-serif', fontWeight:700, fontSize:'1.4rem', color:'#b5eeb3', marginBottom:'1.2rem'}}>Driving lasting impact, one project at a time.</motion.h2>
        <motion.p initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4 }} style={{fontSize: '1.15rem', marginTop: '1.2rem', fontWeight: 400, fontFamily:'Open Sans, Inter, sans-serif', maxWidth:700, marginLeft:'auto', marginRight:'auto'}}>
          At Kipepeo Tanzania, we're committed to driving positive change and empowering communities through a variety of impactful initiatives. Our projects are designed to address critical needs, foster sustainable development, and create long-term impact across Tanzania.
        </motion.p>
      </section>

      {/* Project 1: Digital Futures */}
      <section style={{width:'100vw', background:'#fff', padding:'clamp(2rem, 8vw, 5rem) 0'}}>
        <div data-aos="fade-up" style={{display:'flex', flexWrap:'wrap', alignItems:'center', justifyContent:'center', gap:'2.5rem', maxWidth:1100, margin:'0 auto'}}>
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} style={{flex:'1 1 340px', minWidth:260, maxWidth:480, background:'#b5eeb3', borderRadius:18, boxShadow:'0 2px 8px rgba(167,100,138,0.10)', padding:'2.2rem 1.5rem', display:'flex', flexDirection:'column', alignItems:'flex-start', gap:'1.2rem'}}>
            <FontAwesomeIcon icon={faLaptop} style={{fontSize:'2.5rem', color:'#a7648a', marginBottom:8}}/>
            <h3 style={{fontFamily:'Poppins, Nunito, sans-serif', fontWeight:700, fontSize:'1.3rem', color:'#a7648a', margin:'0 0 0.5rem'}}>Digital Futures: IT Class Project</h3>
            <div style={{fontFamily:'Open Sans, Inter, sans-serif', fontSize:'1.08rem', color:'#000', marginBottom:'0.7rem'}}>Empowering children through access to digital skills and hands-on IT education.</div>
            <ul style={{fontFamily:'Open Sans, Inter, sans-serif', fontSize:'1.05rem', color:'#000', paddingLeft:18, margin:0, lineHeight:1.7}}>
              <li>Equip children with essential IT skills (coding, internet, software use)</li>
              <li>Provide computers and technology infrastructure to underserved schools</li>
              <li>Foster creativity and critical thinking through experiential learning</li>
              <li>Support long-term opportunities for students in tech</li>
            </ul>
          </motion.div>
          <motion.img initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} src={P1} alt="IT Class Project" style={{width:'100%', maxWidth:380, borderRadius:18, boxShadow:'0 2px 8px rgba(167,100,138,0.10)', objectFit:'cover', aspectRatio:'4/3', background:'#eee'}}/>
        </div>
      </section>

      {/* Project 2: Imagination Station */}
      <section style={{width:'100vw', background:'#f8f8f8', padding:'clamp(2rem, 8vw, 5rem) 0'}}>
        <div data-aos="fade-up" style={{display:'flex', flexWrap:'wrap-reverse', alignItems:'center', justifyContent:'center', gap:'2.5rem', maxWidth:1100, margin:'0 auto'}}>
          <motion.img initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} src={P2} alt="Library Project" style={{width:'100%', maxWidth:380, borderRadius:18, boxShadow:'0 2px 8px rgba(167,100,138,0.10)', objectFit:'cover', aspectRatio:'4/3', background:'#eee'}}/>
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} style={{flex:'1 1 340px', minWidth:260, maxWidth:480, background:'#fff', borderRadius:18, boxShadow:'0 2px 8px rgba(167,100,138,0.10)', padding:'2.2rem 1.5rem', display:'flex', flexDirection:'column', alignItems:'flex-start', gap:'1.2rem'}}>
            <FontAwesomeIcon icon={faBook} style={{fontSize:'2.5rem', color:'#a7648a', marginBottom:8}}/>
            <h3 style={{fontFamily:'Poppins, Nunito, sans-serif', fontWeight:700, fontSize:'1.3rem', color:'#a7648a', margin:'0 0 0.5rem'}}>Imagination Station: Our Library Project</h3>
            <div style={{fontFamily:'Open Sans, Inter, sans-serif', fontSize:'1.08rem', color:'#000', marginBottom:'0.7rem'}}>Where learning meets creativity, play, and curiosity.</div>
            <ul style={{fontFamily:'Open Sans, Inter, sans-serif', fontSize:'1.05rem', color:'#000', paddingLeft:18, margin:0, lineHeight:1.7}}>
              <li>Foster a love for reading and improve literacy</li>
              <li>Provide access to books, board games, and craft supplies</li>
              <li>Weekly library schedule for all student levels</li>
              <li>Encourage teamwork through social and creative engagement</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Project 3: Dormitories */}
      <section style={{width:'100vw', background:'#fff', padding:'clamp(2rem, 8vw, 5rem) 0'}}>
        <div data-aos="fade-up" style={{display:'flex', flexWrap:'wrap', alignItems:'center', justifyContent:'center', gap:'2.5rem', maxWidth:1100, margin:'0 auto'}}>
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} style={{flex:'1 1 340px', minWidth:260, maxWidth:480, background:'#aa9a99', borderRadius:18, boxShadow:'0 2px 8px rgba(167,100,138,0.10)', padding:'2.2rem 1.5rem', display:'flex', flexDirection:'column', alignItems:'flex-start', gap:'1.2rem'}}>
            <FontAwesomeIcon icon={faBed} style={{fontSize:'2.5rem', color:'#a7648a', marginBottom:8}}/>
            <h3 style={{fontFamily:'Poppins, Nunito, sans-serif', fontWeight:700, fontSize:'1.3rem', color:'#a7648a', margin:'0 0 0.5rem'}}>A Place to Call Home: Dormitories</h3>
            <div style={{fontFamily:'Open Sans, Inter, sans-serif', fontSize:'1.08rem', color:'#000', marginBottom:'0.7rem'}}>Rebuilding childhood with dignity, safety, and care.</div>
            <ul style={{fontFamily:'Open Sans, Inter, sans-serif', fontSize:'1.05rem', color:'#000', paddingLeft:18, margin:0, lineHeight:1.7}}>
              <li>New dormitory built in 2024 for girls and babies</li>
              <li>Plans to renovate the old dormitory for the boys</li>
              <li>Children provided with individual beds and better living conditions</li>
              <li>Emphasis on holistic support: education, nutrition, safety</li>
            </ul>
          </motion.div>
          <motion.img initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} src={P3} alt="Dormitory Project" style={{width:'100%', maxWidth:380, borderRadius:18, boxShadow:'0 2px 8px rgba(167,100,138,0.10)', objectFit:'cover', aspectRatio:'4/3', background:'#eee'}}/>
        </div>
      </section>

      {/* Project 4: Kitchen & Dining */}
      <section style={{width:'100vw', background:'#fff', padding:'clamp(2rem, 8vw, 5rem) 0'}}>
        <div data-aos="fade-up" style={{display:'flex', flexWrap:'wrap-reverse', alignItems:'center', justifyContent:'center', gap:'2.5rem', maxWidth:1100, margin:'0 auto'}}>
          <motion.img initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} src={P4} alt="Kitchen & Dining Project" style={{width:'100%', maxWidth:380, borderRadius:18, boxShadow:'0 2px 8px rgba(167,100,138,0.10)', objectFit:'cover', aspectRatio:'4/3', background:'#eee'}}/>
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} style={{flex:'1 1 340px', minWidth:260, maxWidth:480, background:'#b5eeb3', borderRadius:18, boxShadow:'0 2px 8px rgba(167,100,138,0.10)', padding:'2.2rem 1.5rem', display:'flex', flexDirection:'column', alignItems:'flex-start', gap:'1.2rem'}}>
            <FontAwesomeIcon icon={faUtensils} style={{fontSize:'2.5rem', color:'#a7648a', marginBottom:8}}/>
            <h3 style={{fontFamily:'Poppins, Nunito, sans-serif', fontWeight:700, fontSize:'1.3rem', color:'#a7648a', margin:'0 0 0.5rem'}}>Together at the Table: Kitchen & Dining Project</h3>
            <div style={{fontFamily:'Open Sans, Inter, sans-serif', fontSize:'1.08rem', color:'#000', marginBottom:'0.7rem'}}>More than meals — a space for connection, celebration, and family.</div>
            <ul style={{fontFamily:'Open Sans, Inter, sans-serif', fontSize:'1.05rem', color:'#000', paddingLeft:18, margin:0, lineHeight:1.7}}>
              <li>New kitchen and dining room built in partnership with Jeunesse Sans Frontières</li>
              <li>Replaces unsafe, basic kitchen with modern infrastructure</li>
              <li>Shared space for children to eat, socialize</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section style={{width:'100vw', background:'#fff', padding:'clamp(2rem, 8vw, 5rem) 0', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
        <h2 data-aos="fade-up" style={{fontFamily:'Poppins, Nunito, sans-serif', fontWeight:700, fontSize:'2rem', color:'#a7648a', textAlign:'center', marginBottom:'2.5rem', width:'100%'}}>🌈 Project Gallery</h2>
        <div style={{
          display:'grid',
          gridTemplateColumns:'repeat(4, 1fr)',
          gap:'1.5rem',
          padding:'0 clamp(1rem, 5vw, 3rem)',
          maxWidth:1100,
          width:'100%',
          margin:'0 auto',
        }}>
          {galleryImages.map((img, i) => (
            <motion.div key={img} data-aos="fade-up" data-aos-delay={i*60} whileHover={{ scale: 1.04 }} style={{overflow:'hidden', borderRadius:16, boxShadow:'0 2px 8px rgba(167,100,138,0.08)', cursor:'pointer', position:'relative', maxWidth:260, width:'100%', aspectRatio:'4/3', background:'#eee', margin:'0 auto'}}>
              <img src={img} alt={`Project Gallery ${i+1}`} style={{width:'100%', height:'100%', display:'block', objectFit:'cover', borderRadius:16, aspectRatio:'4/3'}}/>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
} 