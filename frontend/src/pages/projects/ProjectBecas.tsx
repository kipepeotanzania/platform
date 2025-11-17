import { Link } from 'react-router-dom';
import LocalImg from '@/components/media/LocalImg';
import { FadeIn } from '@/components/motion/Motion';
import { useSectionScroll } from '@/hooks/useSectionScroll';

export default function ProjectBecas({ meta }: { meta?: any }) {
  const sectionId = 'proyectos-becas';
  useSectionScroll(sectionId);

  return (
    <section id={sectionId} className="section space-y-8 scroll-mt-32">
      <div className="space-y-3">
        <p className="uppercase text-sm tracking-[0.3em]" style={{ color: 'var(--brand-primary)' }}>
          Becas que cambian vidas
        </p>
        <h1 className="text-3xl md:text-4xl font-semibold">{meta?.h1}</h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-start">
        <div className="space-y-5 leading-relaxed order-2 lg:order-1">
          <p>
            Apoyamos a jóvenes en situación de vulnerabilidad para que puedan continuar sus estudios hasta FP. Actualmente, ~25% del alumnado accede de forma gratuita a la escuela con matrícula, uniformes, materiales y alimentación. Nuestro objetivo es alcanzar al 100% de quienes viven vulnerabilidad extrema.
          </p>
          <p>
            Trabajamos con servicios sociales y líderes comunitarios para identificar a quienes más lo necesitan, asegurando la eficacia de cada recurso.
          </p>
        </div>

        <FadeIn>
          <div className="rounded-2xl overflow-hidden shadow-xl max-h-[420px]">
            <LocalImg src="/images/proj-becas.jpg" alt="Proyecto de becas" className="w-full h-full object-cover" />
          </div>
        </FadeIn>
      </div>

      <div className="flex flex-wrap gap-3">
        <Link to="/colabora/dona-ahora" className="btn-primary">
          Apoya las becas
        </Link>
        <Link to="/proyectos" className="btn-secondary">
          Más proyectos
        </Link>
      </div>
    </section>
  );
}
