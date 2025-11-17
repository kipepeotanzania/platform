import type { ReactNode } from 'react';
import LocalImg from '@/components/media/LocalImg';

type Props = {
  meta?: any;
  hero?: string;
  children?: ReactNode;
};

export default function SectionPage({ meta, hero, children }: Props) {
  const heading = meta?.h1 || meta?.title || 'Kipepeo';

  return (
    <section className="section space-y-8">
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="space-y-3">
          {meta?.breadcrumb && (
            <p className="text-xs uppercase tracking-[0.25em] font-semibold" style={{ color: 'var(--brand-primary)' }}>
              {meta.breadcrumb}
            </p>
          )}
          <h1 className="text-3xl md:text-4xl font-semibold" style={{ color: 'var(--brand-text)' }}>
            {heading}
          </h1>
          {meta?.description && (
            <p className="text-lg" style={{ color: 'var(--brand-muted)' }}>
              {meta.description}
            </p>
          )}
        </div>

        {hero && (
          <div
            className="rounded-3xl overflow-hidden shadow-xl border border-white/60 bg-[color:var(--brand-surface)]"
            style={{ minHeight: '240px' }}
          >
            <LocalImg src={hero} alt={heading} className="w-full h-[240px] md:h-[360px] object-cover" />
          </div>
        )}

        <div className="space-y-6 text-base leading-relaxed" style={{ color: 'var(--brand-text)' }}>
          {children}
        </div>
      </div>
    </section>
  );
}
