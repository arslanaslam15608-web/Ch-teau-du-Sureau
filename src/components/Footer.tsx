import React, { useEffect, useState } from 'react';
import { ArrowUpRight, CheckCircle2, CloudSun } from 'lucide-react';
import { EXTERNAL_LINKS, MEDIA, SITE_CONTACT } from '../data/media';
import { useRouter } from './RouterContext';
import { ImageWithFallback } from './ImageWithFallback';

export const Footer: React.FC = () => {
  const { navigate } = useRouter();
  const [email, setEmail] = useState('');
  const [newsletterError, setNewsletterError] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [oakhurstTemp, setOakhurstTemp] = useState<string>('58');

  useEffect(() => {
    // Oakhurst, CA coordinates: 37.3280° N, 119.6493° W
    fetch(
      'https://api.open-meteo.com/v1/forecast?latitude=37.328&longitude=-119.6493&current=temperature_2m&temperature_unit=fahrenheit'
    )
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        const temp = data?.current?.temperature_2m;
        if (typeof temp === 'number') {
          setOakhurstTemp(String(Math.round(temp)));
        }
      })
      .catch(() => {
        // Keep graceful fallback
      });
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setNewsletterError('Please enter a valid email address.');
      return;
    }
    setNewsletterError('');
    setSubscribed(true);
    setEmail('');
  };

  return (
    <footer className="bg-[#233B30] text-[#F5F1E8] border-t border-[#B49A68]/30">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16 lg:py-20">
        {/* Recognition & Crest Strip */}
        <div className="pb-12 mb-12 border-b border-[#F5F1E8]/15 flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="h-12 bg-white px-2.5 py-1.5 flex items-center justify-center">
              <ImageWithFallback
                src={MEDIA.logo}
                alt="Château du Sureau"
                className="h-full w-auto object-contain"
              />
            </div>
            <div>
              <p className="font-serif text-2xl text-[#F5F1E8]">{SITE_CONTACT.brand}</p>
              <p className="text-xs text-[#F5F1E8]/70">{SITE_CONTACT.fullAddress}</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            {MEDIA.badges.map((badge) => (
              <div
                key={badge.name}
                className="h-12 sm:h-14 bg-white px-2.5 py-1.5 border border-[#B49A68]/40 flex items-center justify-center"
              >
                <ImageWithFallback
                  src={badge.src}
                  alt={badge.name}
                  className="h-full w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Top Row: Newsletter, Gift Certificates, Social & Weather, Wine Collection */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-14 border-b border-[#F5F1E8]/15">
          {/* Newsletter */}
          <div>
            <h3 className="font-serif text-2xl text-[#F5F1E8]">Join the Adventure</h3>
            {subscribed ? (
              <div className="mt-4 p-4 border border-[#B49A68]/50 bg-[#1c2f26] flex items-start gap-2.5 text-xs text-[#F5F1E8]">
                <CheckCircle2 className="w-4 h-4 text-[#B49A68] shrink-0 mt-0.5" />
                <span>
                  Thank you for subscribing. We look forward to welcoming you to Château du Sureau.
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="mt-4 space-y-2.5" noValidate>
                <label htmlFor="footer-newsletter-email" className="block text-[11px] uppercase tracking-[0.14em] text-[#B49A68]">
                  Email <span aria-hidden="true">*</span>
                </label>
                <div className="flex">
                  <input
                    id="footer-newsletter-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="w-full min-w-0 px-3.5 py-2.5 bg-[#1b2e25] border border-[#F5F1E8]/25 text-sm text-[#F5F1E8] placeholder:text-[#F5F1E8]/40 focus:outline-none focus:border-[#B49A68]"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 bg-[#B49A68] text-[#233B30] text-xs uppercase tracking-[0.12em] font-medium hover:bg-[#F5F1E8] transition-colors shrink-0 cursor-pointer"
                  >
                    Subscribe
                  </button>
                </div>
                {newsletterError && (
                  <p className="text-xs text-[#e8b4ae]">{newsletterError}</p>
                )}
              </form>
            )}
          </div>

          {/* Gift Certificates */}
          <div>
            <h3 className="font-serif text-2xl text-[#F5F1E8]">Gift Certificates</h3>
            <button
              type="button"
              onClick={() => navigate('/gift-certificate/')}
              className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 border border-[#B49A68] text-xs uppercase tracking-[0.14em] text-[#F5F1E8] hover:bg-[#B49A68] hover:text-[#233B30] transition-colors cursor-pointer"
            >
              More Details
            </button>
          </div>

          {/* Social & Oakhurst Weather */}
          <div>
            <h3 className="font-serif text-2xl text-[#F5F1E8]">Never miss a Moment</h3>
            <div className="mt-3 flex items-center gap-5 text-xs uppercase tracking-[0.14em]">
              <a
                href={EXTERNAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#F5F1E8]/90 hover:text-[#B49A68] transition-colors"
              >
                Facebook <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <a
                href={EXTERNAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#F5F1E8]/90 hover:text-[#B49A68] transition-colors"
              >
                Instagram <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
            <div className="mt-6 pt-5 border-t border-[#F5F1E8]/15 flex items-center gap-3">
              <CloudSun className="w-5 h-5 text-[#B49A68]" />
              <div className="text-sm tabular-nums text-[#F5F1E8]/90">
                Oakhurst, CA – <span className="font-medium">{oakhurstTemp} °F</span>
              </div>
            </div>
          </div>

          {/* Wine Collection */}
          <div>
            <h3 className="font-serif text-2xl text-[#F5F1E8]">Wine Collection</h3>
            <a
              href={EXTERNAL_LINKS.coquelicotWines}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-1.5 text-sm text-[#B49A68] hover:text-[#F5F1E8] transition-colors"
            >
              Coquelicot Organic Estate Vineyard
              <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
            </a>
            <p className="mt-1 text-xs text-[#F5F1E8]/75">Los Olivos, California</p>
            <div className="mt-5 pt-5 border-t border-[#F5F1E8]/15 text-xs text-[#F5F1E8]/80 space-y-1">
              <p>{SITE_CONTACT.addressLine1}</p>
              <p>{SITE_CONTACT.addressLine2}</p>
              <p>
                <a href={SITE_CONTACT.phoneHref} className="hover:text-[#B49A68] tabular-nums">
                  {SITE_CONTACT.phoneDisplay}
                </a>{' '}
                ·{' '}
                <a href={`mailto:${SITE_CONTACT.email}`} className="hover:text-[#B49A68]">
                  {SITE_CONTACT.email}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Middle Navigation Columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 py-12 border-b border-[#F5F1E8]/15 text-xs">
          <div>
            <p className="uppercase tracking-[0.16em] text-[#B49A68] mb-3">Accommodations</p>
            <ul className="space-y-2 text-[#F5F1E8]/80">
              <li>
                <button type="button" onClick={() => navigate('/rooms/')} className="hover:text-[#F5F1E8] cursor-pointer">
                  Stay &amp; Guest Rooms
                </button>
              </li>
              <li>
                <button type="button" onClick={() => navigate('/villa-du-sureau/')} className="hover:text-[#F5F1E8] cursor-pointer">
                  Villa du Sureau
                </button>
              </li>
              <li>
                <button type="button" onClick={() => navigate('/chateau-du-sureau-video-tour/')} className="hover:text-[#F5F1E8] cursor-pointer">
                  Video Tour
                </button>
              </li>
            </ul>
          </div>

          <div>
            <p className="uppercase tracking-[0.16em] text-[#B49A68] mb-3">Culinary &amp; Spa</p>
            <ul className="space-y-2 text-[#F5F1E8]/80">
              <li>
                <button type="button" onClick={() => navigate('/dine/')} className="hover:text-[#F5F1E8] cursor-pointer">
                  The Elderberry House
                </button>
              </li>
              <li>
                <button type="button" onClick={() => navigate('/dine/five-course-dinner-menu/')} className="hover:text-[#F5F1E8] cursor-pointer">
                  5-Course Menu
                </button>
              </li>
              <li>
                <button type="button" onClick={() => navigate('/holiday-and-happenings/the-cellar/')} className="hover:text-[#F5F1E8] cursor-pointer">
                  The Cellar Bar
                </button>
              </li>
              <li>
                <button type="button" onClick={() => navigate('/spa-du-sureau/')} className="hover:text-[#F5F1E8] cursor-pointer">
                  Spa du Sureau
                </button>
              </li>
            </ul>
          </div>

          <div>
            <p className="uppercase tracking-[0.16em] text-[#B49A68] mb-3">Discover</p>
            <ul className="space-y-2 text-[#F5F1E8]/80">
              <li>
                <button type="button" onClick={() => navigate('/experiences-and-offers/')} className="hover:text-[#F5F1E8] cursor-pointer">
                  Experiences &amp; Offers
                </button>
              </li>
              <li>
                <button type="button" onClick={() => navigate('/holiday-and-happenings/')} className="hover:text-[#F5F1E8] cursor-pointer">
                  Holidays &amp; Happenings
                </button>
              </li>
              <li>
                <button type="button" onClick={() => navigate('/yosemite-national-park/')} className="hover:text-[#F5F1E8] cursor-pointer">
                  Yosemite National Park
                </button>
              </li>
              <li>
                <button type="button" onClick={() => navigate('/weddings-and-events/')} className="hover:text-[#F5F1E8] cursor-pointer">
                  Weddings &amp; Events
                </button>
              </li>
            </ul>
          </div>

          <div>
            <p className="uppercase tracking-[0.16em] text-[#B49A68] mb-3">Editorial</p>
            <ul className="space-y-2 text-[#F5F1E8]/80">
              <li>
                <button type="button" onClick={() => navigate('/gallery/')} className="hover:text-[#F5F1E8] cursor-pointer">
                  Photo Gallery
                </button>
              </li>
              <li>
                <button type="button" onClick={() => navigate('/blog/')} className="hover:text-[#F5F1E8] cursor-pointer">
                  Blog
                </button>
              </li>
              <li>
                <button type="button" onClick={() => navigate('/media-and-press/')} className="hover:text-[#F5F1E8] cursor-pointer">
                  Media &amp; Press
                </button>
              </li>
            </ul>
          </div>

          <div>
            <p className="uppercase tracking-[0.16em] text-[#B49A68] mb-3">Guest Services</p>
            <ul className="space-y-2 text-[#F5F1E8]/80">
              <li>
                <button type="button" onClick={() => navigate('/hotel-information/')} className="hover:text-[#F5F1E8] cursor-pointer">
                  Hotel Information
                </button>
              </li>
              <li>
                <button type="button" onClick={() => navigate('/contact-us/')} className="hover:text-[#F5F1E8] cursor-pointer">
                  Contact Us &amp; Directions
                </button>
              </li>
              <li>
                <button type="button" onClick={() => navigate('/reserve-now/')} className="hover:text-[#F5F1E8] cursor-pointer">
                  Package Inquiries
                </button>
              </li>
              <li>
                <button type="button" onClick={() => navigate('/catering-menu/')} className="hover:text-[#F5F1E8] cursor-pointer">
                  Event Proposal
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F5F1E8]/70">
          <p>© chateausureau.com | All Rights Reserved</p>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => navigate('/sitemap/')}
              className="hover:text-[#F5F1E8] transition-colors cursor-pointer"
            >
              Sitemap
            </button>
            <span aria-hidden="true">|</span>
            <button
              type="button"
              onClick={() => navigate('/privacy-policy/')}
              className="hover:text-[#F5F1E8] transition-colors cursor-pointer"
            >
              Privacy policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
