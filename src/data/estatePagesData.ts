import { MEDIA } from './media';
export {
  BLOG_ARTICLES,
  BLOG_AUTHOR_BIO,
  GALLERY_CATEGORIES,
  GALLERY_PHOTOS,
  MEDIA_PRESS_ITEMS,
  PRIVACY_POLICY_BLOCKS,
} from './sourceData';
export type { BlogArticle, ContentBlock, GalleryPhoto, PressItem, SourceGalleryCategory } from './sourceData';

export const SPA_DATA = {
  title: 'Spa du Sureau',
  subtitle: 'Rejuvenate & Restore',
  seoTitle: 'Spa du Sureau - The Spa at The Estate | Château du Sureau',
  introParagraphs: [
    'The soothing Spa du Sureau features a sophisticated menu of contemporary treatments enhanced by traditional European elements. Choose to start the day with a fragrant Lavender Blossom Body Polish, a rejuvenating facial, or indulge in the Hiker’s Repose massage after a day of recreation. Our team’s nourishing touch will allow your mind and body a chance to rest and repair.',
    'Throughout the picturesque grounds, moments of relaxation and renewal can be found at every turn. Whether lounging beside an outdoor pool framed by colorful gardens, to embarking on a nature walk beneath a canopy of trees, or enjoying a romantic picnic for two, discovering the serenity and beauty of the estate’s magical setting is a highlight of any stay.',
  ],
  treatments: [
    {
      title: 'Facials',
      description:
        'Indulge in a deep cleanse and hydration of the skin. Enjoy ultra-premium skincare designed to repair and replenish tired skin by giving you a beautiful youthful appearance. Allow us to personalize a facial service especially for you.',
      cta: 'View Facial Treatments',
      image: MEDIA.spaTreatmentsImgs[0],
    },
    {
      title: 'Massages',
      description:
        'A time to relax and repair your muscles and joints through a healing massage. Our massages include stretching techniques, compression, deep or light pressure to apply focus to release any tension you may have acquired through your daily activities.',
      cta: 'View Massage Treatments',
      image: MEDIA.spaTreatmentsImgs[1],
    },
    {
      title: 'Body Treatments',
      description:
        'Revitalization of the body. Aromatherapy calming baths, hydrating wraps, balance and restore the body with modern techniques and signature treatments tailored to your individual needs.',
      cta: 'View Body Treatments',
      image: MEDIA.spaTreatmentsImgs[2],
    },
  ],
  hours: 'All services are specifically reserved for each guest daily beginning 9am-4pm',
  serviceChargeNote: 'A 20% service charge is added to all spa services',
  cancellationPolicy:
    'Full payment is required for a cancellation or no-show occurring within 24 hours',
  yogaNote:
    'Private or group sessions by certified integrative Yoga therapists trained in many styles of yoga are held in the privacy of your guest room or outdoors in a specially constructed “Yoga Court” enjoying the mountain air',
  image: MEDIA.spaSanctuary,
  poolImage: MEDIA.poolGardens,
  specialImage: MEDIA.spaSpecial,
  eventsImages: MEDIA.spaEventsImgs,
};

