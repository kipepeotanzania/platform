import type { ImgHTMLAttributes } from 'react';

type Props = ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
};

const CLOUDINARY_BASE = import.meta.env.VITE_CLOUDINARY_BASE?.replace(/\/$/, '');

function resolveSrc(src: string) {
  if (!CLOUDINARY_BASE) return src;
  if (/^https?:\/\//i.test(src)) return src;
  let sanitized = src.replace(/^\/+/, '');
  if (sanitized.startsWith('images/')) {
    sanitized = sanitized.replace(/^images\//, '');
  }
  return `${CLOUDINARY_BASE}/${sanitized}`;
}

export default function LocalImg({ src, alt = '', loading = 'lazy', decoding = 'async', ...rest }: Props) {
  return <img src={resolveSrc(src)} alt={alt} loading={loading} decoding={decoding} {...rest} />;
}
