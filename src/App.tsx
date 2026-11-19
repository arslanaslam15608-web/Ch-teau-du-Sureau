import React from 'react';
import { RouterProvider, useRouter } from './components/RouterContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ReservationModal } from './components/ReservationModal';
import { HomePage } from './pages/HomePage';
import { RoomDetailPage, RoomsListingPage, VillaPage } from './pages/StayPages';
import {
  DineOverviewPage,
  TastingMenuPage,
  TheCellarPage,
  WineCocktailsMenuPage,
} from './pages/DinePages';
import {
  ExperienceDetailPage,
  ExperiencesOffersOverviewPage,
  HolidaysHappeningsPage,
  OfferDetailPage,
  SpaPage,
} from './pages/SpaAndExperiencesPages';
import {
  WeddingsEventsPage,
  WeddingsSubpage,
  YosemitePage,
} from './pages/WeddingsYosemitePages';
import {
  BlogDetailPage,
  BlogPage,
  CateringProposalPage,
  ContactUsPage,
  GalleryPage,
  GiftCertificatesPage,
  HotelInfoPage,
  InquireNowPage,
  MediaPressPage,
  PrivacyPolicyPage,
  ReserveNowPage,
  SitemapPage,
  VideoTourPage,
} from './pages/EditorialUtilityPages';
import { ROOMS } from './data/roomsAndDining';
import {
  BLOG_ARTICLES,
  EXPERIENCES,
  HOTEL_INFO_SECTIONS,
  OFFERS,
} from './data/estatePagesData';

const RouteView: React.FC = () => {
  const { pathname } = useRouter();

  if (pathname === '/') return <HomePage />;
  if (pathname === '/rooms/' || pathname === '/room/') return <RoomsListingPage />;
  if (pathname === '/villa-du-sureau/') return <VillaPage />;

  if (pathname.startsWith('/room/')) {
    const slug = pathname.replace('/room/', '').replace(/\/$/, '');
    const room = ROOMS.find((r) => r.slug === slug);
    if (room) return <RoomDetailPage room={room} />;
    return <RoomsListingPage />;
  }

  if (pathname === '/dine/') return <DineOverviewPage />;
  if (pathname === '/dine/five-course-dinner-menu/') return <TastingMenuPage variant="five" />;
  if (pathname === '/dine/three-course-dinner-menu/' || pathname === '/dine/3-course-dinner-menu/') {
    return <TastingMenuPage variant="three" />;
  }
  if (pathname === '/dine/wine-and-cocktails-menu/') return <WineCocktailsMenuPage />;

  if (pathname === '/spa-du-sureau/') return <SpaPage />;

  if (
    pathname === '/experiences-and-offers/' ||
    pathname === '/experiences-and-offers/experiences/' ||
    pathname === '/experiences-and-offers/offers/'
  ) {
    return <ExperiencesOffersOverviewPage />;
  }

  if (pathname.startsWith('/experiences-and-offers/experiences/')) {
    const slug = pathname
      .replace('/experiences-and-offers/experiences/', '')
      .replace(/\/$/, '');
    const item = EXPERIENCES.find((e) => e.slug === slug);
    if (item) return <ExperienceDetailPage item={item} />;
    return <ExperiencesOffersOverviewPage />;
  }

  if (pathname.startsWith('/experiences-and-offers/offers/')) {
    const slug = pathname
      .replace('/experiences-and-offers/offers/', '')
      .replace(/\/$/, '');
    const item = OFFERS.find((o) => o.slug === slug);
    if (item) return <OfferDetailPage item={item} />;
    return <ExperiencesOffersOverviewPage />;
  }

  if (pathname === '/holiday-and-happenings/the-cellar/') return <TheCellarPage />;
  if (pathname.startsWith('/holiday-and-happenings/')) return <HolidaysHappeningsPage />;

  if (pathname === '/weddings-and-events/') return <WeddingsEventsPage />;
  if (pathname === '/weddings-and-events/weddings-and-rehearsals/') {
    return <WeddingsSubpage mode="weddings" />;
  }
  if (pathname === '/weddings-and-events/events-and-celebrations/') {
    return <WeddingsSubpage mode="events" />;
  }
  if (pathname === '/weddings-and-events/meetings-and-retreats/') {
    return <WeddingsSubpage mode="meetings" />;
  }

  if (pathname === '/yosemite-national-park/') return <YosemitePage />;
  if (pathname === '/gallery/') return <GalleryPage />;

  if (pathname === '/blog/') return <BlogPage />;
  if (pathname.startsWith('/blog/')) {
    const slug = pathname.replace('/blog/', '').replace(/\/$/, '');
    const article = BLOG_ARTICLES.find((a) => a.slug === slug);
    if (article) return <BlogDetailPage article={article} />;
    return <BlogPage />;
  }

  if (pathname === '/gift-certificate/') return <GiftCertificatesPage />;
  if (pathname.startsWith('/gift-certificate/')) {
    const slug = pathname.replace('/gift-certificate/', '').replace(/\/$/, '');
    return <GiftCertificatesPage slug={slug} />;
  }

  if (pathname === '/hotel-information/') return <HotelInfoPage />;
  if (pathname.startsWith('/hotel-information/')) {
    const sub = pathname.replace('/hotel-information/', '').replace(/\/$/, '');
    const mapped =
      sub === 'policies'
        ? 'restaurant-and-events'
        : HOTEL_INFO_SECTIONS.find((s) => s.id === sub)?.id;
    return <HotelInfoPage activeSubId={mapped} />;
  }

  if (pathname === '/contact-us/') return <ContactUsPage />;
  if (pathname === '/media-and-press/') return <MediaPressPage />;
  if (pathname === '/reserve-now/') return <ReserveNowPage />;
  if (pathname === '/inquire-now/' || pathname === '/Inquire-now/') return <InquireNowPage />;
  if (pathname === '/catering-menu/') return <CateringProposalPage />;
  if (pathname === '/chateau-du-sureau-video-tour/') return <VideoTourPage />;
  if (pathname === '/sitemap/') return <SitemapPage />;
  if (pathname === '/privacy-policy/') return <PrivacyPolicyPage />;

  return <HomePage />;
};

export default function App() {
  return (
    <RouterProvider>
      <div className="min-h-screen flex flex-col bg-[#F5F1E8] text-[#292925]">
        <Header />
        <main className="flex-1">
          <RouteView />
        </main>
        <Footer />
        <ReservationModal />
      </div>
    </RouterProvider>
  );
}
