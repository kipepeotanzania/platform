import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faHome, faUtensils, faDollarSign, faReceipt, faCalendarAlt, faSun, faBookOpen, faChalkboardTeacher, faGamepad, faClock, faMusic, faPaintBrush, faSmile, faTree, faMapMarkedAlt, faGlobeAfrica, faLaptop, faUsers, faLightbulb, faEnvelope, faCamera, faMountain, faHandsHelping } from '@fortawesome/free-solid-svg-icons';
import V1 from '../assets/V1.jpg';
import V2 from '../assets/V2.jpg';
import V3 from '../assets/V3.jpg';
import V4 from '../assets/V4.jpg';
import V5 from '../assets/V5.jpg';
import V6 from '../assets/V6.jpg';
import V7 from '../assets/V7.jpg';
import Vg1 from '../assets/Vg1.jpg';
import Vg2 from '../assets/Vg2.jpg';
import Vg3 from '../assets/Vg3.jpg';
import Vg4 from '../assets/Vg4.jpg';
import Vg5 from '../assets/Vg5.jpg';
import Vg6 from '../assets/Vg6.jpg';
import Vg7 from '../assets/Vg7.jpg';
import Vg8 from '../assets/Vg8.jpg';
import Vg9 from '../assets/Vg9.jpg';
import Vg10 from '../assets/Vg10.jpg';
import Vg11 from '../assets/Vg11.jpg';
import Vg12 from '../assets/Vg12.jpg';
import { useTranslation } from 'react-i18next';

const galleryImages = [Vg1, Vg2, Vg3, Vg4, Vg5, Vg6, Vg7, Vg8, Vg9, Vg10, Vg11, Vg12];

const timeline = [
  { time: '7:30 AM', icon: faSun, key: 'openSchool' },
  { time: '8:00 AM', icon: faUtensils, key: 'breakfast' },
  { time: '9:00 AM', icon: faChalkboardTeacher, key: 'assist' },
  { time: '1:00 PM', icon: faUtensils, key: 'lunch' },
  { time: '3:20 PM', icon: faBookOpen, key: 'workshops' },
  { time: '4:30 PM', icon: faPaintBrush, key: 'freeTime' },
  { time: '8:00 PM', icon: faMusic, key: 'dinner' },
];

const accommodationPoints = [
  { icon: faHome, key: 'location' },
  { icon: faUtensils, key: 'meals' },
  { icon: faDollarSign, key: 'cost', hasLabel: true },
  { icon: faReceipt, key: 'fee', hasLabel: true },
  { icon: faCalendarAlt, key: 'stay', hasLabel: true },
];

const remoteCards = [
  { icon: faUsers, key: 'social' },
  { icon: faLaptop, key: 'website' },
  { icon: faGlobeAfrica, key: 'events' },
  { icon: faLightbulb, key: 'ideas' },
];

