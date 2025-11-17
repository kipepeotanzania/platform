import { Helmet as RHHelmet } from 'react-helmet-async';

type Meta = {
  title: string;
  description: string;
  canonical: string;
  ogType?: string;
  jsonLd?: object;
};

export default function Helmet({ meta }: { meta: Meta }) {
  const { title, description, canonical, ogType = 'website', jsonLd } = meta;

  return (
    <RHHelmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
      {jsonLd && <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}
    </RHHelmet>
  );
}
