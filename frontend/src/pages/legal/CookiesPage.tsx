import SectionPage from '@/pages/common/SectionPage';

export default function CookiesPage({ meta }: { meta?: any }) {
  return (
    <SectionPage meta={meta}>
      <p>
        Utilizamos cookies técnicas para operar el sitio y analíticas (Google Analytics 4) previa aceptación. Puedes revocar el
        consentimiento en cualquier momento desde el banner o configurando tu navegador.
      </p>
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-gray-500">
            <th className="py-2">Cookie</th>
            <th>Finalidad</th>
            <th>Duración</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2">kipepeo_session</td>
            <td>Recordar idioma seleccionado.</td>
            <td>1 año</td>
          </tr>
          <tr>
            <td>_ga</td>
            <td>Métricas anónimas de navegación.</td>
            <td>2 años</td>
          </tr>
        </tbody>
      </table>
    </SectionPage>
  );
}
