import { useEffect, useRef } from 'react';
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

const differenceCards = [
  { icon: faGlobeAfrica, img: 'https://placehold.co/220x140?text=Impact', title: 'Impact-Driven', text: 'All funds go directly to educational and community initiatives.' },
  { icon: faHome, img: 'https://placehold.co/220x140?text=Local+Living', title: 'Local Living', text: 'Home-cooked meals, real-life stories, and cultural immersion.' },
  { icon: faHandsHelping, img: 'https://placehold.co/220x140?text=Give+Back', title: 'Give Back', text: 'Help out at our school, support women\'s empowerment, and share skills.' },
  { icon: faBinoculars, img: 'https://placehold.co/220x140?text=Explore', title: 'Explore Tanzania', text: 'Safaris, waterfalls, coffee farms, tribes — all within reach.' }
];

const activities = [
  { img: 'https://placehold.co/320x220?text=Tarangire+Safari', title: 'Tarangire Safari', desc: 'See elephants, lions, and more in a world-famous park.' },
  { img: 'https://placehold.co/320x220?text=Ngorongoro+Crater', title: 'Ngorongoro Crater Day', desc: 'A UNESCO wonder with breathtaking wildlife.' },
  { img: 'https://placehold.co/320x220?text=Traditional+Lunch', title: 'Traditional Mama\'s Lunch', desc: 'Enjoy authentic Tanzanian cuisine with local families.' },
  { img: 'https://placehold.co/320x220?text=Waterfall+Hike', title: 'Waterfall Hike or Bike Ride', desc: 'Adventure through lush landscapes.' },
  { img: 'https://placehold.co/320x220?text=Coffee+Plantation', title: 'Coffee Plantation Visit', desc: 'Learn how Tanzania\'s famous coffee is made.' },
  { img: 'https://placehold.co/320x220?text=School+Volunteering', title: 'School Volunteering', desc: 'Make a difference in the classroom.' },
  { img: 'https://placehold.co/320x220?text=Village+Walk', title: 'Village Walk & Tribe Visits', desc: 'Connect with local communities and traditions.' },
];

const notIncluded = [
  { icon: faPlane, text: 'International flights' },
  { icon: faShieldAlt, text: 'Personal travel insurance' },
  { icon: faWineGlassAlt, text: 'Alcoholic beverages' },
  { icon: faSyringe, text: 'Vaccines or health docs' },
  { icon: faMapMarkedAlt, text: 'Optional excursions not in itinerary' },
];

const galleryImages = [itg1, itg2, itg3, itg4, itg5, itg6, itg7, itg8, itg9, itg10, itg11, itg12];