const volunteeringCopy = {
  en: {
    heroTitle: 'Make a Difference with Kipepeo Tanzania',
    heroSubtitle: 'Whether you travel across the globe or support us from home, your work matters. Volunteering with Kipepeo means creating lasting impact in a community built on hope, connection, and change.',
    tabs: {
      tanzania: 'Volunteer in Tanzania',
      home: 'Volunteer from Home',
    },
    tanzania: {
      heading: '✈️ Volunteer in Tanzania',
      accommodation: {
        location: 'Accommodation is located between Kilimamoja School and Jua Manyara Lodge (5-minute walk).',
        meals: 'Daily meals prepared by Chef Exaude.',
        cost: { label: 'Cost', value: '$15/day for food, filtered water, and housing.' },
        fee: { label: 'One-time registration fee', value: '$150.' },
        stay: { label: 'Minimum stay', value: '21 days (longer stays welcome with advance notice).' },
      },
      timelineTitle: '⏰ A Day in the Life of a Volunteer',
      timeline: {
        openSchool: 'Wake up and open the school with the children.',
        breakfast: 'Breakfast prepared by Chef Exaude.',
        assist: 'Assist teachers or lead activities (sports, IT, arts).',
        lunch: 'Lunch break with volunteers and kids.',
        workshops: 'Afternoon volunteer-led workshops (schedule rotates).',
        freeTime: 'Free time: explore town, create art, do woodwork, or rest.',
        dinner: 'Dinner and cultural entertainment: music, dance, acrobatics.',
      },
      weekendTitle: '🌍 Explore on the Weekends',
      weekendBody: 'Kipepeo is close to Serengeti, Ngorongoro Crater, Lake Manyara, and Tarangire. Our team helps organize every safari or local excursion.',
      galleryTitle: 'Take a look',
      cta: {
        title: '🌟 Become Part of Our Story',
        body: "Your journey starts here. Join our community, make meaningful connections, and create real change in Tanzania. Whether you're ready to teach, build, share, or learn — we're excited to welcome you.",
        note: "📬 Click below to register your interest and we'll be in touch with all the details.",
        button: 'Register to Volunteer',
      },
    },
    home: {
      heading: '🏠 Volunteer from Home',
      cards: {
        social: 'Social media & communications',
        website: 'Website & design improvements',
        events: 'Virtual event coordination',
        ideas: "Any other way you'd like to contribute!",
      },
      note: {
        line1: "Can't travel? You can still make a difference!",
        line2: 'Contact us at',
      },
    },
  },
  es: {
    heroTitle: 'Marca la diferencia con Kipepeo Tanzania',
    heroSubtitle: 'Viajes hasta Tanzania o apoyes desde casa, tu trabajo importa. Ser voluntario con Kipepeo significa crear un impacto duradero en una comunidad basada en la esperanza, la conexión y el cambio.',
    tabs: {
      tanzania: 'Voluntariado en Tanzania',
      home: 'Voluntariado desde casa',
    },
    tanzania: {
      heading: '✈️ Voluntariado en Tanzania',
      accommodation: {
        location: 'El alojamiento está entre la escuela Kilimamoja y Jua Manyara Lodge (a 5 minutos caminando).',
        meals: 'Chef Exaude prepara comidas caseras todos los días.',
        cost: { label: 'Costo', value: '15 USD por día e incluye comida, agua filtrada y hospedaje.' },
        fee: { label: 'Cuota única de registro', value: '150 USD.' },
        stay: { label: 'Estadía mínima', value: '21 días (podemos recibirte por más tiempo con aviso previo).' },
      },
      timelineTitle: '⏰ Un día en la vida de un voluntario',
      timeline: {
        openSchool: 'Despierta y abre la escuela junto a los niños.',
        breakfast: 'Desayuno preparado por el chef Exaude.',
        assist: 'Apoya a los docentes o lidera actividades (deporte, informática, arte).',
        lunch: 'Almuerzo con voluntarios y estudiantes.',
        workshops: 'Talleres vespertinos dirigidos por voluntarios (según agenda).',
        freeTime: 'Tiempo libre: recorrer el pueblo, hacer arte, carpintería o descansar.',
        dinner: 'Cena y presentaciones culturales: música, danza, acrobacias.',
      },
      weekendTitle: '🌍 Explora los fines de semana',
      weekendBody: 'Kipepeo está cerca del Serengeti, el cráter Ngorongoro, el lago Manyara y Tarangire. Nuestro equipo te ayuda a organizar safaris y excursiones locales.',
      galleryTitle: 'Mira todo lo que vivimos',
      cta: {
        title: '🌟 Sé parte de nuestra historia',
        body: 'Tu viaje empieza aquí. Únete a la comunidad, crea vínculos significativos y genera cambios reales en Tanzania. Ya sea que quieras enseñar, construir, compartir o aprender, nos emociona recibirte.',
        note: '📬 Haz clic abajo para registrar tu interés y nos pondremos en contacto con todos los detalles.',
        button: 'Quiero ser voluntario',
      },
    },
    home: {
      heading: '🏠 Voluntariado desde casa',
      cards: {
        social: 'Redes sociales y comunicaciones',
        website: 'Mejoras para el sitio web y diseño',
        events: 'Coordinación de eventos virtuales',
        ideas: 'Cualquier otra forma en la que quieras aportar',
      },
      note: {
        line1: '¿No puedes viajar? ¡Igual puedes marcar la diferencia!',
        line2: 'Escríbenos a',
      },
    },
  },
};

