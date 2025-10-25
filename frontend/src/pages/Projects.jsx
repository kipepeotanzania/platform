import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useMemo } from 'react';
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
import { useTranslation } from 'react-i18next';

const galleryImages = [Pg1, Pg2, Pg3, Pg4, Pg5, Pg6, Pg7, Pg8, Pg9, Pg10, Pg11, Pg12];

const projectsCopy = {
  en: {
    hero: {
      title: 'Our Projects',
      subtitle: 'Driving lasting impact, one project at a time.',
      description: "At Kipepeo Tanzania, we're committed to driving positive change and empowering communities through a variety of impactful initiatives. Our projects are designed to address critical needs, foster sustainable development, and create long-term impact across Tanzania.",
    },
    sections: {
      digital: {
        title: 'Digital Futures: IT Class Project',
        summary: 'Empowering children through access to digital skills and hands-on IT education.',
        bullets: [
          'Equip children with essential IT skills (coding, internet, software use)',
          'Provide computers and technology infrastructure to underserved schools',
          'Foster creativity and critical thinking through experiential learning',
          'Support long-term opportunities for students in tech',
        ],
      },
      library: {
        title: 'Imagination Station: Our Library Project',
        summary: 'Where learning meets creativity, play, and curiosity.',
        bullets: [
          'Foster a love for reading and improve literacy',
          'Provide access to books, board games, and craft supplies',
          'Weekly library schedule for all student levels',
          'Encourage teamwork through social and creative engagement',
        ],
      },
      dorms: {
        title: 'A Place to Call Home: Dormitories',
        summary: 'Rebuilding childhood with dignity, safety, and care.',
        bullets: [
          'New dormitory built in 2024 for girls and babies',
          'Plans to renovate the old dormitory for the boys',
          'Children provided with individual beds and better living conditions',
          'Emphasis on holistic support: education, nutrition, safety',
        ],
      },
      kitchen: {
        title: 'Together at the Table: Kitchen & Dining Project',
        summary: 'More than meals — a space for connection, celebration, and family.',
        bullets: [
          'New kitchen and dining room built in partnership with Jeunesse Sans Frontières',
          'Replaces unsafe, basic kitchen with modern infrastructure',
          'Shared space for children to eat, socialize',
        ],
      },
    },
    galleryTitle: '🌈 Project Gallery',
  },
  es: {
    hero: {
      title: 'Nuestros Proyectos',
      subtitle: 'Generamos impacto duradero, proyecto tras proyecto.',
      description: 'En Kipepeo Tanzania impulsamos cambios positivos y empoderamos comunidades mediante iniciativas que responden a necesidades críticas, fomentan el desarrollo sostenible y generan resultados a largo plazo en toda Tanzania.',
    },
    sections: {
      digital: {
        title: 'Futuros Digitales: Aula de Informática',
        summary: 'Empoderamos a los niños con acceso a habilidades digitales y educación práctica en TI.',
        bullets: [
          'Dotar a los niños de habilidades esenciales de TI (programación, internet, software)',
          'Proveer computadoras e infraestructura tecnológica a escuelas con menos recursos',
          'Fomentar creatividad y pensamiento crítico mediante aprendizaje experiencial',
          'Abrir oportunidades a largo plazo para estudiantes en tecnología',
        ],
      },
      library: {
        title: 'Estación de Imaginación: Nuestro Proyecto de Biblioteca',
        summary: 'Donde el aprendizaje se encuentra con la creatividad, el juego y la curiosidad.',
        bullets: [
          'Fomentar el amor por la lectura y mejorar la alfabetización',
          'Ofrecer acceso a libros, juegos de mesa y materiales artísticos',
          'Horario semanal de biblioteca para todos los niveles escolares',
          'Impulsar el trabajo en equipo mediante actividades sociales y creativas',
        ],
      },
      dorms: {
        title: 'Un Lugar para Llamar Hogar: Dormitorios',
        summary: 'Reconstruimos la infancia con dignidad, seguridad y cuidado.',
        bullets: [
          'Nuevo dormitorio construido en 2024 para niñas y bebés',
          'Planes para renovar el dormitorio antiguo de los niños',
          'Cada menor cuenta con su propia cama y mejores condiciones de vida',
          'Enfoque integral: educación, nutrición y seguridad',
        ],
      },
      kitchen: {
        title: 'Juntos en la Mesa: Cocina y Comedor',
        summary: 'Más que comidas: un espacio para la conexión, la celebración y la familia.',
        bullets: [
          'Nueva cocina y comedor construidos con Jeunesse Sans Frontières',
          'Reemplaza la cocina precaria por infraestructura moderna',
          'Espacio compartido para que los niños coman y socialicen',
        ],
      },
    },
    galleryTitle: '🌈 Galería de Proyectos',
  },
};

