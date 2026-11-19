import React, { useEffect, useState } from 'react';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { useRouter } from './RouterContext';
import { EXTERNAL_LINKS, MEDIA, SITE_CONTACT } from '../data/media';
import { ImageWithFallback } from './ImageWithFallback';

interface NavDropdownItem {
  label: string;
  to: string;
}

interface NavItem {
  label: string;
  to: string;
  children?: NavDropdownItem[];
}

const NAV_ITEMS: NavItem[] = [
  {
    label: 'Stay',
    to: '/rooms/',
    children: [
      { label: 'Estate Guest Rooms', to: '/rooms/' },
      { label: 'Villa du Sureau', to: '/villa-du-sureau/' },
      { label: 'The Thyme Room', to: '/room/the-thyme/' },
      { label: 'The Saffron Room', to: '/room/the-saffron/' },
      { label: 'The Rosemary Room', to: '/room/the-rosemary/' },
      { label: 'Hotel Information', to: '/hotel-information/' },
    ],
  },
  {
    label: 'Dine',
    to: '/dine/',
    children: [
      { label: 'The Elderberry House', to: '/dine/' },
      { label: '5-Course Dinner Menu', to: '/dine/five-course-dinner-menu/' },
      { label: '3-Course Dinner Menu', to: '/dine/three-course-dinner-menu/' },
      { label: 'Wine & Cocktails Menu', to: '/dine/wine-and-cocktails-menu/' },
      { label: 'The Cellar Bar', to: '/holiday-and-happenings/the-cellar/' },
      { label: 'Catering & Proposals', to: '/catering-menu/' },
    ],
  },
  {
    label: 'Spa',
    to: '/spa-du-sureau/',
  },
  {
    label: 'Experiences & Offers',
    to: '/experiences-and-offers/',
    children: [
      { label: 'Overview', to: '/experiences-and-offers/' },
      { label: 'Curated Experiences', to: '/experiences-and-offers/experiences/' },
      { label: 'Special Offers', to: '/experiences-and-offers/offers/' },
      { label: 'Gift Certificates', to: '/gift-certificate/' },
    ],
  },
  {
    label: 'Holidays & Happenings',
    to: '/holiday-and-happenings/',
  },
  {
    label: 'Weddings & Events',
    to: '/weddings-and-events/',
    children: [
      { label: 'Weddings & Events Overview', to: '/weddings-and-events/' },
      { label: 'Weddings & Rehearsals', to: '/weddings-and-events/weddings-and-rehearsals/' },
      { label: 'Events & Celebrations', to: '/weddings-and-events/events-and-celebrations/' },
      { label: 'Meetings & Retreats', to: '/weddings-and-events/meetings-and-retreats/' },
    ],
  },
  {
    label: 'Yosemite',
    to: '/yosemite-national-park/',
  },
  {
    label: 'Photo Gallery',
    to: '/gallery/',
  },
  {
    label: 'Blog',
    to: '/blog/',
  },
];

