import { useEffect, useRef, useMemo } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeAfrica, faHome, faHandsHelping, faBinoculars, faPlane, faShieldAlt, faWineGlassAlt, faSyringe, faMapMarkedAlt, faSchool, faBook, faUtensils, faVenus, faBed } from '@fortawesome/free-solid-svg-icons';
import ithero from '../assets/ithero.jpg';
import it1 from '../assets/it1.jpg';
import it2 from '../assets/it2.jpg';
import it3 from '../assets/it3.jpg';
import it4 from '../assets/it4.jpg';
import it5 from '../assets/it5.jpg';
import it6 from '../assets/it6.jpg';
import it7 from '../assets/it7.jpg';
import it8 from '../assets/it8.jpg';
import it9 from '../assets/it9.jpg';
import it10 from '../assets/it10.jpg';
import it11 from '../assets/it11.jpg';
import it12 from '../assets/it12.jpg';
import it13 from '../assets/it13.jpg';
import itg1 from '../assets/itg1.jpg';
import itg2 from '../assets/itg2.jpg';
import itg3 from '../assets/itg3.jpg';
import itg4 from '../assets/itg4.jpg';
import itg5 from '../assets/itg5.jpg';
import itg6 from '../assets/itg6.jpg';
import itg7 from '../assets/itg7.jpg';
import itg8 from '../assets/itg8.jpg';
import itg9 from '../assets/itg9.jpg';
import itg10 from '../assets/itg10.jpg';
import itg11 from '../assets/itg11.jpg';
import itg12 from '../assets/itg12.jpg';
import { useTranslation } from 'react-i18next';

const highlightCards = [
  { img: it2, key: 'impact' },
  { img: it3, key: 'giveBack' },
  { img: it4, key: 'explore' },
];

const itineraryDays = [
  { key: 'day1' },
  { key: 'day2', img: it5 },
  { key: 'day3', img: it6 },
  { key: 'day4', img: it7 },
  { key: 'day5', img: it8 },
  { key: 'day6', img: it9 },
  { key: 'day7', img: it10 },
  { key: 'days8to10', img: it11 },
  { key: 'day11', img: it12 },
  { key: 'day12' },
];

const notIncludedItems = [
  { icon: faPlane, key: 'flights' },
  { icon: faShieldAlt, key: 'insurance' },
  { icon: faWineGlassAlt, key: 'alcohol' },
  { icon: faSyringe, key: 'vaccines' },
  { icon: faMapMarkedAlt, key: 'optional' },
];

const supportBullets = [
  { icon: faBed, key: 'dorms' },
  { icon: faBook, key: 'itClass' },
  { icon: faUtensils, key: 'kitchen' },
  { icon: faVenus, key: 'women' },
];

const galleryImages = [itg1, itg2, itg3, itg4, itg5, itg6, itg7, itg8, itg9, itg10, itg11, itg12];

const handleImgError = (e) => {
  e.target.onerror = null;
  e.target.src =
    'data:image/svg+xml;utf8,<svg width="220" height="160" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="%23b5eeb3"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="16" fill="%23a7648a" font-family="Poppins, Nunito, sans-serif">Image not found</text></svg>';
};