export interface ExperienceItem {
  slug: string;
  path: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  includes: string[];
  pricing: { label: string; amount: string; note?: string }[];
  image: string;
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    slug: 'spa-getaway',
    path: '/experiences-and-offers/experiences/spa-getaway/',
    title: 'Spa Getaway',
    shortDesc:
      'Two-night escape with a Spa du Sureau getaway, perfectly designed to relax and rejuvenate your mind, body and spirit.',
    fullDesc:
      'Indulge in a blissful two-night escape with a Spa du Sureau getaway, perfectly designed to relax and rejuvenate your mind, body and spirit.',
    includes: [
      '2-night stay',
      'Breakfast for two each morning',
      'Seasonal welcome beverage upon arrival',
      'Spa experience for two (60-minute facial or 60-minute massage)',
    ],
    pricing: [
      {
        label: 'Package November 1st to April 30th',
        amount: '$2080',
        note: '(inclusive of tax, service and resort)',
      },
      {
        label: 'Package May 1st to October 31st',
        amount: '$2300',
        note: '(inclusive of tax, service and resort)',
      },
    ],
    image: MEDIA.expSpaGetaway,
  },
  {
    slug: 'yosemite-excursions',
    path: '/experiences-and-offers/experiences/yosemite-excursions/',
    title: 'Yosemite Excursions',
    shortDesc:
      'For those with an adventurous spirit, indulge in the breathtaking landscapes of Yosemite National Park.',
    fullDesc:
      'For those with an adventurous spirit, indulge in the breathtaking landscapes of Yosemite National Park perfectly paired with a two-night retreat in a luxurious signature guest room.',
    includes: [
      '2 night stay',
      'Breakfast for 2 each morning',
      'Seasonal welcome beverage upon arrival',
      'Yosemite Group Tour for two with a picnic lunch',
    ],
    pricing: [
      {
        label: 'Package November 1st to April 30th',
        amount: '$2055',
        note: '(inclusive of tax, service and resort)',
      },
      {
        label: 'Package May 1st to October 31st',
        amount: '$2280',
        note: '(inclusive of tax, service and resort)',
      },
    ],
    image: MEDIA.expYosemite,
  },
  {
    slug: 'honeymoon-in-yosemite',
    path: '/experiences-and-offers/experiences/honeymoon-in-yosemite/',
    title: 'Honeymoon in Yosemite',
    shortDesc: 'Indulge with the Honeymoon in Yosemite experience',
    fullDesc:
      'Whether you’re planning a heart-stealing getaway, a relaxing mountain retreat, or simply longing for an escape from the everyday, we invite you to indulge with the Honeymoon in Yosemite experience.',
    includes: [
      '2-night stay',
      'Breakfast for two each morning',
      'Seasonal welcome beverage upon arrival',
      'Spa experience for two (60-minute facial or 60-minte massage)',
      '5-course dinner for two at the Elderberry House',
      'Hiker’s picnic for two',
    ],
    pricing: [
      {
        label: 'Package November 1st to April 30th',
        amount: '$2495',
        note: '(inclusive of tax, service and resort)',
      },
      {
        label: 'Package May 1st to October 31st',
        amount: '$2750',
        note: '(inclusive of tax, service and resort)',
      },
    ],
    image: MEDIA.expHoneymoon,
  },
  {
    slug: 'enchanted-villa',
    path: '/experiences-and-offers/experiences/enchanted-villa/',
    title: 'Enchanted Villa',
    shortDesc:
      'Take your experience with us up a level while we whisk you away to our private manor Villa Sureau!',
    fullDesc:
      'Take your experience with us up a level while we whisk you away to our private manor Villa Sureau! The beautiful Salon Suite in Villa Sureau is the primary bedroom in the manor with lofty 14-foot ceilings, a gorgeous art deco marble bathroom complete with soaking tub and steam shower, a grand sitting salon and balcony, a Roman bath, and private entrance. Authentic antique furnishings and original artwork from the early 19th century create a truly intimate and captivating retreat back in time.',
    includes: [
      'One-night stay in the Salon Suite Villa Sureau',
      'Breakfast for two each morning',
      'Seasonal welcome beverage upon arrival',
      'Spa experience for two (60-minute facial or 60-minte massage)',
      '5-course dinner for two at The Elderberry House',
    ],
    pricing: [
      {
        label: 'Package',
        amount: '$2895',
        note: 'per couple (inclusive of tax and service)',
      },
    ],
    image: MEDIA.expEnchantedVilla,
  },
  {
    slug: 'pampered-epicure',
    path: '/experiences-and-offers/experiences/pampered-epicure/',
    title: 'Pampered Epicure',
    shortDesc:
      'A wonderful idea to optimize your experience! Arrive before your reserved dinner time, visit our beautiful Spa du Sureau',
    fullDesc:
      'A wonderful idea to optimize your experience! Arrive before your reserved dinner time, visit our beautiful Spa du Sureau and begin the evening with a relaxing Eucalyptus/Mint head-neck-back and shoulder massage, a revitalizing leg and foot Reflexology treatment, or if you prefer enjoy our Refreshed Facial, which will relieve stress and promote harmony. You will then delight in the pleasures of dining… feeling on top of the world!',
    includes: ['45 min. spa treatment, 3-course dinner incl. tax and gratuity.'],
    pricing: [{ label: 'Per Person', amount: '$345.00', note: 'per person' }],
    image: MEDIA.expPamperedEpicure,
  },
];

export interface OfferItem {
  slug: string;
  path: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  requirements: string;
  kindNote: string;
  image: string;
}

