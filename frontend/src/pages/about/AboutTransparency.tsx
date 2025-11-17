import { Link } from 'react-router-dom';
import { useSectionScroll } from '@/hooks/useSectionScroll';

const docs = [
  { label: 'Estatutos de Kipepeo (PDF)', url: '#' },
  { label: 'Informes de actividades', url: '#' },
  { label: 'Otros documentos legales y de gestión', url: '#' },
];

export default function AboutTransparency({ meta }: { meta?: any }) {
  const sectionId = 'acerca-de-transparencia';
  useSectionScroll(sectionId);

  return (
    <section id={sectionId} className="section space-y-6 scroll-mt-32">
      <h1 className="text-3xl md:text-4xl font-semibold">{meta?.h1}</h1>
      <p style={{ color: 'var(--brand-muted)' }}>
        La transparencia es un principio básico que rige la gestión interna de Kipepeo. Garantiza buenas prácticas, eficiencia y eficacia en la consecución de nuestros fines y nos permite seguir mereciendo la confianza de donantes y comunidad.
      </p>
      <div className="space-y-3">
        {docs.map((doc) => (
          <a key={doc.label} href={doc.url} className="card block hover:-translate-y-0.5 transition-transform text-[color:var(--brand-primary)]">
            {doc.label}
          </a>
        ))}
      </div>
      <Link to="/contacto" className="btn-primary inline-flex w-fit">
        Ver documentos
      </Link>
    </section>
  );
}