export default function ImmersiveTravel() {
  const whatIsRef = useRef(null);
  useEffect(() => { AOS.init({ duration: 1000, once: true }); }, []);
  const scrollToWhatIs = () => whatIsRef.current?.scrollIntoView({ behavior: 'smooth' });

  return (
    <main style={{width:'100vw', overflowX:'hidden', background:'#fff'}}>
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
            More Than a Safari — A Journey With Purpose
          </h1>
          <p style={{fontFamily:'Open Sans, Inter, sans-serif', fontSize:'1.2rem', color:'#fff', marginBottom:'2rem', maxWidth:600, marginLeft:'auto', marginRight:'auto', textShadow:'0 1px 8px #a7648a'}}>
            Travel with meaning. The profits go directly to our projects in Tanzania.
          </p>
          <motion.button whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.97 }} onClick={scrollToWhatIs} style={{background:'#b5eeb3', color:'#a7648a', border:'none', borderRadius:30, padding:'1rem 2.5rem', fontWeight:700, fontSize:'1.1rem', fontFamily:'Poppins, Nunito, sans-serif', cursor:'pointer', boxShadow:'0 4px 16px rgba(167,100,138,0.10)', transition:'background 0.2s'}}>Start Your Journey</motion.button>
        </motion.div>
      </section>

      {/* What is Immersive Travel? */}
      <section ref={whatIsRef} style={{width:'100vw', background:'#fff', display:'flex', flexWrap:'wrap', alignItems:'center', justifyContent:'center', padding:'clamp(2rem, 8vw, 2rem) 0'}}>
        <div data-aos="fade-right" style={{flex:'1 1 350px', minWidth:280, maxWidth:600, padding:'clamp(1rem, 5vw, 3rem)'}}>
          <h2 style={{fontFamily:'Poppins, Nunito, sans-serif', fontWeight:700, fontSize:'2rem', color:'#a7648a', marginBottom:'1.2rem'}}>What is Immersive Travel?</h2>
          <p style={{fontFamily:'Open Sans, Inter, sans-serif', fontSize:'1.1rem', color:'#000', marginBottom:'1.5rem'}}>
            Kipepeo's immersive travel program blends cultural discovery with social impact. You'll go beyond tourist paths and connect with the heart of the community — and every experience supports our school and development projects.
          </p>
        </div>
        <div data-aos="fade-left" style={{flex:'1 1 350px', minWidth:280, maxWidth:600, display:'flex', alignItems:'center', justifyContent:'center', padding:'clamp(1rem, 5vw, 3rem)'}}>
          <img src={it1} alt="Immersive 1" style={{width:'100%', maxWidth:420, borderRadius:18, boxShadow:'0 4px 24px rgba(167,100,138,0.10)'}}/>
        </div>
      </section>

      {/* What Makes It Different */}
      <section style={{width:'100vw', background:'#b5eeb3', padding:'clamp(2rem, 8vw, 5rem) 0'}}>
        <h2 data-aos="fade-up" style={{fontFamily:'Poppins, Nunito, sans-serif', fontWeight:700, fontSize:'2rem', color:'#a7648a', textAlign:'center', marginBottom:'2.5rem'}}>What Makes It Different</h2>
        <div style={{
          display:'flex',
          flexWrap:'wrap',
          justifyContent:'center',
          gap:'2.5rem',
          padding:'0 clamp(1rem, 5vw, 3rem)',
        }}>
          {[{
            img: it2,
            heading: 'Impact-Driven Experience',
            text: 'Immerse yourself in the rhythm of our community. Live the culture, meet the people, and make real human connections that last far beyond the journey.'
          }, {
            img: it3,
            heading: 'Give Back While You Travel',
            text: 'Volunteer at our local school and see your impact firsthand. 100% of the trip\'s benefits go directly to projects that empower and uplift.'
          }, {
            img: it4,
            heading: 'Explore the Heart of Tanzania',
            text: 'Go beyond the typical safari. Discover hidden waterfalls, meet indigenous tribes, and experience the raw beauty of Tanzania\'s landscapes.'
          }].map((item, i) => (
            <motion.div
              key={item.heading}
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
              <img src={item.img} alt={item.heading} style={{width:'100%', maxWidth:220, borderRadius:12, marginBottom:18, objectFit:'cover', aspectRatio:'4/3', background:'#eee'}}/>
              <h3 style={{fontFamily:'Poppins, Nunito, sans-serif', fontWeight:700, fontSize:'1.2rem', color:'#a7648a', margin:'1rem 0 0.5rem'}}>{item.heading}</h3>
              <p style={{fontFamily:'Open Sans, Inter, sans-serif', fontSize:'1rem', color:'#000'}}>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Activities You'll Experience */}
      <section style={{width:'100vw', background:'#fff', padding:'clamp(2rem, 8vw, 2rem) 0'}}>
        <h2 data-aos="fade-up" style={{fontFamily:'Poppins, Nunito, sans-serif', fontWeight:700, fontSize:'2rem', color:'#a7648a', textAlign:'center', marginBottom:'1.2rem'}}>Sample Itinerary</h2>
        <p data-aos="fade-up" data-aos-delay="100" style={{fontFamily:'Open Sans, Inter, sans-serif', fontSize:'1rem', color:'#a7648a', textAlign:'center', marginBottom:'2.5rem', maxWidth:600, marginLeft:'auto', marginRight:'auto', background:'#b5eeb3', borderRadius:12, padding:'0.8rem 1.2rem'}}>This is a sample itinerary and may be subject to change until final confirmation of the trip.</p>
        <div style={{display:'flex', flexDirection:'column', gap:'2.5rem', maxWidth:700, margin:'0 auto', position:'relative', padding:'0 clamp(1rem, 5vw, 3rem)', marginBottom:'1rem'}}>
          {[
            { day: 'Day 1', title: 'Departure', desc: 'Your adventure begins! Head to the airport and board your flight to Tanzania.' },
            { day: 'Day 2', title: 'Arrival in Tanzania', desc: 'Welcome to Mto wa Mbu! Settle into your accommodation at Jua Manyara Lodge, get a local SIM card, and rest for the days ahead.', img: it5 },
            { day: 'Day 3', title: 'Local Life & Cultural Tour', desc: 'Explore banana plantations, enjoy a local lunch at Mama Africa House, meet different tribes, and taste traditional banana beer.', img: it6 },
            { day: 'Day 4', title: 'Safari in Tarangire National Park', desc: 'Discover one of Tanzania\'s most iconic parks filled with baobab trees, elephants, giraffes, lions, and more.', img: it7 },
            { day: 'Day 5', title: 'Volunteering & Secret Waterfall Trek', desc: 'Join educational activities at Kilimamoja School, then hike to a secluded waterfall sourced from Ngorongoro\'s highlands.', img: it8 },
            { day: 'Day 6', title: 'Hadzabe Tribe & Lake Eyasi Visit', desc: 'Meet the Hadzabe — a unique nomadic tribe — and learn about their traditions near the scenic Lake Eyasi.', img: it9 },
            { day: 'Day 7', title: 'Volunteering & Creative Experience', desc: 'Return to the school for sports day and student interaction. In the afternoon, enjoy a painting session with local artists.', img: it10 },
            { day: 'Days 8–10', title: 'Serengeti & Ngorongoro Safaris', desc: 'Embark on a 3-day safari through the vast Serengeti and the breathtaking Ngorongoro Crater. Sleep under the stars and experience Tanzania\'s wildlife like never before.', img: it11 },
            { day: 'Day 11', title: 'Farewell', desc: 'Say goodbye to the students and staff, return to the lodge to pack, and prepare for your flight home.', img: it12 },
            { day: 'Day 12', title: 'Arrival Back Home', desc: 'Arrive home filled with unforgettable memories and stories from Tanzania.' },
          ].map((item, i, arr) => (
            <motion.div
              key={item.day}
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
                <img src={item.img} alt={item.title} style={{width:'100%', maxWidth:220, aspectRatio:'4/3', height:'auto', objectFit:'cover', borderRadius:12, boxShadow:'0 2px 8px rgba(167,100,138,0.08)', flexShrink:0}}/>
              )}
              <div style={{flex:1, minWidth:0}}>
                <div style={{fontFamily:'Poppins, Nunito, sans-serif', fontWeight:700, fontSize:'1.1rem', color:'#a7648a', marginBottom:4}}>{item.day}</div>
                <div style={{fontFamily:'Poppins, Nunito, sans-serif', fontWeight:700, fontSize:'1.2rem', color:'#000', marginBottom:8}}>{item.title}</div>
                <div style={{fontFamily:'Open Sans, Inter, sans-serif', fontSize:'1rem', color:'#000'}}>{item.desc}</div>
              </div>
            </motion.div>
          ))}
          {/* Timeline vertical line */}
          <div aria-hidden style={{position:'absolute', left:'50%', top:0, bottom:0, width:4, background:'#b5eeb3', zIndex:1, transform:'translateX(-50%)', borderRadius:2, opacity:0.5}}></div>
        </div>
      </section>

      {/* What's Not Included */}
      <section style={{width:'100vw', background:'#fff', padding:'clamp(2rem, 8vw, 2rem) 0'}}>
        <h2 data-aos="fade-up" style={{fontFamily:'Poppins, Nunito, sans-serif', fontWeight:700, fontSize:'2rem', color:'#a7648a', textAlign:'center', marginBottom:'2.5rem'}}>What's Not Included</h2>
        <ul style={{listStyle:'none', padding:0, margin:0, maxWidth:600, marginLeft:'auto', marginRight:'auto', display:'flex', flexWrap:'wrap', gap:'1.5rem', justifyContent:'center'}}>
          {notIncluded.map((item, i) => (
            <li key={item.text} data-aos="fade-up" data-aos-delay={i*60} style={{display:'flex', alignItems:'center', gap:12, background:'#f5f5f5', borderRadius:12, padding:'0.8rem 1.2rem', fontFamily:'Open Sans, Inter, sans-serif', fontSize:'1rem', color:'#a7648a', minWidth:220}}>
              <FontAwesomeIcon icon={item.icon} style={{fontSize:'1.2rem', color:'#a7648a'}}/>
              {item.text}
            </li>
          ))}
        </ul>
      </section>

      {/* Travel That Funds Education */}
      <section style={{width:'100vw', background:`url(${it13}) center/cover no-repeat, #a7648a`, padding:'clamp(2rem, 8vw, 5rem) 0', color:'#fff', position:'relative'}}>
        <div style={{background:'rgba(167,100,138,0.7)', borderRadius:18, padding:'2rem clamp(1rem, 5vw, 3rem)', maxWidth:900, margin:'0 auto'}}>
          <h2 data-aos="fade-up" style={{fontFamily:'Poppins, Nunito, sans-serif', fontWeight:700, fontSize:'2rem', color:'#fff', textAlign:'center', marginBottom:'2rem'}}>Travel That Funds Education</h2>
          <p style={{fontFamily:'Open Sans, Inter, sans-serif', fontSize:'1.1rem', color:'#fff', marginBottom:'1.5rem', textAlign:'center'}}>
            Your trip directly supports:
          </p>
          <ul style={{listStyle:'none', padding:0, margin:0, display:'flex', flexWrap:'wrap', gap:'1.5rem', justifyContent:'center'}}>
            <li style={{display:'flex', alignItems:'center', gap:12, fontSize:'1rem'}}><FontAwesomeIcon icon={faBed} style={{color:'#b5eeb3'}}/> New dormitories for children</li>
            <li style={{display:'flex', alignItems:'center', gap:12, fontSize:'1rem'}}><FontAwesomeIcon icon={faBook} style={{color:'#b5eeb3'}}/> IT classroom & library</li>
            <li style={{display:'flex', alignItems:'center', gap:12, fontSize:'1rem'}}><FontAwesomeIcon icon={faUtensils} style={{color:'#b5eeb3'}}/> School kitchen</li>
            <li style={{display:'flex', alignItems:'center', gap:12, fontSize:'1rem'}}><FontAwesomeIcon icon={faVenus} style={{color:'#b5eeb3'}}/> Women's empowerment programs</li>
          </ul>
          <p style={{fontFamily:'Open Sans, Inter, sans-serif', fontSize:'1.1rem', color:'#fff', marginTop:'2rem', textAlign:'center'}}>Every step helps build a better future.</p>
        </div>
      </section>

      {/* Join the Adventure */}
      <section style={{width:'100vw', background:'#b5eeb3', padding:'clamp(3rem, 10vw, 6rem) 0', textAlign:'center'}}>
        <motion.h2 data-aos="fade-up" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} style={{fontFamily:'Poppins, Nunito, sans-serif', fontWeight:800, fontSize:'2.2rem', color:'#a7648a', marginBottom:'2rem'}}>
          Join the Adventure
        </motion.h2>
        <p style={{fontFamily:'Open Sans, Inter, sans-serif', fontSize:'1.1rem', color:'#000', marginBottom:'2rem'}}>Submit your interest and we'll reach out with personalized info.</p>
        <motion.a whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.97 }} href="https://docs.google.com/forms/d/e/1FAIpQLSdNp8Un1govLfc9D1v8GwIczAP7JCycL01epJojf_xAm7Pvvg/viewform" target="_blank" rel="noopener noreferrer" style={{background:'#a7648a', color:'#fff', border:'none', borderRadius:30, padding:'1rem 2.5rem', fontWeight:700, fontSize:'1.1rem', fontFamily:'Poppins, Nunito, sans-serif', cursor:'pointer', boxShadow:'0 4px 16px rgba(167,100,138,0.10)', textDecoration:'none', display:'inline-block', transition:'background 0.2s'}}>Sign Up for Immersive Travel</motion.a>
      </section>

      {/* Image Gallery */}
      <section style={{width:'100vw', background:'#fff', padding:'clamp(2rem, 8vw, 5rem) 0'}}>
        <h2 data-aos="fade-up" style={{fontFamily:'Poppins, Nunito, sans-serif', fontWeight:700, fontSize:'2rem', color:'#a7648a', textAlign:'center', marginBottom:'2.5rem'}}>See the Journey</h2>
        <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(220px, 1fr))', gap:'1.5rem', padding:'0 clamp(1rem, 5vw, 3rem)'}}>
          {galleryImages.map((img, i) => (
            <motion.div key={img} data-aos="fade-up" data-aos-delay={i*60} whileHover={{ scale: 1.04 }} style={{overflow:'hidden', borderRadius:16, boxShadow:'0 2px 8px rgba(167,100,138,0.08)', cursor:'pointer', position:'relative', maxWidth:260, width:'100%', aspectRatio:'4/3', background:'#eee', margin:'0 auto'}}>
              <img src={img} alt={`Gallery ${i+1}`} style={{width:'100%', height:'100%', display:'block', objectFit:'cover', borderRadius:16, aspectRatio:'4/3'}}/>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
} 