export const OFFERS: OfferItem[] = [
  {
    slug: 'summer-in-the-sierra',
    path: '/experiences-and-offers/offers/summer-in-the-sierra/',
    title: 'Summer in the Sierra',
    shortDesc: 'Enjoy 10% savings',
    fullDesc:
      'Enjoy 10% savings when you reserve two consecutive nights during July and August. Relax, reconnect, and make the most of your Summer getaway.',
    requirements:
      'A minimum of two consecutive nights must be reserved to receive 10% off the nightly published rate.',
    kindNote:
      'Promotion offered from July 6th through August 31st, 2026. Promotion subject to availability and not redeemable for tax or service. Promotions are not combinable.',
    image: MEDIA.offerSummerSierra,
  },
  {
    slug: 'a-stay-worth-lingering',
    path: '/experiences-and-offers/offers/a-stay-worth-lingering/',
    title: 'A Stay Worth Lingering...',
    shortDesc: 'With a three-night stay, enjoy a $200 Estate Credit',
    fullDesc:
      'Settle into the rhythm of the Château and linger a little longer. With a three-night stay, enjoy a $200 Estate Credit to savor the best of the Estate—from thoughtful dining to quiet moments of indulgence.',
    requirements:
      'Must reserve a minimum of three nights to receive a $200 estate credit. Credit redeemable at The Elderberry House, The Cellar, and Spa du Sureau.',
    kindNote:
      'Promotion offered from June 1st through September 30th, 2026. Promotion subject to availability and not redeemable for tax or service. Promotions are not combinable. A blackout period exists for Labor Day weekend (September 3rd through September 7th, 2026).',
    image: MEDIA.offerStayWorthLingering,
  },
];

export interface HolidayEventItem {
  title: string;
  date: string;
  timeOrSeatings: string;
  price?: string;
  reservationNote?: string;
  description: string;
  menu?: { dish: string; notes: string }[];
  ctaLabel: string;
  ctaUrl: string;
  internalPath?: string;
  image: string;
}

