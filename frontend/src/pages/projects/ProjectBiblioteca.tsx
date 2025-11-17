import { Link } from 'react-router-dom';
import LocalImg from '@/components/media/LocalImg';
import { FadeIn } from '@/components/motion/Motion';
import { useSectionScroll } from '@/hooks/useSectionScroll';

export default function ProjectBiblioteca({ meta }: { meta?: any }) {
  const sectionId = 'proyectos-biblioteca';
  useSectionScroll(sectionId);

  return (
    <section id={sectionId} className="section space-y-8 scroll-mt-32">
      <div className="space-y-3">
        <p className="uppercase text-sm tracking-[0.3em]" style={{ color: 'var(--brand-primary)' }}>
          Espacios que inspiran
        </p>
        <h1 className="text-3xl md:text-4xl font-semibold">{meta?.h1}</h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-start">
        <div className="space-y-5 leading-relaxed order-2 lg:order-1">
          <p>
            Pasamos de 3 libros y una mesa a una biblioteca viva, con ludoteca, juegos mentales y mesas colaborativas que se convierten en refugio emocional para el alumnado.
          </p>
          <p>
            Próximo hito: digitalizar el catálogo y lanzar clubes de lectura bilingües (suajili-español) que fomenten el intercambio cultural.
          </p>
        </div>

        <FadeIn>
          <div className="rounded-2xl overflow-hidden shadow-xl max-h-[420px]">
            <LocalImg src="/images/proj-biblioteca.jpg" alt="Biblioteca y sala de juegos" className="w-full h-full object-cover" />
          </div>
        </FadeIn>
      </div>

      <div className="flex flex-wrap gap-3">
        <Link to="/colabora/dona-ahora" className="btn-primary">
          Dona libros
        </Link>
        <Link to="/proyectos" className="btn-secondary">
          Más iniciativas
        </Link>
      </div>
    </section>
  );
}