export default function Projects() {
  useEffect(() => { AOS.init({ duration: 1000, once: true }); }, []);
  const { i18n } = useTranslation();
  const currentLanguage = useMemo(() => (i18n.language ? i18n.language.split('-')[0] : 'en'), [i18n.language]);
  const content = projectsCopy[currentLanguage] || projectsCopy.en;
  return (
    <main style={{width:'100vw', overflowX:'hidden', background:'#fff'}}>
      {/* Header */}
      <section style={{background:'linear-gradient(120deg, #b5eeb3 0%, #a7648a 100%)', color:'#fff', padding:'4rem 0 2.5rem', textAlign:'center', width:'100%'}}>
        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} style={{fontFamily: 'Poppins, Nunito, Quicksand, sans-serif', fontSize: '2.5rem', fontWeight: 800, marginBottom:'1.2rem', letterSpacing:'-1px'}}>
          {content.hero.title}
        </motion.h1>
        <motion.h2 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }} style={{fontFamily:'Poppins, Nunito, sans-serif', fontWeight:700, fontSize:'1.4rem', color:'#b5eeb3', marginBottom:'1.2rem'}}>{content.hero.subtitle}</motion.h2>
        <motion.p initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4 }} style={{fontSize: '1.15rem', marginTop: '1.2rem', fontWeight: 400, fontFamily:'Open Sans, Inter, sans-serif', maxWidth:700, marginLeft:'auto', marginRight:'auto'}}>
          {content.hero.description}
        </motion.p>
      </section>

      {/* Project 1: Digital Futures */}
      <section style={{width:'100vw', background:'#fff', padding:'clamp(2rem, 8vw, 5rem) 0'}}>
        <div data-aos="fade-up" style={{display:'flex', flexWrap:'wrap', alignItems:'center', justifyContent:'center', gap:'2.5rem', maxWidth:1100, margin:'0 auto'}}>
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} style={{flex:'1 1 340px', minWidth:260, maxWidth:480, background:'#b5eeb3', borderRadius:18, boxShadow:'0 2px 8px rgba(167,100,138,0.10)', padding:'2.2rem 1.5rem', display:'flex', flexDirection:'column', alignItems:'flex-start', gap:'1.2rem'}}>
            <FontAwesomeIcon icon={faLaptop} style={{fontSize:'2.5rem', color:'#a7648a', marginBottom:8}}/>
            <h3 style={{fontFamily:'Poppins, Nunito, sans-serif', fontWeight:700, fontSize:'1.3rem', color:'#a7648a', margin:'0 0 0.5rem'}}>{content.sections.digital.title}</h3>
            <div style={{fontFamily:'Open Sans, Inter, sans-serif', fontSize:'1.08rem', color:'#000', marginBottom:'0.7rem'}}>{content.sections.digital.summary}</div>
            <ul style={{fontFamily:'Open Sans, Inter, sans-serif', fontSize:'1.05rem', color:'#000', paddingLeft:18, margin:0, lineHeight:1.7}}>
              {content.sections.digital.bullets.map(item => <li key={item}>{item}</li>)}
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
            <h3 style={{fontFamily:'Poppins, Nunito, sans-serif', fontWeight:700, fontSize:'1.3rem', color:'#a7648a', margin:'0 0 0.5rem'}}>{content.sections.library.title}</h3>
            <div style={{fontFamily:'Open Sans, Inter, sans-serif', fontSize:'1.08rem', color:'#000', marginBottom:'0.7rem'}}>{content.sections.library.summary}</div>
            <ul style={{fontFamily:'Open Sans, Inter, sans-serif', fontSize:'1.05rem', color:'#000', paddingLeft:18, margin:0, lineHeight:1.7}}>
              {content.sections.library.bullets.map(item => <li key={item}>{item}</li>)}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Project 3: Dormitories */}
      <section style={{width:'100vw', background:'#fff', padding:'clamp(2rem, 8vw, 5rem) 0'}}>
        <div data-aos="fade-up" style={{display:'flex', flexWrap:'wrap', alignItems:'center', justifyContent:'center', gap:'2.5rem', maxWidth:1100, margin:'0 auto'}}>
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} style={{flex:'1 1 340px', minWidth:260, maxWidth:480, background:'#aa9a99', borderRadius:18, boxShadow:'0 2px 8px rgba(167,100,138,0.10)', padding:'2.2rem 1.5rem', display:'flex', flexDirection:'column', alignItems:'flex-start', gap:'1.2rem'}}>
            <FontAwesomeIcon icon={faBed} style={{fontSize:'2.5rem', color:'#a7648a', marginBottom:8}}/>
            <h3 style={{fontFamily:'Poppins, Nunito, sans-serif', fontWeight:700, fontSize:'1.3rem', color:'#a7648a', margin:'0 0 0.5rem'}}>{content.sections.dorms.title}</h3>
            <div style={{fontFamily:'Open Sans, Inter, sans-serif', fontSize:'1.08rem', color:'#000', marginBottom:'0.7rem'}}>{content.sections.dorms.summary}</div>
            <ul style={{fontFamily:'Open Sans, Inter, sans-serif', fontSize:'1.05rem', color:'#000', paddingLeft:18, margin:0, lineHeight:1.7}}>
              {content.sections.dorms.bullets.map(item => <li key={item}>{item}</li>)}
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
            <h3 style={{fontFamily:'Poppins, Nunito, sans-serif', fontWeight:700, fontSize:'1.3rem', color:'#a7648a', margin:'0 0 0.5rem'}}>{content.sections.kitchen.title}</h3>
            <div style={{fontFamily:'Open Sans, Inter, sans-serif', fontSize:'1.08rem', color:'#000', marginBottom:'0.7rem'}}>{content.sections.kitchen.summary}</div>
            <ul style={{fontFamily:'Open Sans, Inter, sans-serif', fontSize:'1.05rem', color:'#000', paddingLeft:18, margin:0, lineHeight:1.7}}>
              {content.sections.kitchen.bullets.map(item => <li key={item}>{item}</li>)}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section style={{width:'100vw', background:'#fff', padding:'clamp(2rem, 8vw, 5rem) 0', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
        <h2 data-aos="fade-up" style={{fontFamily:'Poppins, Nunito, sans-serif', fontWeight:700, fontSize:'2rem', color:'#a7648a', textAlign:'center', marginBottom:'2.5rem', width:'100%'}}>{content.galleryTitle}</h2>
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
