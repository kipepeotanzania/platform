import SectionPage from '@/pages/common/SectionPage';

export default function ComingSoon({ meta }: { meta?: any }) {
  return (
    <SectionPage meta={meta} hero="/images/gallery-1.jpg">
      <p>
        Estamos ultimando detalles para compartir este contenido. Si necesitas más información, puedes escribirnos en
        cualquier momento y te responderemos con gusto.
      </p>
    </SectionPage>
  );
}
