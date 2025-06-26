import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandsHelping, faUsers, faLightbulb, faLeaf, faHeart, faHandshake, faGlobeAfrica, faSeedling, faUser, faArrowDown, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import A1 from '../assets/A1.jpg';
import A2 from '../assets/A2.jpg';
import School from '../assets/School.jpg';
import PauloImg from '../assets/Paulo.jpg';
import AndreaImg from '../assets/Andrea.jpg';

const values = [
  { icon: faHandsHelping, label: 'Empowerment' },
  { icon: faUsers, label: 'Inclusivity' },
  { icon: faHandshake, label: 'Collaboration' },
  { icon: faHeart, label: 'Compassion' },
  { icon: faLightbulb, label: 'Innovation' },
  { icon: faLeaf, label: 'Sustainability' },
  { icon: faGlobeAfrica, label: 'Integrity' },
];

export default function AboutUs() {
  const teamRef = useRef(null);
  const navigate = useNavigate();
  useEffect(() => { AOS.init({ duration: 1000, once: true }); }, []);

  const scrollToTeam = () => teamRef.current?.scrollIntoView({ behavior: 'smooth' });

  return (
    <main style={{width:'100vw', overflowX:'hidden', background:'#fff'}}>
      {/* Hero Section */}
      <section style={{width:'100vw', minHeight:'70vh', background:'linear-gradient(120deg, #b5eeb3 0%, #a7648a 100%)', color:'#fff', display:'flex', alignItems:'center', justifyContent:'center', position:'relative', padding:'clamp(3rem, 8vw, 6rem) 0'}}>
        <div style={{position:'absolute', inset:0, zIndex:0, background:'url(about-hero.jpg) center/cover no-repeat', opacity:0.25}}></div>
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} style={{zIndex:1, textAlign:'center', width:'100%', maxWidth:900, margin:'0 auto', padding:'clamp(1rem, 5vw, 3rem)'}}>
          <h1 style={{fontFamily:'Poppins, Nunito, sans-serif', fontWeight:800, fontSize:'clamp(2.2rem, 5vw, 3.5rem)', color:'#fff', marginBottom:'1.2rem', letterSpacing:'-1px', textShadow:'0 2px 16px #a7648a'}}>Empowering Through Education, One Step at a Time</h1>
          <h2 style={{fontFamily:'Poppins, Nunito, sans-serif', fontWeight:600, fontSize:'1.4rem', color:'#b5eeb3', marginBottom:'2.2rem'}}>At Kipepeo Tanzania, we are driven by a shared passion for positive change and community empowerment.</h2>
          <div style={{display:'flex', flexWrap:'wrap', justifyContent:'center', gap:'1.2rem', marginBottom:'2.5rem'}}>
            <motion.button whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.97 }} onClick={scrollToTeam} style={{background:'#b5eeb3', color:'#a7648a', border:'none', borderRadius:30, padding:'1rem 2.5rem', fontWeight:700, fontSize:'1.1rem', fontFamily:'Poppins, Nunito, sans-serif', cursor:'pointer', boxShadow:'0 4px 16px rgba(167,100,138,0.10)', transition:'background 0.2s'}}>Meet Our Team <FontAwesomeIcon icon={faArrowDown} style={{marginLeft:8}}/></motion.button>
            <motion.button whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.97 }} onClick={()=>navigate('/volunteering')} style={{background:'#a7648a', color:'#fff', border:'none', borderRadius:30, padding:'1rem 2.5rem', fontWeight:700, fontSize:'1.1rem', fontFamily:'Poppins, Nunito, sans-serif', cursor:'pointer', boxShadow:'0 4px 16px rgba(167,100,138,0.10)', transition:'background 0.2s'}}>Join Our Mission <FontAwesomeIcon icon={faArrowRight} style={{marginLeft:8}}/></motion.button>
          </div>
        </motion.div>
      </section>

      {/* Our Journey Timeline */}
      <section style={{width:'100vw', background:'#fff', padding:'clamp(3rem, 8vw, 5rem) 0'}}>
        <h2 data-aos="fade-up" style={{fontFamily:'Poppins, Nunito, sans-serif', fontWeight:700, fontSize:'2rem', color:'#a7648a', textAlign:'center', marginBottom:'2.5rem'}}>From One Classroom to a Movement</h2>
        <div style={{display:'flex', flexDirection:'column', alignItems:'center', gap:'2.5rem', maxWidth:900, margin:'0 auto'}}>
          {/* Paulo */}
          <motion.div data-aos="fade-up" style={{display:'flex', flexWrap:'wrap', alignItems:'center', gap:'2.5rem', width:'100%'}}>
            <img src={A1} alt="A1" style={{width:160, height:160, borderRadius:'50%', objectFit:'cover', boxShadow:'0 2px 8px rgba(167,100,138,0.10)', background:'#eee'}}/>
            <div style={{flex:1, minWidth:220}}>
              <div style={{fontFamily:'Poppins, Nunito, sans-serif', fontWeight:700, fontSize:'1.15rem', color:'#a7648a', marginBottom:8}}>Paulo's Dream</div>
              <div style={{fontFamily:'Open Sans, Inter, sans-serif', fontSize:'1.08rem', color:'#000', lineHeight:1.7}}>
                Our journey begins with Paulo, a man of incredible heart and determination. Having left home at just 8 years old in search of a better future, Paulo was determined that other children wouldn't face the same hardship. His dream: to create a place they could call home and receive the education they deserve.
              </div>
            </div>
          </motion.div>
          {/* Andrea */}
          <motion.div data-aos="fade-up" style={{display:'flex', flexWrap:'wrap-reverse', alignItems:'center', gap:'2.5rem', width:'100%'}}>
            <div style={{flex:1, minWidth:220}}>
              <div style={{fontFamily:'Poppins, Nunito, sans-serif', fontWeight:700, fontSize:'1.15rem', color:'#a7648a', marginBottom:8}}>Andrea's Catalyst</div>
              <div style={{fontFamily:'Open Sans, Inter, sans-serif', fontSize:'1.08rem', color:'#000', lineHeight:1.7}}>
                In 2019, Andrea met Paulo and became a catalyst for transformation. Together, they turned a humble classroom into what today is Kipepeo Tanzania, officially founded in 2023. And we're just getting started — thanks to every person who joins us on this mission.
              </div>
            </div>
            <img src={A2} alt="A2" style={{width:160, height:160, borderRadius:'50%', objectFit:'cover', boxShadow:'0 2px 8px rgba(167,100,138,0.10)', background:'#eee'}}/>
          </motion.div>
          {/* School Building */}
          <motion.div data-aos="fade-up" style={{display:'flex', flexWrap:'wrap', alignItems:'center', gap:'2.5rem', width:'100%'}}>
            <img src={School} alt="First School Building" style={{width:220, height:140, borderRadius:18, objectFit:'cover', boxShadow:'0 2px 8px rgba(167,100,138,0.10)', background:'#eee'}}/>
            <div style={{flex:1, minWidth:220}}>
              <div style={{fontFamily:'Poppins, Nunito, sans-serif', fontWeight:700, fontSize:'1.15rem', color:'#a7648a', marginBottom:8}}>A Growing Movement</div>
              <div style={{fontFamily:'Open Sans, Inter, sans-serif', fontSize:'1.08rem', color:'#000', lineHeight:1.7}}>
                From a single classroom to a growing movement, Kipepeo Tanzania is proof that hope, partnership, and vision can change lives.
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Mission */}
      <section style={{width:'100vw', background:'#b5eeb3', padding:'clamp(2rem, 8vw, 4rem) 0'}}>
        <h2 data-aos="fade-up" style={{fontFamily:'Poppins, Nunito, sans-serif', fontWeight:700, fontSize:'2rem', color:'#a7648a', textAlign:'center', marginBottom:'1.5rem'}}>Our Mission</h2>
        <div data-aos="fade-up" style={{fontFamily:'Open Sans, Inter, sans-serif', fontSize:'1.15rem', color:'#000', textAlign:'center', maxWidth:700, margin:'0 auto', lineHeight:1.7}}>
          At Kipepeo Tanzania, our mission is to ignite hope, inspire change, and empower communities through education, innovation, and sustainable development.
        </div>
      </section>

      {/* What Drives Us: Core Values */}
      <section style={{width:'100vw', background:'#fff', padding:'clamp(2rem, 8vw, 4rem) 0'}}>
        <h2 data-aos="fade-up" style={{fontFamily:'Poppins, Nunito, sans-serif', fontWeight:700, fontSize:'2rem', color:'#a7648a', textAlign:'center', marginBottom:'2.5rem'}}>What Drives Us</h2>
        <div data-aos="fade-up" style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(180px, 1fr))', gap:'2rem', maxWidth:900, margin:'0 auto', justifyItems:'center'}}>
          {values.map((v, i) => (
            <motion.div key={v.label} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: i*0.08 }} style={{background:'#b5eeb3', borderRadius:16, boxShadow:'0 2px 8px rgba(167,100,138,0.08)', padding:'2rem 1.2rem', textAlign:'center', display:'flex', flexDirection:'column', alignItems:'center', gap:'1rem'}}>
              <FontAwesomeIcon icon={v.icon} style={{fontSize:'2.2rem', color:'#a7648a', marginBottom:8}}/>
              <div style={{fontFamily:'Poppins, Nunito, sans-serif', fontWeight:700, fontSize:'1.1rem', color:'#a7648a'}}>{v.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Our Commitment */}
      <section style={{width:'100vw', background:'#aa9a99', padding:'clamp(2rem, 8vw, 4rem) 0'}}>
        <h2 data-aos="fade-up" style={{fontFamily:'Poppins, Nunito, sans-serif', fontWeight:700, fontSize:'2rem', color:'#fff', textAlign:'center', marginBottom:'1.5rem'}}>Our Commitment</h2>
        <div data-aos="fade-up" style={{fontFamily:'Open Sans, Inter, sans-serif', fontSize:'1.15rem', color:'#fff', textAlign:'center', maxWidth:700, margin:'0 auto', lineHeight:1.7}}>
          Our approach is holistic. We don't just support education; we nurture growth, resilience, and self-confidence. We work hand in hand with our local community, ensuring every action is sustainable and meaningful.
        </div>
      </section>

      {/* Meet the Team */}
      <section ref={teamRef} style={{width:'100vw', background:'#fff', padding:'clamp(3rem, 8vw, 5rem) 0'}}>
        <h2 data-aos="fade-up" style={{fontFamily:'Poppins, Nunito, sans-serif', fontWeight:700, fontSize:'2rem', color:'#a7648a', textAlign:'center', marginBottom:'2.5rem'}}>Meet the Team</h2>
        <div data-aos="fade-up" style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(220px, 1fr))', gap:'2.5rem', maxWidth:700, margin:'0 auto', justifyItems:'center'}}>
          {/* Paulo */}
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} style={{background:'#b5eeb3', borderRadius:16, boxShadow:'0 2px 8px rgba(167,100,138,0.08)', padding:'2rem 1.2rem', textAlign:'center', display:'flex', flexDirection:'column', alignItems:'center', gap:'1rem'}}>
            <img src={PauloImg} alt="Paulo" style={{width:120, height:120, borderRadius:'50%', objectFit:'cover', boxShadow:'0 2px 8px rgba(167,100,138,0.10)', background:'#eee', marginBottom:12}}/>
            <div style={{fontFamily:'Poppins, Nunito, sans-serif', fontWeight:700, fontSize:'1.1rem', color:'#a7648a'}}>Paulo</div>
            <div style={{fontFamily:'Open Sans, Inter, sans-serif', fontSize:'1rem', color:'#000'}}>Founder</div>
          </motion.div>
          {/* Andrea */}
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }} style={{background:'#b5eeb3', borderRadius:16, boxShadow:'0 2px 8px rgba(167,100,138,0.08)', padding:'2rem 1.2rem', textAlign:'center', display:'flex', flexDirection:'column', alignItems:'center', gap:'1rem'}}>
            <img src={AndreaImg} alt="Andrea" style={{width:120, height:120, borderRadius:'50%', objectFit:'cover', boxShadow:'0 2px 8px rgba(167,100,138,0.10)', background:'#eee', marginBottom:12}}/>
            <div style={{fontFamily:'Poppins, Nunito, sans-serif', fontWeight:700, fontSize:'1.1rem', color:'#a7648a'}}>Andrea</div>
            <div style={{fontFamily:'Open Sans, Inter, sans-serif', fontSize:'1rem', color:'#000'}}>Co-Founder</div>
          </motion.div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section style={{width:'100vw', background:'#b5eeb3', padding:'clamp(3rem, 8vw, 5rem) 0', textAlign:'center'}}>
        <motion.h2 data-aos="fade-up" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} style={{fontFamily:'Poppins, Nunito, sans-serif', fontWeight:800, fontSize:'2.2rem', color:'#a7648a', marginBottom:'2rem'}}>
          ✨ Join Us in Making a Difference
        </motion.h2>
        <motion.p data-aos="fade-up" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.2 }} style={{fontFamily:'Open Sans, Inter, sans-serif', fontSize:'1.15rem', color:'#000', marginBottom:'2.5rem', maxWidth:700, marginLeft:'auto', marginRight:'auto'}}>
          We invite you to be part of our transformational journey. Whether by volunteering, fundraising, or simply spreading the word — every action helps us get closer to a future where every child can soar.
        </motion.p>
        <motion.button whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.97 }} onClick={()=>navigate('/contact')} style={{background:'#a7648a', color:'#fff', border:'none', borderRadius:30, padding:'1rem 2.5rem', fontWeight:700, fontSize:'1.1rem', fontFamily:'Poppins, Nunito, sans-serif', cursor:'pointer', boxShadow:'0 4px 16px rgba(167,100,138,0.10)', transition:'background 0.2s'}}>Get Involved</motion.button>
      </section>
    </main>
  );
} 