export const HOLIDAYS_HAPPENINGS: HolidayEventItem[] = [
  {
    title: 'Wednesday Classics',
    date: 'Every Wednesday',
    timeOrSeatings: '5:00 pm – 9:00 pm',
    description:
      'Join us Wednesdays for $10 classic cocktails. Pick through a list of timeless classics available in our Cellar and patio only with first come, first served.',
    ctaLabel: 'Explore The Cellar',
    ctaUrl: '/holiday-and-happenings/the-cellar/',
    internalPath: '/holiday-and-happenings/the-cellar/',
    image: MEDIA.eventWednesdayClassics,
  },
  {
    title: 'Happy Hour at The Cellar',
    date: 'Every Thursday',
    timeOrSeatings: '5:00 pm – 9:00 pm',
    price: '$10 Signature Cocktails · $10 House Wines · 50% Off Coquelicot/Rose and Son Wine Bottles',
    description:
      'Come meet your friends at The Cellar for our weekly Happy Hour every Thursday.',
    ctaLabel: 'Learn More',
    ctaUrl: '/holiday-and-happenings/the-cellar/',
    internalPath: '/holiday-and-happenings/the-cellar/',
    image: MEDIA.eventHappyHour,
  },
  {
    title: 'Art Hop',
    date: 'October 15th · 3rd Thursday May through October 2026',
    timeOrSeatings: '5:00 pm to 8:00 pm',
    description:
      'Enjoy wine and our signature bar menu as you explore the vibrant art scene and meet local artists on our garden terrace. 3rd Thursday May through October 2026',
    ctaLabel: 'Explore The Cellar',
    ctaUrl: '/holiday-and-happenings/the-cellar/',
    internalPath: '/holiday-and-happenings/the-cellar/',
    image: MEDIA.eventArtHop,
  },
  {
    title: 'Grgich Hills Wine Dinner',
    date: 'Friday, November 13th, 2026',
    timeOrSeatings: 'Welcome: 6:00 pm, Dinner 6:30 pm',
    price: '$185 per guest (does not include tax and service)',
    reservationNote: 'Reservation Only',
    description:
      'Napa Valley is coming to dinner! We’re thrilled to welcome Grgich Hills Estate for an intimate evening of food and wine, pairing a special 5-course menu with selections from one of Napa Valley’s most celebrated estates. From the first pour to the final course, we’ll explore the wines, vineyards, and history that have made Grgich Hills such an enduring part of Napa Valley.',
    ctaLabel: 'Book Now',
    ctaUrl:
      'https://www.opentable.com/booking/experiences-availability?rid=92584&restref=92584&experienceId=791769&utm_source=external&utm_medium=referral&utm_campaign=shared',
    image: MEDIA.eventGrgich,
  },
  {
    title: 'Thanksgiving',
    date: 'Thursday, November 26th, 2026',
    timeOrSeatings: 'Seatings: 3:30pm, 4:00pm, 7:00pm & 7:30pm',
    price: '$185 per guest (does not include tax and service)',
    reservationNote: 'Reservation Only',
    description:
      'Gather with us to celebrate the warmth of Thanksgiving! Our Culinary Team will feature an elegant tasting menu showcasing traditional favorites, inviting you to savor the flavors of the season. Celebrate with family and friends and let us take care of the feast…',
    menu: [
      { dish: 'Roasted Turkey Consommé', notes: 'black truffle, thyme' },
      { dish: 'Pomegranate Tartar', notes: 'citrus, fennel, pistachio' },
      { dish: 'Seared Scallops', notes: 'sweet potato, mushroom, brussels sprouts' },
      { dish: 'Celery Root Tartlet', notes: 'pickled grape, pumpkin seed, truffle' },
      { dish: 'Slow Cooked Turkey', notes: 'roasted breast, leg meat confit, potato purée, cranberry' },
      { dish: 'Caramel Pumpkin Tart', notes: 'pecan, miso, warm spices' },
    ],
    ctaLabel: 'Book Now',
    ctaUrl:
      'https://www.opentable.com/booking/experiences-availability?rid=92584&restref=92584&experienceId=771863&utm_source=external&utm_medium=referral&utm_campaign=shared',
    image: MEDIA.eventThanksgiving,
  },
  {
    title: 'Christmas High Tea',
    date: 'Sunday, December 20th, 2026',
    timeOrSeatings: 'Seatings: 11:30 am to 2:00 pm',
    price: '$125 per guest (does not include tax and service)',
    reservationNote: 'Reservation Only',
    description:
      'Join us for a Christmas High Tea with petite bites inspired by the Holiday spirit.',
    ctaLabel: 'Book Now',
    ctaUrl:
      'https://www.opentable.com/booking/experiences-availability?rid=92584&restref=92584&experienceId=790885&utm_source=external&utm_medium=referral&utm_campaign=shared',
    image: MEDIA.eventHighTea,
  },
  {
    title: 'A Celebration of Bubbles',
    date: 'Sunday, December 27th, 2026',
    timeOrSeatings: 'Seatings: 3:00pm to 5:00pm',
    price: '$85 per guest, (includes tax and service)',
    reservationNote: 'Reservation Only',
    description:
      'We invite you to indulge in our annual Celebration of Bubbles! Join our Sommelier, Erica Ruiz, as she shares some of her favorite Champagnes and introduces you to an array of sparkling wines. A lovely afternoon of discovery and sparkling conversation awaits.',
    ctaLabel: 'Book Now',
    ctaUrl:
      'https://www.opentable.com/booking/experiences-availability?rid=92584&restref=92584&experienceId=842670&utm_source=external&utm_medium=referral&utm_campaign=shared',
    image: MEDIA.eventBubbles,
  },
];

export const WEDDING_VENUES = [
  {
    name: 'Pointe',
    socialCapacity: '40 seated guests',
    corporateCapacity: 'U-Shaped 30, Theatre 36, Seated dinner 40, Cocktail reception 60',
    description: '',
  },
  {
    name: 'Escoffier',
    socialCapacity: '50 seated guests',
    corporateCapacity: 'Theatre 40, Seated dinner 50, Cocktail reception 80',
    description: '',
  },
  {
    name: 'Paul Bocuse',
    socialCapacity: '12 seated guests',
    corporateCapacity: 'Classroom 10, Seated dinner 12',
    description: '',
  },
  {
    name: 'The Courtyard',
    socialCapacity: '120 seated guests, 175 guests cocktail reception',
    corporateCapacity: 'Classroom 50, Seated dinner 120, Cocktail reception 175, out door venue',
    description:
      'Located behind the Elderberry House between the Chateau and the restaurant. The outdoor patio is accompanied by a memorizing water fountain, linen draped tables which are surrounded by the mature flora and fauna of the Chateau.',
  },
  {
    name: 'The Elderberry House',
    socialCapacity: '100 Seated guests, 175 guests cocktail reception',
    corporateCapacity:
      'Seated dinner 100, Cocktail reception 150 (A combination a of the Pointe, Escoffier, and Paul Bocuse Rooms)',
    description:
      'Our restaurant combines all three rooms; Point, Escoffier, Bocuse to create a lavish venue for your reception.',
  },
];

