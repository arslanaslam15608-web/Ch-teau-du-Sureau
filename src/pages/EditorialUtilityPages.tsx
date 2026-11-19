import React, { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  MapPin,
  Phone,
  Mail,
} from 'lucide-react';
import { EXTERNAL_LINKS, MEDIA, SITE_CONTACT } from '../data/media';
import { ROOMS } from '../data/roomsAndDining';
import {
  BLOG_ARTICLES,
  BLOG_AUTHOR_BIO,
  BlogArticle,
  ContentBlock,
  EXPERIENCES,
  GALLERY_CATEGORIES,
  GALLERY_PHOTOS,
  GIFT_CERTIFICATES,
  HOTEL_INFO_SECTIONS,
  MEDIA_PRESS_ITEMS,
  OFFERS,
  PRIVACY_POLICY_BLOCKS,
  TRAVEL_DIRECTIONS,
} from '../data/estatePagesData';
import { PageHero } from '../components/PageHero';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { Lightbox } from '../components/Lightbox';
import { usePageMeta, useRouter } from '../components/RouterContext';

const renderContentBlock = (block: ContentBlock, idx: number, dropCapFirst = false) => {
  if (block.tag === 'h1' || block.tag === 'h2') {
    return (
      <h2 key={`${idx}-${block.text.slice(0, 16)}`} className="font-serif text-2xl sm:text-3xl text-[#233B30] pt-4">
        {block.text}
      </h2>
    );
  }
  if (block.tag === 'h3' || block.tag === 'h4') {
    return (
      <h3 key={`${idx}-${block.text.slice(0, 16)}`} className="font-serif text-xl sm:text-2xl text-[#233B30] pt-3">
        {block.text}
      </h3>
    );
  }
  if (block.tag === 'li') {
    return (
      <div key={`${idx}-${block.text.slice(0, 16)}`} className="flex items-start gap-2.5 pl-2 text-base text-[#292925]/85 leading-[1.8]">
        <span className="text-[#B49A68] shrink-0 mt-1" aria-hidden="true">
          •
        </span>
        <span>{block.text}</span>
      </div>
    );
  }
  return (
    <p
      key={`${idx}-${block.text.slice(0, 16)}`}
      className={`text-base text-[#292925]/85 leading-[1.85] ${
        dropCapFirst && idx === 0
          ? 'first-letter:text-5xl first-letter:font-serif first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-[#233B30]'
          : ''
      }`}
    >
      {block.text}
    </p>
  );
};

/* ============================================================
   GALLERY PAGE
   ============================================================ */
