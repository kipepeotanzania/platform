import RequireRole from '@/components/auth/RequireRole';

export default function VolunteerArea() {
  return (
    <RequireRole roles={['VOLUNTEER']}>
      <section className="section space-y-4">
        <h1 className="text-3xl font-semibold">Área de voluntariado</h1>
        <p className="text-[color:var(--brand-muted)]">
          Encontrarás tus misiones, documentos y reuniones asignadas cuando activemos el módulo operativo.
        </p>
      </section>
    </RequireRole>
  );
}
