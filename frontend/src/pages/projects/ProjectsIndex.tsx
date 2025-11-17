import { useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import LocalImg from '@/components/media/LocalImg';
import { FadeIn } from '@/components/motion/Motion';

const projects = [
  {
    slug: 'becas',
    title: 'Becas y continuación de estudios',
    img: '/images/proj-becas.jpg',
    desc: 'Apoyo integral para que jóvenes vulnerables continúen sus estudios (matrícula, uniformes, material y alimentación).',
  },
  {
    slug: 'hogar',
    title: 'Internado “Hogar”',
    img: '/images/proj-hogar.jpg',
    desc: 'Alojamiento digno y seguro para más de 200 menores. Finalización prevista 2025, con mejoras continuas.',
  },
  {
    slug: 'cocina-comedor',
    title: 'Cocina y comedor escolares',
    img: '/images/proj-cocina.jpg',
    desc: 'Cocina profesional y comedor para 400 niños. Alimentación segura e higiene.',
  },
  {
    slug: 'biblioteca',
    title: 'Biblioteca y Sala de Juegos',
    img: '/images/proj-biblioteca.jpg',
    desc: 'De 3 libros a una biblioteca viva; lectura y juegos educativos.',
  },
  {
    slug: 'informatica',
    title: 'Sala de Informática',
    img: '/images/proj-informatica.jpg',
    desc: 'Aula con 28 ordenadores y formación digital responsable (finalizada 2025).',
  },
];

export default function ProjectsIndex({ meta }: { meta?: any }) {
  const location = useLocation();

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!location.pathname.startsWith('/proyectos/')) return;
    const slug = location.pathname.split('/')[2];
    if (!slug) return;
    const targetId = `proyectos-${slug}`;
    const timers: number[] = [];
    let attempts = 0;

    const scrollWithOffset = () => {
      const element = document.getElementById(targetId);
      if (!element && attempts < 5) {
        attempts += 1;
        timers.push(window.setTimeout(scrollWithOffset, 100));
        return;
      }
      if (!element) return;
      const headerOffset = 96;
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top: Math.max(offsetTop, 0), behavior: 'smooth' });
    };

    timers.push(window.setTimeout(scrollWithOffset, 120));

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, [location.pathname]);

  return (
    <section className="max-w-6xl mx-auto px-4 py-12 md:py-16 space-y-10">
      <h1 className="text-3xl md:text-4xl font-semibold">{meta?.h1}</h1>
      <p className="max-w-2xl" style={{ color: 'var(--brand-muted)' }}>
        En Kipepeo, cada proyecto nace de necesidades reales y se ejecuta por personal local, generando impacto que permanece en la comunidad.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <FadeIn key={project.slug} delay={index * 0.05}>
            <Link to={`/proyectos/${project.slug}`} className="card block hover:shadow-lg transition-shadow min-h-[260px]">
              <div className="rounded-xl overflow-hidden mb-4 bg-[color:var(--brand-secondary)]/20">
                <LocalImg src={project.img} alt={project.title} className="w-full h-44 object-cover" />
              </div>
              <h3 className="font-semibold">{project.title}</h3>
              <p className="text-sm mt-1" style={{ color: 'var(--brand-muted)' }}>
                {project.desc}
              </p>
            </Link>
          </FadeIn>
        ))}
      </div>

      <Outlet />
    </section>
  );
}
