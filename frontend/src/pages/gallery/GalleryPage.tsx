import LocalImg from '@/components/media/LocalImg';
import { FadeIn } from '@/components/motion/Motion';

const images = [
  '/images/gallery-main-1.jpg',
  '/images/gallery-main-2.jpg',
  '/images/gallery-main-3.jpg',
  '/images/gallery-main-4.jpg',
  '/images/gallery-main-5.jpg',
  '/images/gallery-main-6.jpg',
  '/images/gallery-main-7.jpg',
  '/images/gallery-main-8.jpg',
  '/images/gallery-main-9.jpg',
  '/images/gallery-main-10.jpg',
  '/images/gallery-main-11.jpg',
  '/images/gallery-main-12.jpg',
];

export default function GalleryPage({ meta }: { meta?: any }) {
  return (
    <section className="section">
      <h1 className="text-3xl md:text-4xl font-semibold mb-8">{meta?.h1}</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, index) => (
          <FadeIn key={`${src}-${index}`} delay={index * 0.05}>
            <div className="rounded-xl overflow-hidden">
              <LocalImg src={src} alt={`Galería ${index + 1}`} className="w-full h-56 object-cover" />
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
