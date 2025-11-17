import { Link } from 'react-router-dom';
import { useSectionScroll } from '@/hooks/useSectionScroll';

export default function AboutLocation({ meta }: { meta?: any }) {
  const sectionId = 'acerca-de-donde-estamos';
  useSectionScroll(sectionId);

  return (
    <section id={sectionId} className="section space-y-6 scroll-mt-32">
      <h1 className="text-3xl md:text-4xl font-semibold">{meta?.h1}</h1>
      <div className="card space-y-4">
        <p>
          Kipepeo tiene su sede principal en Mto Wa Mbu, región de Manyara (Tanzania). Es hogar de comunidades Masai e Irak, famosa por los safaris pero aún con grandes necesidades educativas y sociales. Trabajamos en estrecha colaboración con la comunidad, respetando tradiciones y generando impacto sostenible.
        </p>
        <p>
          También contamos con un punto de contacto en Extremadura (España) para coordinar voluntariado, donaciones y campañas de sensibilización internacional.
        </p>
      </div>
      <Link to="/contacto" className="btn-primary inline-flex w-fit">
        Contacta con nosotros
      </Link>
    </section>
  );
}
