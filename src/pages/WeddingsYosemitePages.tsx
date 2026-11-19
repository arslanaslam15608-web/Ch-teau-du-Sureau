import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { MEDIA, SITE_CONTACT } from '../data/media';
import { WEDDING_VENUES, YOSEMITE_DATA } from '../data/estatePagesData';
import { PageHero } from '../components/PageHero';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { usePageMeta, useRouter } from '../components/RouterContext';

export const WeddingsEventsPage: React.FC = () => {
  const { navigate } = useRouter();
  usePageMeta(
    'Wedding and Events near Yosemite National Park - Château du Sureau',
    'Our 9-acre mountain backdrop is the perfect setting to exchange your wedding vows and celebrate as a couple overlooking the Sierra Mountains.'
  );

  return (
    <div>
      <PageHero
        kicker="Your fairytale wedding begins here…"
        title="Weddings & Events"
        subtitle="Our 9-acre mountain backdrop is the perfect setting to exchange your wedding vows and celebrate as a couple. Overlooking the Sierra Mountains, our outdoor terrace provides a stunning scene for a wedding of your dreams."
        image={MEDIA.weddingsTerrace}
        imageAlt="Weddings & Events at Château du Sureau"
        breadcrumbs={[{ label: 'Weddings & Events' }]}
      />

      <section className="py-16 lg:py-24 bg-[#F5F1E8]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 space-y-16">
          {/* Quick Specs & Proposal */}
          <div className="bg-white border border-[#D8D0C2] p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm tabular-nums">
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-[#B49A68]">Total Rooms</p>
                <p className="mt-2 font-serif text-2xl text-[#233B30]">10 guest rooms</p>
                <p className="text-xs text-[#292925]/75">1 two-bedroom Villa</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-[#B49A68]">
                  The Elderberry House
                </p>
                <p className="mt-2 font-serif text-2xl text-[#233B30]">120 seated dining</p>
                <p className="text-xs text-[#292925]/75">175 cocktail reception</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-[#B49A68]">Location</p>
                <p className="mt-2 font-serif text-2xl text-[#233B30]">15 miles south</p>
                <p className="text-xs text-[#292925]/75">
                  of Yosemite National Park, 45 miles north of Fresno
                </p>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <button
                type="button"
                onClick={() => navigate('/catering-menu/?wpf7207_6=we__request_a_proposal')}
                className="w-full py-3.5 px-6 bg-[#233B30] text-[#F5F1E8] text-xs uppercase tracking-[0.16em] font-medium hover:bg-[#192b23] transition-colors cursor-pointer"
              >
                Request a Proposal
              </button>
              <a
                href={SITE_CONTACT.phoneHref}
                className="w-full py-3 px-6 border border-[#D8D0C2] text-center text-xs uppercase tracking-[0.14em] text-[#233B30] inline-flex items-center justify-center gap-2 tabular-nums"
              >
                <Phone className="w-3.5 h-3.5 text-[#B49A68]" />
                <span>{SITE_CONTACT.phoneDisplay}</span>
              </a>
            </div>
          </div>

          {/* Remarkable Service */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="aspect-[16/10] overflow-hidden bg-[#D8D0C2]">
                <ImageWithFallback
                  src={MEDIA.weddingsContentImgs[0]}
                  alt="Weddings & Events reception setting at Château du Sureau"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-[4/3] overflow-hidden bg-[#D8D0C2]">
                  <ImageWithFallback
                    src={MEDIA.weddingsContentImgs[1]}
                    alt="Fine dining catering at Château du Sureau"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[4/3] overflow-hidden bg-[#D8D0C2]">
                  <ImageWithFallback
                    src={MEDIA.weddingsContentImgs[2]}
                    alt="Estate celebration at Château du Sureau"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <p className="text-xs uppercase tracking-[0.2em] text-[#B49A68]">
                Attentive, thoughtful, and gracious
              </p>
              <h2 className="mt-2 font-serif text-3xl sm:text-4xl text-[#233B30]">
                Remarkable Service
              </h2>
              <p className="mt-4 text-base text-[#292925]/85 leading-[1.8]">
                A venue established with fine dining standards and refined service. Attentive,
                thoughtful, and gracious. Our mindset is no matter the size of your reception, you
                will be elegantly served in the same manner as our fine dining restaurant.
              </p>
              <button
                type="button"
                onClick={() => navigate('/catering-menu/?wpf7207_6=we__remarkable_service')}
                className="mt-6 px-6 py-3 border border-[#233B30] text-xs uppercase tracking-[0.15em] text-[#233B30] hover:bg-[#233B30] hover:text-[#F5F1E8] transition-colors cursor-pointer"
              >
                Inquire Here
              </button>
            </div>
          </div>

          {/* 3 Sub-categories with Source Column Photography */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="bg-white border border-[#D8D0C2] flex flex-col justify-between overflow-hidden">
              <div>
                <div className="aspect-[4/3] overflow-hidden bg-[#EBE6DC]">
                  <ImageWithFallback
                    src={MEDIA.weddingsCols[0]}
                    alt="Weddings & Rehearsals"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 pb-4">
                  <p className="text-xs italic text-[#B49A68]">Your fairytale wedding begins here…</p>
                  <h3 className="mt-2 font-serif text-3xl text-[#233B30]">
                    Weddings &amp; Rehearsals
                  </h3>
                  <p className="mt-3 text-sm text-[#292925]/80 leading-relaxed">
                    Our talented culinary team will assist you in creating your dream reception. We
                    are heavily influenced by the seasons and will customize the perfect menu to your
                    dining preferences. We believe in creating a sophisticated service set in a
                    picturesque ambiance for each of our special events.
                  </p>
                </div>
              </div>
              <div className="px-8 pb-8">
                <button
                  type="button"
                  onClick={() => navigate('/weddings-and-events/weddings-and-rehearsals/')}
                  className="w-full pt-4 border-t border-[#D8D0C2] inline-flex items-center justify-between text-xs uppercase tracking-[0.15em] text-[#233B30] hover:text-[#70443F] cursor-pointer"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>

            <article className="bg-white border border-[#D8D0C2] flex flex-col justify-between overflow-hidden">
              <div>
                <div className="aspect-[4/3] overflow-hidden bg-[#EBE6DC]">
                  <ImageWithFallback
                    src={MEDIA.weddingsCols[1]}
                    alt="Events & Celebrations"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 pb-4">
                  <h3 className="font-serif text-3xl text-[#233B30]">
                    Events &amp; Celebrations
                  </h3>
                  <p className="mt-3 text-sm text-[#292925]/80 leading-relaxed">
                    It’s time to celebrate your next milestone anniversary, a special birthday, or an
                    overdue reunion of friends and family. Each celebration offers an irreplaceable
                    moment to create an everlasting memory at Château du Sureau. Our culinary team
                    will assist you in creating a thoughtful meal to celebrate with friends and
                    family.
                  </p>
                </div>
              </div>
              <div className="px-8 pb-8">
                <button
                  type="button"
                  onClick={() => navigate('/weddings-and-events/events-and-celebrations/')}
                  className="w-full pt-4 border-t border-[#D8D0C2] inline-flex items-center justify-between text-xs uppercase tracking-[0.15em] text-[#233B30] hover:text-[#70443F] cursor-pointer"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>

            <article className="bg-white border border-[#D8D0C2] flex flex-col justify-between overflow-hidden">
              <div>
                <div className="aspect-[4/3] overflow-hidden bg-[#EBE6DC]">
                  <ImageWithFallback
                    src={MEDIA.weddingsCols[2]}
                    alt="Meetings & Retreats"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 pb-4">
                  <h3 className="font-serif text-3xl text-[#233B30]">Meetings &amp; Retreats</h3>
                  <p className="mt-3 text-sm text-[#292925]/80 leading-relaxed">
                    Let’s move the office to nature! A meeting of the minds, executive team building,
                    a change of scenery, a chance to put calls on hold and have that undisturbed
                    moment to meet and plan your business needs. We offer multiple spaces from indoor
                    to outdoor for your next corporate retreat.
                  </p>
                </div>
              </div>
              <div className="px-8 pb-8">
                <button
                  type="button"
                  onClick={() => navigate('/weddings-and-events/meetings-and-retreats/')}
                  className="w-full pt-4 border-t border-[#D8D0C2] inline-flex items-center justify-between text-xs uppercase tracking-[0.15em] text-[#233B30] hover:text-[#70443F] cursor-pointer"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export const WeddingsSubpage: React.FC<{ mode: 'weddings' | 'events' | 'meetings' }> = ({ mode }) => {
  const { navigate } = useRouter();

  const meta = {
    weddings: {
      seoTitle: 'Yosemite Wedding Packages | Wedding Venues near Yosemite - Château du Sureau',
      title: 'Weddings & Rehearsals',
      banner: MEDIA.weddingsSubBanner,
      intro:
        'Our 9-acre mountain backdrop is the perfect setting to exchange your wedding vows and celebrate as a couple. Overlooking the Sierra Mountains, our outdoor terrace provides a stunning scene for a wedding of your dreams.',
      proposalParam: 'wr__catering_menu',
      extra:
        'Relish in the moment, our event specialists are a wealth of knowledge and will be able to assist you with your vision of your perfect wedding!',
    },
    events: {
      seoTitle: 'Events & Celebrations - Château du Sureau',
      title: 'Events & Celebrations',
      banner: MEDIA.eventsSubBanner,
      intro:
        'It’s time to celebrate your next milestone anniversary, a special birthday, or an overdue reunion of friends and family. Each celebration offers an irreplaceable moment to create an everlasting memory at Château du Sureau. Our culinary team will assist you in creating a thoughtful meal to celebrate with friends and family. Fine dining service, creativity, and an impeccable meal combine to make your celebration an enchanting experience.',
      proposalParam: 'ec__catering_menu',
      extra: '',
    },
    meetings: {
      seoTitle: 'Meetings & Retreats - Château du Sureau',
      title: 'Meetings & Retreats',
      banner: MEDIA.meetingsSubBanner,
      intro:
        'Let’s move the office to nature! A meeting of the minds, executive team building, a change of scenery, a chance to put calls on hold and have that undisturbed moment to meet and plan your business needs. We offer multiple spaces from indoor to outdoor for your next corporate retreat. We are inspired to create a productive environment so you can be efficient.',
      proposalParam: 'mr__catering_menu',
      extra:
        'Relish in the moment, our catering and conferences specialists will assist you with planning all your details. With meeting space, menu planning, and audio-visual needs. We can assist you with out of the office activities allowing you time to explore Yosemite National Park.',
    },
  }[mode];

  usePageMeta(meta.seoTitle, meta.intro);

  return (
    <div>
      <PageHero
        kicker="Weddings & Events"
        title={meta.title}
        subtitle={meta.intro}
        image={meta.banner}
        imageAlt={meta.title}
        breadcrumbs={[{ label: 'Weddings & Events', to: '/weddings-and-events/' }, { label: meta.title }]}
      />

      <section className="py-16 lg:py-24 bg-[#F5F1E8]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 space-y-14">
          {/* Quick Summary Strip */}
          <div className="bg-white border border-[#D8D0C2] p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6 text-sm tabular-nums">
            <div className="space-y-1">
              <p>Total Guest Rooms: 10 rooms, 1 two-bedroom Villa</p>
              <p>The Elderberry House 100 seated dining capacity, 175 cocktail reception</p>
              <p>Location: 15 miles south of Yosemite National Park, 45 miles north of Fresno.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => navigate(`/catering-menu/?wpf7207_6=${meta.proposalParam}`)}
                className="px-6 py-3.5 bg-[#233B30] text-[#F5F1E8] text-xs uppercase tracking-[0.15em] cursor-pointer"
              >
                Inquire About Your Event
              </button>
              <a
                href={SITE_CONTACT.phoneHref}
                className="px-6 py-3.5 border border-[#D8D0C2] text-xs uppercase tracking-[0.15em] text-[#233B30]"
              >
                {SITE_CONTACT.phoneDisplay}
              </a>
            </div>
          </div>

          {/* Venues */}
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#233B30]">Venues</h2>
            <p className="mt-2 text-sm text-[#292925]/80 max-w-2xl">
              We welcome a variety of celebrations, from rehearsal dinners to ceremonies and
              receptions, to proposals and farewell brunches. Château du Sureau offers a range of
              venues for events of all sizes and design.
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {WEDDING_VENUES.map((v) => (
                <div key={v.name} className="bg-white border border-[#D8D0C2] p-7">
                  <h3 className="font-serif text-2xl text-[#233B30]">{v.name}</h3>
                  <p className="mt-2 text-xs font-medium text-[#70443F] tabular-nums">
                    {mode === 'meetings' ? v.corporateCapacity : v.socialCapacity}
                  </p>
                  {v.description && (
                    <p className="mt-3 text-sm text-[#292925]/80 leading-relaxed">{v.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Catering & Remarkable Service */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-[#D8D0C2] p-8">
              <h3 className="font-serif text-3xl text-[#233B30]">Catering Menu</h3>
              <p className="mt-3 text-sm text-[#292925]/80 leading-relaxed">
                We are heavily influenced by the seasons. It is our specialty to customize the
                perfect menu to your taste preferences. To give you a glimpse of what we have to
                offer, request a custom proposal with sample menus.
              </p>
              <button
                type="button"
                onClick={() => navigate(`/catering-menu/?wpf7207_6=${meta.proposalParam}`)}
                className="mt-6 px-6 py-3 bg-[#233B30] text-[#F5F1E8] text-xs uppercase tracking-[0.15em] cursor-pointer"
              >
                Request a Proposal
              </button>
            </div>
            <div className="bg-white border border-[#D8D0C2] p-8">
              <h3 className="font-serif text-3xl text-[#233B30]">Remarkable Service</h3>
              <p className="mt-2 text-xs italic text-[#B49A68]">Attentive, thoughtful, and gracious</p>
              <p className="mt-3 text-sm text-[#292925]/80 leading-relaxed">
                Events at the Chateau are defined by fine dining standards in service. Your event
                is prepared by our talented Executive Chef and our culinary team. Our mindset is no
                matter the size of your reception, you will be elegantly served in the same manner
                as our fine dining restaurant.
              </p>
              {meta.extra && (
                <p className="mt-3 text-sm text-[#292925]/80 leading-relaxed">{meta.extra}</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export const YosemitePage: React.FC = () => {
  const { navigate } = useRouter();
  usePageMeta(YOSEMITE_DATA.seoTitle, YOSEMITE_DATA.intro);

  return (
    <div>
      <PageHero
        kicker="13 Miles from the South Gate Entrance"
        title={YOSEMITE_DATA.title}
        subtitle={YOSEMITE_DATA.intro}
        image={MEDIA.yosemitePanorama}
        imageAlt="Yosemite National Park Sierra Nevada cliffs and waterfalls"
        breadcrumbs={[{ label: 'Yosemite National Park' }]}
      />

      <section className="py-16 lg:py-24 bg-[#F5F1E8]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {YOSEMITE_DATA.offerings.map((item) => (
              <article key={item.title} className="bg-white border border-[#D8D0C2] flex flex-col">
                <div className="aspect-[4/3] overflow-hidden bg-[#EBE6DC]">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h2 className="font-serif text-3xl text-[#233B30]">{item.title}</h2>
                    <p className="mt-3 text-sm text-[#292925]/80 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      navigate(
                        `/inquire-now/?service=${encodeURIComponent(item.serviceKey)}`
                      )
                    }
                    className="mt-6 px-6 py-3 bg-[#233B30] text-[#F5F1E8] text-xs uppercase tracking-[0.15em] hover:bg-[#192b23] transition-colors self-start cursor-pointer"
                  >
                    Inquire Now
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
