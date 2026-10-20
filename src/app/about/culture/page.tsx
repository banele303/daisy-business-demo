import Image from 'next/image';
import { Heart, Users, Sparkles } from 'lucide-react';

export const metadata = {
  title: 'Our Culture | Daisy Business Solutions',
  description: 'Explore the people, community initiatives, and culture that drive Daisy Business Solutions.',
};

export default function CulturePage() {
  const photos = [
    '/images/culture/celebrate.jpg',
    '/images/culture/awards.jpg',
    '/images/culture/daisy-mandela-day-1.jpg',
    '/images/culture/daisy-mandela-day-2.jpg',
    '/images/culture/daisy-mandela-day-4.jpg',
    '/images/culture/daisy-mandela-day-5.jpg',
  ];

  return (
    <div className="flex flex-col">
      <section className="bg-green-950 text-white py-20 text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <span className="text-xs font-bold uppercase tracking-widest text-green-400 bg-green-900/60 border border-green-700/50 px-3.5 py-1.5 rounded-full inline-block mb-4">
            Life at Daisy
          </span>
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl mb-6">
            Our Culture & Community
          </h1>
          <p className="text-lg text-green-100 max-w-2xl mx-auto leading-relaxed">
            Technology is built by people for people. Discover how the Daisy family gives back and creates meaningful impact across South Africa.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {photos.map((src, i) => (
              <div key={i} className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md group">
                <Image
                  alt={`Daisy culture ${i + 1}`}
                  src={src}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
