import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faHome, faUtensils, faDollarSign, faReceipt, faCalendarAlt, faSun, faBookOpen, faChalkboardTeacher, faGamepad, faClock, faMusic, faPaintBrush, faSmile, faTree, faMapMarkedAlt, faGlobeAfrica, faLaptop, faUsers, faLightbulb, faEnvelope, faCamera, faMountain, faHandsHelping } from '@fortawesome/free-solid-svg-icons';

const galleryImages = [
  { src: 'gallery1.jpg', caption: 'Volunteers at Kilimamoja School' },
  { src: 'gallery2.jpg', caption: 'Cultural exchange & music night' },
  { src: 'gallery3.jpg', caption: 'Sports with the children' },
  { src: 'gallery4.jpg', caption: 'Exploring local markets' },
  { src: 'gallery5.jpg', caption: 'Weekend safari adventure' },
  { src: 'gallery6.jpg', caption: 'Home-cooked meals with Eli' },
];

const timeline = [
  { time: '7:30 AM', icon: faSun, desc: 'Wake up and open the school with the children' },
  { time: '8:00 AM', icon: faUtensils, desc: 'Breakfast prepared by Chef Exaude' },
  { time: '9:00 AM', icon: faChalkboardTeacher, desc: 'Assist teachers or lead activities (sports, IT, arts)' },
  { time: '1:00 PM', icon: faUtensils, desc: 'Lunch break with volunteers and kids' },
  { time: '3:20 PM', icon: faBookOpen, desc: 'Afternoon volunteer-led workshops (schedule rotates)' },
  { time: '4:30 PM', icon: faPaintBrush, desc: 'Free time: explore the town, art, woodwork, or relax' },
  { time: '8:00 PM', icon: faMusic, desc: 'Dinner and cultural entertainment: music, dance, acrobatics' },
];