const immersiveCopy = {
  en: {
    hero: {
      title: 'More Than a Safari — A Journey With Purpose',
      subtitle: "Travel with meaning. 100% of proceeds go directly to support our school and orphanage in Tanzania.",
      button: 'Start Your Journey',
    },
    whatIs: {
      title: 'What is Immersive Travel?',
      body: "Kipepeo's immersive travel program blends cultural discovery with social impact. You'll go beyond tourist paths, connect with the heart of the community, and every experience supports our school and development projects.",
    },
    highlightsTitle: 'What Makes It Different',
    highlights: {
      impact: {
        title: 'Impact-Driven Experience',
        text: 'Immerse yourself in the rhythm of our community. Live the culture, meet the people, and make human connections that last long after the trip.',
      },
      giveBack: {
        title: 'Give Back While You Travel',
        text: 'Volunteer at our local school and see your impact firsthand. 100% of the trip’s benefits fund projects that empower and uplift.',
      },
      explore: {
        title: 'Explore the Heart of Tanzania',
        text: "Go beyond the typical safari: discover hidden waterfalls, meet indigenous tribes, and feel the raw beauty of Tanzania's landscapes.",
      },
    },
    itinerary: {
      title: 'Sample Itinerary',
      note: 'This is a sample itinerary and may change until the trip is confirmed.',
      days: {
        day1: { label: 'Day 1', title: 'Departure', desc: 'Your adventure begins! Head to the airport and board your flight to Tanzania.' },
        day2: { label: 'Day 2', title: 'Arrival in Tanzania', desc: 'Welcome to Mto wa Mbu! Settle into Jua Manyara Lodge, grab a local SIM, and rest up.' },
        day3: { label: 'Day 3', title: 'Local Life & Cultural Tour', desc: 'Visit banana plantations, enjoy lunch at Mama Africa House, meet tribes, and try traditional banana beer.' },
        day4: { label: 'Day 4', title: 'Tarangire National Park', desc: "Discover baobab forests filled with elephants, giraffes, lions, and more inside Tarangire." },
        day5: { label: 'Day 5', title: 'Volunteering & Waterfall Trek', desc: 'Support classes at Kilimamoja School, then hike to a hidden waterfall fed by Ngorongoro.' },
        day6: { label: 'Day 6', title: 'Hadzabe Tribe & Lake Eyasi', desc: 'Spend the day with the Hadzabe, one of Tanzania’s last hunter-gatherer tribes, near Lake Eyasi.' },
        day7: { label: 'Day 7', title: 'Volunteering & Creative Experience', desc: 'Return for sports day at school, then enjoy an afternoon painting session with local artists.' },
        days8to10: { label: 'Days 8–10', title: 'Serengeti & Ngorongoro Safaris', desc: 'Embark on a 3-day safari across the Serengeti and the Ngorongoro Crater. Sleep under the stars and witness unforgettable wildlife.' },
        day11: { label: 'Day 11', title: 'Farewell', desc: 'Say goodbye to students and staff, pack at the lodge, and get ready for your flight home.' },
        day12: { label: 'Day 12', title: 'Arrival Back Home', desc: 'Arrive home filled with memories and stories from Tanzania.' },
      },
    },
    notIncluded: {
      title: "What's Not Included",
      items: {
        flights: 'International flights',
        insurance: 'Personal travel insurance',
        alcohol: 'Alcoholic beverages',
        vaccines: 'Vaccines or health documents',
        optional: 'Optional excursions outside the itinerary',
      },
    },
    travelFunds: {
      title: 'Travel That Funds Education',
      intro: 'Your trip directly supports:',
      bullets: {
        dorms: 'New dormitories for children',
        itClass: 'IT classroom & library',
        kitchen: 'School kitchen',
        women: "Women’s empowerment programs",
      },
      outro: 'Every step helps build a better future.',
    },
    cta: {
      title: 'Join the Adventure',
      body: "Submit your interest and we'll reach out with personalized info.",
      button: 'Sign Up for Immersive Travel',
    },
    galleryTitle: 'See the Journey',
  },
  es: {
    hero: {
      title: 'Más que un safari: un viaje con propósito',
      subtitle: 'Viaja con sentido. El 100 % de lo recaudado financia nuestra escuela y orfanato en Tanzania.',
      button: 'Comienza tu viaje',
    },
    whatIs: {
      title: '¿Qué es el viaje inmersivo?',
      body: 'El programa de Kipepeo combina descubrimiento cultural con impacto social. Saldrás de las rutas turísticas, conocerás a la comunidad y cada experiencia financia nuestros proyectos educativos y de desarrollo.',
    },
    highlightsTitle: '¿Por qué es diferente?',
    highlights: {
      impact: {
        title: 'Experiencia impulsada por el impacto',
        text: 'Sumérgete en el ritmo de la comunidad. Vive la cultura, conoce a la gente y crea lazos que perduran mucho después del viaje.',
      },
      giveBack: {
        title: 'Devuelve mientras viajas',
        text: 'Haz voluntariado en nuestra escuela y observa tu impacto en persona. El 100 % de los beneficios financia proyectos que empoderan.',
      },
      explore: {
        title: 'Explora el corazón de Tanzania',
        text: 'Ve más allá del safari típico: cascadas ocultas, tribus indígenas y la belleza intacta de Tanzania.',
      },
    },
    itinerary: {
      title: 'Itinerario de muestra',
      note: 'El itinerario puede ajustarse hasta la confirmación final del viaje.',
      days: {
        day1: { label: 'Día 1', title: 'Salida', desc: '¡Comienza la aventura! Dirígete al aeropuerto y toma tu vuelo hacia Tanzania.' },
        day2: { label: 'Día 2', title: 'Llegada a Tanzania', desc: 'Bienvenido a Mto wa Mbu. Instálate en Jua Manyara Lodge, consigue una SIM local y descansa.' },
        day3: { label: 'Día 3', title: 'Vida local y tour cultural', desc: 'Visita plantaciones de banano, almuerza en Mama Africa House, convive con tribus y prueba la cerveza de banano.' },
        day4: { label: 'Día 4', title: 'Parque Nacional Tarangire', desc: 'Explora este parque icónico lleno de baobabs, elefantes, jirafas, leones y más.' },
        day5: { label: 'Día 5', title: 'Voluntariado y caminata a la cascada', desc: 'Apoya clases en la escuela Kilimamoja y luego camina hacia una cascada escondida proveniente de Ngorongoro.' },
        day6: { label: 'Día 6', title: 'Tribu Hadzabe y lago Eyasi', desc: 'Convive con los Hadzabe, uno de los últimos pueblos nómadas, cerca del lago Eyasi.' },
        day7: { label: 'Día 7', title: 'Voluntariado y experiencia creativa', desc: 'Regresa para el día deportivo en la escuela y disfruta una tarde de pintura con artistas locales.' },
        days8to10: { label: 'Días 8–10', title: 'Safaris en Serengeti y Ngorongoro', desc: 'Safari de 3 días entre el Serengeti y el cráter Ngorongoro. Duerme bajo las estrellas y vive la fauna como nunca.' },
        day11: { label: 'Día 11', title: 'Despedida', desc: 'Despídete de estudiantes y personal, empaca en el lodge y prepárate para el vuelo de regreso.' },
        day12: { label: 'Día 12', title: 'Vuelta a casa', desc: 'Llega a casa con recuerdos inolvidables y muchas historias de Tanzania.' },
      },
    },
    notIncluded: {
      title: 'Lo que no está incluido',
      items: {
        flights: 'Vuelos internacionales',
        insurance: 'Seguro de viaje personal',
        alcohol: 'Bebidas alcohólicas',
        vaccines: 'Vacunas o documentos sanitarios',
        optional: 'Excursiones opcionales fuera del itinerario',
      },
    },
    travelFunds: {
      title: 'Un viaje que financia educación',
      intro: 'Tu experiencia apoya directamente:',
      bullets: {
        dorms: 'Nuevos dormitorios para los niños',
        itClass: 'Aula de informática y biblioteca',
        kitchen: 'Cocina y comedor escolar',
        women: 'Programas de empoderamiento femenino',
      },
      outro: 'Cada paso ayuda a construir un futuro mejor.',
    },
    cta: {
      title: 'Únete a la aventura',
      body: 'Envíanos tu interés y te compartiremos información personalizada.',
      button: 'Quiero un viaje inmersivo',
    },
    galleryTitle: 'Mira el viaje',
  },
};