export const YOSEMITE_DATA = {
  title: 'Natural Wonder Awaits',
  seoTitle: 'Places to Stay Near Yosemite - Château du Sureau',
  intro:
    'Château du Sureau is located 13 miles from the south gate entrance to Yosemite National Park. One of North America’s seven natural wonders, Yosemite will leave you speechless with jaw dropping peaks and valleys, colossal waterfalls, granite domes and rock formations that span as far as the horizon. Yosemite is home to some of the worlds most incredible hiking, climbing, and nature observing. Our concierge can guide you on the experience of a lifetime.',
  offerings: [
    {
      title: 'Picnic in the Mountains',
      description:
        'Get ready to hike a scenic route up and down hillsides, waterfalls, and mountains. We’ll pack a gourmet lunch with all the trimmings as you enjoy Yosemite’s natural views and senses. Once you approach your mountainous destination, unpack our delicious surprise made especially for you by our amazing culinary team.',
      serviceKey: 'Yosemite National Park - Picnic in the Mountains',
      image: MEDIA.yosemiteSlide1,
    },
    {
      title: 'Private Group Tour',
      description:
        'Perhaps you desire a privately guided tour so you don’t miss any of Yosemite’s hidden gems. We proudly partner with the area’s best tour providers who are ready to navigate you around the park.',
      serviceKey: 'Yosemite National Park - Private Group Tour',
      image: MEDIA.yosemiteSlide2,
    },
    {
      title: 'Family Experience',
      description:
        'Bring the family and experience Yosemite National Park together. Create memories as you journey through the iconic park with your loved ones. Let us plan your entire family weekend with an exciting itinerary for everyone to enjoy and return to the Estate as you wind down over dinner, dessert, board games and more.',
      serviceKey: 'Yosemite National Park - Family Experience',
      image: MEDIA.yosemiteFamily,
    },
  ],
};

export const GIFT_CERTIFICATES = [
  {
    slug: 'custom-gift-certificate',
    path: '/gift-certificate/custom-gift-certificate/',
    title: 'Custom Gift Certificate',
    description: 'Build your Gift Certificate with a custom image and amount!',
    image: MEDIA.giftCustom,
  },
  {
    slug: 'one-night-slumber-at-chateau-du-sureau',
    path: '/gift-certificate/one-night-slumber-at-chateau-du-sureau/',
    title: 'One-Night Slumber at Chateau du Sureau',
    description:
      'Enjoy a relaxing one-night stay in a signature guest room, including a full European breakfast service for two in the Chateau dining room.',
    image: MEDIA.giftOneNight,
  },
  {
    slug: 'elderberry-house-experience',
    path: '/gift-certificate/elderberry-house-experience/',
    title: 'Elderberry House Experience',
    description: 'The Full Four-Course tasting menu for Two, inclusive of tax and service.',
    image: MEDIA.giftElderberry,
  },
  {
    slug: 'relax-and-renew-at-the-spa',
    path: '/gift-certificate/relax-and-renew-at-the-spa/',
    title: 'Relax & Renew at the Spa',
    description: 'Enjoy a relaxing sixty-minute facial or massage including the 20% service.',
    image: MEDIA.giftSpa,
  },
];