export default function Volunteering() {
  const [tab, setTab] = useState('tanzania');
  useEffect(() => { AOS.init({ duration: 1000, once: true }); }, []);
  const { i18n } = useTranslation();
  const currentLanguage = useMemo(() => (i18n.language ? i18n.language.split('-')[0] : 'en'), [i18n.language]);
  const copy = volunteeringCopy[currentLanguage] || volunteeringCopy.en;

  return (
    <main style={{width:'100vw', overflowX:'hidden', background:'#fff'}}>
      {/* Banner Intro */}
      <section style={{background:'linear-gradient(120deg, #b5eeb3 0%, #a7648a 100%)', color:'#fff', padding:'4rem 0 2.5rem', textAlign:'center', width:'100%'}}>
        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} style={{fontFamily: 'Poppins, Nunito, Quicksand, sans-serif', fontSize: '2.5rem', fontWeight: 800, marginBottom:'1.2rem', letterSpacing:'-1px'}}>
          {copy.heroTitle}
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }} style={{fontSize: '1.2rem', marginTop: '1.2rem', fontWeight: 400, fontFamily:'Open Sans, Inter, sans-serif', maxWidth:600, marginLeft:'auto', marginRight:'auto'}}>
          {copy.heroSubtitle}
        </motion.p>
      </section>

      {/* Tab Switch */}
      <section style={{width:'100vw', background:'#fff', textAlign:'center', padding:'2rem 0 0.5rem'}}>
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', gap:0}}>
          <button onClick={()=>setTab('tanzania')} style={{padding:'0.9rem 2.5rem', fontFamily:'Poppins, Nunito, sans-serif', fontWeight:700, fontSize:'1.1rem', color:tab==='tanzania'?'#fff':'#a7648a', background:tab==='tanzania'?'#a7648a':'#b5eeb3', border:'none', borderRadius:'30px 0 0 30px', cursor:'pointer', transition:'background 0.2s', boxShadow:tab==='tanzania'?'0 4px 16px rgba(167,100,138,0.10)':'none'}}>{copy.tabs.tanzania}</button>
          <button onClick={()=>setTab('home')} style={{padding:'0.9rem 2.5rem', fontFamily:'Poppins, Nunito, sans-serif', fontWeight:700, fontSize:'1.1rem', color:tab==='home'?'#fff':'#a7648a', background:tab==='home'?'#a7648a':'#b5eeb3', border:'none', borderRadius:'0 30px 30px 0', cursor:'pointer', transition:'background 0.2s', boxShadow:tab==='home'?'0 4px 16px rgba(167,100,138,0.10)':'none'}}>{copy.tabs.home}</button>
        </div>
      </section>

      {/* Tab Content */}
      <section style={{width:'100vw', background:'#fff', minHeight:400, padding:'2rem 0'}}>
        {tab==='tanzania' ? (
          <motion.div key="tanzania" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} style={{maxWidth:1000, margin:'0 auto', padding:'0 clamp(1rem, 5vw, 3rem)'}}>
            {/* Location & Accommodation */}
            <h2 data-aos="fade-up" style={{fontFamily:'Poppins, Nunito, sans-serif', fontWeight:700, fontSize:'2rem', color:'#a7648a', marginBottom:'1.5rem', textAlign:'center'}}>{copy.tanzania.heading}</h2>
            <div data-aos="fade-up" style={{display:'flex', flexWrap:'wrap', gap:'2.5rem', alignItems:'flex-start', justifyContent:'center', marginBottom:'2.5rem'}}>
              <img src={V1} alt="Local house near school" style={{width:'100%', maxWidth:260, borderRadius:18, boxShadow:'0 2px 8px rgba(167,100,138,0.10)', objectFit:'cover', aspectRatio:'4/3', background:'#eee'}}/>
              <img src={V2} alt="Shared meals or kitchen" style={{width:'100%', maxWidth:260, borderRadius:18, boxShadow:'0 2px 8px rgba(167,100,138,0.10)', objectFit:'cover', aspectRatio:'4/3', background:'#eee'}}/>
              <img src={V3} alt="Room or surrounding nature" style={{width:'100%', maxWidth:260, borderRadius:18, boxShadow:'0 2px 8px rgba(167,100,138,0.10)', objectFit:'cover', aspectRatio:'4/3', background:'#eee'}}/>
              <div style={{flex:'1 1 320px', minWidth:260, maxWidth:420, marginTop:16}}>
                <ul style={{listStyle:'none', padding:0, margin:0, fontFamily:'Open Sans, Inter, sans-serif', fontSize:'1.08rem', color:'#000', lineHeight:1.7}}>
                  {accommodationPoints.map(point => {
                    const detail = copy.tanzania.accommodation[point.key];
                    return (
                      <li key={point.key}>
                        <FontAwesomeIcon icon={point.icon} style={{color:'#a7648a', marginRight:8}}/>
                        {point.hasLabel ? (
                          <>
                            <b>{detail.label}:</b> {detail.value}
                          </>
                        ) : detail}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            {/* Day in the Life Timeline */}
            <h3 data-aos="fade-up" style={{fontFamily:'Poppins, Nunito, sans-serif', fontWeight:700, fontSize:'1.3rem', color:'#a7648a', margin:'2.5rem 0 1.2rem', textAlign:'center'}}>{copy.tanzania.timelineTitle}</h3>
            <div data-aos="fade-up" style={{display:'flex', flexDirection:'column', gap:'1.5rem', marginBottom:'2.5rem', maxWidth:700, marginLeft:'auto', marginRight:'auto'}}>
              {timeline.map((item, i) => (
                <motion.div key={item.time} data-aos="fade-up" data-aos-delay={i*60} whileHover={{ scale: 1.02 }} style={{display:'flex', alignItems:'center', background:'#f8f8f8', borderRadius:14, boxShadow:'0 2px 8px rgba(167,100,138,0.06)', padding:'1.1rem 1.2rem', gap:18, minWidth:220}}>
                  <div style={{fontFamily:'Poppins, Nunito, sans-serif', fontWeight:700, fontSize:'1.1rem', color:'#a7648a', minWidth:90, textAlign:'right'}}>{item.time}</div>
                  <FontAwesomeIcon icon={item.icon} style={{fontSize:'1.2rem', color:'#b5eeb3', marginRight:8}}/>
                  <div style={{fontFamily:'Open Sans, Inter, sans-serif', fontSize:'1.05rem', color:'#000'}}>{copy.tanzania.timeline[item.key]}</div>
                </motion.div>
              ))}
            </div>
            {/* Timeline Images */}
            <div data-aos="fade-up" style={{display:'flex', flexWrap:'wrap', gap:'2rem', justifyContent:'center', marginBottom:'2.5rem'}}>
              <img src={V4} alt="Classroom time" style={{width:'100%', maxWidth:260, borderRadius:14, boxShadow:'0 2px 8px rgba(167,100,138,0.10)', objectFit:'cover', aspectRatio:'4/3', background:'#eee'}}/>
              <img src={V5} alt="Volunteer workshops" style={{width:'100%', maxWidth:260, borderRadius:14, boxShadow:'0 2px 8px rgba(167,100,138,0.10)', objectFit:'cover', aspectRatio:'4/3', background:'#eee'}}/>
              <img src={V6} alt="Shared moments with kids" style={{width:'100%', maxWidth:260, borderRadius:14, boxShadow:'0 2px 8px rgba(167,100,138,0.10)', objectFit:'cover', aspectRatio:'4/3', background:'#eee'}}/>
            </div>

            {/* Explore on Weekends */}
            <h3 data-aos="fade-up" style={{fontFamily:'Poppins, Nunito, sans-serif', fontWeight:700, fontSize:'1.3rem', color:'#a7648a', margin:'2.5rem 0 1.2rem', textAlign:'center'}}>{copy.tanzania.weekendTitle}</h3>
            <div data-aos="fade-up" style={{display:'flex', flexWrap:'wrap', alignItems:'center', justifyContent:'center', gap:'2.5rem', marginBottom:'2.5rem'}}>
              <div style={{flex:'1 1 320px', minWidth:260, maxWidth:420}}>
                <p style={{fontFamily:'Open Sans, Inter, sans-serif', fontSize:'1.08rem', color:'#000', lineHeight:1.7}}>
                  {copy.tanzania.weekendBody}
                </p>
              </div>
              <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} style={{width:'100%', maxWidth:520, borderRadius:18, boxShadow:'0 4px 16px rgba(167,100,138,0.10)', overflow:'hidden', minHeight:220, background:'#eee'}}>
                <img src={V7} alt="Scenic wildlife or safari" style={{width:'100%', height:'100%', objectFit:'cover', display:'block'}}/>
              </motion.div>
            </div>

            {/* Gallery Section */}
            <h2 data-aos="fade-up" style={{fontFamily:'Poppins, Nunito, sans-serif', fontWeight:700, fontSize:'2rem', color:'#a7648a', textAlign:'center', marginBottom:'2.5rem'}}>{copy.tanzania.galleryTitle}</h2>
            <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(220px, 1fr))', gap:'1.5rem', padding:'0 clamp(1rem, 5vw, 3rem)'}}>
              {galleryImages.map((img, i) => (
                <motion.div key={img} data-aos="fade-up" data-aos-delay={i*60} whileHover={{ scale: 1.04 }} style={{overflow:'hidden', borderRadius:16, boxShadow:'0 2px 8px rgba(167,100,138,0.08)', cursor:'pointer', position:'relative', maxWidth:260, width:'100%', aspectRatio:'4/3', background:'#eee', margin:'0 auto'}}>
                  <img src={img} alt={`Volunteer Gallery ${i+1}`} style={{width:'100%', height:'100%', display:'block', objectFit:'cover', borderRadius:16, aspectRatio:'4/3'}}/>
                </motion.div>
              ))}
            </div>

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
                <div style={{fontFamily:'Poppins, Nunito, sans-serif', fontWeight:800, fontSize:'2rem', color:'#a7648a', marginBottom:'1.2rem', letterSpacing:'-1px'}}>{copy.tanzania.cta.title}</div>
                <div style={{fontFamily:'Open Sans, Inter, sans-serif', fontSize:'1.1rem', color:'#000', marginBottom:'1.5rem', lineHeight:1.7}}>
                  {copy.tanzania.cta.body.split('\n').map((line, idx, arr) => (
                    <span key={`${line}-${idx}`}>
                      {line}
                      {idx < arr.length - 1 && <><br/></>}
                    </span>
                  ))}
                </div>
                <div style={{fontFamily:'Open Sans, Inter, sans-serif', fontSize:'1.08rem', color:'#a7648a', marginBottom:'2rem'}}>{copy.tanzania.cta.note}</div>
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
                  {copy.tanzania.cta.button}
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        ) : (
          <motion.div key="home" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} style={{maxWidth:700, margin:'0 auto', padding:'clamp(1rem, 5vw, 3rem)', background:'#b5eeb3', borderRadius:18, boxShadow:'0 2px 8px rgba(167,100,138,0.08)'}}>
            <h2 data-aos="fade-up" style={{fontFamily:'Poppins, Nunito, sans-serif', fontWeight:700, fontSize:'2rem', color:'#a7648a', marginBottom:'1.5rem', textAlign:'center'}}>{copy.home.heading}</h2>
            <div data-aos="fade-up" style={{display:'flex', flexWrap:'wrap', gap:'2.5rem', alignItems:'center', justifyContent:'center', marginBottom:'2.5rem'}}>
              {remoteCards.map(card => (
                <div key={card.key} style={{flex:'1 1 320px', minWidth:220, maxWidth:340, background:'#fff', borderRadius:14, boxShadow:'0 2px 8px rgba(167,100,138,0.08)', padding:'2rem 1.2rem', textAlign:'center', display:'flex', flexDirection:'column', alignItems:'center', gap:'1.2rem'}}>
                  <FontAwesomeIcon icon={card.icon} style={{fontSize:'2.2rem', color:'#a7648a', marginBottom:8}}/>
                  <div style={{fontFamily:'Poppins, Nunito, sans-serif', fontWeight:700, fontSize:'1.1rem', color:'#a7648a'}}>{copy.home.cards[card.key]}</div>
                </div>
              ))}
            </div>
            <div data-aos="fade-up" style={{textAlign:'center', marginTop:'2rem'}}>
              <FontAwesomeIcon icon={faEnvelope} style={{fontSize:'1.5rem', color:'#a7648a', marginBottom:8}}/>
              <p style={{fontFamily:'Open Sans, Inter, sans-serif', fontSize:'1.08rem', color:'#a7648a', marginTop:8}}>
                {copy.home.note.line1}<br/>
                {copy.home.note.line2} <a href="mailto:kipepeoaptanzania@gmail.com" style={{color:'#a7648a', textDecoration:'underline', fontWeight:700}}>kipepeoaptanzania@gmail.com</a>
              </p>
            </div>
          </motion.div>
        )}
      </section>
    </main>
  );
} 