export const Header: React.FC = () => {
  const { pathname, navigate, openReserve } = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const isHome = pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [pathname]);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  const solidHeader = !isHome || scrolled;

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
          solidHeader
            ? 'bg-[#F5F1E8]/95 backdrop-blur-md text-[#292925] border-b border-[#D8D0C2]/80 shadow-xs'
            : 'bg-gradient-to-b from-black/55 via-black/25 to-transparent text-[#F5F1E8]'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-16 lg:h-20 flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              navigate('/');
            }}
            className="font-serif text-xl sm:text-2xl tracking-[0.04em] whitespace-nowrap shrink-0 flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-[#B49A68]"
          >
            <span className="h-9 sm:h-10 bg-white px-2 py-1 border border-[#B49A68]/50 flex items-center justify-center shrink-0">
              <ImageWithFallback
                src={MEDIA.logo}
                alt="Château du Sureau crest"
                loading="eager"
                className="h-full w-auto object-contain"
              />
            </span>
            <span>Château du Sureau</span>
          </a>

          {/* Desktop Navigation */}
          <nav
            aria-label="Primary Navigation"
            className="hidden xl:flex items-center gap-5 text-[11px] uppercase tracking-[0.12em] font-medium"
          >
            {NAV_ITEMS.map((item) => {
              const isActive =
                pathname === item.to ||
                (item.to !== '/' && pathname.startsWith(item.to)) ||
                (item.label === 'Stay' && pathname.startsWith('/room/'));

              return (
                <div
                  key={item.label}
                  className="relative py-2"
                  onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <a
                    href={item.to}
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(item.to);
                    }}
                    className={`inline-flex items-center gap-1 whitespace-nowrap shrink-0 pb-0.5 border-b transition-colors duration-200 ${
                      isActive
                        ? 'border-[#B49A68]'
                        : 'border-transparent hover:border-[#B49A68]/70'
                    }`}
                  >
                    <span>{item.label}</span>
                    {item.children && <ChevronDown className="w-3 h-3 opacity-70" />}
                  </a>

                  {item.children && openDropdown === item.label && (
                    <div className="absolute left-0 top-full pt-2 w-60">
                      <div className="bg-[#F5F1E8] text-[#292925] border border-[#D8D0C2] shadow-xl py-2">
                        {item.children.map((sub) => (
                          <a
                            key={sub.to}
                            href={sub.to}
                            onClick={(e) => {
                              e.preventDefault();
                              navigate(sub.to);
                            }}
                            className="block px-4 py-2.5 text-[11px] tracking-[0.08em] uppercase text-[#292925] hover:bg-[#233B30] hover:text-[#F5F1E8] transition-colors"
                          >
                            {sub.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={openReserve}
              className={`px-4 sm:px-5 py-2.5 text-[11px] uppercase tracking-[0.14em] font-medium whitespace-nowrap shrink-0 transition-colors duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#B49A68] ${
                solidHeader
                  ? 'bg-[#233B30] text-[#F5F1E8] hover:bg-[#192b23]'
                  : 'bg-[#F5F1E8] text-[#233B30] hover:bg-[#B49A68] hover:text-[#233B30]'
              }`}
            >
              Reserve Now
            </button>

            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
              className="xl:hidden w-10 h-10 flex items-center justify-center border border-current/25 cursor-pointer"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile / Tablet Navigation Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-[#233B30] text-[#F5F1E8] flex flex-col overflow-y-auto">
          <div className="flex items-center justify-between px-6 h-16 border-b border-[#F5F1E8]/15 shrink-0">
            <span className="font-serif text-xl tracking-[0.04em]">Château du Sureau</span>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              aria-label="Close navigation menu"
              className="w-11 h-11 flex items-center justify-center border border-[#F5F1E8]/25 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 px-6 py-8 space-y-2">
            {NAV_ITEMS.map((item) => (
              <div key={item.label} className="border-b border-[#F5F1E8]/10 pb-2">
                <div className="flex items-center justify-between">
                  <a
                    href={item.to}
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(item.to);
                    }}
                    className="py-2.5 font-serif text-2xl text-[#F5F1E8] hover:text-[#B49A68] transition-colors"
                  >
                    {item.label}
                  </a>
                  {item.children && (
                    <button
                      type="button"
                      onClick={() =>
                        setMobileExpanded(mobileExpanded === item.label ? null : item.label)
                      }
                      aria-label={`Expand ${item.label}`}
                      className="w-11 h-11 flex items-center justify-center text-[#B49A68] cursor-pointer"
                    >
                      <ChevronDown
                        className={`w-5 h-5 transition-transform ${
                          mobileExpanded === item.label ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  )}
                </div>
                {item.children && mobileExpanded === item.label && (
                  <div className="pl-4 pb-3 space-y-2">
                    {item.children.map((sub) => (
                      <a
                        key={sub.to}
                        href={sub.to}
                        onClick={(e) => {
                          e.preventDefault();
                          navigate(sub.to);
                        }}
                        className="block py-1.5 text-sm text-[#F5F1E8]/80 hover:text-[#B49A68]"
                      >
                        {sub.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="pt-4 grid grid-cols-2 gap-3 text-xs uppercase tracking-[0.12em]">
              <button
                type="button"
                onClick={() => navigate('/hotel-information/')}
                className="py-3 border border-[#F5F1E8]/20 text-left px-3 hover:border-[#B49A68] cursor-pointer"
              >
                Hotel Information
              </button>
              <button
                type="button"
                onClick={() => navigate('/contact-us/')}
                className="py-3 border border-[#F5F1E8]/20 text-left px-3 hover:border-[#B49A68] cursor-pointer"
              >
                Contact Us
              </button>
              <button
                type="button"
                onClick={() => navigate('/media-and-press/')}
                className="py-3 border border-[#F5F1E8]/20 text-left px-3 hover:border-[#B49A68] cursor-pointer"
              >
                Media &amp; Press
              </button>
              <button
                type="button"
                onClick={() => navigate('/chateau-du-sureau-video-tour/')}
                className="py-3 border border-[#F5F1E8]/20 text-left px-3 hover:border-[#B49A68] cursor-pointer"
              >
                Video Tour
              </button>
            </div>
          </div>

          <div className="p-6 border-t border-[#F5F1E8]/15 space-y-3 bg-[#1d3128]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={EXTERNAL_LINKS.bookRoomResNexus}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 px-4 bg-[#F5F1E8] text-[#233B30] text-center text-xs uppercase tracking-[0.14em] font-medium"
              >
                Book Your Room
              </a>
              <a
                href={EXTERNAL_LINKS.bookTableOpenTable}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 px-4 border border-[#B49A68] text-[#F5F1E8] text-center text-xs uppercase tracking-[0.14em] font-medium"
              >
                Book Your Table
              </a>
            </div>
            <a
              href={SITE_CONTACT.phoneHref}
              className="flex items-center justify-center gap-2 py-2 text-sm text-[#B49A68] tabular-nums"
            >
              <Phone className="w-4 h-4" />
              {SITE_CONTACT.phoneDisplay}
            </a>
          </div>
        </div>
      )}
    </>
  );
};
