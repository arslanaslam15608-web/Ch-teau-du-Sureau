import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, FileText, Phone } from 'lucide-react';
import { EXTERNAL_LINKS, MEDIA, SITE_CONTACT } from '../data/media';
import {
  CULINARY_TEAM,
  FIVE_COURSE_MENU,
  THREE_COURSE_MENU,
  WINE_AND_COCKTAILS_DATA,
} from '../data/roomsAndDining';
import { PageHero } from '../components/PageHero';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { usePageMeta, useRouter } from '../components/RouterContext';

export const DineOverviewPage: React.FC = () => {
  const { navigate } = useRouter();
  const [expandedBio, setExpandedBio] = useState<string | null>(null);

  usePageMeta(
    'Yosemite Dining | The Elderberry House at Château du Sureau',
    'For over 30 years, The Elderberry House has been recognized as the premier fine dining destination near Yosemite National Park.'
  );

  return (
    <div>
      <PageHero
        kicker="Thoughtful & Refined"
        title="The Elderberry House"
        subtitle="For over 30 years, The Elderberry House has been recognized as the premier fine dining destination in the area. This European haven, nestled in the Sierra Mountains just minutes from Yosemite National Park, lends itself to an unforgettable evening for gourmands and wine enthusiasts."
        image={MEDIA.dineBanner}
        imageAlt="The Elderberry House dining room"
        breadcrumbs={[{ label: 'Dine' }]}
      />

      {/* Culinary Delight & Reservation */}
      <section className="py-16 lg:py-24 bg-[#F5F1E8]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div className="aspect-[16/10] overflow-hidden bg-[#D8D0C2]">
                <ImageWithFallback
                  src={MEDIA.culinaryDelight}
                  alt="A Culinary Delight at The Elderberry House"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#B49A68]">Dinner Service</p>
                <h2 className="mt-2 font-serif text-3xl sm:text-5xl text-[#233B30]">
                  A Culinary Delight
                </h2>
                <p className="mt-5 text-base text-[#292925]/85 leading-[1.8]">
                  Dinner at The Elderberry House is a thrill for the senses, showcasing ingredients
                  from local farms that harvest seasonal ingredients exclusively for our culinary team.
                  Start the evening off with a hand-crafted cocktail, a glass of champagne, or allow
                  our Sommelier to make wine pairing recommendations. Your dining experience is
                  complemented by elegant surroundings and warm and welcoming service.
                </p>
              </div>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => navigate('/dine/three-course-dinner-menu/')}
                  className="py-3.5 px-5 bg-white border border-[#D8D0C2] hover:border-[#233B30] text-left flex items-center justify-between text-xs uppercase tracking-[0.14em] text-[#233B30] cursor-pointer"
                >
                  <span>3-Course Dinner Menu</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => navigate('/dine/five-course-dinner-menu/')}
                  className="py-3.5 px-5 bg-white border border-[#D8D0C2] hover:border-[#233B30] text-left flex items-center justify-between text-xs uppercase tracking-[0.14em] text-[#233B30] cursor-pointer"
                >
                  <span>5-Course Dinner Menu</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => navigate('/dine/wine-and-cocktails-menu/')}
                  className="py-3.5 px-5 bg-white border border-[#D8D0C2] hover:border-[#233B30] text-left flex items-center justify-between text-xs uppercase tracking-[0.14em] text-[#233B30] cursor-pointer"
                >
                  <span>Cocktail Menu</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href={EXTERNAL_LINKS.wineListPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3.5 px-5 bg-white border border-[#D8D0C2] hover:border-[#233B30] text-left flex items-center justify-between text-xs uppercase tracking-[0.14em] text-[#233B30]"
                >
                  <span>Wine List (PDF)</span>
                  <FileText className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#233B30] text-[#F5F1E8] p-8 lg:p-10 space-y-6">
                <p className="text-xs uppercase tracking-[0.2em] text-[#B49A68]">
                  Check Availability
                </p>
                <h3 className="font-serif text-3xl text-[#F5F1E8]">Reserve Your Table</h3>
                <p className="text-sm text-[#F5F1E8]/80 leading-relaxed">
                  We begin dinner service at 5pm with our last seating at 8pm daily.
                </p>
                <div className="space-y-3">
                  <a
                    href={EXTERNAL_LINKS.bookTableOpenTable}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-6 bg-[#F5F1E8] text-[#233B30] text-center text-xs uppercase tracking-[0.16em] font-medium hover:bg-[#B49A68] transition-colors inline-flex items-center justify-center gap-2"
                  >
                    <span>Book Your Table</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                  <a
                    href={SITE_CONTACT.phoneHref}
                    className="w-full py-3 px-6 border border-[#F5F1E8]/30 text-[#F5F1E8] text-center text-xs uppercase tracking-[0.14em] hover:border-[#B49A68] transition-colors inline-flex items-center justify-center gap-2 tabular-nums"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#B49A68]" />
                    <span>{SITE_CONTACT.phoneDisplay}</span>
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-[4/3] overflow-hidden bg-[#D8D0C2]">
                  <ImageWithFallback
                    src={MEDIA.diningRoom}
                    alt="The Elderberry House interior"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[4/3] overflow-hidden bg-[#D8D0C2]">
                  <ImageWithFallback
                    src={MEDIA.tastingDish}
                    alt="The Elderberry House cuisine"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Cellar, Holidays & Happenings, Catering */}
      <section className="py-16 lg:py-24 bg-white border-y border-[#D8D0C2]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="border border-[#D8D0C2] flex flex-col">
            <div className="aspect-[4/3] overflow-hidden bg-[#EBE6DC]">
              <ImageWithFallback
                src={MEDIA.cellarCard}
                alt="The Cellar at Elderberry House"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-7 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-3xl text-[#233B30]">The Cellar</h3>
                <p className="mt-3 text-sm text-[#292925]/80 leading-relaxed">
                  With its stone clad walls and rich wood accents, the cozy Cellar provides the
                  perfect bar setting to enjoy classic cocktails and inventive beverages. An
                  extensive wine list and lite fare menu enhances the experience.
                </p>
                <p className="mt-4 text-xs font-medium text-[#70443F] tabular-nums">
                  Open Wednesday to Sunday 5:00 pm – Close
                </p>
              </div>
              <button
                type="button"
                onClick={() => navigate('/holiday-and-happenings/the-cellar/')}
                className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-[#233B30] hover:text-[#B49A68] cursor-pointer"
              >
                <span>Menus &amp; Offering</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="border border-[#D8D0C2] flex flex-col">
            <div className="aspect-[4/3] overflow-hidden bg-[#EBE6DC]">
              <ImageWithFallback
                src={MEDIA.dineHolidaysCard}
                alt="Holidays & Happenings at The Elderberry House"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-7 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-3xl text-[#233B30]">Holidays &amp; Happenings</h3>
                <p className="mt-3 text-sm text-[#292925]/80 leading-relaxed">
                  Join us throughout the year as we host a variety of exciting events at The
                  Elderberry House. Enjoy unique and seasonal creations prepared by our culinary
                  team. From wine tasting and cooking classes, to festive meals and more, many of
                  our most loyal guests have made these special happenings a family tradition.
                </p>
              </div>
              <button
                type="button"
                onClick={() => navigate('/holiday-and-happenings/')}
                className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-[#233B30] hover:text-[#B49A68] cursor-pointer"
              >
                <span>View our Events Calendar</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="border border-[#D8D0C2] flex flex-col">
            <div className="aspect-[4/3] overflow-hidden bg-[#EBE6DC]">
              <ImageWithFallback
                src={MEDIA.dineCateringCard}
                alt="Catering at Château du Sureau"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-7 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-3xl text-[#233B30]">Catering</h3>
                <p className="mt-3 text-sm text-[#292925]/80 leading-relaxed">
                  Our knowledgeable event specialists will help bring your memorable moments to
                  life. Fine dining service, creativity and customization, and gourmet cuisine
                  combine to make your celebration an enchanting experience.
                </p>
              </div>
              <button
                type="button"
                onClick={() => navigate('/weddings-and-events/')}
                className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-[#233B30] hover:text-[#B49A68] cursor-pointer"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Culinary Team: Head Chef & Sommelier */}
      <section className="py-16 lg:py-24 bg-[#F5F1E8]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="pb-8 border-b border-[#D8D0C2]">
            <p className="text-xs uppercase tracking-[0.22em] text-[#B49A68]">
              The Elderberry House
            </p>
            <h2 className="mt-2 font-serif text-3xl sm:text-5xl text-[#233B30]">
              Chef &amp; Sommelier
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
            {CULINARY_TEAM.map((person) => {
              const isExpanded = expandedBio === person.name;
              return (
                <article
                  key={person.name}
                  className="bg-white border border-[#D8D0C2] overflow-hidden flex flex-col"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-[#EBE6DC]">
                    <ImageWithFallback
                      src={person.image}
                      alt={`${person.role} ${person.name}`}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="p-8 flex-1 flex flex-col justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-[#B49A68] font-medium">
                        {person.role}
                      </p>
                      <h3 className="mt-1 font-serif text-3xl text-[#233B30]">{person.name}</h3>
                      <p
                        className={`mt-4 text-sm italic text-[#292925]/85 leading-relaxed ${
                          isExpanded ? '' : 'line-clamp-4'
                        }`}
                      >
                        {person.bio}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setExpandedBio(isExpanded ? null : person.name)}
                      className="mt-4 self-start text-xs uppercase tracking-[0.15em] text-[#233B30] underline underline-offset-4 hover:text-[#70443F] cursor-pointer"
                    >
                      {isExpanded ? 'Show Less' : 'Read More'}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export const TastingMenuPage: React.FC<{ variant: 'five' | 'three' }> = ({ variant }) => {
  const { navigate } = useRouter();
  const menu = variant === 'five' ? FIVE_COURSE_MENU : THREE_COURSE_MENU;
  const heroImage = variant === 'five' ? MEDIA.tastingDish : MEDIA.elderberryFood2;

  usePageMeta(menu.seoTitle, `${menu.title} at The Elderberry House — ${menu.priceLabel} ${menu.price}.`);

  return (
    <div>
      <PageHero
        kicker="The Elderberry House"
        title={menu.title}
        subtitle={`${menu.priceLabel} ${menu.price} · ${menu.winePairingLabel} ${menu.winePairingPrice}`}
        image={heroImage}
        imageAlt={menu.title}
        breadcrumbs={[{ label: 'Dine', to: '/dine/' }, { label: menu.title }]}
      />

      <section className="py-16 lg:py-24 bg-[#F5F1E8]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white border border-[#D8D0C2] p-8 sm:p-14 text-center">
            <p className="text-xs uppercase tracking-[0.22em] text-[#B49A68]">
              The Elderberry House
            </p>
            <h2 className="mt-2 font-serif text-4xl text-[#233B30]">{menu.title}</h2>

            <div className="mt-10 space-y-6">
              {menu.courses.map((course, idx) => (
                <React.Fragment key={course.dish}>
                  <div>
                    <h3 className="font-serif text-2xl text-[#233B30]">{course.dish}</h3>
                    <p className="mt-1 text-sm text-[#292925]/75">{course.details}</p>
                  </div>
                  {'connectorAfter' in course && typeof course.connectorAfter === 'string' ? (
                    <p className="text-xs uppercase tracking-[0.2em] text-[#B49A68] italic">
                      {course.connectorAfter}
                    </p>
                  ) : (
                    idx < menu.courses.length - 1 && (
                      <p className="text-[#B49A68]" aria-hidden="true">
                        •
                      </p>
                    )
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-[#D8D0C2] flex flex-col sm:flex-row items-center justify-center gap-8 text-lg font-serif text-[#233B30] tabular-nums">
              <span>
                {menu.priceLabel} <strong>{menu.price}</strong>
              </span>
              <span className="hidden sm:inline text-[#B49A68]" aria-hidden="true">
                ·
              </span>
              <span>
                {menu.winePairingLabel} <strong>{menu.winePairingPrice}</strong>
              </span>
            </div>

            <div className="mt-8 pt-6 border-t border-[#D8D0C2]/70 space-y-1.5 text-xs italic text-[#292925]/70 text-left">
              {menu.notes.map((n) => (
                <p key={n}>{n}</p>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href={EXTERNAL_LINKS.openTableDirect}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 bg-[#233B30] text-[#F5F1E8] text-xs uppercase tracking-[0.16em] font-medium hover:bg-[#192b23] transition-colors inline-flex items-center gap-2"
              >
                <span>CLICK TO RESERVE</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <button
                type="button"
                onClick={() =>
                  navigate(
                    variant === 'five'
                      ? '/dine/three-course-dinner-menu/'
                      : '/dine/five-course-dinner-menu/'
                  )
                }
                className="px-6 py-3.5 border border-[#233B30]/35 text-xs uppercase tracking-[0.15em] text-[#233B30] hover:border-[#233B30] cursor-pointer"
              >
                {variant === 'five' ? 'View 3-Course Menu' : 'View 5-Course Menu'}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export const WineCocktailsMenuPage: React.FC = () => {
  usePageMeta(
    WINE_AND_COCKTAILS_DATA.seoTitle,
    'Signature cocktails, Seedlip mocktails, wines by the glass, and craft beer at Château du Sureau and The Cellar.'
  );

  return (
    <div>
      <PageHero
        kicker="The Elderberry House & The Cellar"
        title={WINE_AND_COCKTAILS_DATA.title}
        subtitle={`The Cellar Hours: ${WINE_AND_COCKTAILS_DATA.cellarHours}`}
        image={MEDIA.cocktailsBanner}
        imageAlt="Wine & Cocktails Menu at The Cellar"
        breadcrumbs={[{ label: 'Dine', to: '/dine/' }, { label: 'Wine & Cocktails Menu' }]}
      />

      <section className="py-16 lg:py-24 bg-[#F5F1E8]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 space-y-12">
          {/* Authentic Cocktails Collage */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {MEDIA.cocktailsCollage.map((src, idx) => (
              <div key={src} className="aspect-[4/3] overflow-hidden bg-[#D8D0C2]">
                <ImageWithFallback
                  src={src}
                  alt={`Signature craft cocktail ${idx + 1} at The Cellar`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Signature Cocktails ($16 & $18) */}
            <div className="bg-white border border-[#D8D0C2] p-8 sm:p-10">
              <h2 className="font-serif text-3xl text-[#233B30] pb-4 border-b border-[#D8D0C2]">
                Signature Cocktails
              </h2>
              <div className="mt-6 space-y-5">
                {WINE_AND_COCKTAILS_DATA.signatureCocktailsSixteen.map((c) => (
                  <div key={c.name} className="flex items-baseline justify-between gap-4">
                    <div>
                      <h3 className="font-serif text-xl text-[#233B30]">{c.name}</h3>
                      <p className="text-xs text-[#292925]/70">{c.notes}</p>
                    </div>
                    <span className="font-medium text-sm text-[#233B30] tabular-nums shrink-0">
                      ${c.price}
                    </span>
                  </div>
                ))}
              </div>

              <h3 className="font-serif text-2xl text-[#233B30] mt-10 pt-6 border-t border-[#D8D0C2]">
                Signature Cocktails — $18
              </h3>
              <div className="mt-5 space-y-4">
                {WINE_AND_COCKTAILS_DATA.signatureCocktailsEighteen.map((c) => (
                  <div key={c.name} className="flex items-baseline justify-between gap-4">
                    <div>
                      <h4 className="font-serif text-lg text-[#233B30]">{c.name}</h4>
                      <p className="text-xs italic text-[#292925]/70">{c.notes}</p>
                    </div>
                    <span className="font-medium text-sm text-[#233B30] tabular-nums shrink-0">
                      ${c.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mocktails, Wines by the Glass, Beer */}
            <div className="space-y-8">
              <div className="bg-white border border-[#D8D0C2] p-8 sm:p-10">
                <h2 className="font-serif text-3xl text-[#233B30] pb-4 border-b border-[#D8D0C2]">
                  Seedlip Mocktails
                </h2>
                <div className="mt-5 space-y-4">
                  {WINE_AND_COCKTAILS_DATA.mocktails.map((m) => (
                    <div key={m.name} className="flex items-baseline justify-between gap-4">
                      <div>
                        <h3 className="font-serif text-xl text-[#233B30]">{m.name}</h3>
                        <p className="text-xs text-[#292925]/70">{m.notes}</p>
                      </div>
                      <span className="font-medium text-sm text-[#233B30] tabular-nums shrink-0">
                        ${m.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white border border-[#D8D0C2] p-8 sm:p-10">
                <h2 className="font-serif text-3xl text-[#233B30] pb-4 border-b border-[#D8D0C2]">
                  Wines by the Glass (5 oz)
                </h2>
                <div className="mt-5 space-y-6">
                  <div>
                    <h3 className="text-xs uppercase tracking-[0.16em] text-[#B49A68] mb-3">
                      Sparkling &amp; Champagne
                    </h3>
                    {[...WINE_AND_COCKTAILS_DATA.sparkling, ...WINE_AND_COCKTAILS_DATA.winesByGlassFiveOz.sparkling].map(
                      (w) => (
                        <div key={`${w.producer}-${w.details}`} className="flex justify-between gap-4 py-1.5">
                          <div>
                            <p className="font-serif text-lg text-[#233B30]">{w.producer}</p>
                            <p className="text-xs italic text-[#292925]/70">{w.details}</p>
                          </div>
                          <span className="text-sm font-medium tabular-nums">${w.price}</span>
                        </div>
                      )
                    )}
                  </div>

                  <div>
                    <h3 className="text-xs uppercase tracking-[0.16em] text-[#B49A68] mb-3">
                      Whites
                    </h3>
                    {[...WINE_AND_COCKTAILS_DATA.whites, ...WINE_AND_COCKTAILS_DATA.winesByGlassFiveOz.whites].map(
                      (w) => (
                        <div key={`${w.producer}-${w.details}`} className="flex justify-between gap-4 py-1.5">
                          <div>
                            <p className="font-serif text-lg text-[#233B30]">{w.producer}</p>
                            <p className="text-xs italic text-[#292925]/70">{w.details}</p>
                          </div>
                          <span className="text-sm font-medium tabular-nums">${w.price}</span>
                        </div>
                      )
                    )}
                  </div>

                  <div>
                    <h3 className="text-xs uppercase tracking-[0.16em] text-[#B49A68] mb-3">
                      Reds
                    </h3>
                    {[...WINE_AND_COCKTAILS_DATA.reds, ...WINE_AND_COCKTAILS_DATA.winesByGlassFiveOz.reds].map(
                      (w) => (
                        <div key={`${w.producer}-${w.details}`} className="flex justify-between gap-4 py-1.5">
                          <div>
                            <p className="font-serif text-lg text-[#233B30]">{w.producer}</p>
                            <p className="text-xs italic text-[#292925]/70">{w.details}</p>
                          </div>
                          <span className="text-sm font-medium tabular-nums">${w.price}</span>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>

              <div className="bg-white border border-[#D8D0C2] p-8 sm:p-10">
                <h2 className="font-serif text-3xl text-[#233B30] pb-4 border-b border-[#D8D0C2]">
                  Beer
                </h2>
                <div className="mt-5 space-y-3">
                  {WINE_AND_COCKTAILS_DATA.beer.map((b) => (
                    <div key={b.name} className="flex justify-between gap-4">
                      <div>
                        <p className="font-serif text-lg text-[#233B30]">{b.name}</p>
                        <p className="text-xs text-[#292925]/70">{b.origin}</p>
                      </div>
                      <span className="text-sm font-medium tabular-nums">${b.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[#D8D0C2]">
            <p className="text-sm text-[#292925]/80">
              The Cellar Hours: <strong>{WINE_AND_COCKTAILS_DATA.cellarHours}</strong> ·{' '}
              <a href={SITE_CONTACT.phoneHref} className="underline tabular-nums">
                {SITE_CONTACT.phoneDisplay}
              </a>
            </p>
            <a
              href={EXTERNAL_LINKS.wineListPdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#233B30] text-[#F5F1E8] text-xs uppercase tracking-[0.15em]"
            >
              <FileText className="w-4 h-4" />
              <span>Full Wine List (PDF)</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export const TheCellarPage: React.FC = () => {
  const { navigate } = useRouter();
  usePageMeta(
    'The Cellar - Château du Sureau',
    'Welcome to The Cellar, the perfect place to enjoy classic cocktails, inventive beverages, and a fantastic wine list at Château du Sureau.'
  );

  return (
    <div>
      <PageHero
        kicker="International Wines and Classic Cocktails"
        title="The Cellar"
        subtitle="Welcome to The Cellar, the perfect place to catch up with old friends, make new ones, and enjoy classic cocktails, inventive beverages, and a fantastic wine list."
        image={MEDIA.cellarBar}
        imageAlt="The Cellar Bar at Château du Sureau"
        breadcrumbs={[{ label: 'Dine', to: '/dine/' }, { label: 'The Cellar' }]}
      />

      <section className="py-16 lg:py-24 bg-[#F5F1E8]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#233B30]">
              International Wines and Classic Cocktails
            </h2>
            <p className="text-base text-[#292925]/85 leading-[1.8]">
              At The Cellar, we believe that a night out should be enjoyable and stress-free. Our
              extensive wine list features a variety of options for every taste, while our classic
              cocktails and inventive beverages are made with care, just for you. And if you’re in
              the mood for a bite to eat, our lite fare menu has something for everyone.
            </p>
            <p className="text-base text-[#292925]/85 leading-[1.8]">
              Join us Thursday through Sunday from 5:00 pm until close and experience a warm and
              friendly atmosphere where you can relax and have a good time. Whether you’re looking
              for a place to catch up with old friends or make new ones, The Cellar is the perfect
              spot.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="aspect-[4/3] overflow-hidden bg-[#D8D0C2]">
                <ImageWithFallback
                  src={MEDIA.cellarBottom1}
                  alt="The Cellar wine and bar interior"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[4/3] overflow-hidden bg-[#D8D0C2]">
                <ImageWithFallback
                  src={MEDIA.cellarBottom2}
                  alt="The Cellar lounge at Château du Sureau"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => navigate('/dine/wine-and-cocktails-menu/')}
                className="px-6 py-3.5 bg-[#233B30] text-[#F5F1E8] text-xs uppercase tracking-[0.15em] cursor-pointer"
              >
                Wine &amp; Cocktails Menu
              </button>
              <a
                href={EXTERNAL_LINKS.wineListPdf}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 border border-[#233B30] text-[#233B30] text-xs uppercase tracking-[0.15em] inline-flex items-center gap-2"
              >
                <FileText className="w-4 h-4" />
                <span>Wine List PDF</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-[#D8D0C2] p-8">
              <p className="text-xs uppercase tracking-[0.18em] text-[#B49A68]">Hours</p>
              <p className="mt-2 font-serif text-2xl text-[#233B30] tabular-nums">
                Wednesday – Sunday · 5:00 pm – 9:00 pm
              </p>

              <div className="mt-6 pt-6 border-t border-[#D8D0C2]">
                <h3 className="font-serif text-2xl text-[#233B30]">Happy Hour</h3>
                <p className="mt-1 text-xs uppercase tracking-[0.14em] text-[#70443F]">
                  Every Thursday | 5:00pm – 9:00pm
                </p>
                <ul className="mt-3 space-y-1.5 text-sm text-[#292925]/85 tabular-nums">
                  <li>$10 Signature Cocktails</li>
                  <li>$10 House Wines</li>
                  <li>50% Off Coquelicot/Rose and Son Wine Bottles</li>
                </ul>
              </div>

              <div className="mt-6 pt-6 border-t border-[#D8D0C2]">
                <h3 className="font-serif text-2xl text-[#233B30]">Art Hop</h3>
                <p className="mt-1 text-xs uppercase tracking-[0.14em] text-[#70443F]">
                  October 15th · 5:00pm to 8:00pm
                </p>
                <p className="mt-2 text-sm text-[#292925]/80 leading-relaxed">
                  Enjoy wine and our signature bar menu as you explore the vibrant art scene and
                  meet local artists on our garden terrace. 3rd Thursday May through October 2026.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
