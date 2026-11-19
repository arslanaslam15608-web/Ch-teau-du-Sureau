import React, { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, FileText, Phone, Play } from 'lucide-react';
import { EXTERNAL_LINKS, MEDIA, SITE_CONTACT } from '../data/media';
import { ROOMS, RoomData, VILLA_DATA } from '../data/roomsAndDining';
import { PageHero } from '../components/PageHero';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { Reveal } from '../components/Reveal';
import { usePageMeta, useRouter } from '../components/RouterContext';

export const RoomsListingPage: React.FC = () => {
  const { navigate } = useRouter();

  usePageMeta(
    'Book Rooms at Luxury Hotel Near Yosemite National Park - Château du Sureau',
    'Château du Sureau is a well-appointed nine-acre castle resort tucked away among the green foothills of the Sierra Nevada mountains, just 16 miles from Yosemite National Park.'
  );

  return (
    <div>
      <PageHero
        kicker="Stay"
        title="Luxury Hotel Rooms Near Yosemite National Park"
        subtitle="Château du Sureau, a well-appointed nine-acre castle resort tucked away among the green foothills of the Sierra Nevada mountains, just 16 miles from the majestic Yosemite National Park."
        image={MEDIA.roomsBanner}
        imageAlt="Château du Sureau guest accommodations"
        breadcrumbs={[{ label: 'Stay' }]}
      />

      <section className="py-16 lg:py-24 bg-[#F5F1E8]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl pb-12 border-b border-[#D8D0C2]">
            <p className="text-base text-[#292925]/85 leading-[1.8]">
              Our welcoming sanctuary features 10 graciously appointed guest accommodations and the
              private two-bedroom{' '}
              <button
                type="button"
                onClick={() => navigate('/villa-du-sureau/')}
                className="underline decoration-[#B49A68] underline-offset-4 text-[#233B30] cursor-pointer"
              >
                Villa du Sureau
              </button>
              . With its enchanting gardens, towering pines, and bubbling fountains, this hidden
              gem’s storybook setting is a haven of tranquility and splendor.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href={EXTERNAL_LINKS.bookRoomResNexus}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#233B30] text-[#F5F1E8] text-xs uppercase tracking-[0.15em] hover:bg-[#192b23] transition-colors"
              >
                <span>Book Your Room</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <button
                type="button"
                onClick={() => navigate('/chateau-du-sureau-video-tour/')}
                className="inline-flex items-center gap-2 px-6 py-3 border border-[#233B30]/35 text-[#233B30] text-xs uppercase tracking-[0.15em] hover:border-[#233B30] transition-colors cursor-pointer"
              >
                <Play className="w-3.5 h-3.5" />
                <span>Take a video tour of our enchanting castle</span>
              </button>
            </div>
          </div>

          {/* 10 Rooms Grid */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
            {ROOMS.map((room, idx) => (
              <Reveal key={room.slug} delayMs={(idx % 2) * 80}>
                <article className="bg-white border border-[#D8D0C2] flex flex-col h-full group">
                  <button
                    type="button"
                    onClick={() => navigate(room.path)}
                    className="block aspect-[16/10] overflow-hidden bg-[#EBE6DC] cursor-pointer"
                  >
                    <ImageWithFallback
                      src={room.image}
                      alt={room.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  </button>
                  <div className="p-8 flex-1 flex flex-col justify-between">
                    <div>
                      <p className="text-xs text-[#B49A68] uppercase tracking-[0.16em] tabular-nums">
                        {room.sqFt} · {room.bed}
                      </p>
                      <h2 className="mt-2 font-serif text-3xl text-[#233B30]">
                        <button
                          type="button"
                          onClick={() => navigate(room.path)}
                          className="hover:text-[#70443F] transition-colors text-left cursor-pointer"
                        >
                          {room.name}
                        </button>
                      </h2>
                      <p className="mt-3 text-sm text-[#292925]/80 leading-relaxed">
                        {room.shortDesc}
                      </p>
                    </div>
                    <div className="mt-6 pt-5 border-t border-[#D8D0C2] flex items-center justify-between text-xs uppercase tracking-[0.15em]">
                      <button
                        type="button"
                        onClick={() => navigate(room.path)}
                        className="inline-flex items-center gap-2 text-[#233B30] hover:text-[#B49A68] transition-colors cursor-pointer"
                      >
                        <span>View Room</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                      <a
                        href={EXTERNAL_LINKS.bookRoomDetailResNexus}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[#70443F] hover:text-[#233B30]"
                      >
                        <span>Click to Reserve</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {/* Villa du Sureau Featured Banner */}
          <div className="mt-16 bg-[#233B30] text-[#F5F1E8] grid grid-cols-1 lg:grid-cols-12 items-stretch border border-[#233B30]">
            <div className="lg:col-span-6 aspect-[16/10] lg:aspect-auto overflow-hidden">
              <ImageWithFallback
                src={VILLA_DATA.listingImage}
                alt={VILLA_DATA.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="lg:col-span-6 p-8 lg:p-14 flex flex-col justify-center">
              <p className="text-xs uppercase tracking-[0.2em] text-[#B49A68]">
                {VILLA_DATA.subtitle}
              </p>
              <h2 className="mt-2 font-serif text-3xl sm:text-4xl text-[#F5F1E8]">
                {VILLA_DATA.title}
              </h2>
              <p className="mt-4 text-sm text-[#F5F1E8]/85 leading-relaxed">
                {VILLA_DATA.roomsListingSummary}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={() => navigate('/villa-du-sureau/')}
                  className="px-6 py-3 bg-[#F5F1E8] text-[#233B30] text-xs uppercase tracking-[0.15em] font-medium hover:bg-[#B49A68] transition-colors cursor-pointer"
                >
                  View Room
                </button>
                <a
                  href={EXTERNAL_LINKS.bookRoomDetailResNexus}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-[#F5F1E8]/40 text-[#F5F1E8] text-xs uppercase tracking-[0.15em] hover:border-[#B49A68] transition-colors"
                >
                  Click to Reserve
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export const RoomDetailPage: React.FC<{ room: RoomData }> = ({ room }) => {
  const { navigate } = useRouter();
  const [activeImgIdx, setActiveImgIdx] = useState(0);
  const currentIdx = ROOMS.findIndex((r) => r.slug === room.slug);
  const nextRoom = ROOMS[(currentIdx + 1) % ROOMS.length];

  useEffect(() => {
    setActiveImgIdx(0);
  }, [room.slug]);

  usePageMeta(room.seoTitle, room.shortDesc);

  const gallery = room.galleryImages.length > 0 ? room.galleryImages : [room.image];
  const heroImage = gallery[0] || room.image;
  const activeImage = gallery[activeImgIdx] || room.image;

  return (
    <div>
      <PageHero
        kicker={`${room.sqFt} · ${room.bed}`}
        title={room.name}
        subtitle={room.shortDesc}
        image={heroImage}
        imageAlt={room.name}
        breadcrumbs={[{ label: 'Stay', to: '/rooms/' }, { label: room.name }]}
      />

      <section className="py-16 lg:py-24 bg-[#F5F1E8]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Interactive Multi-Photo Gallery & Description */}
            <div className="lg:col-span-7 space-y-6">
              <div className="aspect-[4/3] overflow-hidden bg-[#D8D0C2]">
                <ImageWithFallback
                  src={activeImage}
                  alt={room.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {gallery.length > 1 && (
                <div className="grid grid-cols-5 sm:grid-cols-6 gap-2.5">
                  {gallery.map((src, idx) => (
                    <button
                      key={src}
                      type="button"
                      onClick={() => setActiveImgIdx(idx)}
                      className={`aspect-[4/3] overflow-hidden border transition-all cursor-pointer ${
                        activeImgIdx === idx
                          ? 'border-[#233B30] ring-1 ring-[#233B30]'
                          : 'border-[#D8D0C2] opacity-75 hover:opacity-100'
                      }`}
                    >
                      <ImageWithFallback
                        src={src}
                        alt={`${room.name} photo ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}

              <div className="pt-4">
                <h2 className="font-serif text-3xl text-[#233B30]">{room.name}</h2>
                <p className="mt-4 text-base text-[#292925]/85 leading-[1.8]">{room.fullDesc}</p>
                <p className="mt-4 text-xs italic text-[#292925]/65">{room.taxNote}</p>
              </div>
            </div>

            {/* Right Specs & Reservation Card */}
            <div className="lg:col-span-5">
              <div className="bg-white border border-[#D8D0C2] p-8 sticky top-28 space-y-8">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#B49A68]">
                    Check Availability
                  </p>
                  <h3 className="mt-2 font-serif text-3xl text-[#233B30]">{room.name}</h3>
                  <div className="mt-5 flex flex-col gap-3">
                    <a
                      href={EXTERNAL_LINKS.bookRoomDetailResNexus}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 px-6 bg-[#233B30] text-[#F5F1E8] text-center text-xs uppercase tracking-[0.16em] font-medium hover:bg-[#192b23] transition-colors inline-flex items-center justify-center gap-2"
                    >
                      <span>Click to Reserve</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                    <a
                      href={SITE_CONTACT.phoneHref}
                      className="w-full py-3 px-6 border border-[#D8D0C2] text-[#233B30] text-center text-xs uppercase tracking-[0.14em] hover:border-[#233B30] transition-colors inline-flex items-center justify-center gap-2 tabular-nums"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#B49A68]" />
                      <span>{SITE_CONTACT.phoneDisplay}</span>
                    </a>
                  </div>
                </div>

                <div className="pt-6 border-t border-[#D8D0C2]">
                  <h4 className="font-serif text-xl text-[#233B30] mb-4">Features:</h4>
                  <ul className="space-y-2.5 text-sm text-[#292925]/85 tabular-nums">
                    {room.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-[#B49A68] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-[#D8D0C2]">
                  <h4 className="font-serif text-xl text-[#233B30] mb-4">
                    Complimentary Amenities:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#292925]/80">
                    {room.complimentaryAmenities.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-[#B49A68]" aria-hidden="true">
                          ·
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Room Navigation */}
          <div className="mt-16 pt-8 border-t border-[#D8D0C2] flex flex-wrap items-center justify-between gap-4">
            <button
              type="button"
              onClick={() => navigate('/rooms/')}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-[#233B30] hover:text-[#B49A68] cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>All Guest Rooms</span>
            </button>
            <button
              type="button"
              onClick={() => navigate(nextRoom.path)}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-[#233B30] hover:text-[#B49A68] cursor-pointer"
            >
              <span>Next: {nextRoom.name}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export const VillaPage: React.FC = () => {
  const [activeImgIdx, setActiveImgIdx] = useState(0);
  usePageMeta(VILLA_DATA.seoTitle, VILLA_DATA.description);

  const gallery = VILLA_DATA.galleryImages.length > 0 ? VILLA_DATA.galleryImages : [VILLA_DATA.image];
  const activeImage = gallery[activeImgIdx] || VILLA_DATA.image;

  return (
    <div>
      <PageHero
        kicker={VILLA_DATA.subtitle}
        title={VILLA_DATA.title}
        subtitle={VILLA_DATA.roomsListingSummary}
        image={MEDIA.villaSalon}
        imageAlt="Villa du Sureau"
        breadcrumbs={[{ label: 'Stay', to: '/rooms/' }, { label: 'Villa du Sureau' }]}
      />

      <section className="py-16 lg:py-24 bg-[#F5F1E8]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div className="aspect-[16/10] overflow-hidden bg-[#D8D0C2]">
                <ImageWithFallback
                  src={activeImage}
                  alt="Villa du Sureau"
                  className="w-full h-full object-cover"
                />
              </div>

              {gallery.length > 1 && (
                <div className="grid grid-cols-4 sm:grid-cols-6 gap-2.5">
                  {gallery.map((src, idx) => (
                    <button
                      key={src}
                      type="button"
                      onClick={() => setActiveImgIdx(idx)}
                      className={`aspect-[4/3] overflow-hidden border transition-all cursor-pointer ${
                        activeImgIdx === idx
                          ? 'border-[#233B30] ring-1 ring-[#233B30]'
                          : 'border-[#D8D0C2] opacity-75 hover:opacity-100'
                      }`}
                    >
                      <ImageWithFallback
                        src={src}
                        alt={`Villa du Sureau photo ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}

              <div className="pt-4">
                <h2 className="font-serif text-3xl sm:text-4xl text-[#233B30]">
                  {VILLA_DATA.title}
                </h2>
                <p className="mt-4 text-base text-[#292925]/85 leading-[1.8]">
                  {VILLA_DATA.description}
                </p>
                <p className="mt-4 text-xs italic text-[#292925]/65">{VILLA_DATA.taxNote}</p>
              </div>

              <div className="p-8 bg-white border border-[#D8D0C2]">
                <h3 className="font-serif text-2xl text-[#233B30]">
                  {VILLA_DATA.extraSpecialTitle}
                </h3>
                <p className="mt-3 text-sm text-[#292925]/80 leading-relaxed">
                  {VILLA_DATA.extraSpecialBody}
                </p>
                <a
                  href={EXTERNAL_LINKS.villaAddOnsPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 px-5 py-3 border border-[#233B30] text-xs uppercase tracking-[0.15em] text-[#233B30] hover:bg-[#233B30] hover:text-[#F5F1E8] transition-colors"
                >
                  <FileText className="w-4 h-4" />
                  <span>View Add-Ons (PDF)</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-white border border-[#D8D0C2] p-8 sticky top-28 space-y-8">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#B49A68]">
                    Check Availability
                  </p>
                  <h3 className="mt-2 font-serif text-3xl text-[#233B30]">Villa du Sureau</h3>
                  <div className="mt-5 flex flex-col gap-3">
                    <a
                      href={EXTERNAL_LINKS.bookRoomDetailResNexus}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 px-6 bg-[#233B30] text-[#F5F1E8] text-center text-xs uppercase tracking-[0.16em] font-medium hover:bg-[#192b23] transition-colors inline-flex items-center justify-center gap-2"
                    >
                      <span>Click to Reserve</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                    <a
                      href={SITE_CONTACT.phoneHref}
                      className="w-full py-3 px-6 border border-[#D8D0C2] text-[#233B30] text-center text-xs uppercase tracking-[0.14em] hover:border-[#233B30] transition-colors inline-flex items-center justify-center gap-2 tabular-nums"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#B49A68]" />
                      <span>{SITE_CONTACT.phoneDisplay}</span>
                    </a>
                  </div>
                </div>

                <div className="pt-6 border-t border-[#D8D0C2]">
                  <h4 className="font-serif text-xl text-[#233B30] mb-4">Features:</h4>
                  <ul className="space-y-2.5 text-sm text-[#292925]/85">
                    {VILLA_DATA.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-[#B49A68] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-[#D8D0C2]">
                  <h4 className="font-serif text-xl text-[#233B30] mb-4">
                    Exclusive Amenities Include:
                  </h4>
                  <ul className="space-y-2 text-xs text-[#292925]/80">
                    {VILLA_DATA.exclusiveAmenities.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-[#B49A68]" aria-hidden="true">
                          ·
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
