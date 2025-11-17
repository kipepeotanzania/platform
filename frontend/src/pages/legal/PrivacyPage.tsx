import SectionPage from '@/pages/common/SectionPage';

export default function PrivacyPage({ meta }: { meta?: any }) {
  return (
    <SectionPage meta={meta}>
      <p>
        Kipepeo actúa como responsable del tratamiento. Recopilamos datos identificativos, de contacto y de facturación solo
        para gestionar donaciones, comunicaciones institucionales y obligaciones legales.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li>Base legal: consentimiento, ejecución de contratos de donación y cumplimiento normativo.</li>
        <li>Derechos: acceso, rectificación, supresión, oposición, portabilidad y limitación.</li>
        <li>Contacto privacidad: privacidad@kipepeo.ngo</li>
      </ul>
    </SectionPage>
  );
}
