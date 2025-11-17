import SectionPage from '@/pages/common/SectionPage';

export default function TermsPage({ meta }: { meta?: any }) {
  return (
    <SectionPage meta={meta}>
      <p>
        El acceso al sitio implica aceptar estos términos. Los contenidos son propiedad de Kipepeo salvo que se indique lo
        contrario. Queda prohibida la reproducción no autorizada.
      </p>
      <p>
        Las donaciones se gestionan conforme a la normativa española y tanzana vigente. Cualquier disputa se resolverá en los
        tribunales de Barcelona, España.
      </p>
    </SectionPage>
  );
}
