export default function BlogIndex({ meta }: { meta?: any }) {
  return (
    <section className="section space-y-6 text-center">
      <h1 className="text-3xl md:text-4xl font-semibold">{meta?.h1}</h1>
      <p className="text-lg" style={{ color: 'var(--brand-muted)' }}>
        Próximamente compartiremos historias, entrevistas y novedades desde Tanzania.
      </p>
    </section>
  );
}
