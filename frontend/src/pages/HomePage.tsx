import LocalImg from '@/components/media/LocalImg';
import { FadeIn, Stagger, StaggerItem } from '@/components/motion/Motion';
import { Link } from 'react-router-dom';

export default function HomePage({ meta }: { meta?: any }) {
  return (
    <section className="section space-y-14">
      {/* HERO */}
      <FadeIn>
        <div className="rounded-[32px] p-1" style={{ background: 'var(--brand-gradient)' }}>
          <div className="grid md:grid-cols-2 gap-10 items-center rounded-[30px] bg-white/90 px-8 py-10 shadow-xl">
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.3em]" style={{ color: 'var(--brand-primary)' }}>
                Kipepeo ONG
              </p>
              <h1 className="text-4xl md:text-5xl font-semibold leading-tight">{meta?.h1}</h1>
              <p className="text-lg">
                Desde Tanzania, una mariposa alzó el vuelo. Su nombre es Kipepeo, y su misión: transformar vidas a través de la educación,
                el cariño y las segundas oportunidades.
              </p>
              <div className="pill-tabs">
                <button style={{ background: 'var(--brand-primary)', color: '#fff' }}>Voluntariado en Tanzania</button>
                <button style={{ color: 'var(--brand-primary)' }}>Voluntariado desde casa</button>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link to="/colabora/dona-ahora" className="btn-primary">
                  Dona ahora
                </Link>
                <Link to="/proyectos" className="btn-secondary">
                  Ver proyectos
                </Link>
              </div>
            </div>
            <div className="rounded-[26px] overflow-hidden shadow-2xl border border-white/60">
              <LocalImg src="/images/home-hero.jpg" alt="Centro Kipepeo" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </FadeIn>

      {/* IDENTIDAD */}
      <FadeIn>
        <div className="p-6 md:p-8 rounded-2xl bg-white shadow-inner border border-white/60">
          <h2 className="text-2xl font-semibold mb-3">¿Por qué “Kipepeo” (mariposa)?</h2>
          <div className="space-y-4">
            <p>
              Nos llamamos Kipepeo, que en swahili significa mariposa, porque la mariposa es un símbolo de transformación, esperanza y libertad.
              Así como una mariposa nace de un pequeño capullo y despliega sus alas para volar, en Kipepeo acompañamos a los niños y niñas más vulnerables
              en su camino hacia descubrir su potencial y construir un futuro lleno de oportunidades.
            </p>
            <p>
              En Kipepeo no solo ofrecemos un refugio seguro y lleno de cariño; también entregamos la llave más valiosa de la vida: el conocimiento.
              Cada lección, cada libro, cada juego educativo es una herramienta que les permite abrir nuevas puertas, aprender a soñar en grande y transformar sus propias vidas.
            </p>
            <p>
              Kipepeo es, en esencia, una burbuja de protección, amor y aprendizaje, donde los menores pueden sentirse seguros, valorados y libres para crecer…
            </p>
          </div>
        </div>
      </FadeIn>

      {/* BLOQUES DESTACADOS */}
      <Stagger>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { title: 'Proyectos', desc: 'Iniciativas educativas y comunitarias que cambian vidas.', to: '/proyectos' },
            { title: 'Colabora', desc: 'Sé parte del cambio: socio/a, donante o voluntario/a.', to: '/colabora' },
            { title: 'Viaja', desc: 'Vive la Tanzania real con experiencias colaborativas.', to: '/viaja' },
            { title: 'Galería', desc: 'Conoce a estudiantes y comunidad en imágenes y vídeo.', to: '/galeria' },
          ].map((card, index) => (
            <StaggerItem key={index}>
              <Link to={card.to} className="card block hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                <p className="text-sm" style={{ color: 'var(--brand-muted)' }}>
                  {card.desc}
                </p>
              </Link>
            </StaggerItem>
          ))}
        </div>
      </Stagger>

      {/* EQUIPO Y RECONOCIMIENTO */}
      <FadeIn>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card glass-card">
            <h3 className="font-semibold mb-2">Nuestro equipo</h3>
            <p className="text-sm" style={{ color: 'var(--brand-muted)' }}>
              Un equipo local de profesionales garantiza cada día el funcionamiento de las clases, el internado y los proyectos comunitarios.
            </p>
          </div>
          <div className="card glass-card">
            <h3 className="font-semibold mb-2">Reconocimiento legal y fiscal</h3>
            <p className="text-sm" style={{ color: 'var(--brand-muted)' }}>
              Kipepeo está acogida a la Ley 49/2002 como ONGD por la AEXCID. Todas las contribuciones pueden beneficiarse de incentivos fiscales.
            </p>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
