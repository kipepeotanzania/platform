import { Link } from 'react-router-dom';
import { useSectionScroll } from '@/hooks/useSectionScroll';

export default function AboutObjectives({ meta }: { meta?: any }) {
  const sectionId = 'acerca-de-objetivos';
  useSectionScroll(sectionId);

  return (
    <section id={sectionId} className="section space-y-6 scroll-mt-32">
      <h1 className="text-3xl md:text-4xl font-semibold">{meta?.h1}</h1>
      <div className="card space-y-4">
        <p>
          Kipepeo busca contribuir al desarrollo comunitario conectando educación, bienestar, cultura y alianzas. No perseguimos metas aisladas: trabajamos para que las comunidades alcancen su máximo potencial y logren los ODS mediante programas educativos, sociales y culturales.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-sm" style={{ color: 'var(--brand-muted)' }}>
          <li>Reducir el abandono escolar femenino y adolescente con becas integrales.</li>
          <li>Garantizar alimentación digna con la nueva cocina/comedor y hábitos saludables.</li>
          <li>Ampliar recursos pedagógicos y digitales (biblioteca y sala de informática).</li>
          <li>Fortalecer al equipo docente y socioemocional con formación continua.</li>
          <li>Tejer alianzas con universidades y organizaciones para escalar el impacto.</li>
        </ul>
      </div>
      <Link to="/proyectos" className="btn-primary inline-flex w-fit">
        Conoce nuestros proyectos
      </Link>
    </section>
  );
}