export const HOTEL_INFO_SECTIONS = [
  {
    id: 'resort-information',
    path: '/hotel-information/resort-information/',
    title: 'Resort Information',
    items: [
      { q: 'Where is resort located?', a: '48688 Victoria Lane, Oakhurst CA 93644' },
      { q: 'What is the resort phone number and email?', a: 'Phone: (559) 683-6800 Email: chateau@chateausureau.com' },
      { q: 'Reservation Hours', a: 'Our Reservation Team is available daily 9am to 6pm. Pacific Standard Time.' },
      { q: 'Can I text the resort?', a: 'No, text communication with the resort is not currently available.' },
      { q: 'What time is check in and check out at the hotel?', a: 'Check in is 3:00pm with check out 12:00pm. Pacific Standard Time.' },
      { q: 'Are late check-outs granted?', a: 'Please connect with our Reservations Office or Chateau Team to inquire availability.' },
      { q: 'Total Guest Rooms', a: '10 guest rooms within the Chateau and the private manor Villa Sureau.' },
      { q: 'Is smoking allowed?', a: 'The Estate by the Elderberries is a non-smoking property.' },
      { q: 'Is parking available?', a: 'Both valet and self-service parking are available complimentary.' },
      {
        q: 'Are there minimum stay requirements?',
        a: 'A minimum two-night stay may apply on weekends and special events with a three-night minimum for some Holidays. Please inquire with our Reservation Team for current details.',
      },
      { q: 'Is a deposit required to secure a stay?', a: 'A 50% deposit, is required to confirm a booking.' },
      {
        q: 'What is the Hotel’s cancellation policy?',
        a: 'Cancellations are accepted until 3pm 14-days prior to arrival with full refund of deposit. Cancellations/No-Shows occurring within 14-days guests are held financially responsible for full nightly room rate and an 11.5% room tax.',
      },
    ],
  },
  {
    id: 'restaurant-and-events',
    path: '/hotel-information/restaurant-and-events/',
    title: 'Restaurant & Events',
    items: [
      { q: 'Where is resort located?', a: '48688 Victoria Lane, Oakhurst CA 93644' },
      { q: 'What is the resort phone number and email?', a: 'Phone: (559) 683-6800 Email: chateau@chateausureau.com' },
      { q: 'What hours is the Restaurant Open', a: 'We begin dinner service at 5pm with our last seating at 8pm daily.' },
      { q: 'Does the Restaurant serve breakfast and lunch?', a: 'No, we are currently welcoming guests for dinner nightly.' },
      { q: 'Reservation Hours', a: 'Our Reservation Team is available daily 9am to 6pm. Pacific Standard Time.' },
      { q: 'Can I text the Restaurant?', a: 'No, text communication with the restaurant is not currently available.' },
      { q: 'Is a credit card required to secure a table?', a: 'We require credit cards upon booking all restaurant reservations.' },
      {
        q: 'What is the Restaurant’s cancellation policy?',
        a: 'Cancellations for 6 or less guests are accepted 24-hours prior to the reserved dining time. Cancellations and No-Shows within 24-hours will be processed a fee of $25 per guest; thus, applied to the credit card on file. Cancellations for a group, 6 to 12 guests within 48-hours notice will be charged a fee of $25 per person thus being applied to the credit card on file. If your group must adjust the size of the party, you may do so up to 24 hours prior to the date, without penalty. Cancellations for Holiday and Event reservations, within 48-hours will be processed a fee of $75 per guest or the full menu price; thus, applied to the credit card on file. Please connect with our Reservations Team for details.',
      },
      {
        q: 'Does the Restaurant allow guests to bring wine?',
        a: 'Yes, our corkage policy is $40 per 750 ml bottle. The corkage for magnums is $85 dollars with a one-bottle limit per party.',
      },
      {
        q: 'Does the Restaurant offer a la carte?',
        a: 'Our executive Culinary Team offers guests a three or five-course tasting menu. A nightly tasting menu allows Chef to create an experience that expresses the kitchen’s culinary creativity. The three-course tasting menu is $125 per person, plus 22% service and tax, the five-course $175 per guest, plus 22% service and tax.',
      },
      {
        q: 'Is there a dress code?',
        a: 'Dining Room… We request a business casual attire with gentlemen most comfortable in slacks or nice jeans with a button down or polo shirt. The Restaurant is a perfect place to dress for elegance, casual dressy will always be acceptable. Kindly note – no tank tops or flip flops. Patio Dining… We ask guests to kindly dress according to the warmer Summer or cool Winter months dressing accordingly for the most enjoyable dining experience.',
      },
    ],
  },
  {
    id: 'spa-and-recreational-amenities',
    path: '/hotel-information/spa-and-recreational-amenities/',
    title: 'Spa & Recreational Amenities',
    items: [
      {
        q: 'Spa on site',
        a: 'Yes, Spa du Sureau offers an array of relaxing and renewing services: massages, facials, body treatment, herbal baths, hydrostorm, and dry sauna',
      },
      { q: 'Pool on site', a: 'Yes, the property has a seasonal outdoor pool' },
      {
        q: 'Fitness Center on site',
        a: 'No. We recommend Any Time Fitness, minutes away, offering cardio machines, weights, and a traditional gymnasium',
      },
      { q: 'Spa Hours', a: 'All services are specifically reserved for each guest daily beginning 9am-4pm' },
      {
        q: 'How do I reserve a spa treatment?',
        a: 'Please reach out to our Reservation Team daily 9am-6pm at (559) 683-6800 to book a spa experience',
      },
      {
        q: 'Are late arrivals accepted?',
        a: 'We regret that we are unable to extend the time frame for appointments due to a late arrival. Late arrivals will inconvenience other guests, which may require the therapist to shorten your treatment time with full charges applied',
      },
      { q: 'Spa Service Charge', a: 'A 20% service charge is added to all spa services' },
      {
        q: 'Cancellation Policy',
        a: 'Full payment is required for a cancellation or no-show occurring within 24 hours',
      },
      {
        q: 'Yoga',
        a: 'Private or group sessions by certified integrative Yoga therapists trained in many styles of yoga are held in the privacy of your guest room or outdoors in a specially constructed “Yoga Court” enjoying the mountain air',
      },
    ],
  },
  {
    id: 'additional-services-by-request',
    path: '/hotel-information/additonal-services-by-request/',
    title: 'Additional Services By Request',
    items: [
      { q: 'Butler Service', a: '' },
      { q: 'Concierge Service', a: '' },
      { q: 'Transportation', a: '' },
      { q: 'Tours to Yosemite', a: '' },
      { q: 'Guide to activities in the area', a: '' },
    ],
  },
  {
    id: 'hotel-accessibility-and-health',
    path: '/hotel-information/hotel-accessibility-and-health/',
    title: 'Hotel Accessibility & Health',
    items: [
      {
        q: 'Accessibility Commitment',
        a: 'We strive to meet the needs of all our guests at Chateau du Sureau. Please contact the hotel if you have any special requests relating to your disability.',
      },
      {
        q: 'Accessible Features',
        a: 'Hotel Parking with accessible parking space next to our SPA and the end of the entrance driveway · Entrance from Accessible parking located in our courtyard · Accessible walkways through the hotel to our accessible room · Room One (“Thyme Room“) is our accessible room with an accessible bathroom · Accessible route from the hotel’s accessible public entrance to the Elderberry House · Accessible route to front entrance of the Elderberry house · Accessible route from the hotel’s accessible public entrance to the swimming pool · Accessible route from the hotel’s accessible public entrance to the spa · Hotel employees will assist guests with written information for those with a visual impairment · Service animals are welcome.',
      },
      {
        q: 'Accessibility Contact',
        a: 'Please call us at (559) 683-6800 should you have further questions about accessibility or email us at chateau@chateausureau.com.',
      },
    ],
  },
];

