import { Link } from 'react-router-dom';
import LocalImg from '@/components/media/LocalImg';
import { FadeIn } from '@/components/motion/Motion';
import { useSectionScroll } from '@/hooks/useSectionScroll';

export default function ProjectHogar({ meta }: { meta?: any }) {
  const sectionId = 'proyectos-hogar';
  useSectionScroll(sectionId);

  return (
    <section id={sectionId} className="section space-y-8 scroll-mt-32">
      <div className="space-y-3">
        <p className="uppercase text-sm tracking-[0.3em]" style={{ color: 'var(--brand-primary)' }}>
          Hogar seguro
        </p>
        <h1 className="text-3xl md:text-4xl font-semibold">{meta?.h1}</h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-start">
        <div className="space-y-5 leading-relaxed order-2 lg:order-1">
          <p>
            Renovamos dos centros (chicas/chicos) con camas individuales, lockers, duchas con agua caliente y zonas de estudio supervisadas. Es un proceso en marcha con finalización prevista en 2025 para garantizar seguridad, comodidad y dignidad diaria.
          </p>
          <p>
            El equipo residente acompaña 24/7 a menores que viven lejos del colegio o en contextos familiares inseguros, ofreciendo tutorías nocturnas, refuerzo escolar y actividades recreativas.
          </p>
        </div>

        <FadeIn>
          <div className="rounded-2xl overflow-hidden shadow-xl max-h-[420px]">
            <LocalImg src="/images/proj-hogar.jpg" alt="Internado Hogar" className="w-full h-full object-cover" />
          </div>
        </FadeIn>
      </div>

      <div className="flex flex-wrap gap-3">
        <Link to="/colabora/dona-ahora" className="btn-primary">
          Equipa el internado
        </Link>
        <Link to="/proyectos" className="btn-secondary">
          Volver a proyectos
        </Link>
      </div>
    </section>
  );
}
