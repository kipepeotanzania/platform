import RequireRole from '@/components/auth/RequireRole';

export default function TravelerArea() {
  return (
    <RequireRole roles={['TRAVELER']}>
      <section className="section space-y-4">
        <h1 className="text-3xl font-semibold">Área de viajeros</h1>
        <p className="text-[color:var(--brand-muted)]">
          Aquí tendrás tu itinerario, checklist y foros privados cuando confirmes tu experiencia con Kipepeo.
        </p>
      </section>
    </RequireRole>
  );
}
