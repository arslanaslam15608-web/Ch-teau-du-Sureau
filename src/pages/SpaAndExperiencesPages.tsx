import React from 'react';
import { ArrowRight, ArrowUpRight, Calendar, Check, Clock, Phone } from 'lucide-react';
import { EXTERNAL_LINKS, MEDIA, SITE_CONTACT } from '../data/media';
import {
  EXPERIENCES,
  ExperienceItem,
  HOLIDAYS_HAPPENINGS,
  OFFERS,
  OfferItem,
  SPA_DATA,
} from '../data/estatePagesData';
import { PageHero } from '../components/PageHero';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { usePageMeta, useRouter } from '../components/RouterContext';

export const SpaPage: React.FC = () => {
  usePageMeta(SPA_DATA.seoTitle, SPA_DATA.introParagraphs[0]);

  return (
    <div>
      <PageHero
        kicker={SPA_DATA.subtitle}
        title={SPA_DATA.title}
        subtitle={SPA_DATA.introParagraphs[0]}
        image={SPA_DATA.image}
        imageAlt="Spa du Sureau tranquil treatment sanctuary"
        breadcrumbs={[{ label: 'Spa du Sureau' }]}
      />

      <section className="py-16 lg:py-24 bg-[#F5F1E8]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-serif text-3xl sm:text-4xl text-[#233B30]">
                {SPA_DATA.subtitle}
              </h2>
              {SPA_DATA.introParagraphs.map((p) => (
                <p key={p.slice(0, 30)} className="text-base text-[#292925]/85 leading-[1.8]">
                  {p}
                </p>
              ))}

              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="aspect-[4/3] overflow-hidden bg-[#D8D0C2]">
                  <ImageWithFallback
                    src={SPA_DATA.image}
                    alt="Spa du Sureau soaking bath"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[4/3] overflow-hidden bg-[#D8D0C2]">
                  <ImageWithFallback
                    src={SPA_DATA.poolImage}
                    alt="Outdoor pool and gardens at Château du Sureau"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white border border-[#D8D0C2] p-8 space-y-5">
                <p className="text-xs uppercase tracking-[0.2em] text-[#B49A68]">Contact Us</p>
                <h3 className="font-serif text-3xl text-[#233B30]">Reserve a Treatment</h3>
                <p className="text-xs text-[#292925]/75 tabular-nums">{SPA_DATA.hours}</p>
                <a
                  href={EXTERNAL_LINKS.bookSpaBooker}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-6 bg-[#233B30] text-[#F5F1E8] text-center text-xs uppercase tracking-[0.16em] font-medium hover:bg-[#192b23] transition-colors inline-flex items-center justify-center gap-2"
                >
                  <span>Book Your Treatment</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <a
                  href={SITE_CONTACT.phoneHref}
                  className="w-full py-3 px-6 border border-[#D8D0C2] text-[#233B30] text-center text-xs uppercase tracking-[0.14em] inline-flex items-center justify-center gap-2 tabular-nums"
                >
                  <Phone className="w-3.5 h-3.5 text-[#B49A68]" />
                  <span>{SITE_CONTACT.phoneDisplay}</span>
                </a>
              </div>

              <div className="bg-[#233B30] text-[#F5F1E8] border border-[#233B30] overflow-hidden">
                <div className="aspect-[16/9] overflow-hidden bg-[#1a2c24]">
                  <ImageWithFallback
                    src={SPA_DATA.specialImage}
                    alt="Spa Specials at Spa du Sureau"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#B49A68]">Spa du Sureau</p>
                  <h3 className="mt-1 font-serif text-3xl text-[#F5F1E8]">Spa Specials</h3>
                  <a
                    href={EXTERNAL_LINKS.spaSpecials}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 px-6 py-3 bg-[#B49A68] text-[#233B30] text-xs uppercase tracking-[0.15em] font-medium hover:bg-[#F5F1E8] transition-colors"
                  >
                    <span>Book Now</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Treatment Categories with Source Photos */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {SPA_DATA.treatments.map((t) => (
              <div
                key={t.title}
                className="bg-white border border-[#D8D0C2] flex flex-col justify-between overflow-hidden"
              >
                <div>
                  <div className="aspect-[4/3] overflow-hidden bg-[#EBE6DC]">
                    <ImageWithFallback
                      src={t.image}
                      alt={t.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 pb-4">
                    <h3 className="font-serif text-3xl text-[#233B30]">{t.title}</h3>
                    <p className="mt-3 text-sm text-[#292925]/80 leading-relaxed">
                      {t.description}
                    </p>
                  </div>
                </div>
                <div className="px-8 pb-8 pt-2">
                  <a
                    href={EXTERNAL_LINKS.bookSpaBooker}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pt-4 border-t border-[#D8D0C2] flex items-center justify-between text-xs uppercase tracking-[0.15em] text-[#233B30] hover:text-[#70443F]"
                  >
                    <span>{t.cta}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Spa & Wellness Event Imagery Strip */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {SPA_DATA.eventsImages.map((src, idx) => (
              <div key={src} className="aspect-[4/3] overflow-hidden bg-[#D8D0C2] border border-[#D8D0C2]">
                <ImageWithFallback
                  src={src}
                  alt={`Spa & Wellness at Château du Sureau ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Spa Etiquette & Yoga */}
          <div className="mt-12 bg-white border border-[#D8D0C2] p-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-[#292925]/80">
            <div>
              <h4 className="font-serif text-xl text-[#233B30]">Yoga</h4>
              <p className="mt-2 leading-relaxed">{SPA_DATA.yogaNote}</p>
            </div>
            <div>
              <h4 className="font-serif text-xl text-[#233B30]">Spa Service Charge</h4>
              <p className="mt-2 italic leading-relaxed">{SPA_DATA.serviceChargeNote}</p>
            </div>
            <div>
              <h4 className="font-serif text-xl text-[#233B30]">Cancellation Policy</h4>
              <p className="mt-2 italic leading-relaxed">{SPA_DATA.cancellationPolicy}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export const ExperiencesOffersOverviewPage: React.FC = () => {
  const { navigate } = useRouter();
  usePageMeta(
    'Book your adventure stay at Château du Sureau',
    'Discover curated experiences and special offers when you stay at Château du Sureau near Yosemite National Park.'
  );

  return (
    <div>
      <PageHero
        kicker="Stay & Dine"
        title="Experiences & Offers"
        subtitle="We encourage our guests to discover different activities around Yosemite or indulge in a blissful and relaxing stay through our variety of spa treatments. Complete your culinary adventure by joining us through a thoughtful tasting menu at The Elderberry House."
        image={MEDIA.experiencesTopBanner}
        imageAlt="Experiences and Offers at Château du Sureau"
        breadcrumbs={[{ label: 'Experiences & Offers' }]}
      />

      <section className="py-16 lg:py-24 bg-[#F5F1E8]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 space-y-20">
          {/* Category Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <button
              type="button"
              onClick={() => navigate('/experiences-and-offers/offers/')}
              className="group relative aspect-[16/9] overflow-hidden bg-[#233B30] text-left cursor-pointer"
            >
              <ImageWithFallback
                src={MEDIA.experiencesOffersOffersCard}
                alt="Offers at Château du Sureau"
                className="w-full h-full object-cover opacity-75 transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent flex flex-col justify-end p-8 text-[#F5F1E8]">
                <p className="text-xs uppercase tracking-[0.2em] text-[#B49A68]">Offers</p>
                <h2 className="mt-1 font-serif text-3xl">Seasonal Offers</h2>
              </div>
            </button>

            <button
              type="button"
              onClick={() => navigate('/experiences-and-offers/experiences/')}
              className="group relative aspect-[16/9] overflow-hidden bg-[#233B30] text-left cursor-pointer"
            >
              <ImageWithFallback
                src={MEDIA.experiencesOffersExpCard}
                alt="Experiences at Château du Sureau"
                className="w-full h-full object-cover opacity-75 transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent flex flex-col justify-end p-8 text-[#F5F1E8]">
                <p className="text-xs uppercase tracking-[0.2em] text-[#B49A68]">Experiences</p>
                <h2 className="mt-1 font-serif text-3xl">Estate Experiences</h2>
              </div>
            </button>
          </div>

          {/* Offers */}
          <div>
            <div className="flex items-end justify-between pb-6 border-b border-[#D8D0C2]">
              <h2 className="font-serif text-3xl sm:text-4xl text-[#233B30]">Offers</h2>
              <button
                type="button"
                onClick={() => navigate('/experiences-and-offers/offers/')}
                className="text-xs uppercase tracking-[0.15em] text-[#233B30] hover:text-[#B49A68] cursor-pointer"
              >
                View All Offers
              </button>
            </div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              {OFFERS.map((offer) => (
                <article key={offer.slug} className="bg-white border border-[#D8D0C2] flex flex-col">
                  <div className="aspect-[16/10] overflow-hidden bg-[#EBE6DC]">
                    <ImageWithFallback
                      src={offer.image}
                      alt={offer.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif text-3xl text-[#233B30]">{offer.title}</h3>
                      <p className="mt-2 text-sm text-[#70443F] font-medium">{offer.shortDesc}</p>
                      <p className="mt-3 text-sm text-[#292925]/80 leading-relaxed">
                        {offer.fullDesc}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => navigate(offer.path)}
                      className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-[#233B30] hover:text-[#B49A68] cursor-pointer"
                    >
                      <span>View Offer Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Experiences */}
          <div>
            <div className="flex items-end justify-between pb-6 border-b border-[#D8D0C2]">
              <h2 className="font-serif text-3xl sm:text-4xl text-[#233B30]">Experiences</h2>
              <button
                type="button"
                onClick={() => navigate('/experiences-and-offers/experiences/')}
                className="text-xs uppercase tracking-[0.15em] text-[#233B30] hover:text-[#B49A68] cursor-pointer"
              >
                View All Experiences
              </button>
            </div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {EXPERIENCES.map((exp) => (
                <article key={exp.slug} className="bg-white border border-[#D8D0C2] flex flex-col">
                  <div className="aspect-[4/3] overflow-hidden bg-[#EBE6DC]">
                    <ImageWithFallback
                      src={exp.image}
                      alt={exp.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-7 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif text-2xl text-[#233B30]">{exp.title}</h3>
                      <p className="mt-2.5 text-sm text-[#292925]/80 leading-relaxed">
                        {exp.shortDesc}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => navigate(exp.path)}
                      className="mt-6 pt-4 border-t border-[#D8D0C2] inline-flex items-center justify-between text-xs uppercase tracking-[0.15em] text-[#233B30] hover:text-[#B49A68] cursor-pointer"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export const ExperienceDetailPage: React.FC<{ item: ExperienceItem }> = ({ item }) => {
  const { navigate } = useRouter();
  usePageMeta(`${item.title} - Château du Sureau`, item.fullDesc);

  return (
    <div>
      <PageHero
        kicker="Experiences"
        title={item.title}
        subtitle={item.shortDesc}
        image={item.image}
        imageAlt={item.title}
        breadcrumbs={[
          { label: 'Experiences & Offers', to: '/experiences-and-offers/' },
          { label: item.title },
        ]}
      />

      <section className="py-16 lg:py-24 bg-[#F5F1E8]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white border border-[#D8D0C2] p-8 sm:p-12 space-y-8">
            <p className="text-base text-[#292925]/85 leading-[1.8]">{item.fullDesc}</p>

            <div>
              <h2 className="font-serif text-2xl text-[#233B30] mb-4">Experience Includes:</h2>
              <ul className="space-y-2.5 text-sm text-[#292925]/85">
                {item.includes.map((inc) => (
                  <li key={inc} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#B49A68] shrink-0 mt-0.5" />
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 border-t border-[#D8D0C2] space-y-3">
              {item.pricing.map((p) => (
                <div
                  key={p.label}
                  className="flex flex-wrap items-baseline justify-between gap-2 text-sm tabular-nums"
                >
                  <span className="text-[#292925]/80">{p.label}:</span>
                  <span className="font-serif text-2xl text-[#233B30]">
                    {p.amount}{' '}
                    {p.note && <span className="font-sans text-xs text-[#292925]/65">{p.note}</span>}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => navigate('/reserve-now/')}
                className="px-7 py-3.5 bg-[#233B30] text-[#F5F1E8] text-xs uppercase tracking-[0.16em] cursor-pointer"
              >
                Inquire Here
              </button>
              <a
                href={SITE_CONTACT.phoneHref}
                className="px-6 py-3.5 border border-[#D8D0C2] text-xs uppercase tracking-[0.15em] text-[#233B30] tabular-nums"
              >
                {SITE_CONTACT.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export const OfferDetailPage: React.FC<{ item: OfferItem }> = ({ item }) => {
  const { navigate } = useRouter();
  usePageMeta(`${item.title} - Château du Sureau`, item.fullDesc);

  return (
    <div>
      <PageHero
        kicker="Offers"
        title={item.title}
        subtitle={item.shortDesc}
        image={item.image}
        imageAlt={item.title}
        breadcrumbs={[
          { label: 'Experiences & Offers', to: '/experiences-and-offers/' },
          { label: item.title },
        ]}
      />

      <section className="py-16 lg:py-24 bg-[#F5F1E8]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white border border-[#D8D0C2] p-8 sm:p-12 space-y-6">
            <p className="text-base text-[#292925]/85 leading-[1.8]">{item.fullDesc}</p>

            <div className="pt-6 border-t border-[#D8D0C2]">
              <h2 className="font-serif text-2xl text-[#233B30]">Requirements:</h2>
              <p className="mt-2 text-sm text-[#292925]/80 leading-relaxed">{item.requirements}</p>
            </div>

            <div className="pt-6 border-t border-[#D8D0C2]">
              <h2 className="font-serif text-2xl text-[#233B30]">A Kind Note:</h2>
              <p className="mt-2 text-sm text-[#292925]/80 leading-relaxed">{item.kindNote}</p>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <a
                href={EXTERNAL_LINKS.bookRoomResNexus}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 bg-[#233B30] text-[#F5F1E8] text-xs uppercase tracking-[0.16em] inline-flex items-center gap-2"
              >
                <span>Book Now</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <button
                type="button"
                onClick={() => navigate('/reserve-now/')}
                className="px-6 py-3.5 border border-[#D8D0C2] text-xs uppercase tracking-[0.15em] text-[#233B30] cursor-pointer"
              >
                Inquire Here
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export const HolidaysHappeningsPage: React.FC = () => {
  const { navigate } = useRouter();
  usePageMeta(
    '5 Star Hotel in Yosemite | Holidays & Happenings at Château du Sureau',
    'Tasting experiences, wine dinners, Thanksgiving, Christmas High Tea, and weekly events at Château du Sureau and The Elderberry House.'
  );

  return (
    <div>
      <PageHero
        kicker="Tasting Experiences & Events for the Senses"
        title="Holidays & Happenings"
        subtitle="Join us throughout the year as we host a collection of exciting events at the Elderberry House Restaurant. Experience unique and seasonal creations by our culinary team."
        image={MEDIA.holidaysBanner}
        imageAlt="Holidays & Happenings at Château du Sureau"
        breadcrumbs={[{ label: 'Holidays & Happenings' }]}
      />

      <section className="py-16 lg:py-24 bg-[#F5F1E8]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl pb-12 border-b border-[#D8D0C2]">
            <p className="text-base text-[#292925]/85 leading-[1.8]">
              Enjoy a journey of themes throughout the year, from monthly high teas, wine tastings,
              to our highly anticipated New Year’s Eve Gala and more. Some of our loveliest guests
              have made it a family tradition to attend our yearly events – moments like these warm
              our hearts.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href={EXTERNAL_LINKS.bookTableOpenTable}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#233B30] text-[#F5F1E8] text-xs uppercase tracking-[0.15em]"
              >
                <span>Click to Reserve</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONTACT.phoneHref}
                className="inline-flex items-center gap-2 px-6 py-3 border border-[#D8D0C2] bg-white text-xs uppercase tracking-[0.14em] text-[#233B30] tabular-nums"
              >
                <Phone className="w-3.5 h-3.5 text-[#B49A68]" />
                <span>{SITE_CONTACT.phoneDisplay}</span>
              </a>
            </div>
          </div>

          <div className="mt-12 space-y-8">
            {HOLIDAYS_HAPPENINGS.map((ev) => (
              <article
                key={ev.title}
                className="bg-white border border-[#D8D0C2] grid grid-cols-1 lg:grid-cols-12 overflow-hidden"
              >
                <div className="lg:col-span-4 aspect-[4/3] lg:aspect-auto overflow-hidden bg-[#EBE6DC]">
                  <ImageWithFallback
                    src={ev.image}
                    alt={ev.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="lg:col-span-8 p-8 sm:p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#70443F] font-medium tabular-nums">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {ev.date}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        {ev.timeOrSeatings}
                      </span>
                      {ev.reservationNote && (
                        <>
                          <span aria-hidden="true">·</span>
                          <span>{ev.reservationNote}</span>
                        </>
                      )}
                    </div>

                    <h2 className="mt-3 font-serif text-3xl text-[#233B30]">{ev.title}</h2>
                    {ev.price && (
                      <p className="mt-1 text-sm font-medium text-[#233B30] tabular-nums">
                        {ev.price}
                      </p>
                    )}
                    <p className="mt-3 text-sm text-[#292925]/85 leading-relaxed">
                      {ev.description}
                    </p>

                    {ev.menu && (
                      <div className="mt-6 pt-5 border-t border-[#D8D0C2]">
                        <h3 className="text-xs uppercase tracking-[0.18em] text-[#B49A68] mb-3">
                          Menu
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                          {ev.menu.map((m) => (
                            <div key={m.dish}>
                              <p className="font-medium text-[#233B30]">{m.dish}</p>
                              <p className="italic text-[#292925]/70">{m.notes}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="mt-6 pt-5 border-t border-[#D8D0C2]/70">
                    {ev.internalPath ? (
                      <button
                        type="button"
                        onClick={() => navigate(ev.internalPath!)}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#233B30] text-[#F5F1E8] text-xs uppercase tracking-[0.15em] cursor-pointer"
                      >
                        <span>{ev.ctaLabel}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    ) : (
                      <a
                        href={ev.ctaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#233B30] text-[#F5F1E8] text-xs uppercase tracking-[0.15em]"
                      >
                        <span>{ev.ctaLabel}</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