export const GalleryPage: React.FC = () => {
  const [selectedCat, setSelectedCat] = useState<string>('All');
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  usePageMeta(
    'Gallery - Château du Sureau',
    'Explore photography of Château du Sureau, our ten guest rooms, Villa du Sureau, The Elderberry House, Spa du Sureau, and Yosemite.'
  );

  const filtered =
    selectedCat === 'All'
      ? GALLERY_PHOTOS
      : GALLERY_PHOTOS.filter((p) => p.category === selectedCat);

  return (
    <div>
      <PageHero
        kicker="Château du Sureau"
        title="Photo Gallery"
        subtitle={`Explore ${GALLERY_PHOTOS.length} estate photographs across accommodations, Villa du Sureau, Elderberry Restaurant, Cuisine, Cellar Bar, and Spa du Sureau.`}
        image={MEDIA.courtyardFountain}
        imageAlt="Château du Sureau courtyard gallery"
        breadcrumbs={[{ label: 'Photo Gallery' }]}
      />

      <section className="py-16 lg:py-24 bg-[#F5F1E8]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap items-center gap-2 pb-8 border-b border-[#D8D0C2]">
            {GALLERY_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setSelectedCat(cat);
                  setLightboxIdx(null);
                }}
                className={`px-4 py-2 text-xs uppercase tracking-[0.14em] transition-colors cursor-pointer ${
                  selectedCat === cat
                    ? 'bg-[#233B30] text-[#F5F1E8]'
                    : 'bg-white border border-[#D8D0C2] text-[#292925] hover:border-[#233B30]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((photo, idx) => (
              <button
                key={photo.id}
                type="button"
                onClick={() => setLightboxIdx(idx)}
                className="group bg-white border border-[#D8D0C2] text-left overflow-hidden flex flex-col cursor-pointer"
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-[#EBE6DC]">
                  <ImageWithFallback
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="p-5">
                  <p className="text-[11px] uppercase tracking-[0.15em] text-[#B49A68]">
                    {photo.category}
                  </p>
                  <h2 className="mt-1 font-serif text-xl text-[#233B30]">{photo.title}</h2>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <Lightbox
        photos={filtered}
        activeIndex={lightboxIdx}
        onClose={() => setLightboxIdx(null)}
        onChangeIndex={setLightboxIdx}
      />
    </div>
  );
};

/* ============================================================
   BLOG & BLOG DETAIL PAGES
   ============================================================ */
export const BlogPage: React.FC = () => {
  const { navigate } = useRouter();
  const [catFilter, setCatFilter] = useState('All');

  usePageMeta(
    'Château du Sureau Blog - 5 star Luxury hotel in California',
    'Stories, seasonal travel guides for Yosemite National Park, culinary highlights, and wedding inspiration from Château du Sureau.'
  );

  const categories = ['All', ...Array.from(new Set(BLOG_ARTICLES.map((a) => a.category)))];
  const visible =
    catFilter === 'All'
      ? BLOG_ARTICLES
      : BLOG_ARTICLES.filter((a) => a.category === catFilter);

  return (
    <div>
      <PageHero
        kicker="Château du Sureau"
        title="Blog"
        subtitle="Seasonal Yosemite travel guides, culinary inspiration from The Elderberry House, and estate celebrations."
        image={MEDIA.heroEstate}
        imageAlt="Château du Sureau Blog"
        breadcrumbs={[{ label: 'Blog' }]}
      />

      <section className="py-16 lg:py-24 bg-[#F5F1E8]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap gap-2 pb-8 border-b border-[#D8D0C2]">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setCatFilter(cat)}
                className={`px-4 py-2 text-xs uppercase tracking-[0.14em] transition-colors cursor-pointer ${
                  catFilter === cat
                    ? 'bg-[#233B30] text-[#F5F1E8]'
                    : 'bg-white border border-[#D8D0C2] text-[#292925] hover:border-[#233B30]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visible.map((article) => (
              <article
                key={article.slug}
                className="bg-white border border-[#D8D0C2] flex flex-col justify-between group"
              >
                <div>
                  <button
                    type="button"
                    onClick={() => navigate(article.path)}
                    className="block w-full aspect-[4/3] overflow-hidden bg-[#EBE6DC] cursor-pointer"
                  >
                    <ImageWithFallback
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  </button>
                  <div className="p-7">
                    <div className="flex flex-wrap items-center gap-2 text-xs text-[#292925]/60">
                      <span className="text-[#70443F] font-medium">{article.category}</span>
                      <span aria-hidden="true">·</span>
                      <span className="tabular-nums">{article.date}</span>
                      <span aria-hidden="true">·</span>
                      <span>{article.author}</span>
                    </div>
                    <h2 className="mt-2 font-serif text-2xl text-[#233B30] leading-snug">
                      <button
                        type="button"
                        onClick={() => navigate(article.path)}
                        className="text-left hover:text-[#70443F] transition-colors cursor-pointer"
                      >
                        {article.title}
                      </button>
                    </h2>
                    <p className="mt-3 text-sm text-[#292925]/80 leading-relaxed line-clamp-4">
                      {article.excerpt}
                    </p>
                  </div>
                </div>
                <div className="px-7 pb-7 pt-4 border-t border-[#D8D0C2]/60">
                  <button
                    type="button"
                    onClick={() => navigate(article.path)}
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.15em] text-[#233B30] hover:text-[#B49A68] cursor-pointer"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
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

export const BlogDetailPage: React.FC<{ article: BlogArticle }> = ({ article }) => {
  const { navigate } = useRouter();
  usePageMeta(article.title, article.excerpt);

  return (
    <div>
      <PageHero
        kicker={`${article.category} · ${article.date}`}
        title={article.title}
        subtitle={`Published By: ${article.author}`}
        image={article.image}
        imageAlt={article.title}
        breadcrumbs={[{ label: 'Blog', to: '/blog/' }, { label: article.category }]}
      />

      <section className="py-16 lg:py-24 bg-[#F5F1E8]">
        <article className="max-w-3xl mx-auto px-6">
          <div className="bg-white border border-[#D8D0C2] p-8 sm:p-12 space-y-5">
            {article.blocks.map((block, idx) => renderContentBlock(block, idx, true))}

            <div className="mt-8 pt-6 border-t border-[#D8D0C2] bg-[#F5F1E8]/60 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-[#B49A68]">
                About {article.author}
              </p>
              <p className="mt-2 text-sm text-[#292925]/80 leading-relaxed">{BLOG_AUTHOR_BIO}</p>
            </div>

            <div className="pt-8 border-t border-[#D8D0C2] flex flex-wrap items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => navigate('/blog/')}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-[#233B30] hover:text-[#B49A68] cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Blog</span>
              </button>
              <a
                href={EXTERNAL_LINKS.bookRoomResNexus}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#233B30] text-[#F5F1E8] text-xs uppercase tracking-[0.15em]"
              >
                Book Your Stay
              </a>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
};

/* ============================================================
   GIFT CERTIFICATES PAGE
   ============================================================ */
export const GiftCertificatesPage: React.FC<{ slug?: string }> = ({ slug }) => {
  const { navigate } = useRouter();
  const active = slug ? GIFT_CERTIFICATES.find((g) => g.slug === slug) : undefined;

  usePageMeta(
    active ? `${active.title} - Château du Sureau` : 'Gift Certificate - Château du Sureau',
    active ? active.description : 'Share the Château du Sureau experience with a custom or curated gift certificate.'
  );

  return (
    <div>
      <PageHero
        kicker="Gifting"
        title={active ? active.title : 'Gift Certificate'}
        subtitle={
          active
            ? active.description
            : 'Enjoy a relaxing one-night stay, dining at The Elderberry House, relaxing at Spa du Sureau, or build a custom gift certificate.'
        }
        image={active ? active.image : MEDIA.roomsBanner}
        imageAlt={active ? active.title : 'Château du Sureau Gift Certificates'}
        breadcrumbs={
          active
            ? [{ label: 'Gift Certificate', to: '/gift-certificate/' }, { label: active.title }]
            : [{ label: 'Gift Certificate' }]
        }
      />

      <section className="py-16 lg:py-24 bg-[#F5F1E8]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          {active && (
            <div className="mb-12 bg-white border border-[#D8D0C2] p-8 sm:p-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div>
                <h2 className="font-serif text-3xl text-[#233B30]">{active.title}</h2>
                <p className="mt-2 text-base text-[#292925]/85">{active.description}</p>
              </div>
              <a
                href={EXTERNAL_LINKS.giftCertificatesResNexus}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 bg-[#233B30] text-[#F5F1E8] text-xs uppercase tracking-[0.16em] inline-flex items-center gap-2 whitespace-nowrap shrink-0"
              >
                <span>Book Now</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {GIFT_CERTIFICATES.map((gc) => (
              <article key={gc.slug} className="bg-white border border-[#D8D0C2] flex flex-col">
                <div className="aspect-[16/9] overflow-hidden bg-[#EBE6DC]">
                  <ImageWithFallback
                    src={gc.image}
                    alt={gc.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-3xl text-[#233B30]">{gc.title}</h3>
                    <p className="mt-3 text-sm text-[#292925]/80 leading-relaxed">
                      {gc.description}
                    </p>
                  </div>
                  <div className="mt-6 pt-5 border-t border-[#D8D0C2] flex flex-wrap items-center justify-between gap-4">
                    <button
                      type="button"
                      onClick={() => navigate(gc.path)}
                      className="text-xs uppercase tracking-[0.15em] text-[#233B30] hover:text-[#B49A68] cursor-pointer"
                    >
                      Details
                    </button>
                    <a
                      href={EXTERNAL_LINKS.giftCertificatesResNexus}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 bg-[#233B30] text-[#F5F1E8] text-xs uppercase tracking-[0.15em] inline-flex items-center gap-1.5"
                    >
                      <span>Purchase</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
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

/* ============================================================
   HOTEL INFORMATION PAGE (ALL 5 SECTIONS)
   ============================================================ */
export const HotelInfoPage: React.FC<{ activeSubId?: string }> = ({ activeSubId }) => {
  const { navigate } = useRouter();
  const [selectedId, setSelectedId] = useState(
    activeSubId || HOTEL_INFO_SECTIONS[0].id
  );

  const currentSection =
    HOTEL_INFO_SECTIONS.find((s) => s.id === (activeSubId || selectedId)) ||
    HOTEL_INFO_SECTIONS[0];

  usePageMeta(
    `${currentSection.title} - Château du Sureau`,
    'As a well-known 5-star hotel in Yosemite, our services include elegant guest rooms, Villa du Sureau, Spa du Sureau, and The Elderberry House.'
  );

  return (
    <div>
      <PageHero
        kicker="Hotel Information"
        title="Hotel Information"
        subtitle="As a well-known 5-star hotel in Yosemite, we are confident our guests will have a memorable and comfortable stay during their adventure trips. Our services include elegant guest rooms, a luxury villa, a blissful spa, and our in-house restaurant, The Elderberry House."
        image={MEDIA.hotelInfoBanner}
        imageAlt="Château du Sureau Hotel Information"
        breadcrumbs={[{ label: 'Hotel Information' }]}
      />

      <section className="py-16 lg:py-24 bg-[#F5F1E8]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <aside className="lg:col-span-4 space-y-2">
            {HOTEL_INFO_SECTIONS.map((sec) => (
              <button
                key={sec.id}
                type="button"
                onClick={() => {
                  setSelectedId(sec.id);
                  navigate(sec.path);
                }}
                className={`w-full text-left px-5 py-4 border text-sm transition-colors cursor-pointer ${
                  currentSection.id === sec.id
                    ? 'bg-[#233B30] text-[#F5F1E8] border-[#233B30]'
                    : 'bg-white text-[#292925] border-[#D8D0C2] hover:border-[#233B30]'
                }`}
              >
                {sec.title}
              </button>
            ))}
            <button
              type="button"
              onClick={() => navigate('/villa-du-sureau/')}
              className="w-full text-left px-5 py-4 border bg-white text-[#292925] border-[#D8D0C2] hover:border-[#233B30] text-sm cursor-pointer"
            >
              Villa Information
            </button>
          </aside>

          <div className="lg:col-span-8 bg-white border border-[#D8D0C2] p-8 sm:p-12">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#233B30] pb-6 border-b border-[#D8D0C2]">
              {currentSection.title}
            </h2>
            <dl className="mt-6 divide-y divide-[#D8D0C2]/70">
              {currentSection.items.map((item) => (
                <div key={item.q} className="py-5">
                  <dt className="font-serif text-xl text-[#233B30]">{item.q}</dt>
                  {item.a && (
                    <dd className="mt-2 text-sm text-[#292925]/85 leading-relaxed">{item.a}</dd>
                  )}
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </div>
  );
};

/* ============================================================
   CONTACT US & DIRECTIONS PAGE
   ============================================================ */
export const ContactUsPage: React.FC = () => {
  const [copiedDirs, setCopiedDirs] = useState(false);

  usePageMeta(
    'Hotel Lodging near Yosemite National Park - Contact Château du Sureau',
    '48688 Victoria Lane, Oakhurst, California 93644 · Phone (559) 683-6800 · Email chateau@chateausureau.com'
  );

  const handleCopyDirections = () => {
    const text = `Château du Sureau\n${SITE_CONTACT.fullAddress}\nPhone: ${SITE_CONTACT.phoneDisplay}\nhttps://maps.google.com/?q=48688+Victoria+Lane+Oakhurst+CA+93644`;
    navigator.clipboard?.writeText(text).catch(() => {});
    setCopiedDirs(true);
    setTimeout(() => setCopiedDirs(false), 3000);
  };

  return (
    <div>
      <PageHero
        kicker="Location & Directions"
        title="Contact Us"
        subtitle={`${SITE_CONTACT.addressLine1} · ${SITE_CONTACT.addressLine2}`}
        image={MEDIA.contactBanner}
        imageAlt="Château du Sureau Contact Us"
        breadcrumbs={[{ label: 'Contact Us' }]}
      />

      <section className="py-16 lg:py-24 bg-[#F5F1E8]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-[#D8D0C2] p-8 space-y-5">
              <h2 className="font-serif text-3xl text-[#233B30]">Château du Sureau</h2>
              <div className="space-y-3 text-sm text-[#292925]/85">
                <p className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#B49A68] shrink-0 mt-1" />
                  <span>
                    {SITE_CONTACT.addressLine1}
                    <br />
                    {SITE_CONTACT.addressLine2}
                  </span>
                </p>
                <p className="flex items-center gap-3 tabular-nums">
                  <Phone className="w-4 h-4 text-[#B49A68] shrink-0" />
                  <a href={SITE_CONTACT.phoneHref} className="hover:text-[#233B30] underline">
                    {SITE_CONTACT.phoneDisplay}
                  </a>
                </p>
                <p className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#B49A68] shrink-0" />
                  <a href={`mailto:${SITE_CONTACT.email}`} className="hover:text-[#233B30] underline">
                    {SITE_CONTACT.email}
                  </a>
                </p>
              </div>
              <p className="text-xs text-[#292925]/70 pt-3 border-t border-[#D8D0C2]">
                Reservation Hours: {SITE_CONTACT.reservationHours}
              </p>
              <button
                type="button"
                onClick={handleCopyDirections}
                className="w-full py-3.5 px-6 bg-[#233B30] text-[#F5F1E8] text-xs uppercase tracking-[0.16em] cursor-pointer"
              >
                {copiedDirs ? 'Address & Map Link Copied' : 'SEND DIRECTIONS TO PHONE'}
              </button>
            </div>

            <div className="bg-white border border-[#D8D0C2] overflow-hidden">
              <ImageWithFallback
                src={MEDIA.contactMap}
                alt="Château du Sureau Location Map — 48688 Victoria Lane, Oakhurst, CA"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-7 bg-white border border-[#D8D0C2] p-8 sm:p-10 space-y-6">
            <h2 className="font-serif text-3xl text-[#233B30] pb-4 border-b border-[#D8D0C2]">
              Driving &amp; Air Directions
            </h2>
            <div className="space-y-6">
              {TRAVEL_DIRECTIONS.map((dir) => (
                <div key={dir.origin}>
                  <h3 className="text-xs uppercase tracking-[0.16em] text-[#B49A68] font-semibold">
                    {dir.origin}
                  </h3>
                  <p className="mt-1.5 text-sm text-[#292925]/85 leading-relaxed">{dir.details}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

/* ============================================================
   MEDIA & PRESS PAGE
   ============================================================ */
export const MediaPressPage: React.FC = () => {
  usePageMeta(
    'Media & Press - Château du Sureau',
    'Press accolades and editorial features on Château du Sureau from Travel + Leisure, MICHELIN Guide, Haute Living, and Luxury Travel Magazine.'
  );

  return (
    <div>
      <PageHero
        kicker="Media & Press"
        title="Media & Press"
        subtitle={`${MEDIA_PRESS_ITEMS.length} editorial features, press awards, and culinary recognitions highlighting Château du Sureau and The Elderberry House.`}
        image={MEDIA.diningRoom}
        imageAlt="Château du Sureau Press"
        breadcrumbs={[{ label: 'Media & Press' }]}
      />

      <section className="py-16 lg:py-24 bg-[#F5F1E8]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MEDIA_PRESS_ITEMS.map((item) => (
            <article
              key={`${item.title}-${item.date}`}
              className="bg-white border border-[#D8D0C2] flex flex-col justify-between overflow-hidden"
            >
              <div>
                <div className="aspect-[16/10] overflow-hidden bg-[#EBE6DC]">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-7 pb-4">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-[#292925]/60 tabular-nums">
                    <span className="text-[#70443F] font-medium uppercase tracking-wider">
                      {item.publication}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{item.date}</span>
                  </div>
                  <h2 className="mt-2 font-serif text-2xl text-[#233B30] leading-snug">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-sm text-[#292925]/80 leading-relaxed">{item.excerpt}</p>
                </div>
              </div>
              <div className="px-7 pb-7 pt-4 border-t border-[#D8D0C2]/70 flex items-center justify-between gap-4">
                <span className="text-xs text-[#292925]/60">{item.publication}</span>
                {item.href && (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.14em] text-[#233B30] hover:text-[#70443F]"
                  >
                    <span>Read More</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

/* ============================================================
   FORMS: RESERVE NOW, INQUIRE NOW, CATERING PROPOSAL
   ============================================================ */
export const ReserveNowPage: React.FC = () => {
  const packages = [
    'Spa Getaway',
    'Yosemite Excursions',
    'Best of Both Worlds',
    'Honeymoon in Yosemite',
    'The Enchanted Villa',
    'The Pampered Epicure',
    'Grand Epicurean Villa Experience',
    'City to Mountains',
  ];
  const [form, setForm] = useState({
    pkg: packages[0],
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    travelDate: '',
    guests: '2',
    comments: '',
  });
  const [submitted, setSubmitted] = useState(false);

  usePageMeta('Reserve Now - Château du Sureau', 'Inquire to reserve a curated package at Château du Sureau.');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetch('/api/inquiries', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: 'package-reservation', ...form }),
    }).catch(() => {});
    setSubmitted(true);
  };

  return (
    <div>
      <PageHero
        kicker="Package Reservations"
        title="Reserve Now"
        subtitle="Submit your preferred package and dates below, or reserve rooms directly online."
        image={MEDIA.roomCanopy}
        imageAlt="Reserve a stay at Château du Sureau"
        breadcrumbs={[{ label: 'Reserve Now' }]}
      />

      <section className="py-16 lg:py-24 bg-[#F5F1E8]">
        <div className="max-w-3xl mx-auto px-6">
          {submitted ? (
            <div className="bg-white border border-[#D8D0C2] p-10 text-center space-y-4">
              <CheckCircle2 className="w-10 h-10 text-[#233B30] mx-auto" />
              <h2 className="font-serif text-3xl text-[#233B30]">Reservation Request Received</h2>
              <p className="text-sm text-[#292925]/80 max-w-md mx-auto">
                Thank you, {form.firstName}. Our Reservation Team will respond regarding{' '}
                <strong>{form.pkg}</strong> within our daily concierge hours (9am – 6pm PST), or
                call us anytime at {SITE_CONTACT.phoneDisplay}.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white border border-[#D8D0C2] p-8 sm:p-12 space-y-5">
              <div>
                <label className="block text-xs uppercase tracking-[0.14em] text-[#233B30] mb-1.5">
                  Selected Package
                </label>
                <select
                  value={form.pkg}
                  onChange={(e) => setForm({ ...form, pkg: e.target.value })}
                  className="w-full px-4 py-3 border border-[#D8D0C2] bg-[#F5F1E8]/40 text-sm"
                >
                  {packages.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-[0.14em] text-[#233B30] mb-1.5">
                    First Name *
                  </label>
                  <input
                    required
                    value={form.firstName}
                    onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                    className="w-full px-4 py-3 border border-[#D8D0C2] text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-[0.14em] text-[#233B30] mb-1.5">
                    Last Name *
                  </label>
                  <input
                    required
                    value={form.lastName}
                    onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                    className="w-full px-4 py-3 border border-[#D8D0C2] text-sm"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-[0.14em] text-[#233B30] mb-1.5">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-[#D8D0C2] text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-[0.14em] text-[#233B30] mb-1.5">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 border border-[#D8D0C2] text-sm"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-[0.14em] text-[#233B30] mb-1.5">
                    Date of Travel *
                  </label>
                  <input
                    type="date"
                    required
                    value={form.travelDate}
                    onChange={(e) => setForm({ ...form, travelDate: e.target.value })}
                    className="w-full px-4 py-3 border border-[#D8D0C2] text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-[0.14em] text-[#233B30] mb-1.5">
                    No of Guest *
                  </label>
                  <input
                    type="number"
                    min="1"
                    required
                    value={form.guests}
                    onChange={(e) => setForm({ ...form, guests: e.target.value })}
                    className="w-full px-4 py-3 border border-[#D8D0C2] text-sm tabular-nums"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-[0.14em] text-[#233B30] mb-1.5">
                  Comments *
                </label>
                <textarea
                  rows={4}
                  required
                  value={form.comments}
                  onChange={(e) => setForm({ ...form, comments: e.target.value })}
                  className="w-full px-4 py-3 border border-[#D8D0C2] text-sm"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3.5 bg-[#233B30] text-[#F5F1E8] text-xs uppercase tracking-[0.16em] font-medium hover:bg-[#192b23] transition-colors cursor-pointer"
              >
                Submit
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

export const InquireNowPage: React.FC = () => {
  const { search } = useRouter();
  const params = new URLSearchParams(search);
  const initialService =
    params.get('service') || 'Yosemite National Park - Private Group Tour';

  const services = [
    'Yosemite National Park - Picnic in the Mountains',
    'Yosemite National Park - Private Group Tour',
    'Yosemite National Park - Family Experience',
  ];
  const [form, setForm] = useState({
    service: services.includes(initialService) ? initialService : services[1],
    name: '',
    email: '',
    phone: '',
    visitDate: '',
    comments: '',
  });
  const [submitted, setSubmitted] = useState(false);

  usePageMeta('Private Group Tour - Inquire Now - Château du Sureau', 'Inquire about Yosemite excursions with Château du Sureau concierge.');

  return (
    <div>
      <PageHero
        kicker="Yosemite Concierge"
        title="Inquire Now"
        subtitle="Let our concierge craft your Yosemite excursion, gourmet mountain picnic, or family weekend."
        image={MEDIA.yosemitePanorama}
        imageAlt="Yosemite Excursions Inquiry"
        breadcrumbs={[{ label: 'Yosemite', to: '/yosemite-national-park/' }, { label: 'Inquire Now' }]}
      />
      <section className="py-16 lg:py-24 bg-[#F5F1E8]">
        <div className="max-w-3xl mx-auto px-6">
          {submitted ? (
            <div className="bg-white border border-[#D8D0C2] p-10 text-center space-y-4">
              <CheckCircle2 className="w-10 h-10 text-[#233B30] mx-auto" />
              <h2 className="font-serif text-3xl text-[#233B30]">Inquiry Submitted</h2>
              <p className="text-sm text-[#292925]/80">
                Thank you, {form.name}. Our Concierge will contact you shortly regarding{' '}
                <strong>{form.service}</strong>.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                fetch('/api/inquiries', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ type: 'yosemite-inquiry', ...form }),
                }).catch(() => {});
                setSubmitted(true);
              }}
              className="bg-white border border-[#D8D0C2] p-8 sm:p-12 space-y-5"
            >
              <div>
                <label className="block text-xs uppercase tracking-[0.14em] text-[#233B30] mb-1.5">
                  Selected Service
                </label>
                <select
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="w-full px-4 py-3 border border-[#D8D0C2] text-sm"
                >
                  {services.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-[0.14em] text-[#233B30] mb-1.5">
                    Name *
                  </label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 border border-[#D8D0C2] text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-[0.14em] text-[#233B30] mb-1.5">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 border border-[#D8D0C2] text-sm"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-[0.14em] text-[#233B30] mb-1.5">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-[#D8D0C2] text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-[0.14em] text-[#233B30] mb-1.5">
                    Date you plan to Visit *
                  </label>
                  <input
                    type="date"
                    required
                    value={form.visitDate}
                    onChange={(e) => setForm({ ...form, visitDate: e.target.value })}
                    className="w-full px-4 py-3 border border-[#D8D0C2] text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-[0.14em] text-[#233B30] mb-1.5">
                  Comments *
                </label>
                <textarea
                  rows={4}
                  required
                  value={form.comments}
                  onChange={(e) => setForm({ ...form, comments: e.target.value })}
                  className="w-full px-4 py-3 border border-[#D8D0C2] text-sm"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3.5 bg-[#233B30] text-[#F5F1E8] text-xs uppercase tracking-[0.16em] cursor-pointer"
              >
                Submit
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

export const CateringProposalPage: React.FC = () => {
  const [form, setForm] = useState({
    inquiryFocus: 'Weddings & Rehearsals - Catering Menu',
    name: '',
    email: '',
    phone: '',
    guests: '50',
    comm: 'Email',
    eventDate: '',
    eventType: 'Weddings & Rehearsals',
    budget: '$10,000 - $15,000',
    vision: '',
  });
  const [submitted, setSubmitted] = useState(false);

  usePageMeta('Request A Proposal - Château du Sureau', 'Request an event, wedding, or corporate retreat catering proposal from Château du Sureau.');

  return (
    <div>
      <PageHero
        kicker="Events & Catering"
        title="Request A Proposal"
        subtitle="Share your event vision and our event specialists will prepare a tailored seasonal proposal."
        image={MEDIA.weddingsTerrace}
        imageAlt="Request a Proposal"
        breadcrumbs={[{ label: 'Weddings & Events', to: '/weddings-and-events/' }, { label: 'Request A Proposal' }]}
      />

      <section className="py-16 lg:py-24 bg-[#F5F1E8]">
        <div className="max-w-3xl mx-auto px-6">
          {submitted ? (
            <div className="bg-white border border-[#D8D0C2] p-10 text-center space-y-4">
              <CheckCircle2 className="w-10 h-10 text-[#233B30] mx-auto" />
              <h2 className="font-serif text-3xl text-[#233B30]">Proposal Request Received</h2>
              <p className="text-sm text-[#292925]/80">
                Thank you, {form.name}. Our events team will reach out via {form.comm} regarding your{' '}
                <strong>{form.eventType}</strong> inquiry.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                fetch('/api/inquiries', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ type: 'catering-proposal', ...form }),
                }).catch(() => {});
                setSubmitted(true);
              }}
              className="bg-white border border-[#D8D0C2] p-8 sm:p-12 space-y-5"
            >
              <div>
                <label className="block text-xs uppercase tracking-[0.14em] text-[#233B30] mb-1.5">
                  Inquiry Focus
                </label>
                <select
                  value={form.inquiryFocus}
                  onChange={(e) => setForm({ ...form, inquiryFocus: e.target.value })}
                  className="w-full px-4 py-3 border border-[#D8D0C2] text-sm"
                >
                  <option>Weddings &amp; Rehearsals - Catering Menu</option>
                  <option>Events &amp; Celebrations - Catering Menu</option>
                  <option>Meetings &amp; Retreats - Catering Menu</option>
                  <option>Weddings and Events - Remarkable Service</option>
                  <option>Weddings and Events - Request a Proposal</option>
                </select>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-[0.14em] text-[#233B30] mb-1.5">
                    Name *
                  </label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 border border-[#D8D0C2] text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-[0.14em] text-[#233B30] mb-1.5">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 border border-[#D8D0C2] text-sm"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-[0.14em] text-[#233B30] mb-1.5">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-[#D8D0C2] text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-[0.14em] text-[#233B30] mb-1.5">
                    No of Guest *
                  </label>
                  <input
                    type="number"
                    required
                    value={form.guests}
                    onChange={(e) => setForm({ ...form, guests: e.target.value })}
                    className="w-full px-4 py-3 border border-[#D8D0C2] text-sm tabular-nums"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-[0.14em] text-[#233B30] mb-1.5">
                    Preferred Communication
                  </label>
                  <select
                    value={form.comm}
                    onChange={(e) => setForm({ ...form, comm: e.target.value })}
                    className="w-full px-4 py-3 border border-[#D8D0C2] text-sm"
                  >
                    <option>Email</option>
                    <option>Call</option>
                    <option>Text</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-[0.14em] text-[#233B30] mb-1.5">
                    Event Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={form.eventDate}
                    onChange={(e) => setForm({ ...form, eventDate: e.target.value })}
                    className="w-full px-4 py-3 border border-[#D8D0C2] text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-[0.14em] text-[#233B30] mb-1.5">
                    Event Type
                  </label>
                  <select
                    value={form.eventType}
                    onChange={(e) => setForm({ ...form, eventType: e.target.value })}
                    className="w-full px-4 py-3 border border-[#D8D0C2] text-sm"
                  >
                    <option>Weddings &amp; Rehearsals</option>
                    <option>Events &amp; Celebrations</option>
                    <option>Meetings &amp; Retreats</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-[0.14em] text-[#233B30] mb-1.5">
                    Budget *
                  </label>
                  <select
                    value={form.budget}
                    onChange={(e) => setForm({ ...form, budget: e.target.value })}
                    className="w-full px-4 py-3 border border-[#D8D0C2] text-sm tabular-nums"
                  >
                    <option>$1 - $2500</option>
                    <option>$2500 - $5000</option>
                    <option>$5000 - $10,000</option>
                    <option>$10,000 - $15,000</option>
                    <option>$20,000+</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-[0.14em] text-[#233B30] mb-1.5">
                  Comments/Vision of the event *
                </label>
                <textarea
                  rows={4}
                  required
                  value={form.vision}
                  onChange={(e) => setForm({ ...form, vision: e.target.value })}
                  className="w-full px-4 py-3 border border-[#D8D0C2] text-sm"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3.5 bg-[#233B30] text-[#F5F1E8] text-xs uppercase tracking-[0.16em] cursor-pointer"
              >
                Submit
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

/* ============================================================
   VIDEO TOUR, SITEMAP, PRIVACY POLICY
   ============================================================ */
export const VideoTourPage: React.FC = () => {
  const { navigate } = useRouter();

  usePageMeta('Château du Sureau Video Tour', 'Take a video tour of our enchanting castle at Château du Sureau in Oakhurst, California.');

  return (
    <div>
      <PageHero
        kicker="Château du Sureau"
        title="Take a video tour of our enchanting castle"
        subtitle="Château du Sureau · Oakhurst, California"
        image={MEDIA.heroEstate}
        imageAlt="Château du Sureau Video Tour"
        breadcrumbs={[{ label: 'Video Tour' }]}
      />
      <section className="py-16 lg:py-24 bg-[#F5F1E8]">
        <div className="max-w-5xl mx-auto px-6 space-y-10">
          <div className="bg-[#233B30] border border-[#D8D0C2] overflow-hidden">
            <video
              controls
              playsInline
              poster={MEDIA.heroEstate}
              className="w-full aspect-[16/9] bg-black"
            >
              <source src={MEDIA.videoTourMp4} type="video/mp4" />
            </video>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { title: 'Château du Sureau', image: MEDIA.heroEstate },
              { title: 'A European Escape In California', image: MEDIA.courtyardFountain },
              { title: 'Villa du Sureau', image: MEDIA.villaSalon },
              { title: 'The Elderberry House', image: MEDIA.diningRoom },
            ].map((item) => (
              <div key={item.title} className="bg-white border border-[#D8D0C2] overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden bg-[#EBE6DC]">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="p-3 font-serif text-sm text-[#233B30]">{item.title}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              type="button"
              onClick={() => navigate('/rooms/')}
              className="px-7 py-3.5 bg-[#233B30] text-[#F5F1E8] text-xs uppercase tracking-[0.16em] cursor-pointer"
            >
              Explore Guest Rooms
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export const SitemapPage: React.FC = () => {
  const { navigate } = useRouter();
  usePageMeta('Sitemap - Château du Sureau', 'Complete site directory for Château du Sureau.');

  const groups = [
    {
      title: 'Stay & Accommodations',
      links: [
        { label: 'Home', to: '/' },
        { label: 'Stay — All Guest Rooms', to: '/rooms/' },
        { label: 'Villa du Sureau', to: '/villa-du-sureau/' },
        ...ROOMS.map((r) => ({ label: r.name, to: r.path })),
        { label: 'Video Tour', to: '/chateau-du-sureau-video-tour/' },
      ],
    },
    {
      title: 'Dine & Culinary',
      links: [
        { label: 'The Elderberry House', to: '/dine/' },
        { label: 'Five-Course Dinner Menu', to: '/dine/five-course-dinner-menu/' },
        { label: 'Three-Course Dinner Menu', to: '/dine/three-course-dinner-menu/' },
        { label: 'Wine & Cocktails Menu', to: '/dine/wine-and-cocktails-menu/' },
        { label: 'The Cellar Bar', to: '/holiday-and-happenings/the-cellar/' },
        { label: 'Catering Proposal', to: '/catering-menu/' },
      ],
    },
    {
      title: 'Spa, Experiences & Events',
      links: [
        { label: 'Spa du Sureau', to: '/spa-du-sureau/' },
        { label: 'Experiences & Offers', to: '/experiences-and-offers/' },
        ...EXPERIENCES.map((e) => ({ label: e.title, to: e.path })),
        ...OFFERS.map((o) => ({ label: o.title, to: o.path })),
        { label: 'Holidays & Happenings', to: '/holiday-and-happenings/' },
        { label: 'Weddings & Events', to: '/weddings-and-events/' },
        { label: 'Weddings & Rehearsals', to: '/weddings-and-events/weddings-and-rehearsals/' },
        { label: 'Events & Celebrations', to: '/weddings-and-events/events-and-celebrations/' },
        { label: 'Meetings & Retreats', to: '/weddings-and-events/meetings-and-retreats/' },
        { label: 'Yosemite National Park', to: '/yosemite-national-park/' },
      ],
    },
    {
      title: 'Guest Information & Editorial',
      links: [
        { label: 'Photo Gallery', to: '/gallery/' },
        { label: 'Blog', to: '/blog/' },
        { label: 'Gift Certificates', to: '/gift-certificate/' },
        ...HOTEL_INFO_SECTIONS.map((h) => ({ label: h.title, to: h.path })),
        { label: 'Contact Us', to: '/contact-us/' },
        { label: 'Media & Press', to: '/media-and-press/' },
        { label: 'Reserve Now', to: '/reserve-now/' },
        { label: 'Inquire Now', to: '/inquire-now/' },
        { label: 'Privacy Policy', to: '/privacy-policy/' },
      ],
    },
  ];

  return (
    <div>
      <PageHero
        kicker="Site Directory"
        title="Sitemap"
        image={MEDIA.courtyardFountain}
        imageAlt="Château du Sureau Sitemap"
        breadcrumbs={[{ label: 'Sitemap' }]}
      />
      <section className="py-16 lg:py-24 bg-[#F5F1E8]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {groups.map((g) => (
            <div key={g.title} className="bg-white border border-[#D8D0C2] p-7">
              <h2 className="font-serif text-2xl text-[#233B30] pb-3 border-b border-[#D8D0C2]">
                {g.title}
              </h2>
              <ul className="mt-4 space-y-2 text-xs text-[#292925]/85">
                {g.links.map((l) => (
                  <li key={l.to}>
                    <button
                      type="button"
                      onClick={() => navigate(l.to)}
                      className="text-left hover:text-[#70443F] underline-offset-4 hover:underline cursor-pointer"
                    >
                      {l.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export const PrivacyPolicyPage: React.FC = () => {
  usePageMeta(
    'Privacy Policy - Château du Sureau',
    'Privacy Policy and Cookie Policy for Château du Sureau (chateausureau.com).'
  );

  return (
    <div>
      <PageHero
        kicker="Legal"
        title="Privacy Policy"
        subtitle="Château du Sureau, Inc. and affiliates"
        image={MEDIA.heroEstate}
        imageAlt="Château du Sureau Privacy Policy"
        breadcrumbs={[{ label: 'Privacy Policy' }]}
      />
      <section className="py-16 lg:py-24 bg-[#F5F1E8]">
        <div className="max-w-3xl mx-auto px-6 bg-white border border-[#D8D0C2] p-8 sm:p-12 space-y-5">
          {PRIVACY_POLICY_BLOCKS.map((block, idx) => renderContentBlock(block, idx, false))}
        </div>
      </section>
    </div>
  );
};
