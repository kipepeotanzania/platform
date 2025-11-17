import { Link } from 'react-router-dom';
import { useSectionScroll } from '@/hooks/useSectionScroll';

export default function AboutMission({ meta }: { meta?: any }) {
  const sectionId = 'acerca-de-mision';
  useSectionScroll(sectionId);

  return (
    <section id={sectionId} className="section space-y-6 scroll-mt-32">
      <h1 className="text-3xl md:text-4xl font-semibold">{meta?.h1}</h1>
      <div className="card space-y-4">
        <p>
          La misión de Kipepeo es romper los ciclos de pobreza absoluta y falta de oportunidades mediante la educación, ofreciendo a cada persona la llave más valiosa: el conocimiento. Una vez que la mente se llena de aprendizaje, ninguna forma de pobreza puede limitarla.
        </p>
        <p>
          Facilitamos oportunidades educativas y de desarrollo en contextos de vulnerabilidad extrema, acompañando a niños, niñas y jóvenes para que sueñen, aprendan y crezcan. La educación no es un recurso: es el motor que transforma comunidades, genera líderes locales y crea impacto duradero.
        </p>
      </div>
      <Link to="/colabora/dona-ahora" className="btn-primary inline-flex w-fit">
        Apoya nuestra misión
      </Link>
    </section>
  );
}
