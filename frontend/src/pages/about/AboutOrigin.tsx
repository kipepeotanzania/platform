import LocalImg from '@/components/media/LocalImg';
import { FadeIn } from '@/components/motion/Motion';
import { Link } from 'react-router-dom';
import { useSectionScroll } from '@/hooks/useSectionScroll';

export default function AboutOrigin({ meta }: { meta?: any }) {
  const sectionId = 'acerca-de-origen';
  useSectionScroll(sectionId);

  return (
    <section id={sectionId} className="section space-y-8 scroll-mt-32">
      <header className="space-y-4">
        <p className="uppercase text-sm tracking-[0.3em]" style={{ color: 'var(--brand-primary)' }}>
          Nuestra historia
        </p>
        <h1 className="text-3xl md:text-4xl font-semibold">{meta?.h1}</h1>
      </header>

      <div className="grid gap-8 md:grid-cols-[1.05fr_0.95fr] items-start">
        <div className="space-y-5 leading-relaxed order-2 md:order-1">
          <p>
            La historia de Kipepeo nace del corazón de Paulo, en el norte de Tanzania, mucho antes de que existiera un colegio o una organización. En 2010 comenzó a acoger a niños y niñas que vivían en la calle, pequeños que sobrevivían comiendo las sobras de los mercados. Con su salario y una generosidad infinita, les ofreció alimento, refugio y, sobre todo, dignidad.
          </p>
          <p>
            En 2015 levantó las primeras aulas con carpas y barro. Eran humildes, pero llenas de esperanza: decenas de menores pudieron sentarse por primera vez frente a un maestro, aprender a leer, escribir y soñar con un futuro diferente.
          </p>
          <p>
            En 2019 Andrea llegó a Tanzania y se sumó al proyecto, aportando energía y un equipo de apoyo desde España. Juntos dieron forma a un espacio donde los niños no solo estudian, sino también viven, se alimentan, crecen y sanan. Así nació Kipepeo oficialmente en 2022.
          </p>
          <p>
            Hoy, el Kilimamoja Hot Spring Primary School acompaña a unos 400 alumnos y el internado acoge a 208 menores en vulnerabilidad extrema. En 2025 se registró la sede española para tender puentes de solidaridad entre ambos países.
          </p>
          <p>
            Kipepeo es la historia de cómo el corazón de Paulo inició un movimiento de esperanza que hoy vuela alto, demostrando que cuando se actúa desde el amor, todo es posible.
          </p>
        </div>

        <FadeIn>
          <div className="rounded-2xl overflow-hidden shadow-xl max-h-[420px]">
            <LocalImg src="/images/about-hero.jpg" alt="Origen de Kipepeo" className="w-full h-full object-cover" />
          </div>
        </FadeIn>
      </div>

      <Link to="/acerca-de/mision" className="btn-primary inline-flex w-fit">
        Conoce nuestra historia
      </Link>
    </section>
  );
}