export const TRAVEL_DIRECTIONS = [
  {
    origin: 'FROM YOSEMITE NATIONAL PARK',
    details:
      'A 20 minute, sixteen mile drive from the South Gate entry to Yosemite National Park. A hour, forty-five mile drive from the Yosemite Valley destinations.',
  },
  {
    origin: 'LOS ANGELES/SOUTHERN CALIFORNIA',
    details:
      'A 4 hour, 265 mile drive North from the Los Angeles/Southern California area, driving over the Grape Vine and through the Central Valley on I-5 to Highway 99 and then Highway 41.',
  },
  {
    origin: 'FROM FRESNO, AND FRESNO-YOSEMITE INTERNATIONAL AIRPORT',
    details: 'The Estate is a short 45 minute, 50 mile drive North from Fresno, via Highway 41.',
  },
  {
    origin: 'INTERNATIONAL',
    details:
      'Air service is available in San Francisco and Los Angeles with daily commuter flights to and from Fresno.',
  },
  {
    origin: 'SAN FRANCISCO BAY AREA',
    details:
      'Approximately 3 hour, 195 mile drive from the San Francisco/Bay area through the Central Valley and Mariposa.',
  },
  {
    origin: 'CAR RENTAL & MORE',
    details:
      'Car rental is available at all three locations. Simply call us at (559) 683 6860. We will happily provide detailed directions to the Estate from wherever you may be.',
  },
];
