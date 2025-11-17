import LocalImg from '@/components/media/LocalImg';
import { Stagger, StaggerItem } from '@/components/motion/Motion';
import { Link } from 'react-router-dom';
import { useSectionScroll } from '@/hooks/useSectionScroll';

const team = [
  { name: 'Andrea', role: 'Fundadora y Coordinadora General España', img: '/images/team-andrea.jpg' },
  { name: 'Paulo', role: 'Coordinador y fundador local Tanzania', img: '/images/team-paulo.jpg' },
  { name: 'María del Carmen', role: 'Responsable de operaciones internas', img: '/images/team-mariacarmen.jpg' },
  { name: 'Sonya', role: 'Responsable de proyectos en terreno', img: '/images/team-sonya.jpg' },
  { name: 'Loreto', role: 'Responsable de estrategias y colaboraciones', img: '/images/team-loreto.jpg' },
  { name: 'Iñigo', role: 'Asistente de proyectos y logística', img: '/images/team-inigo.jpg' },
];

export default function AboutTeam({ meta }: { meta?: any }) {
  const sectionId = 'acerca-de-quienes-somos';
  useSectionScroll(sectionId);

  return (
    <section id={sectionId} className="section space-y-6 scroll-mt-32">
      <h1 className="text-3xl md:text-4xl font-semibold">{meta?.h1}</h1>
      <p style={{ color: 'var(--brand-muted)' }}>
        Lo que empezó como un pequeño gesto solidario hoy es una red que acompaña a 400 menores y sostiene un internado para 208 niños y niñas. Este es el equipo base que cuida la escuela y las alianzas entre Tanzania y España.
      </p>
      <Stagger>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {team.map((member) => (
            <StaggerItem key={member.name}>
              <div className="card text-center flex flex-col items-center">
                <div className="w-28 h-28 mx-auto rounded-full overflow-hidden mb-4 border-4 border-white shadow-lg">
                  <LocalImg src={member.img} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-semibold">{member.name}</h3>
                <p className="text-sm" style={{ color: 'var(--brand-muted)' }}>
                  {member.role}
                </p>
              </div>
            </StaggerItem>
          ))}
        </div>
      </Stagger>
      <Link to="/contacto" className="btn-primary inline-flex w-fit">
        Conoce al equipo
      </Link>
    </section>
  );
}
