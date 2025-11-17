import { Link } from 'react-router-dom';
import LocalImg from '@/components/media/LocalImg';
import { FadeIn } from '@/components/motion/Motion';
import { useSectionScroll } from '@/hooks/useSectionScroll';

export default function ProjectInformatica({ meta }: { meta?: any }) {
  const sectionId = 'proyectos-informatica';
  useSectionScroll(sectionId);

  return (
    <section id={sectionId} className="section space-y-8 scroll-mt-32">
      <div className="space-y-3">
        <p className="uppercase text-sm tracking-[0.3em]" style={{ color: 'var(--brand-primary)' }}>
          Brecha digital
        </p>
        <h1 className="text-3xl md:text-4xl font-semibold">{meta?.h1}</h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-start">
        <div className="space-y-5 leading-relaxed order-2 lg:order-1">
          <p>
            Creamos un aula moderna con 28 ordenadores, energía estable y plan educativo en ciudadanía digital responsable.
          </p>
          <p>
            Finalizada en 2025, garantiza igualdad de oportunidades y abre puertas a certificaciones básicas, programación creativa y edición multimedia.
          </p>
        </div>

        <FadeIn>
          <div className="rounded-2xl overflow-hidden shadow-xl max-h-[420px]">
            <LocalImg src="/images/proj-informatica.jpg" alt="Sala de informática" className="w-full h-full object-cover" />
          </div>
        </FadeIn>
      </div>

      <div className="flex flex-wrap gap-3">
        <Link to="/colabora/dona-ahora" className="btn-primary">
          Dona tecnología
        </Link>
        <Link to="/proyectos" className="btn-secondary">
          Volver al listado
        </Link>
      </div>
    </section>
  );
}