export default function Volunteering() {
  const [tab, setTab] = useState('tanzania');
  useEffect(() => { AOS.init({ duration: 1000, once: true }); }, []);

  return (
    <main style={{width:'100vw', overflowX:'hidden', background:'#fff'}}>
      {/* Banner Intro */}
      <section style={{background:'linear-gradient(120deg, #b5eeb3 0%, #a7648a 100%)', color:'#fff', padding:'4rem 0 2.5rem', textAlign:'center', width:'100%'}}>
        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} style={{fontFamily: 'Poppins, Nunito, Quicksand, sans-serif', fontSize: '2.5rem', fontWeight: 800, marginBottom:'1.2rem', letterSpacing:'-1px'}}>
          Make a Difference with Kipepeo Tanzania
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }} style={{fontSize: '1.2rem', marginTop: '1.2rem', fontWeight: 400, fontFamily:'Open Sans, Inter, sans-serif', maxWidth:600, marginLeft:'auto', marginRight:'auto'}}>
          Whether you travel across the globe or support us from home, your work matters. Volunteering with Kipepeo means creating lasting impact in a community built on hope, connection, and change.
        </motion.p>
      </section>

      {/* Tab Switch */}
      <section style={{width:'100vw', background:'#fff', textAlign:'center', padding:'2rem 0 0.5rem'}}>
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', gap:0}}>
          <button onClick={()=>setTab('tanzania')} style={{padding:'0.9rem 2.5rem', fontFamily:'Poppins, Nunito, sans-serif', fontWeight:700, fontSize:'1.1rem', color:tab==='tanzania'?'#fff':'#a7648a', background:tab==='tanzania'?'#a7648a':'#b5eeb3', border:'none', borderRadius:'30px 0 0 30px', cursor:'pointer', transition:'background 0.2s', boxShadow:tab==='tanzania'?'0 4px 16px rgba(167,100,138,0.10)':'none'}}>Volunteer in Tanzania</button>
          <button onClick={()=>setTab('home')} style={{padding:'0.9rem 2.5rem', fontFamily:'Poppins, Nunito, sans-serif', fontWeight:700, fontSize:'1.1rem', color:tab==='home'?'#fff':'#a7648a', background:tab==='home'?'#a7648a':'#b5eeb3', border:'none', borderRadius:'0 30px 30px 0', cursor:'pointer', transition:'background 0.2s', boxShadow:tab==='home'?'0 4px 16px rgba(167,100,138,0.10)':'none'}}>Volunteer from Home</button>
        </div>
      </section>

      {/* Tab Content */}
      <section style={{width:'100vw', background:'#fff', minHeight:400, padding:'2rem 0'}}>
        {tab==='tanzania' ? (
          <motion.div key="tanzania" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} style={{maxWidth:1000, margin:'0 auto', padding:'0 clamp(1rem, 5vw, 3rem)'}}>
            {/* Location & Accommodation */}
            <h2 data-aos="fade-up" style={{fontFamily:'Poppins, Nunito, sans-serif', fontWeight:700, fontSize:'2rem', color:'#a7648a', marginBottom:'1.5rem', textAlign:'center'}}>✈️ Volunteer in Tanzania</h2>
            <div data-aos="fade-up" style={{display:'flex', flexWrap:'wrap', gap:'2.5rem', alignItems:'flex-start', justifyContent:'center', marginBottom:'2.5rem'}}>
              <img src="house-placeholder.jpg" alt="Local house near school" style={{width:'100%', maxWidth:260, borderRadius:18, boxShadow:'0 2px 8px rgba(167,100,138,0.10)', objectFit:'cover', aspectRatio:'4/3', background:'#eee'}}/>
              <img src="kitchen-placeholder.jpg" alt="Shared meals or kitchen" style={{width:'100%', maxWidth:260, borderRadius:18, boxShadow:'0 2px 8px rgba(167,100,138,0.10)', objectFit:'cover', aspectRatio:'4/3', background:'#eee'}}/>
              <img src="room-placeholder.jpg" alt="Room or surrounding nature" style={{width:'100%', maxWidth:260, borderRadius:18, boxShadow:'0 2px 8px rgba(167,100,138,0.10)', objectFit:'cover', aspectRatio:'4/3', background:'#eee'}}/>
              <div style={{flex:'1 1 320px', minWidth:260, maxWidth:420, marginTop:16}}>
                <ul style={{listStyle:'none', padding:0, margin:0, fontFamily:'Open Sans, Inter, sans-serif', fontSize:'1.08rem', color:'#000', lineHeight:1.7}}>
                  <li><FontAwesomeIcon icon={faHome} style={{color:'#a7648a', marginRight:8}}/> Accommodation is located between Kilimamoja School and Jua Manyara Lodge (5-minute walk).</li>
                  <li><FontAwesomeIcon icon={faUtensils} style={{color:'#a7648a', marginRight:8}}/> Daily meals prepared by Chef Exaude.</li>
                  <li><FontAwesomeIcon icon={faDollarSign} style={{color:'#a7648a', marginRight:8}}/> <b>Cost:</b> $15/day for food, filtered water, and housing.</li>
                  <li><FontAwesomeIcon icon={faReceipt} style={{color:'#a7648a', marginRight:8}}/> <b>One-time registration fee:</b> $150.</li>
                  <li><FontAwesomeIcon icon={faCalendarAlt} style={{color:'#a7648a', marginRight:8}}/> <b>Minimum stay:</b> 21 days (longer stays welcome with advance notice).</li>
                </ul>
              </div>
            </div>

            {/* Day in the Life Timeline */}
            <h3 data-aos="fade-up" style={{fontFamily:'Poppins, Nunito, sans-serif', fontWeight:700, fontSize:'1.3rem', color:'#a7648a', margin:'2.5rem 0 1.2rem', textAlign:'center'}}>⏰ A Day in the Life of a Volunteer</h3>
            <div data-aos="fade-up" style={{display:'flex', flexDirection:'column', gap:'1.5rem', marginBottom:'2.5rem', maxWidth:700, marginLeft:'auto', marginRight:'auto'}}>
              {timeline.map((item, i) => (
                <motion.div key={item.time} data-aos="fade-up" data-aos-delay={i*60} whileHover={{ scale: 1.02 }} style={{display:'flex', alignItems:'center', background:'#f8f8f8', borderRadius:14, boxShadow:'0 2px 8px rgba(167,100,138,0.06)', padding:'1.1rem 1.2rem', gap:18, minWidth:220}}>
                  <div style={{fontFamily:'Poppins, Nunito, sans-serif', fontWeight:700, fontSize:'1.1rem', color:'#a7648a', minWidth:90, textAlign:'right'}}>{item.time}</div>
                  <FontAwesomeIcon icon={item.icon} style={{fontSize:'1.2rem', color:'#b5eeb3', marginRight:8}}/>
                  <div style={{fontFamily:'Open Sans, Inter, sans-serif', fontSize:'1.05rem', color:'#000'}}>{item.desc}</div>
                </motion.div>
              ))}
            </div>
            {/* Timeline Images */}
            <div data-aos="fade-up" style={{display:'flex', flexWrap:'wrap', gap:'2rem', justifyContent:'center', marginBottom:'2.5rem'}}>
              <img src="classroom-placeholder.jpg" alt="Classroom time" style={{width:'100%', maxWidth:260, borderRadius:14, boxShadow:'0 2px 8px rgba(167,100,138,0.10)', objectFit:'cover', aspectRatio:'4/3', background:'#eee'}}/>
              <img src="workshop-placeholder.jpg" alt="Volunteer workshops" style={{width:'100%', maxWidth:260, borderRadius:14, boxShadow:'0 2px 8px rgba(167,100,138,0.10)', objectFit:'cover', aspectRatio:'4/3', background:'#eee'}}/>
              <img src="shared-moments-placeholder.jpg" alt="Shared moments with kids" style={{width:'100%', maxWidth:260, borderRadius:14, boxShadow:'0 2px 8px rgba(167,100,138,0.10)', objectFit:'cover', aspectRatio:'4/3', background:'#eee'}}/>
            </div>

            {/* Explore on Weekends */}
            <h3 data-aos="fade-up" style={{fontFamily:'Poppins, Nunito, sans-serif', fontWeight:700, fontSize:'1.3rem', color:'#a7648a', margin:'2.5rem 0 1.2rem', textAlign:'center'}}>🌍 Explore on the Weekends</h3>
            <div data-aos="fade-up" style={{display:'flex', flexWrap:'wrap', alignItems:'center', justifyContent:'center', gap:'2.5rem', marginBottom:'2.5rem'}}>
              <div style={{flex:'1 1 320px', minWidth:260, maxWidth:420}}>
                <p style={{fontFamily:'Open Sans, Inter, sans-serif', fontSize:'1.08rem', color:'#000', lineHeight:1.7}}>
                  Kipepeo is located near Serengeti, Ngorongoro Crater, Lake Manyara, and Tarangire. Volunteers can explore these national parks and local excursions — all trips are arranged with the help of our team.
                </p>
              </div>
              <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} style={{width:'100%', maxWidth:520, borderRadius:18, boxShadow:'0 4px 16px rgba(167,100,138,0.10)', overflow:'hidden', minHeight:220, background:'#eee'}}>
                <img src="scenic-placeholder.jpg" alt="Scenic wildlife or safari" style={{width:'100%', height:'100%', objectFit:'cover', display:'block'}}/>
              </motion.div>
            </div>

            {/* Volunteer Gallery (only in this tab) */}
            <section style={{width:'100vw', background:'#fff', padding:'clamp(2rem, 8vw, 5rem) 0', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
              <h2 data-aos="fade-up" style={{fontFamily:'Poppins, Nunito, sans-serif', fontWeight:700, fontSize:'2rem', color:'#a7648a', textAlign:'center', marginBottom:'2.5rem', width:'100%'}}>📸 Volunteer Gallery</h2>
              <div style={{
                display:'grid',
                gridTemplateColumns:'repeat(auto-fit, minmax(220px, 1fr))',
                gap:'1.5rem',
                maxWidth:1100,
                width:'100%',
                justifyItems:'center',
                alignItems:'stretch',
                margin:'0 auto',
                padding:0
              }}>
                {galleryImages.map((img, i) => (
                  <motion.div
                    key={img.src}
                    data-aos="fade-up"
                    data-aos-delay={i*80}
                    whileHover={{ scale: 1.04 }}
                    style={{
                      background:'#b5eeb3',
                      borderRadius:16,
                      boxShadow:'0 2px 8px rgba(167,100,138,0.08)',
                      padding:0,
                      textAlign:'center',
                      minWidth:0,
                      width:'100%',
                      maxWidth:320,
                      cursor:'pointer',
                      transition:'box-shadow 0.2s',
                      position:'relative',
                      overflow:'hidden',
                      aspectRatio:'4/3',
                      display:'flex',
                      flexDirection:'column',
                      justifyContent:'flex-end',
                    }}
                  >
                    <motion.img
                      src={img.src}
                      alt={img.caption}
                      style={{width:'100%', height:'100%', objectFit:'cover', borderRadius:16, transition:'transform 0.4s'}}
                      whileHover={{ scale: 1.07 }}
                    />
                    <motion.div
                      initial={{ opacity: 0.85 }}
                      whileHover={{ opacity: 1 }}
                      style={{
                        position:'absolute',
                        bottom:0,
                        left:0,
                        right:0,
                        background:'rgba(167,100,138,0.80)',
                        color:'#fff',
                        fontFamily:'Open Sans, Inter, sans-serif',
                        fontSize:'1rem',
                        fontWeight:600,
                        padding:'0.7rem 1rem',
                        borderBottomLeftRadius:16,
                        borderBottomRightRadius:16,
                        opacity:0.85,
                        transition:'opacity 0.3s',
                        textAlign:'center',
                        pointerEvents:'none',
                      }}
                    >
                      {img.caption}
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* CTA */}
            <div data-aos="fade-up" style={{display:'flex', justifyContent:'center', alignItems:'center', marginTop:'3rem', marginBottom:'2rem'}}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                style={{
                  background:'#b5eeb3',
                  borderRadius:24,
                  boxShadow:'0 4px 24px rgba(167,100,138,0.10)',
                  padding:'2.5rem clamp(1rem, 5vw, 3rem)',
                  maxWidth:600,
                  width:'100%',
                  textAlign:'center',
                  display:'flex',
                  flexDirection:'column',
                  alignItems:'center',
                }}
              >
                <div style={{fontFamily:'Poppins, Nunito, sans-serif', fontWeight:800, fontSize:'2rem', color:'#a7648a', marginBottom:'1.2rem', letterSpacing:'-1px'}}>🌟 Become Part of Our Story</div>
                <div style={{fontFamily:'Open Sans, Inter, sans-serif', fontSize:'1.1rem', color:'#000', marginBottom:'1.5rem', lineHeight:1.7}}>
                  Your journey starts here. Join our community, make meaningful connections, and create real change in Tanzania.<br/>
                  Whether you're ready to teach, build, share, or learn — we're excited to welcome you.
                </div>
                <div style={{fontFamily:'Open Sans, Inter, sans-serif', fontSize:'1.08rem', color:'#a7648a', marginBottom:'2rem'}}>📬 Click below to register your interest and we'll be in touch with all the details.</div>
                <motion.a
                  whileHover={{ scale: 1.07, backgroundColor: '#a7648a', color: '#fff' }}
                  whileTap={{ scale: 0.97 }}
                  href="https://docs.google.com/forms/d/e/1FAIpQLScnrGlCmydNvq4pPo2Y07qhqAwwv6owCCb1r1Sq_X1KlvuTUw/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background:'#a7648a',
                    color:'#fff',
                    border:'none',
                    borderRadius:30,
                    padding:'1.1rem 2.8rem',
                    fontWeight:700,
                    fontSize:'1.2rem',
                    fontFamily:'Poppins, Nunito, sans-serif',
                    cursor:'pointer',
                    boxShadow:'0 4px 16px rgba(167,100,138,0.10)',
                    textDecoration:'none',
                    display:'inline-block',
                    transition:'background 0.2s, color 0.2s',
                  }}
                >
                  Register to Volunteer
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        ) : (
          <motion.div key="home" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} style={{maxWidth:700, margin:'0 auto', padding:'clamp(1rem, 5vw, 3rem)', background:'#b5eeb3', borderRadius:18, boxShadow:'0 2px 8px rgba(167,100,138,0.08)'}}>
            <h2 data-aos="fade-up" style={{fontFamily:'Poppins, Nunito, sans-serif', fontWeight:700, fontSize:'2rem', color:'#a7648a', marginBottom:'1.5rem', textAlign:'center'}}>🏠 Volunteer from Home</h2>
            <div data-aos="fade-up" style={{display:'flex', flexWrap:'wrap', gap:'2.5rem', alignItems:'center', justifyContent:'center', marginBottom:'2.5rem'}}>
              <div style={{flex:'1 1 320px', minWidth:220, maxWidth:340, background:'#fff', borderRadius:14, boxShadow:'0 2px 8px rgba(167,100,138,0.08)', padding:'2rem 1.2rem', textAlign:'center', display:'flex', flexDirection:'column', alignItems:'center', gap:'1.2rem'}}>
                <FontAwesomeIcon icon={faUsers} style={{fontSize:'2.2rem', color:'#a7648a', marginBottom:8}}/>
                <div style={{fontFamily:'Poppins, Nunito, sans-serif', fontWeight:700, fontSize:'1.1rem', color:'#a7648a'}}>Social media & communications</div>
              </div>
              <div style={{flex:'1 1 320px', minWidth:220, maxWidth:340, background:'#fff', borderRadius:14, boxShadow:'0 2px 8px rgba(167,100,138,0.08)', padding:'2rem 1.2rem', textAlign:'center', display:'flex', flexDirection:'column', alignItems:'center', gap:'1.2rem'}}>
                <FontAwesomeIcon icon={faLaptop} style={{fontSize:'2.2rem', color:'#a7648a', marginBottom:8}}/>
                <div style={{fontFamily:'Poppins, Nunito, sans-serif', fontWeight:700, fontSize:'1.1rem', color:'#a7648a'}}>Website & design improvements</div>
              </div>
              <div style={{flex:'1 1 320px', minWidth:220, maxWidth:340, background:'#fff', borderRadius:14, boxShadow:'0 2px 8px rgba(167,100,138,0.08)', padding:'2rem 1.2rem', textAlign:'center', display:'flex', flexDirection:'column', alignItems:'center', gap:'1.2rem'}}>
                <FontAwesomeIcon icon={faGlobeAfrica} style={{fontSize:'2.2rem', color:'#a7648a', marginBottom:8}}/>
                <div style={{fontFamily:'Poppins, Nunito, sans-serif', fontWeight:700, fontSize:'1.1rem', color:'#a7648a'}}>Virtual event coordination</div>
              </div>
              <div style={{flex:'1 1 320px', minWidth:220, maxWidth:340, background:'#fff', borderRadius:14, boxShadow:'0 2px 8px rgba(167,100,138,0.08)', padding:'2rem 1.2rem', textAlign:'center', display:'flex', flexDirection:'column', alignItems:'center', gap:'1.2rem'}}>
                <FontAwesomeIcon icon={faLightbulb} style={{fontSize:'2.2rem', color:'#a7648a', marginBottom:8}}/>
                <div style={{fontFamily:'Poppins, Nunito, sans-serif', fontWeight:700, fontSize:'1.1rem', color:'#a7648a'}}>Any other way you'd like to contribute!</div>
              </div>
            </div>
            <div data-aos="fade-up" style={{textAlign:'center', marginTop:'2rem'}}>
              <FontAwesomeIcon icon={faEnvelope} style={{fontSize:'1.5rem', color:'#a7648a', marginBottom:8}}/>
              <p style={{fontFamily:'Open Sans, Inter, sans-serif', fontSize:'1.08rem', color:'#a7648a', marginTop:8}}>
                Can't travel? You can still make a difference!<br/>
                Contact us at <a href="mailto:kipepeoaptanzania@gmail.com" style={{color:'#a7648a', textDecoration:'underline', fontWeight:700}}>kipepeoaptanzania@gmail.com</a>
              </p>
            </div>
          </motion.div>
        )}
      </section>
    </main>
  );
} 