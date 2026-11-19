import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, Phone, Play } from 'lucide-react';
import { EXTERNAL_LINKS, MEDIA, SITE_CONTACT } from '../data/media';
import { ROOMS, VILLA_DATA } from '../data/roomsAndDining';
import {
  EXPERIENCES,
  GALLERY_PHOTOS,
  GIFT_CERTIFICATES,
  OFFERS,
  SPA_DATA,
} from '../data/estatePagesData';
import { usePageMeta, useRouter } from '../components/RouterContext';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { Reveal } from '../components/Reveal';
import { Lightbox } from '../components/Lightbox';

export const HomePage: React.FC = () => {
  const { navigate, openReserve } = useRouter();
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const [heroChapter, setHeroChapter] = useState(0);

  usePageMeta(
    'Oakhurst Ca 5 Star Hotel | Yosemite Lodging | Restaurant | Castle',
    'Château du Sureau is a 5 star, luxury hotel located near Yosemite in Oakhurst, California. In the castle is Erna’s Elderberry House, a 5 diamond restaurant.'
  );

  const heroChapters = [
    { lead: 'Our story,', accent: 'your fairytale' },
    { lead: 'The magic', accent: 'of European service' },
    { lead: 'The allure', accent: 'of fine dining' },
    { lead: 'Your dream', accent: 'Yosemite experience…' },
  ];

  const masonryPhotos = GALLERY_PHOTOS.slice(0, 7);
  const currentHeroImage = MEDIA.heroBanners[heroChapter % MEDIA.heroBanners.length];

  return (
    <div>
      {/* 1. HERO */}
      <section className="relative min-h-screen flex flex-col justify-end bg-[#233B30] text-[#F5F1E8] overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={currentHeroImage}
            alt="Château du Sureau nine-acre European castle resort in Oakhurst near Yosemite"
            loading="eager"
            className="w-full h-full object-cover object-center scale-[1.01] transition-opacity duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#192820]/90 via-[#192820]/35 to-black/35" />
        </div>

        <div className="relative max-w-[1440px] w-full mx-auto px-6 lg:px-12 pb-12 lg:pb-16 pt-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <p className="text-xs uppercase tracking-[0.25em] text-[#B49A68] mb-4">
                Château du Sureau · Oakhurst, California
              </p>

              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal leading-[1.06] tracking-tight text-[#F5F1E8]">
                {heroChapters[heroChapter].lead}{' '}
                <em className="italic font-normal text-[#F5F1E8]/95">
                  {heroChapters[heroChapter].accent}
                </em>
              </h1>

              {/* Editorial Story Pillars preserved verbatim */}
              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 border-t border-[#F5F1E8]/20 pt-5">
                {heroChapters.map((ch, idx) => (
                  <button
                    key={ch.accent}
                    type="button"
                    onClick={() => setHeroChapter(idx)}
                    className={`text-left text-xs tracking-[0.06em] transition-colors cursor-pointer ${
                      heroChapter === idx
                        ? 'text-[#B49A68] font-medium'
                        : 'text-[#F5F1E8]/70 hover:text-[#F5F1E8]'
                    }`}
                  >
                    {ch.lead} {ch.accent}
                  </button>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-stretch sm:items-center lg:items-end gap-3">
              <a
                href={EXTERNAL_LINKS.bookRoomResNexus}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#F5F1E8] text-[#233B30] text-xs uppercase tracking-[0.16em] font-medium hover:bg-[#B49A68] transition-colors"
              >
                <span>Book Your Room</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <div className="flex items-center gap-3">
                <a
                  href={EXTERNAL_LINKS.bookTableOpenTable}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 lg:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-[#F5F1E8]/45 text-[#F5F1E8] text-xs uppercase tracking-[0.16em] hover:border-[#B49A68] hover:text-[#B49A68] transition-colors"
                >
                  <span>Book Your Table</span>
                </a>
                <button
                  type="button"
                  onClick={() => navigate('/chateau-du-sureau-video-tour/')}
                  aria-label="Take a video tour of Château du Sureau"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3.5 border border-[#F5F1E8]/35 text-[#F5F1E8] text-xs uppercase tracking-[0.14em] hover:border-[#B49A68] hover:text-[#B49A68] transition-colors cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5" />
                  <span>Video Tour</span>
                </button>
              </div>
            </div>
          </div>

          {/* 4 Homepage Feature Tiles from chateausureau.com */}
          <div className="mt-10 pt-6 border-t border-[#F5F1E8]/15 grid grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            {[
              { label: 'Dine', to: '/dine/', image: MEDIA.homeDineTile },
              {
                label: 'Holidays & Happenings',
                to: '/holiday-and-happenings/',
                image: MEDIA.homeHolidaysTile,
              },
              {
                label: 'Weddings & Events',
                to: '/weddings-and-events/',
                image: MEDIA.homeWeddingsTile,
              },
              { label: 'Spa', to: '/spa-du-sureau/', image: MEDIA.homeSpaTile },
            ].map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => navigate(item.to)}
                className="group flex items-center gap-3.5 p-2 bg-[#172720]/70 border border-[#F5F1E8]/15 hover:border-[#B49A68] transition-colors text-left cursor-pointer"
              >
                <div className="w-16 h-14 shrink-0 overflow-hidden bg-[#1a2c24]">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.label}
                    loading="eager"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <span className="font-serif text-lg sm:text-xl text-[#F5F1E8] group-hover:text-[#B49A68] transition-colors leading-tight">
                  {item.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. PROPERTY INTRODUCTION */}
      <section className="py-20 lg:py-28 bg-[#F5F1E8]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <Reveal className="lg:col-span-6">
              <div className="relative overflow-hidden aspect-[4/3] bg-[#D8D0C2]">
                <ImageWithFallback
                  src={MEDIA.courtyardFountain}
                  alt="A European Escape In California — Château du Sureau gardens and fountain"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
              </div>
            </Reveal>

            <Reveal className="lg:col-span-6 lg:pl-6" delayMs={120}>
              <p className="text-xs uppercase tracking-[0.22em] text-[#B49A68]">Relais &amp; Châteaux</p>
              <h2 className="mt-3 font-serif text-3xl sm:text-5xl text-[#233B30] leading-[1.12]">
                A European Escape In California
              </h2>
              <p className="mt-6 text-base text-[#292925]/85 leading-[1.8]">
                Château du Sureau is an elegant nine-acre castle resort tucked away among the green
                foothills of the Sierra Nevada mountains, just 16 miles from the majestic{' '}
                <button
                  type="button"
                  onClick={() => navigate('/yosemite-national-park/')}
                  className="underline decoration-[#B49A68] underline-offset-4 hover:text-[#233B30] cursor-pointer"
                >
                  Yosemite National Park
                </button>
                . Our welcoming sanctuary features 10 graciously appointed guest accommodations and
                the private two-bedroom{' '}
                <button
                  type="button"
                  onClick={() => navigate('/villa-du-sureau/')}
                  className="underline decoration-[#B49A68] underline-offset-4 hover:text-[#233B30] cursor-pointer"
                >
                  Villa du Sureau
                </button>
                . With its enchanting gardens, towering pines, and bubbling fountains, this hidden
                gem’s storybook setting is a haven of tranquility and splendor.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => navigate('/rooms/')}
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#233B30] text-[#F5F1E8] text-xs uppercase tracking-[0.16em] hover:bg-[#192b23] transition-colors cursor-pointer"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => navigate('/chateau-du-sureau-video-tour/')}
                  className="inline-flex items-center gap-2 px-5 py-3.5 border border-[#233B30]/30 text-[#233B30] text-xs uppercase tracking-[0.14em] hover:border-[#233B30] transition-colors cursor-pointer"
                >
                  <span>Take a video tour of our enchanting castle</span>
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. STAY — THE 10 CHÂTEAU ROOMS */}
      <section className="py-20 lg:py-28 bg-white border-y border-[#D8D0C2]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#D8D0C2]">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[#B49A68]">Stay</p>
              <h2 className="mt-2 font-serif text-3xl sm:text-5xl text-[#233B30]">
                10 Guest Accommodations
              </h2>
              <p className="mt-3 text-sm text-[#292925]/75 max-w-2xl">
                Château du Sureau, a well-appointed nine-acre castle resort tucked away among the
                green foothills of the Sierra Nevada mountains, just 16 miles from the majestic
                Yosemite National Park.
              </p>
            </div>
            <button
              type="button"
              onClick={() => navigate('/rooms/')}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-[#233B30] border-b border-[#B49A68] pb-1 hover:text-[#70443F] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>View All Accommodations</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {ROOMS.map((room, i) => (
              <Reveal key={room.slug} delayMs={(i % 3) * 80}>
                <article className="group flex flex-col h-full">
                  <button
                    type="button"
                    onClick={() => navigate(room.path)}
                    className="block text-left overflow-hidden aspect-[4/3] bg-[#EBE6DC] cursor-pointer"
                  >
                    <ImageWithFallback
                      src={room.image}
                      alt={room.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  </button>
                  <div className="mt-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-xs text-[#292925]/60 tabular-nums">
                        <span>{room.sqFt}</span>
                        <span aria-hidden="true">·</span>
                        <span>{room.bed}</span>
                      </div>
                      <h3 className="mt-1.5 font-serif text-2xl text-[#233B30]">
                        <button
                          type="button"
                          onClick={() => navigate(room.path)}
                          className="hover:text-[#70443F] transition-colors text-left cursor-pointer"
                        >
                          {room.name}
                        </button>
                      </h3>
                      <p className="mt-2.5 text-sm text-[#292925]/80 leading-relaxed">
                        {room.shortDesc}
                      </p>
                    </div>
                    <div className="mt-5 pt-4 border-t border-[#D8D0C2]/70 flex items-center justify-between text-xs uppercase tracking-[0.14em]">
                      <button
                        type="button"
                        onClick={() => navigate(room.path)}
                        className="text-[#233B30] hover:text-[#B49A68] transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                      >
                        <span>View Room</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                      <a
                        href={EXTERNAL_LINKS.bookRoomDetailResNexus}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#70443F] hover:text-[#233B30] transition-colors"
                      >
                        Click to Reserve
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. YOSEMITE */}
      <section className="relative py-28 lg:py-36 bg-[#233B30] text-[#F5F1E8] overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={MEDIA.yosemiteHome}
            alt="Adventure Awaits at Yosemite National Park"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1c2e25]/95 via-[#1c2e25]/70 to-transparent" />
        </div>
        <div className="relative max-w-[1440px] mx-auto px-6 lg:px-12">
          <Reveal className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.22em] text-[#B49A68]">
              Yosemite National Park
            </p>
            <h2 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F5F1E8]">
              Adventure Awaits
            </h2>
            <p className="mt-6 text-base text-[#F5F1E8]/85 leading-[1.8]">
              A visit to the awe-inspiring{' '}
              <button
                type="button"
                onClick={() => navigate('/yosemite-national-park/')}
                className="underline decoration-[#B49A68] underline-offset-4 hover:text-[#B49A68] cursor-pointer"
              >
                Yosemite National Park
              </button>{' '}
              is your next adventure. One of North America’s seven natural wonders, Yosemite National
              Park will leave you speechless with jaw dropping peaks and valleys, colossal
              waterfalls, granite domes and rock formations that span as far as the horizon.
              Yosemite is home to some of the worlds most incredible hiking, climbing, and nature
              observing. Our concierge can guide you on the experience of a lifetime.
            </p>
            <div className="mt-8">
              <button
                type="button"
                onClick={() => navigate('/yosemite-national-park/')}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#F5F1E8] text-[#233B30] text-xs uppercase tracking-[0.16em] font-medium hover:bg-[#B49A68] transition-colors cursor-pointer"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5. ELDERBERRY HOUSE (Forest Green Contrast Section) */}
      <section className="py-20 lg:py-28 bg-[#233B30] text-[#F5F1E8] border-t border-[#F5F1E8]/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <Reveal className="lg:col-span-5">
              <p className="text-xs uppercase tracking-[0.22em] text-[#B49A68]">
                The Elderberry House
              </p>
              <h2 className="mt-3 font-serif text-3xl sm:text-5xl text-[#F5F1E8] leading-[1.12]">
                Dining at its Finest
              </h2>
              <p className="mt-6 text-base text-[#F5F1E8]/85 leading-[1.8]">
                The Elderberry House, a culinary destination for more than 30 years, exudes the
                passion and creativity for the culinary arts. Enjoy a thoughtful three or four
                course tasting menu sourced from local farms that are harvested at their peak of
                flavor. Each ingredient is meticulously cared for by our culinary team. Your
                evening will be accompanied by warm, attentive service, world class wines, and fresh
                craft cocktails. A dining experience you will talk about for years to come.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-3 text-xs uppercase tracking-[0.14em]">
                <button
                  type="button"
                  onClick={() => navigate('/dine/three-course-dinner-menu/')}
                  className="py-3 px-4 border border-[#F5F1E8]/25 text-left hover:border-[#B49A68] hover:text-[#B49A68] transition-colors cursor-pointer"
                >
                  3-Course Menu · $125
                </button>
                <button
                  type="button"
                  onClick={() => navigate('/dine/five-course-dinner-menu/')}
                  className="py-3 px-4 border border-[#F5F1E8]/25 text-left hover:border-[#B49A68] hover:text-[#B49A68] transition-colors cursor-pointer"
                >
                  5-Course Menu · $175
                </button>
                <button
                  type="button"
                  onClick={() => navigate('/dine/wine-and-cocktails-menu/')}
                  className="py-3 px-4 border border-[#F5F1E8]/25 text-left hover:border-[#B49A68] hover:text-[#B49A68] transition-colors cursor-pointer"
                >
                  Wine &amp; Cocktails
                </button>
                <button
                  type="button"
                  onClick={() => navigate('/holiday-and-happenings/the-cellar/')}
                  className="py-3 px-4 border border-[#F5F1E8]/25 text-left hover:border-[#B49A68] hover:text-[#B49A68] transition-colors cursor-pointer"
                >
                  The Cellar
                </button>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => navigate('/dine/')}
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#B49A68] text-[#233B30] text-xs uppercase tracking-[0.16em] font-medium hover:bg-[#F5F1E8] transition-colors cursor-pointer"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href={EXTERNAL_LINKS.bookTableOpenTable}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 border border-[#F5F1E8]/35 text-[#F5F1E8] text-xs uppercase tracking-[0.16em] hover:border-[#B49A68] transition-colors"
                >
                  <span>Book Your Table</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </Reveal>

            <Reveal className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4" delayMs={120}>
              <div className="sm:col-span-2 aspect-[16/10] overflow-hidden bg-[#1a2c24]">
                <ImageWithFallback
                  src={MEDIA.diningHome}
                  alt="Dining at its Finest at The Elderberry House"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
              </div>
              <div className="aspect-[4/3] overflow-hidden bg-[#1a2c24]">
                <ImageWithFallback
                  src={MEDIA.tastingDish}
                  alt="Culinary course at The Elderberry House"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
              </div>
              <div className="aspect-[4/3] overflow-hidden bg-[#1a2c24]">
                <ImageWithFallback
                  src={MEDIA.cellarCard}
                  alt="The Cellar at Elderberry House"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 6. VILLA DU SUREAU */}
      <section className="py-20 lg:py-28 bg-[#F5F1E8]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <Reveal className="lg:col-span-7">
              <div className="aspect-[16/10] overflow-hidden bg-[#D8D0C2]">
                <ImageWithFallback
                  src={VILLA_DATA.image}
                  alt="Villa du Sureau"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
              </div>
            </Reveal>
            <Reveal className="lg:col-span-5" delayMs={120}>
              <p className="text-xs uppercase tracking-[0.22em] text-[#B49A68]">
                {VILLA_DATA.subtitle}
              </p>
              <h2 className="mt-3 font-serif text-3xl sm:text-5xl text-[#233B30]">
                {VILLA_DATA.title}
              </h2>
              <p className="mt-6 text-base text-[#292925]/85 leading-[1.8]">
                {VILLA_DATA.homepageSummary}
              </p>

              <ul className="mt-6 pt-6 border-t border-[#D8D0C2] grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#292925]/80">
                {VILLA_DATA.features.slice(0, 6).map((feat) => (
                  <li key={feat}>{feat}</li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={() => navigate('/villa-du-sureau/')}
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#233B30] text-[#F5F1E8] text-xs uppercase tracking-[0.16em] hover:bg-[#192b23] transition-colors cursor-pointer"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href={EXTERNAL_LINKS.bookRoomDetailResNexus}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 border border-[#233B30]/35 text-[#233B30] text-xs uppercase tracking-[0.16em] hover:border-[#233B30] transition-colors"
                >
                  <span>Click to Reserve</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 7. SPA DU SUREAU */}
      <section className="py-20 lg:py-28 bg-white border-y border-[#D8D0C2]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <Reveal className="lg:col-span-5 order-2 lg:order-1">
              <p className="text-xs uppercase tracking-[0.22em] text-[#B49A68]">
                {SPA_DATA.subtitle}
              </p>
              <h2 className="mt-3 font-serif text-3xl sm:text-5xl text-[#233B30]">
                {SPA_DATA.title}
              </h2>
              <p className="mt-6 text-base text-[#292925]/85 leading-[1.8]">
                {SPA_DATA.introParagraphs[0]}
              </p>

              <div className="mt-8 divide-y divide-[#D8D0C2] border-y border-[#D8D0C2]">
                {SPA_DATA.treatments.map((t) => (
                  <div key={t.title} className="py-4 flex items-center justify-between gap-4">
                    <div>
                      <h3 className="font-serif text-xl text-[#233B30]">{t.title}</h3>
                      <p className="mt-1 text-xs text-[#292925]/70 line-clamp-2">{t.description}</p>
                    </div>
                    <a
                      href={EXTERNAL_LINKS.bookSpaBooker}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] uppercase tracking-[0.14em] text-[#70443F] hover:text-[#233B30] whitespace-nowrap shrink-0"
                    >
                      Book
                    </a>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={() => navigate('/spa-du-sureau/')}
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#233B30] text-[#F5F1E8] text-xs uppercase tracking-[0.16em] hover:bg-[#192b23] transition-colors cursor-pointer"
                >
                  <span>Explore Spa du Sureau</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href={EXTERNAL_LINKS.bookSpaBooker}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 border border-[#233B30]/35 text-[#233B30] text-xs uppercase tracking-[0.16em] hover:border-[#233B30] transition-colors"
                >
                  <span>Book Your Treatment</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </Reveal>

            <Reveal className="lg:col-span-7 order-1 lg:order-2 grid grid-cols-2 gap-4" delayMs={120}>
              <div className="aspect-[3/4] overflow-hidden bg-[#EBE6DC]">
                <ImageWithFallback
                  src={SPA_DATA.image}
                  alt="Spa du Sureau"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
              </div>
              <div className="aspect-[3/4] overflow-hidden bg-[#EBE6DC] mt-8">
                <ImageWithFallback
                  src={SPA_DATA.poolImage}
                  alt="Pool and gardens at Château du Sureau"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 8. EXPERIENCES & OFFERS */}
      <section className="py-20 lg:py-28 bg-[#F5F1E8]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#D8D0C2]">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[#B49A68]">
                Stay &amp; Dine
              </p>
              <h2 className="mt-2 font-serif text-3xl sm:text-5xl text-[#233B30]">
                Experiences &amp; Offers
              </h2>
              <p className="mt-3 text-sm text-[#292925]/75 max-w-2xl">
                We encourage our guests to discover different activities around Yosemite or indulge
                in a blissful and relaxing stay through our variety of spa treatments. Complete your
                culinary adventure by joining us through a thoughtful tasting menu at The Elderberry
                House.
              </p>
            </div>
            <button
              type="button"
              onClick={() => navigate('/experiences-and-offers/')}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-[#233B30] border-b border-[#B49A68] pb-1 whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>All Experiences &amp; Offers</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {EXPERIENCES.slice(0, 3).map((exp, idx) => (
              <Reveal key={exp.slug} delayMs={idx * 90}>
                <article className="bg-white border border-[#D8D0C2] flex flex-col h-full group">
                  <div className="aspect-[4/3] overflow-hidden bg-[#EBE6DC]">
                    <ImageWithFallback
                      src={exp.image}
                      alt={exp.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="p-7 flex-1 flex flex-col justify-between">
                    <div>
                      <p className="text-xs text-[#B49A68] uppercase tracking-[0.16em]">
                        Experiences
                      </p>
                      <h3 className="mt-2 font-serif text-2xl text-[#233B30]">{exp.title}</h3>
                      <p className="mt-2.5 text-sm text-[#292925]/80 leading-relaxed">
                        {exp.shortDesc}
                      </p>
                      <p className="mt-4 text-xs text-[#292925]/70 tabular-nums">
                        {exp.pricing[0].label}: {exp.pricing[0].amount} {exp.pricing[0].note}
                      </p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-[#D8D0C2]/70 flex items-center justify-between text-xs uppercase tracking-[0.14em]">
                      <button
                        type="button"
                        onClick={() => navigate(exp.path)}
                        className="text-[#233B30] hover:text-[#B49A68] inline-flex items-center gap-1.5 cursor-pointer"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {/* Current Offers Strip */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {OFFERS.map((offer) => (
              <div
                key={offer.slug}
                className="bg-white border border-[#D8D0C2] grid grid-cols-1 sm:grid-cols-12 overflow-hidden"
              >
                <div className="sm:col-span-5 aspect-[4/3] sm:aspect-auto overflow-hidden bg-[#EBE6DC]">
                  <ImageWithFallback
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="sm:col-span-7 p-7 flex flex-col justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-[#70443F]">Offers</p>
                    <h3 className="mt-1 font-serif text-2xl text-[#233B30]">{offer.title}</h3>
                    <p className="mt-1.5 text-sm text-[#292925]/80">{offer.shortDesc}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => navigate(offer.path)}
                    className="self-start px-5 py-2.5 border border-[#233B30] text-xs uppercase tracking-[0.14em] text-[#233B30] hover:bg-[#233B30] hover:text-[#F5F1E8] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    View Offer
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. WEDDINGS & EVENTS */}
      <section className="py-20 lg:py-28 bg-white border-y border-[#D8D0C2]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <Reveal className="lg:col-span-6">
              <div className="aspect-[4/3] overflow-hidden bg-[#EBE6DC]">
                <ImageWithFallback
                  src={MEDIA.weddingsTerrace}
                  alt="Weddings & Events at Château du Sureau"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
              </div>
            </Reveal>

            <Reveal className="lg:col-span-6 lg:pl-6" delayMs={120}>
              <p className="text-xs uppercase tracking-[0.22em] text-[#B49A68]">
                Weddings &amp; Events
              </p>
              <h2 className="mt-3 font-serif text-3xl sm:text-5xl text-[#233B30]">
                Your fairytale wedding begins here…
              </h2>
              <p className="mt-6 text-base text-[#292925]/85 leading-[1.8]">
                Our 9-acre mountain backdrop is the perfect setting to exchange your wedding vows and
                celebrate as a couple. Overlooking the Sierra Mountains, our outdoor terrace provides
                a stunning scene for a wedding of your dreams.
              </p>

              <dl className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 py-6 border-y border-[#D8D0C2] text-sm tabular-nums">
                <div>
                  <dt className="text-xs uppercase tracking-[0.12em] text-[#292925]/60">
                    Total Rooms
                  </dt>
                  <dd className="mt-1 font-serif text-xl text-[#233B30]">
                    10 Rooms &amp; 1 Villa
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.12em] text-[#292925]/60">
                    The Elderberry House
                  </dt>
                  <dd className="mt-1 font-serif text-xl text-[#233B30]">
                    120 Seated / 175 Cocktail
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.12em] text-[#292925]/60">Location</dt>
                  <dd className="mt-1 font-serif text-xl text-[#233B30]">
                    15 Miles South of Yosemite
                  </dd>
                </div>
              </dl>

              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={() => navigate('/weddings-and-events/')}
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#233B30] text-[#F5F1E8] text-xs uppercase tracking-[0.16em] hover:bg-[#192b23] transition-colors cursor-pointer"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => navigate('/catering-menu/?wpf7207_6=we__request_a_proposal')}
                  className="inline-flex items-center gap-2 px-6 py-3.5 border border-[#233B30]/35 text-[#233B30] text-xs uppercase tracking-[0.16em] hover:border-[#233B30] transition-colors cursor-pointer"
                >
                  <span>Request a Proposal</span>
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 10. PHOTO GALLERY (Asymmetric Masonry + Lightbox) */}
      <section className="py-20 lg:py-28 bg-[#F5F1E8]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#D8D0C2]">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[#B49A68]">
                Château du Sureau
              </p>
              <h2 className="mt-2 font-serif text-3xl sm:text-5xl text-[#233B30]">
                Photo Gallery
              </h2>
            </div>
            <button
              type="button"
              onClick={() => navigate('/gallery/')}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-[#233B30] border-b border-[#B49A68] pb-1 whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>View Full Gallery</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-4">
            {masonryPhotos.map((photo, index) => {
              const spanClasses = [
                'md:col-span-6 aspect-[16/10]',
                'md:col-span-3 aspect-[4/5]',
                'md:col-span-3 aspect-[4/5]',
                'md:col-span-4 aspect-[4/3]',
                'md:col-span-4 aspect-[4/3]',
                'md:col-span-4 aspect-[4/3]',
                'md:col-span-12 aspect-[21/9]',
              ][index];

              return (
                <button
                  key={photo.id}
                  type="button"
                  onClick={() => setLightboxIdx(index)}
                  className={`group relative overflow-hidden bg-[#D8D0C2] text-left cursor-pointer ${spanClasses}`}
                >
                  <ImageWithFallback
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-[#F5F1E8]">
                    <span className="text-[11px] uppercase tracking-[0.16em] text-[#B49A68]">
                      {photo.category}
                    </span>
                    <span className="font-serif text-xl">{photo.title}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 11. GIFT CERTIFICATES */}
      <section className="py-20 lg:py-24 bg-white border-t border-[#D8D0C2]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <p className="text-xs uppercase tracking-[0.22em] text-[#B49A68]">
                Château du Sureau
              </p>
              <h2 className="mt-2 font-serif text-3xl sm:text-5xl text-[#233B30]">
                Gift Certificates
              </h2>
              <div className="mt-7 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => navigate('/gift-certificate/')}
                  className="px-6 py-3.5 bg-[#233B30] text-[#F5F1E8] text-xs uppercase tracking-[0.16em] hover:bg-[#192b23] transition-colors cursor-pointer"
                >
                  More Details
                </button>
                <button
                  type="button"
                  onClick={openReserve}
                  className="px-6 py-3.5 border border-[#233B30]/35 text-[#233B30] text-xs uppercase tracking-[0.16em] hover:border-[#233B30] transition-colors cursor-pointer"
                >
                  Reserve Now
                </button>
              </div>

              <div className="mt-8 pt-6 border-t border-[#D8D0C2] flex items-center gap-3 text-sm text-[#292925]/80">
                <Phone className="w-4 h-4 text-[#B49A68]" />
                <span>
                  {SITE_CONTACT.reservationHours} ·{' '}
                  <a href={SITE_CONTACT.phoneHref} className="text-[#233B30] font-medium tabular-nums">
                    {SITE_CONTACT.phoneDisplay}
                  </a>
                </span>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {GIFT_CERTIFICATES.map((gc) => (
                <button
                  key={gc.slug}
                  type="button"
                  onClick={() => navigate(gc.path)}
                  className="group text-left bg-[#F5F1E8] border border-[#D8D0C2] hover:border-[#233B30] transition-colors cursor-pointer flex flex-col justify-between overflow-hidden"
                >
                  <div className="aspect-[16/9] w-full overflow-hidden bg-[#EBE6DC]">
                    <ImageWithFallback
                      src={gc.image}
                      alt={gc.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif text-2xl text-[#233B30] group-hover:text-[#70443F] transition-colors">
                        {gc.title}
                      </h3>
                      <p className="mt-2 text-xs text-[#292925]/75 leading-relaxed">
                        {gc.description}
                      </p>
                    </div>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.16em] text-[#233B30]">
                      <span>More Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Lightbox
        photos={masonryPhotos}
        activeIndex={lightboxIdx}
        onClose={() => setLightboxIdx(null)}
        onChangeIndex={setLightboxIdx}
      />
    </div>
  );
};