export default function ImmersiveTravel() {
  const whatIsRef = useRef(null);
  useEffect(() => { AOS.init({ duration: 1000, once: true }); }, []);
  const scrollToWhatIs = () => whatIsRef.current?.scrollIntoView({ behavior: 'smooth' });
  const { i18n } = useTranslation();
  const currentLanguage = useMemo(() => (i18n.language ? i18n.language.split('-')[0] : 'en'), [i18n.language]);
  const copy = immersiveCopy[currentLanguage] || immersiveCopy.en;

  return (
    <main style={{width:'100vw', overflowX:'hidden', background:'#fff'}}>
      <style>{`
        @media (max-width: 700px) {
          .itinerary-timeline-card {
            flex-direction: column !important;
            align-items: stretch !important;
            box-shadow: 0 2px 8px rgba(167,100,138,0.10) !important;
            border-left: 4px solid #b5eeb3 !important;
            border-right: none !important;
            margin-left: 0 !important;
            margin-right: 0 !important;
            min-height: unset !important;
            padding: 1.2rem 0.7rem !important;
          }
          .itinerary-timeline-img {
            margin-bottom: 1rem !important;
            max-width: 100% !important;
            border-radius: 12px !important;
            object-fit: cover !important;
            aspect-ratio: 4/3 !important;
            box-shadow: 0 2px 8px rgba(167,100,138,0.08) !important;
            display: none !important;
          }
          .itinerary-timeline-vertical {
            display: none !important;
          }
          .itinerary-timeline-card > div {
            text-align: left !important;
          }
          .itinerary-timeline-card {
            gap: 1rem !important;
          }
          .itinerary-timeline-card img {
            margin-bottom: 1rem !important;
          }
          .itinerary-timeline-card > div > div {
            margin-bottom: 0.5rem !important;
          }
          .itinerary-timeline-card > div > div:last-child {
            margin-bottom: 0 !important;
          }
          .itinerary-timeline-card {
            border-radius: 14px !important;
          }
          section, .itinerary-timeline-card, .motion-div, .motion-section {
            padding-left: 0.5rem !important;
            padding-right: 0.5rem !important;
          }
          .gallery-section {
            padding-left: 0.5rem !important;
            padding-right: 0.5rem !important;
          }
          .gallery-section .motion-div {
            max-width: 100% !important;
            min-width: 0 !important;
          }
        }
        @media (min-width: 701px) {
          .itinerary-timeline-card {
            flex-direction: row !important;
            align-items: center !important;
            gap: 2rem !important;
            min-height: 180px !important;
            padding: 1.5rem 1.2rem !important;
            border-radius: 18px !important;
            box-shadow: 0 2px 8px rgba(167,100,138,0.08) !important;
            margin: 0 !important;
          }
          .itinerary-timeline-card:nth-child(even) {
            flex-direction: row-reverse !important;
            box-shadow: 8px 0 0 0 #b5eeb3 !important;
            border-left: none !important;
            border-right: 4px solid #b5eeb3 !important;
          }
          .itinerary-timeline-card:nth-child(odd) {
            box-shadow: 0 0 0 8px #b5eeb3 !important;
            border-left: 4px solid #b5eeb3 !important;
            border-right: none !important;
          }
          .itinerary-timeline-img {
            display: block !important;
            width: 220px !important;
            max-width: 220px !important;
            min-width: 160px !important;
            margin-bottom: 0 !important;
            margin-right: 0 !important;
            border-radius: 12px !important;
            object-fit: cover !important;
            aspect-ratio: 4/3 !important;
            box-shadow: 0 2px 8px rgba(167,100,138,0.08) !important;
          }
          .itinerary-timeline-card > div {
            text-align: left !important;
            flex: 1 1 0 !important;
            min-width: 0 !important;
          }
        }
        @media (max-width: 500px) {
          h1, h2, h3 {
            font-size: 1.2rem !important;
          }
          .itinerary-timeline-card {
            padding: 0.7rem 0.3rem !important;
          }
        }
      `}</style>
      {/* Hero Section */}
      <section style={{
        minHeight: '80vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        background: `url(${ithero}) center/cover no-repeat`,
        overflow: 'hidden',
        padding: 0
      }}>
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} style={{textAlign:'center', width:'100%', padding:'clamp(1rem, 5vw, 3rem)', background:'rgba(167,100,138,0.25)'}}>
          <h1 style={{fontFamily:'Poppins, Nunito, sans-serif', fontWeight:800, fontSize:'clamp(2.2rem, 5vw, 3.5rem)', color:'#fff', marginBottom:'1.2rem', letterSpacing:'-1px', textShadow:'0 2px 16px #a7648a'}}>
            {copy.hero.title}
          </h1>
          <p style={{fontFamily:'Open Sans, Inter, sans-serif', fontSize:'1.2rem', color:'#fff', marginBottom:'2rem', maxWidth:600, marginLeft:'auto', marginRight:'auto', textShadow:'0 1px 8px #a7648a'}}>
            {copy.hero.subtitle}
          </p>
          <motion.button whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.97 }} onClick={scrollToWhatIs} style={{background:'#b5eeb3', color:'#a7648a', border:'none', borderRadius:30, padding:'1rem 2.5rem', fontWeight:700, fontSize:'1.1rem', fontFamily:'Poppins, Nunito, sans-serif', cursor:'pointer', boxShadow:'0 4px 16px rgba(167,100,138,0.10)', transition:'background 0.2s'}}>{copy.hero.button}</motion.button>
        </motion.div>
      </section>

      {/* What is Immersive Travel? */}
      <section ref={whatIsRef} style={{width:'100vw', background:'#fff', display:'flex', flexWrap:'wrap', alignItems:'center', justifyContent:'center', padding:'clamp(2rem, 8vw, 5rem) 0'}}>
        <div data-aos="fade-right" style={{flex:'1 1 350px', minWidth:280, maxWidth:600, padding:'clamp(1rem, 5vw, 3rem)'}}>
          <h2 style={{fontFamily:'Poppins, Nunito, sans-serif', fontWeight:700, fontSize:'2rem', color:'#a7648a', marginBottom:'1.2rem'}}>{copy.whatIs.title}</h2>
          <p style={{fontFamily:'Open Sans, Inter, sans-serif', fontSize:'1.1rem', color:'#000', marginBottom:'1.5rem'}}>
            {copy.whatIs.body}
          </p>
        </div>
        <div data-aos="fade-left" style={{flex:'1 1 350px', minWidth:280, maxWidth:600, display:'flex', alignItems:'center', justifyContent:'center', padding:'clamp(1rem, 5vw, 3rem)'}}>
          <img src={it1} alt="Immersive 1" style={{width:'100%', maxWidth:420, borderRadius:18, boxShadow:'0 4px 24px rgba(167,100,138,0.10)'}} onError={handleImgError}/>
        </div>
      </section>

      {/* What Makes It Different */}
      <section style={{width:'100vw', background:'#b5eeb3', padding:'clamp(2rem, 8vw, 5rem) 0'}}>
        <h2 data-aos="fade-up" style={{fontFamily:'Poppins, Nunito, sans-serif', fontWeight:700, fontSize:'2rem', color:'#a7648a', textAlign:'center', marginBottom:'2.5rem'}}>{copy.highlightsTitle}</h2>
        <div style={{
          display:'flex',
          flexWrap:'wrap',
          justifyContent:'center',
          gap:'2.5rem',
          padding:'0 clamp(1rem, 5vw, 3rem)',
        }}>
          {highlightCards.map((item, i) => {
            const highlight = copy.highlights[item.key];
            return (
            <motion.div
              key={item.key}
              data-aos="fade-up"
              data-aos-delay={i*100}
              whileHover={{ scale: 1.04 }}
              style={{
                flex:'1 1 260px',
                minWidth:260,
                maxWidth:340,
                background:'#fff',
                borderRadius:18,
                boxShadow:'0 2px 8px rgba(167,100,138,0.08)',
                padding:'2rem 1.2rem',
                textAlign:'center',
                display:'flex',
                flexDirection:'column',
                alignItems:'center',
                transition:'box-shadow 0.2s',
              }}
            >
              <img src={item.img} alt={highlight.title} style={{width:'100%', maxWidth:220, borderRadius:12, marginBottom:18, objectFit:'cover', aspectRatio:'4/3', background:'#eee'}} onError={handleImgError}/>
              <h3 style={{fontFamily:'Poppins, Nunito, sans-serif', fontWeight:700, fontSize:'1.2rem', color:'#a7648a', margin:'1rem 0 0.5rem'}}>{highlight.title}</h3>
              <p style={{fontFamily:'Open Sans, Inter, sans-serif', fontSize:'1rem', color:'#000'}}>{highlight.text}</p>
            </motion.div>
            );
          })}
        </div>
      </section>

      {/* Activities You'll Experience */}
      <section style={{width:'100vw', background:'#fff', padding:'clamp(2rem, 8vw, 5rem) 0'}}>
        <h2 data-aos="fade-up" style={{fontFamily:'Poppins, Nunito, sans-serif', fontWeight:700, fontSize:'2rem', color:'#a7648a', textAlign:'center', marginBottom:'1.2rem'}}>{copy.itinerary.title}</h2>
        <p data-aos="fade-up" data-aos-delay="100" style={{fontFamily:'Open Sans, Inter, sans-serif', fontSize:'1rem', color:'#a7648a', textAlign:'center', marginBottom:'2.5rem', maxWidth:600, marginLeft:'auto', marginRight:'auto', background:'#b5eeb3', borderRadius:12, padding:'0.8rem 1.2rem'}}>{copy.itinerary.note}</p>
        <div style={{display:'flex', flexDirection:'column', gap:'2.5rem', maxWidth:700, margin:'0 auto', position:'relative', padding:'0 clamp(1rem, 5vw, 3rem)', marginBottom:'1.5rem'}}>
          {itineraryDays.map((item, i) => {
            const dayCopy = copy.itinerary.days[item.key];
            return (
            <motion.div
              key={item.key}
              data-aos="fade-up"
              data-aos-delay={i*80}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i*0.08 }}
              style={{
                display:'flex',
                flexDirection: i%2===0 ? 'row' : 'row-reverse',
                alignItems:'center',
                gap:'2rem',
                background:'#fff',
                borderRadius:18,
                boxShadow: i%2===0 ? '0 0 0 8px #b5eeb3' : '8px 0 0 0 #b5eeb3',
                padding:'1.5rem 1.2rem',
                position:'relative',
                minHeight:180,
                borderLeft: i!==0 ? '4px solid #b5eeb3' : 'none',
                borderRight: i===0 ? '4px solid #b5eeb3' : 'none',
                marginLeft: i!==0 ? 24 : 0,
                marginRight: i===0 ? 24 : 0,
                zIndex:2,
              }}
            >
              {item.img && (
                <img src={item.img} alt={dayCopy.title} className="itinerary-timeline-img" onError={handleImgError}/>
              )}
              <div style={{flex:1, minWidth:0}}>
                <div style={{fontFamily:'Poppins, Nunito, sans-serif', fontWeight:700, fontSize:'1.1rem', color:'#a7648a', marginBottom:4}}>{dayCopy.label}</div>
                <div style={{fontFamily:'Poppins, Nunito, sans-serif', fontWeight:700, fontSize:'1.2rem', color:'#000', marginBottom:8}}>{dayCopy.title}</div>
                <div style={{fontFamily:'Open Sans, Inter, sans-serif', fontSize:'1rem', color:'#000'}}>{dayCopy.desc}</div>
              </div>
            </motion.div>
            );
          })}
          {/* Timeline vertical line */}
          <div aria-hidden style={{position:'absolute', left:'50%', top:0, bottom:0, width:4, background:'#b5eeb3', zIndex:1, transform:'translateX(-50%)', borderRadius:2, opacity:0.5}}></div>
        </div>
      </section>

      {/* What's Not Included */}
      <section style={{width:'100vw', background:'#fff', padding:'clamp(2rem, 8vw, 5rem) 0'}}>
        <h2 data-aos="fade-up" style={{fontFamily:'Poppins, Nunito, sans-serif', fontWeight:700, fontSize:'2rem', color:'#a7648a', textAlign:'center', marginBottom:'2.5rem'}}>{copy.notIncluded.title}</h2>
        <ul style={{listStyle:'none', padding:0, margin:0, maxWidth:600, marginLeft:'auto', marginRight:'auto', display:'flex', flexWrap:'wrap', gap:'1.5rem', justifyContent:'center'}}>
          {notIncludedItems.map((item, i) => (
            <li key={item.key} data-aos="fade-up" data-aos-delay={i*60} style={{display:'flex', alignItems:'center', gap:12, background:'#f5f5f5', borderRadius:12, padding:'0.8rem 1.2rem', fontFamily:'Open Sans, Inter, sans-serif', fontSize:'1rem', color:'#a7648a', minWidth:220}}>
              <FontAwesomeIcon icon={item.icon} style={{fontSize:'1.2rem', color:'#a7648a'}}/>
              {copy.notIncluded.items[item.key]}
            </li>
          ))}
        </ul>
      </section>

      {/* Travel That Funds Education */}
      <section style={{width:'100vw', background:`url(${it13}) center/cover no-repeat, #a7648a`, padding:'clamp(2rem, 8vw, 5rem) 0', color:'#fff', position:'relative'}}>
        <div style={{background:'rgba(167,100,138,0.7)', borderRadius:18, padding:'2rem clamp(1rem, 5vw, 3rem)', maxWidth:900, margin:'0 auto'}}>
          <h2 data-aos="fade-up" style={{fontFamily:'Poppins, Nunito, sans-serif', fontWeight:700, fontSize:'2rem', color:'#fff', textAlign:'center', marginBottom:'2rem'}}>{copy.travelFunds.title}</h2>
          <p style={{fontFamily:'Open Sans, Inter, sans-serif', fontSize:'1.1rem', color:'#fff', marginBottom:'1.5rem', textAlign:'center'}}>
            {copy.travelFunds.intro}
          </p>
          <ul style={{listStyle:'none', padding:0, margin:0, display:'flex', flexWrap:'wrap', gap:'1.5rem', justifyContent:'center'}}>
            {supportBullets.map(item => (
              <li key={item.key} style={{display:'flex', alignItems:'center', gap:12, fontSize:'1rem'}}>
                <FontAwesomeIcon icon={item.icon} style={{color:'#b5eeb3'}}/> {copy.travelFunds.bullets[item.key]}
              </li>
            ))}
          </ul>
          <p style={{fontFamily:'Open Sans, Inter, sans-serif', fontSize:'1.1rem', color:'#fff', marginTop:'2rem', textAlign:'center'}}>{copy.travelFunds.outro}</p>
        </div>
      </section>

      {/* Join the Adventure */}
      <section style={{width:'100vw', background:'#b5eeb3', padding:'clamp(3rem, 10vw, 6rem) 0', textAlign:'center'}}>
        <motion.h2 data-aos="fade-up" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} style={{fontFamily:'Poppins, Nunito, sans-serif', fontWeight:800, fontSize:'2.2rem', color:'#a7648a', marginBottom:'2rem'}}>
          {copy.cta.title}
        </motion.h2>
        <p style={{fontFamily:'Open Sans, Inter, sans-serif', fontSize:'1.1rem', color:'#000', marginBottom:'2rem'}}>{copy.cta.body}</p>
        <motion.a whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.97 }} href="https://docs.google.com/forms/d/e/1FAIpQLSdNp8Un1govLfc9D1v8GwIczAP7JCycL01epJojf_xAm7Pvvg/viewform" target="_blank" rel="noopener noreferrer" style={{background:'#a7648a', color:'#fff', border:'none', borderRadius:30, padding:'1rem 2.5rem', fontWeight:700, fontSize:'1.1rem', fontFamily:'Poppins, Nunito, sans-serif', cursor:'pointer', boxShadow:'0 4px 16px rgba(167,100,138,0.10)', textDecoration:'none', display:'inline-block', transition:'background 0.2s'}}>{copy.cta.button}</motion.a>
      </section>

      {/* Image Gallery */}
      <section style={{width:'100vw', background:'#fff', padding:'clamp(2rem, 8vw, 5rem) 0'}}>
        <h2 data-aos="fade-up" style={{fontFamily:'Poppins, Nunito, sans-serif', fontWeight:700, fontSize:'2rem', color:'#a7648a', textAlign:'center', marginBottom:'2.5rem'}}>{copy.galleryTitle}</h2>
        <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(220px, 1fr))', gap:'1.5rem', padding:'0 clamp(1rem, 5vw, 3rem)'}}>
          {galleryImages.map((img, i) => (
            <motion.div key={img} data-aos="fade-up" data-aos-delay={i*60} whileHover={{ scale: 1.04 }} style={{overflow:'hidden', borderRadius:16, boxShadow:'0 2px 8px rgba(167,100,138,0.08)', cursor:'pointer', position:'relative', maxWidth:260, width:'100%', aspectRatio:'4/3', background:'#eee', margin:'0 auto'}}>
              <img src={img} alt={`Gallery ${i+1}`} style={{width:'100%', height:'100%', display:'block', objectFit:'cover', borderRadius:16, aspectRatio:'4/3'}} onError={handleImgError}/>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
} 
