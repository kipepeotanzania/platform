import RequireRole from '@/components/auth/RequireRole';

export default function DonorArea() {
  return (
    <RequireRole roles={['DONOR']}>
      <section className="section space-y-4">
        <h1 className="text-3xl font-semibold">Área de donantes</h1>
        <p className="text-[color:var(--brand-muted)]">
          Pronto podrás descargar recibos, ver impacto de tus donaciones y recibir contenido exclusivo.
        </p>
      </section>
    </RequireRole>
  );
}
