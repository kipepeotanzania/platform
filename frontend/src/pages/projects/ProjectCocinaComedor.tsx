import { Link } from 'react-router-dom';
import LocalImg from '@/components/media/LocalImg';
import { FadeIn } from '@/components/motion/Motion';
import { useSectionScroll } from '@/hooks/useSectionScroll';

export default function ProjectCocinaComedor({ meta }: { meta?: any }) {
  const sectionId = 'proyectos-cocina-comedor';
  useSectionScroll(sectionId);

  return (
    <section id={sectionId} className="section space-y-8 scroll-mt-32">
      <div className="space-y-3">
        <p className="uppercase text-sm tracking-[0.3em]" style={{ color: 'var(--brand-primary)' }}>
          Alimentación digna
        </p>
        <h1 className="text-3xl md:text-4xl font-semibold">{meta?.h1}</h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-start">
        <div className="space-y-5 leading-relaxed order-2 lg:order-1">
          <p>
            Entre 2023 y 2024 transformamos una cocina improvisada en un espacio profesional con hornos industriales, almacén ventilado y comedor cubierto para más de 400 menores.
          </p>
          <p>
            Ahora impartimos talleres de higiene, nutrición y cocina local con madres de familia, reduciendo enfermedades gastrointestinales y asegurando tiempos de comida dignos y ordenados.
          </p>
        </div>

        <FadeIn>
          <div className="rounded-2xl overflow-hidden shadow-xl max-h-[420px]">
            <LocalImg src="/images/proj-cocina.jpg" alt="Proyecto cocina y comedor" className="w-full h-full object-cover" />
          </div>
        </FadeIn>
      </div>

      <div className="flex flex-wrap gap-3">
        <Link to="/colabora/dona-ahora" className="btn-primary">
          Apadrina menús
        </Link>
        <Link to="/proyectos" className="btn-secondary">
          Conoce más proyectos
        </Link>
      </div>
    </section>
  );
}
