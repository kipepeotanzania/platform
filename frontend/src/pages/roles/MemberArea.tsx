import RequireRole from '@/components/auth/RequireRole';

export default function MemberArea() {
  return (
    <RequireRole roles={['MEMBER']}>
      <section className="section space-y-4">
        <h1 className="text-3xl font-semibold">Área de socios/as</h1>
        <p className="text-[color:var(--brand-muted)]">
          Aquí verás tus aportaciones, informes y próximos eventos en cuanto conectemos los datos con el backend.
        </p>
      </section>
    </RequireRole>
  );
}
